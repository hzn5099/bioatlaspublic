<?php
/*
	Search

	Currently, the search returns three types of items:  slides, series (atlases),
    and labels.  With three different types of results, searching for slides becomes
    much more complex than it originally was for slide-only search.

	- Slide, atlas, and label results each get their own TEMPORARY table.
	- Full results are pulled at the end; only the id and category (slide, label,
	  atlas) are fetched so that they can be efficiently cached.  Only metadata
	  for the current page is retrieved.

	- Slides are constrained by the three quantitative criteria:  organism type,
	  age, and sex.  Full text score is also calculated, but not used in the WHERE
	  clause.
	- Before the slide search query is executed and if memcached is available, the
	  cache is checked first, since the query contains all information necessary to
	  determine the result set.
	- Following the slide query, the atlas query is executed.  The slide result set
	  is used to calculate the number of matching slides per atlas, expressed as a
	  percentage.  If a query string has been set, a full text score is calculated.
	- Labels are only searched if a query string is set.
	- Slides contained in an atlas are "collapsed" into that atlas if that atlas
	  contains more than n% of matching slides.  That is, they are removed from
	  the slide results table.
	- Matching labels on matching slides get the slide ft_score added to their own
	  in order to increase their rank.

	- Once the full results have been retrieved (from query or cache), the current
	  "page" of matching ids are sliced out of the array and metadata is retrieved.
	  Some extra data is added (URLs, age strings, etc.) and the view is rendered.

	Search criteria be placed in two categories:  hard, quantitative parameters that
	correspond to columns in the virtualslides table (organism type/age/sex) and a
	query string.  From a query string we don't know what the user intends to find.
	Spoiled by Google, a user will often ignore the precise, quantitative settings
	and simply type "Zebrafish" and expect to have the same precision as selecting
	"Zebrafish (ALL)" from the species SELECT.

	Searches can be categorized as follows:

		1) Slide criteria (organism type, sex, and/or age)
			- search virtualslides
			- collapse slides
			- sort by organism_age_in_hours
			- returns slides, series

		2) Query string (+ optional criteria)
			- search virtualslides
			- search virtualslide_labels (by query string, limited to matching slides)
			- search atlases (by query string)
			- collapse slides
			- sort by ft_score
			- returns slides, series, labels

		3) Atlas id search
			- search rel_atlases_virtualslides
			- sort by position
			- returns slides


	input			search						collapse?	sort by					return types
	----------------------------------------------------------------------------------------------
	criteria		virtualslides				yes			organism_age_in_hours	slide, series
	----------------------------------------------------------------------------------------------
	query string,	virtualslides,				yes			ft_score, etc.			slide, series,
	criteria		atlases, labels													label
	----------------------------------------------------------------------------------------------
	atlas_id		rel_atlases_virtualslides	no			position				slides


	Sorting:

	type	sorted by
	----------------------------------------------------------------------------------------------
	slide	ft_score, organism_age_in_hours, position (for atlas_id)
	series	ft_score, matching/total, to_left
	label	is_exact, ft_score


	Outline of script

		- Parse form input
		- (Translate certain strings to age equivalents)
		- Assemble initial query
		- Normalize query
		- Generate key from query
		- Check cache

			- Find slides matching constraints (or use all slides otherwise?)
			- Find atlases containing those slides or matching string query
			- If string query, search labels, too.
			- Optionally, collapse slide matches into corresponding atlas match if atlas
			  contains more than some % (like 80-100%) of matching slides.

			- Sort by scores
			- Select ids
			- Save to cache

		- Slice out entries on this page
		- Query database to fill in result metadata
		- Render search page

*/
	require_once '/dev/php/bioatlas/zfatlasDump/labels/inc/base.php';
	require_once '/dev/php/bioatlas/zfatlasDump/labels/inc/twig.php';
	require_once '/dev/php/bioatlas/zfatlasDump/labels/inc/connect+.php';

// "Slices" out a "column" from a multidimensional array
function array_part($key, &$array) {
	$values = array();
	foreach ($array as $row)
		if (array_key_exists($key, $row))
			$values[] = $row[$key];
	return $values;
}

function array_sort_unique(&$arr) {
	sort($arr);
	return array_unique($arr);
}

define('DEBUGGING', false);
define('SEARCH_RESULT_LABEL', 1);
define('SEARCH_RESULT_ATLAS', 2);
define('SEARCH_RESULT_SLIDE', 3);
define('SEARCH_RESULT_TERMS', 4);
define('VIEWER_PATH', 'view.php');
define('SLIDE_PREVIEW_PATH', 'thumbnails/preview');
define('LABEL_PREVIEW_PATH', 'label.jpeg.php');

// --------------------------------------------------------------------------
// SQL query definitions
// --------------------------------------------------------------------------
// These could be moved out into a separate file and include()ed.  That way
// all SQL could be in one file and used by any script.
$sql = array();
// --------------------------------------------------------------------------
// SQL:  Get organism types from database for SELECT
// --------------------------------------------------------------------------
$sql['get_species_list'] = <<<'SQL'
SELECT opt, val FROM (
	/* get individual organisms */
	(SELECT
			IFNULL(organism_type_id, "unknown") AS val,
			CONCAT(
			  IFNULL(
				CONCAT(common_name, " (", genus, " ", species, ") ", IFNULL(strain, "")),
				"Unknown or unspecified"
			  ),
			  " (", COUNT(slide_id), ")"
			) AS opt,
			common_name,
			0 AS is_group
		FROM
			virtualslides LEFT JOIN organism_types USING (organism_type_id)
		WHERE
			is_public
		GROUP BY
			organism_type_id
	/* get organisms grouped by common_name */
	) UNION (SELECT
			GROUP_CONCAT(DISTINCT organism_type_id ORDER BY organism_type_id) AS val,
			CONCAT(common_name, " (ALL variants)", " (", COUNT(slide_id), ")") AS opt,
			common_name,
			1 AS is_group
		FROM
			organism_types LEFT JOIN virtualslides USING (organism_type_id)
		WHERE
			is_public
		GROUP BY
			common_name
		HAVING COUNT(DISTINCT organism_type_id) > 1
	)
	/* sort them */
	ORDER BY
		/* put zebrafish first */
		common_name = "Zebrafish" DESC,
		/* then sort alphabetically, grouped organisms first */
		common_name, is_group DESC,
		/* put unknown organisms at the end */
		val = "unknown"
	) AS organisms
SQL;

// --------------------------------------------------------------------
// SQL:  create a temporary table for matching slides
// --------------------------------------------------------------------
$sql['create_slide_results'] = <<<'SQL'
CREATE TEMPORARY TABLE tmp_slide_results (
    slide_id                INT UNSIGNED NOT NULL PRIMARY KEY,
    ft_score                FLOAT NOT NULL DEFAULT 0,
    organism_age_in_hours   INT UNSIGNED
)
SQL;

// --------------------------------------------------------------------
// SQL:  create temporary table for matching labels
// --------------------------------------------------------------------
$sql['create_label_results'] = <<<'SQL'
CREATE TEMPORARY TABLE tmp_label_results (
    label_id                INT UNSIGNED NOT NULL,
    ft_score                FLOAT NOT NULL DEFAULT 0,
    is_exact                BOOLEAN NOT NULL DEFAULT FALSE
)
SQL;

// --------------------------------------------------------------------
// SQL:  create temporary table for matching atlases
// --------------------------------------------------------------------
$sql['create_atlas_results'] = <<<'SQL'
CREATE TEMPORARY TABLE tmp_atlas_results (
    atlas_id                MEDIUMINT UNSIGNED NOT NULL PRIMARY KEY,
    ft_score                FLOAT NOT NULL DEFAULT 0,
    matching                SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    total                   SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    to_left                 INT UNSIGNED NOT NULL
)
SQL;

// --------------------------------------------------------------------
// SQL:  search for slides
// --------------------------------------------------------------------
$sql['slide_search'] = <<<'SQL'
INSERT INTO tmp_slide_results SELECT
    slide_id,
    MATCH (title, description) AGAINST (%s)
    + MATCH (common_name, genus, species, strain) AGAINST (%2$s)
    + MATCH (string) AGAINST (%2$s)
    + MATCH (name, institution, department) AGAINST (%2$s)
    + MATCH (lastname, firstname) AGAINST (%2$s),
    organism_age_in_hours
FROM
    virtualslides
    LEFT JOIN rel_atlases_virtualslides USING (slide_id)
    LEFT JOIN organism_types USING (organism_type_id)
    LEFT JOIN sources USING (source_id)
    LEFT JOIN groups USING (group_id)
    LEFT JOIN users USING (user_id)
WHERE
    is_public AND %3$s
SQL;

// --------------------------------------------------------------------
// SQL:  search for matching labels
// --------------------------------------------------------------------
$sql['label_search'] = <<<'SQL'
INSERT INTO tmp_label_results SELECT
    label_id,
    MATCH (ot1.term) AGAINST ("%1$s") + tmp_slide_results.ft_score,
    ot1.term = "%1$s"
FROM
    ontology_terms ot1
    JOIN ontology_terms ot2 ON ot1.definition_id = ot2.definition_id
    JOIN virtualslide_labels ON ot2.term_id = virtualslide_labels.term_id
    JOIN tmp_slide_results USING (slide_id)
WHERE
    MATCH (ot1.term) AGAINST ("%1$s")
GROUP BY
    slide_id, ot1.definition_id
SQL;

// --------------------------------------------------------------------
// SQL:  get matching slide/atlas count
// --------------------------------------------------------------------
$sql['atlas_slide_matches'] = <<<'SQL'
INSERT INTO tmp_atlas_results (atlas_id, matching) SELECT
    atlas_id,
    COUNT(slide_id)
FROM
    tmp_slide_results
    JOIN rel_atlases_virtualslides USING (slide_id)
GROUP BY
    atlas_id
SQL;

// --------------------------------------------------------------------
// SQL:  search atlases
// --------------------------------------------------------------------
// the is_public addition really slows down this query (0.000963s -> 0.016103s)
$sql['atlas_search_ft'] = <<<'SQL'
INSERT INTO tmp_atlas_results (atlas_id, ft_score) SELECT * FROM (SELECT
        node.atlas_id,
        SUM(MATCH(parent.name, parent.description) AGAINST ("%1$s")) AS ft_score
    FROM
        atlases node
        JOIN atlases parent ON node.to_left BETWEEN parent.to_left AND parent.to_right
        JOIN (SELECT DISTINCT atlas_id FROM rel_atlases_virtualslides JOIN virtualslides USING (slide_id) WHERE is_public) AS public
    WHERE
        node.atlas_id = public.atlas_id
        AND MATCH(parent.name, parent.description) AGAINST ("%1$s")
    GROUP BY
        node.atlas_id
) AS x ON DUPLICATE KEY UPDATE ft_score = x.ft_score
SQL;

// --------------------------------------------------------------------
// SQL:  count total slides in matching atlases (and get to_left)
// --------------------------------------------------------------------
$sql['atlas_slide_counts'] = <<<'SQL'
UPDATE
    tmp_atlas_results
    JOIN (SELECT atlas_id, COUNT(*) AS slides, to_left FROM rel_atlases_virtualslides JOIN atlases USING (atlas_id) GROUP BY atlas_id) AS x USING (atlas_id)
SET
    total = x.slides,
    tmp_atlas_results.to_left = x.to_left
SQL;

// --------------------------------------------------------------------
// SQL: remove slides in atlases (above some threshold n%)
// --------------------------------------------------------------------
// (should ft-matching slides being collapsed have their ft_score incorporated into atlas results somehow?  Averaged?)
// (or don't collapse slides with ft match at all)
$sql['collapse_slides'] = <<<'SQL'
DELETE
    tmp_slide_results
FROM
    tmp_slide_results
    JOIN rel_atlases_virtualslides USING (slide_id)
    JOIN tmp_atlas_results USING (atlas_id)
WHERE
    matching/total >= 0.80
SQL;

// --------------------------------------------------------------------
// SQL: remove atlases without text match or below some threshold %n
// --------------------------------------------------------------------
$sql['prune_atlas_matches'] = <<<'SQL'
DELETE FROM
    tmp_atlas_results
WHERE
    total = 0
    OR (ft_score = 0 AND matching/total < 0.80)
SQL;

// --------------------------------------------------------------------
// SQL:  select final rankings
// --------------------------------------------------------------------
$sql['select_results'] = <<<'SQL'
SELECT type, id FROM (
    (SELECT %1$d AS type, slide_id AS id, ft_score, 0.0 AS matching, organism_age_in_hours FROM tmp_slide_results) UNION
    (SELECT %2$d AS type, atlas_id AS id, ft_score,  matching/total,               to_left FROM tmp_atlas_results) UNION
    (SELECT %3$d AS type, label_id AS id, ft_score,        is_exact,                     0 FROM tmp_label_results)
ORDER BY
    ft_score DESC,
    matching DESC,
    organism_age_in_hours,
    id
) AS results
SQL;

// --------------------------------------------------------------------
// SQL:  retrieve slide info
// --------------------------------------------------------------------
$sql['select_slide_data'] = <<<'SQL'
SELECT
    slide_id,
    title,
    description,
    organism_sex AS sex,
    organism_age_in_hours AS age,
    genus,
    species,
    strain,
    common_name,
    string AS acknowledgement
FROM
    virtualslides
    LEFT JOIN organism_types USING (organism_type_id)
    LEFT JOIN sources USING (source_id)
    LEFT JOIN groups USING (group_id)
    LEFT JOIN users USING (user_id)
WHERE
    slide_id IN (%IN_STR%)
SQL;

// --------------------------------------------------------------------
// SQL:  retrieve label data
// --------------------------------------------------------------------
$sql['select_label_data'] = <<<'SQL'
SELECT
    a.label_id AS label_id,
    slide_id,
    definition_id,
    x,
    y,
    BIT_OR(b.z) AS z
FROM
    virtualslide_labels AS a
    JOIN virtualslide_labels AS b USING (slide_id, term_id, x, y)
    JOIN ontology_terms USING (term_id)
WHERE
    a.label_id IN (%IN_STR%)
GROUP BY
    a.slide_id, a.term_id
SQL;

// --------------------------------------------------------------------
// SQL:  retrieve atlas data
// --------------------------------------------------------------------
$sql['select_atlas_data'] = <<<'SQL'
SELECT
    node.atlas_id AS atlas_id,
    slides.count AS slide_count,
    GROUP_CONCAT(parent.name ORDER BY parent.to_left SEPARATOR " &raquo; ") AS name,
    node.description AS description
FROM
    atlases AS parent
    JOIN atlases AS node ON node.to_left BETWEEN parent.to_left AND parent.to_right
    JOIN (SELECT atlas_id, COUNT(slide_id) AS count FROM rel_atlases_virtualslides GROUP BY atlas_id) AS slides ON node.atlas_id = slides.atlas_id
WHERE
    node.atlas_id IN (%IN_STR%)
GROUP BY
    node.to_left;
SQL;

// --------------------------------------------------------------------
// SQL:  retrieve definition data
// --------------------------------------------------------------------
$sql['select_definition_data'] = <<<'SQL'
SELECT
    definition_id,
    a.term AS preferred,
    GROUP_CONCAT(b.term ORDER BY b.term_id SEPARATOR ", ") AS synonyms,
    definition
FROM
    ontology_definitions
    JOIN ontology_terms a USING (definition_id)
    JOIN ontology_terms b USING (definition_id)
WHERE
    definition_id IN (%IN_STR%) AND
    NOT a.is_synonym AND
    b.is_synonym
GROUP BY
    definition_id
SQL;

// --------------------------------------------------------------------
// SQL:  retrieve atlas slides
// --------------------------------------------------------------------
$sql['select_atlas_slides'] = <<<'SQL'
SELECT
    %d, slide_id
FROM
    rel_atlases_virtualslides
WHERE
    atlas_id = %d
ORDER BY
    position
SQL;


// --------------------------------------------------------------------
// Set default options and search options
// --------------------------------------------------------------------
/*
	$options is used to populate the SELECTs in the form.

	* NOTE:  You might think it'd be easier to create an array keyed by option=>value, but
	then you'd get bit by PHP's array key type-casting (as I did), which casts numeric
	strings to ints ("1" becomes int(1), but "01" remains string("01")), which then fail
	the strict in_array() test.  And without the strict in_array(), the int(1) would match
	the string "1,2,3,4" as "1,2,3,4" would become int(1).  Catch-22 anyone?

	(http://php.net/manual/en/language.types.array.php)

	The 'create_select' Twig macro (in "forms.twig.html") will accept one of the $options
	arrays along with one of the $search arrays to create a SELECT with selected OPTIONs.
*/

$options = array(
	'organism'	=> array(
		'text' => array('ANY'),
		'values' => array('all')
	),
	'age_units'	=> array(
		'text' => array('hours', 'days', 'months', 'years'),
		'values' => array(    '1',   '24',    '720',  '8760')
	),
	'sex' => array(
		'text' => array('ANY', 'male', 'female', 'other', 'undifferentiated'),
		'values' => array('all',    '1',      '2',     '3',                '4')
	),
	'results_per_page'	=> array(
		'text' => array( '10', '20', '30', '40', '50'),
		'values' => array( '10', '20', '30', '40', '50')
	)
);

/*
	$search contains the options set by the user.  It is initialized with default values
	which are only overwritten if valid values come in via $_GET.

	$search also contains values related to the number and pagination of results; these
	values are intended primarily for the template.  Both $options and $search are passed
	through to the template.
*/

$search = array(
	'q' => '',
	'terms' => array(),
	'organism' => array('all'),
	'sex' => array('all'),
	'age_fr_units' => '1',
	'age_to_units' => '1',
	'age_fr' => '',
	'age_to' => '',
	'results_per_page' => '30',
	'thumbnails' => true,
	// ---
	'where' => array(
		'1'
	),
	'get' => array(),
	'results' => null,
	'total_results' => 0,
	'current_page' => 1, // these next two are 1-based; 'current_page' = 'page' in $_GET (incoming only; don't set it)
	'last_page' => 1,
	'was_submitted' => false
);



// --------------------------------------------------------------------
// Fill organism options from database
// --------------------------------------------------------------------

$result = zf_mysql_query($sql['get_species_list']);
if ($result) {
	while ($row = mysqli_fetch_row($result)) {
		$options['organism']['text'  ][] = $row[0];
		$options['organism']['values'][] = $row[1];
	}
}

// --------------------------------------------------------------------
// Read sex options from database (NOTE:  commented out; set statically
// above since they are unlikely to ever change)
// --------------------------------------------------------------------
/*
	mysql> DESCRIBE virtualslide organism_sex;
	+--------------+--------------------------------------------------+------+-----+---------+-------+
	| Field        | Type                                             | Null | Key | Default | Extra |
	+--------------+--------------------------------------------------+------+-----+---------+-------+
	| organism_sex | enum('male','female','other','undifferentiated') | YES  |     | NULL    |       |
	+--------------+--------------------------------------------------+------+-----+---------+-------+

$result = zf_mysql_query('DESCRIBE virtualslide organism_sex');
$i = 1;
if ($result) {
	foreach (explode("','", substr(mysql_result($result, 0, 1), 6, -2)) as $value) {
		$options['sex']['text'  ][] = $value;
		$options['sex']['values'][] = (string) $i++;
	}
}
*/

// --------------------------------------------------------------------------
// Parse input (if $_GET is set)
// --------------------------------------------------------------------------
// NOTE:  maybe this logic should be a little more robust
if (isset($_GET) && count($_GET)) {

	array_walk_recursive($_GET, 'trim_strings'); // remove leading/trailing whitespace and escaped quotes.

	// --------------------------------------------------------------------
	// Parse organism options
	// --------------------------------------------------------------------

	if (isset($_GET['organism']) && is_array($_GET['organism']) && count($_GET['organism'] = array_unique($_GET['organism']))) {
		$search['was_submitted'] = true;
		// if 'all', disregard any constrains
		if (!in_array('all', $_GET['organism'], true)) {
			$search['organism'] = array();
			foreach ($_GET['organism'] as $option)
				if (in_array($option, $options['organism']['values'], true))
					$search['organism'][] = $option;
		}
	}


	// --------------------------------------------------------------------
	// Parse sex options
	// --------------------------------------------------------------------

	if (isset($_GET['sex']) && is_array($_GET['sex']) && count($_GET['sex'] = array_unique($_GET['sex']))) {
		$search['was_submitted'] = true;
		// if 'all', disregard any constrains
		if (!in_array('all', $_GET['sex'], true)) {
			$search['sex'] = array();
			foreach ($_GET['sex'] as $option)
				if (in_array($option, $options['sex']['values'], true))
					$search['sex'][] = $option;
		}
	}


	// --------------------------------------------------------------------
	// Parse organism age range and units
	// --------------------------------------------------------------------

	if (isset($_GET['age_fr']) && ctype_digit($_GET['age_fr'])) {
		$search['was_submitted'] = true;
		$search['age_fr'] = $_GET['age_fr'];
	}
	if (isset($_GET['age_to']) && ctype_digit($_GET['age_to'])) {
		$search['was_submitted'] = true;
		$search['age_to'] = $_GET['age_to'];
	}
	// swap and set warning message if age_to < age_fr
	if (isset($search['age_fr'], $search['age_to']) && $search['age_to'] < $search['age_fr']) {
		$tmp = $search['age_fr'];
		$search['age_fr'] = $search['age_to'];
		$search['age_to'] = $tmp;
		setMessage("'To' age is less than 'from' age.  Fixed that for you.", 'Note');
	}
	if (isset($_GET['age_fr_units']) && in_array($_GET['age_fr_units'], $options['age_units']['values'], true))
		$search['age_fr_units'] = $_GET['age_fr_units'];
	if (isset($_GET['age_to_units']) && in_array($_GET['age_to_units'], $options['age_units']['values'], true))
		$search['age_to_units'] = $_GET['age_to_units'];


	// --------------------------------------------------------------------
	// Parse atlas
	// --------------------------------------------------------------------
	if (isset($_GET['atlas']) && ctype_digit($_GET['atlas'])) {
		$search['was_submitted'] = true;
		$search['atlas'] = $search['get']['atlas'] = $_GET['atlas'];
	}


	// --------------------------------------------------------------------
	// Parse query search string
	// --------------------------------------------------------------------

	if (isset($_GET['q'])) {
		$search['was_submitted'] = true;
		$search['q'] = $_GET['q'];
		$search['get']['q'] = $_GET['q'];
		// separate query into phrases
		 $search['terms'] = array_map(array($zfatlas_db, 'real_escape_string'),
			// array_unique(preg_split('/(?:"(.*?)")|\s+/',
			array_unique(preg_split('/\s+/',
					str_replace('"', '', $_GET['q']), -1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE)));

        // translate ages to age range, but only if ages aren't set
		if (empty($search['age_fr']) && empty($search['age_to'])
			&& (preg_match('/\b(\d+)\s*([hdm]pf)\b/', $search['q'], $match)
		|| preg_match('/\b(\d+)\s*(hour|day|week|month|year)s?\b/', $search['q'], $match)
			|| preg_match('/\b(\d+)\s*(hr|d|wk|mo|yr)s?\b/', $search['q'], $match))
		) {
			// convert to hours
			$age_in_hours = (int)$match[1];
			switch ($match[2]) {
                case 'year': case 'yr':
					$age_in_hours *= 8760;
					break;
                case 'month': case 'mpf': case 'mo':
					$age_in_hours *= 720;
					break;
                case 'week': case 'wk':
					$age_in_hours *= 168;
					break;
                case 'day': case 'dpf': case 'd':
					$age_in_hours *= 24;
					break;
			}

			// set radius
			$radius = $age_in_hours * 0.05; // %
			$search['where'][] = sprintf('organism_age_in_hours BETWEEN %d AND %d',
				round($age_in_hours - $radius),
				round($age_in_hours + $radius)
			);

			if (DEBUGGING) setMessage(sprintf('Detected age range in text query: %s; translated to %d - %d hours',
				$match[0],
				round($age_in_hours - $radius),
				round($age_in_hours + $radius)
			));
        }
	}


	// --------------------------------------------------------------------
	// Show thumbnails?
	// --------------------------------------------------------------------

	$search['thumbnails'] = $search['get']['thumbnails'] = isset($_GET['thumbnails']);


	// --------------------------------------------------------------------
	// Results per page and current page
	// --------------------------------------------------------------------

	if (isset($_GET['rpp']) && in_array($_GET['rpp'], $options['results_per_page']['values']) && $_GET['rpp'] != $search['results_per_page'])
		$search['results_per_page'] = $search['get']['rpp'] = $_GET['rpp'];
	if (isset($_GET['page']) && ctype_digit($_GET['page']))
		$search['current_page'] = (int)$_GET['page'];


	if ($search['was_submitted']) {

		$search['value'] = [];
		// --------------------------------------------------------------------------
		// Set where clauses
		// --------------------------------------------------------------------------

		// age
		if ($search['age_fr']) {
			$search['where'][] = 'organism_age_in_hours >= %d';
			$search['value'][] = round($search['age_fr'] * $search['age_fr_units']);
			$search['get']['age_fr'] = $search['age_fr'];
		}
		if ($search['age_to']) {
			$search['where'][] = 'organism_age_in_hours <= %d';
			$search['value'][] = round($search['age_to'] * $search['age_to_units']);
			$search['get']['age_to'] = $search['age_to'];
		}
		// NOTE: Should sort/unique these to "standardize" the query
		// sex
		if (count($search['sex']) && !in_array('all', $search['sex'])) {
			$temp_where = 'organism_sex IN (%IN_STR%)';
			$search['where'][] = str_replace("%IN_STR%",implode(',',array_fill(0,count($search['sex']),'%d')),$temp_where);
			$search['value'] = array_merge($search['value'],$search['sex']);
			$search['get']['sex'] = $search['sex'];
		}
		// organism_type
		if (count($search['organism']) && !in_array('all', $search['organism'])) {
			$organism_ids = array_sort_unique(explode(',', implode(',', $search['organism'])));
			if (in_array('unknown', $search['organism'])) {
				if (count($search['organism']) == 1) {
					$search['where'][] = 'organism_type_id IS NULL';
				} else {
					$temp_where = '(organism_type_id IN (%IN_STR%) OR organism_type_id IS NULL)';
					$search['where'][] = str_replace(
						"%IN_STR%",
						implode(',',array_fill(0,count(array_diff($organism_ids, array('unknown'))),'%d')),
						$temp_where
					);
					$search['value'] = array_merge($search['value'],array_diff($organism_ids, array('unknown')));
				}
			} else {
				$temp_where = 'organism_type_id IN (%IN_STR%)';
				$search['where'][] = str_replace(
					"%IN_STR%",
					implode(',',array_fill(0,count(array_diff($organism_ids, array('unknown'))),'%d')),
					$temp_where
				);
				$search['value'] = array_merge($search['value'],$organism_ids);
			}
			$search['get']['organism'] = $search['organism'];
		}
		// atlas
		if (isset($search['atlas']))
			$search['where'][] = sprintf('atlas_id = %d', $_GET['atlas']);


		// --------------------------------------------------------------------------
		// Generate slide search query
		// --------------------------------------------------------------------------

		$search_text = implode(' ', $search['terms']);
		$search_val = array_keys($search['where']);
		$query = sprintf($sql['slide_search'],'%s','%1$s', implode(' AND ', $search['where']));
		$query_key = hash('adler32', $query);

		$full_results = null;

		// get cache client (if available)
		if (false && class_exists('Memcached')) {
			$memcached = new Memcached;
			if ($memcached)
				$memcached->addServer('localhost', 11211);
		} else
			$memcached = false;

		// check cache for results
		if ($memcached)
			$full_results = $memcached->get($query_key);


		// if not found, proceed with query
		if (!$full_results) {

			// --------------------------------------------------------------------------
			// Perform search queries
			// --------------------------------------------------------------------------


			// --------------------------------------------------------------------------
			// if atlas= is set, perform special slide-only search (atlas expansion)
			// --------------------------------------------------------------------------
			if (isset($search['atlas'])) {

				$full_results = zf_mysql_fetch_all(zf_mysql_query(
						$sql['select_atlas_slides'],
						SEARCH_RESULT_SLIDE, $search['atlas']
					), null, MYSQL_NUM);

			// --------------------------------------------------------------------------
			// otherwise, perform full search
			// --------------------------------------------------------------------------
			} else {

				// create temporary tables
				zf_mysql_query($sql['create_slide_results']);
				zf_mysql_query($sql['create_label_results']);
				zf_mysql_query($sql['create_atlas_results']);
				zf_mysql_query($query, $search_text, ...$search['value']);

				// search labels
				if ($search_text) {
					zf_mysql_query($sql['label_search'], $search_text);
					zf_mysql_query('DELETE FROM tmp_slide_results WHERE ft_score = 0');
				}

				// search atlases
				zf_mysql_query($sql['atlas_slide_matches']);
				if ($search_text)
					zf_mysql_query($sql['atlas_search_ft'], $search_text);

				zf_mysql_query($sql['atlas_slide_counts']);

				// collapse slides and prune atlases
				if (!$search_text) {
					$threshold = 0.80;
					zf_mysql_query($sql['collapse_slides'], $threshold);
					zf_mysql_query($sql['prune_atlas_matches'], $threshold);
				}

				// fetch results
				$full_results = zf_mysql_fetch_all(zf_mysql_query($sql['select_results'],
					SEARCH_RESULT_SLIDE,
					SEARCH_RESULT_ATLAS,
					SEARCH_RESULT_LABEL
				), null, MYSQL_NUM);
			}

			// save results to cache
			if ($memcached)
				$memcached->set($query_key, $full_results);
		}

		// --------------------------------------------------------------------------
		// Retrieve a page of result data
		// --------------------------------------------------------------------------
		/*
			1. split ids we need into 'atlas', 'label', and 'slide'
			2. fetch those id+data from database
			3. go back through $page_results and display result data
		*/
		// --------------------------------------------------------------------------

		$rpp = (int) $search['results_per_page'];
		$search['total_results'] = count($full_results);
		$search['last_page'] = ceil($search['total_results']/$rpp);
		// clip current_page to [1 .. last_page]
		$search['current_page'] = min($search['current_page'], $search['last_page']);
		$page_results = array_slice($full_results, $search['current_page'] > 1 ? ($search['current_page'] - 1) * $rpp : 0, $rpp, true);

		$atlas_ids = array();
		$label_ids = array();
		$slide_ids = array();
		$terms_ids = array();

		// Collect necessary ids
		foreach ($page_results as $result) {
			switch ($result[0]) {
				case SEARCH_RESULT_ATLAS:
					$atlas_ids[] = $result[1];
					break;
				case SEARCH_RESULT_LABEL:
					$label_ids[] = $result[1];
					break;
				case SEARCH_RESULT_SLIDE:
					$slide_ids[] = $result[1];
			}
		}


		// --------------------------------------------------------------------------
		// Hydrate search results
		// --------------------------------------------------------------------------

		$data = array(
			SEARCH_RESULT_ATLAS => array(),
			SEARCH_RESULT_LABEL => array(),
			SEARCH_RESULT_SLIDE => array(),
			SEARCH_RESULT_TERMS => array()
		);

		if (count($atlas_ids)) {
			//$results = zf_mysql_fetch_all(zf_mysql_query($sql['select_atlas_data'], implode(',', array_unique($atlas_ids))));
			$results = zf_mysql_fetch_all(zf_mysql_query(
				str_replace("%IN_STR%", implode(',', array_fill(0,count(array_unique($atlas_ids)), '%s')),
				$sql['select_atlas_data']), ...array_unique(($atlas_ids))
				)
			);
			$data[SEARCH_RESULT_ATLAS] = array_combine(array_part('atlas_id', $results), $results); // re-key results to primary key
			foreach ($data[SEARCH_RESULT_ATLAS] as &$atlas)
				// Could add another query string parameter to define whether or not to display slides in search view or load in viewer
				// $atlas['href'] = sprintf('%s?atlas=%d', VIEWER_PATH, $atlas['atlas_id']);
				$atlas['href'] = sprintf('?atlas=%d%s#results', $atlas['atlas_id'], $search['thumbnails'] ? '&thumbnails=1' : '');
		}
		if (count($label_ids)) {
			//$results = zf_mysql_fetch_all(zf_mysql_query($sql['select_label_data'], implode(',', array_unique($label_ids))));
			$results = zf_mysql_fetch_all(zf_mysql_query(
				str_replace("%IN_STR%", implode(',', array_fill(0, count(array_unique($label_ids)), '%s')),
				$sql['select_label_data']), ...array_unique(($label_ids))
				)
			);
			$data[SEARCH_RESULT_LABEL] = array_combine(array_part('label_id', $results), $results);
			$slide_ids = array_merge($slide_ids, array_part('slide_id', $results));
			$terms_ids = array_merge($terms_ids, array_part('definition_id', $results));
			foreach ($data[SEARCH_RESULT_LABEL] as &$label) {
				$label['href'] = sprintf('%s?s=%d&z=%d&c=%d,%d', VIEWER_PATH, $label['slide_id'], floor(log($label['z'])/log(2)), $label['x'], $label['y']);
				$label['thumbnail'] = $search['thumbnails']
					? sprintf('%s?id=%d', LABEL_PREVIEW_PATH, $label['label_id'])
					: null;
			}
		}
		if (count($terms_ids)) {
			$results = zf_mysql_fetch_all(zf_mysql_query(
				str_replace("%IN_STR%", implode(',', array_fill(0, count(array_unique($terms_ids)), '%s')),
				$sql['select_definition_data']), ...array_unique(($terms_ids))
				)
			);
			$data[SEARCH_RESULT_TERMS] = array_combine(array_part('definition_id', $results), $results);
		}
		if (count($slide_ids)) {
			$results = zf_mysql_fetch_all(zf_mysql_query(
				str_replace("%IN_STR%", implode(',', array_fill(0, count(array_unique($slide_ids)),'%s')),
				$sql['select_slide_data']), ...array_unique(($slide_ids))
				)
			);
			$data[SEARCH_RESULT_SLIDE] = array_combine(array_part('slide_id', $results), $results);

			$thumbnail_src = null;
			foreach ($data[SEARCH_RESULT_SLIDE] as &$slide) {
				// generate age_string
				if (is_null($slide['age']))
					$slide['age_string'] = null;
				else if ($slide['common_name'] == 'Zebrafish')
					$slide['age_string'] = hpfToString($slide['age']);
				else if ($slide['common_name'] == 'Mouse')
					$slide['age_string'] = hoursToAge($slide['age'], 'day', 1);
				else
					$slide['age_string'] = hoursToAge($slide['age']);

				// generate slide preview thumbnail src
				$slide['thumbnail'] = $search['thumbnails'] && file_exists($thumbnail_src = sprintf('%s/%010d.jpg', SLIDE_PREVIEW_PATH, $slide['slide_id']))
					? $thumbnail_src
					: null;

				// generate href to slide
				$slide['href'] = sprintf('%s?s=%d', VIEWER_PATH, $slide['slide_id']);

				// Parse description into HTML
				$slide['description'] = slide_description_to_HTML($slide['description']);
			}

		}

		$search['results'] = array();
		foreach ($page_results as $i => $result) {
			$search['results'][$i + 1] = $data[$result[0]][$result[1]];
			switch ($result[0]) {
				case SEARCH_RESULT_ATLAS:
					$search['results'][$i + 1]['type'] = 'atlas';
					break;
				case SEARCH_RESULT_SLIDE:
					$search['results'][$i + 1]['type'] = 'slide';
					break;
				case SEARCH_RESULT_LABEL:
					$search['results'][$i + 1]['type'] = 'label';
					$search['results'][$i + 1]['slide'] = $data[SEARCH_RESULT_SLIDE][$search['results'][$i + 1]['slide_id']];
					$search['results'][$i + 1]['terms'] = $data[SEARCH_RESULT_TERMS][$search['results'][$i + 1]['definition_id']];
					break;
			}
		}

		// $search['results'] now contains all of the result data and is keyed to result number (one-based)

		end($search['results']);
		$search['current_page_end'] = key($search['results']);
		reset($search['results']);
		$search['current_page_start'] = key($search['results']);


		// --------------------------------------------------------------------------
		// log searches
		// --------------------------------------------------------------------------
		if (!DEBUGGING) {
			file_put_contents('search.log', serialize(array(
				'ts' => time(),
				'ip' => ip2long($_SERVER['REMOTE_ADDR']),
				'n'	 => $search['total_results'],
				'p' => $search['current_page'],
				'get' => $_GET
			)) . "\n", FILE_APPEND | LOCK_EX);
		}
	}

}

// --------------------------------------------------------------------------
// These are the objects/properties that the templates can access:
// --------------------------------------------------------------------------
/*
    slide.slide_id,
    slide.title,
    slide.description,
    slide.sex,
    slide.age,
    slide.genus,
    slide.species,
    slide.strain,
    slide.common_name,
	slide.acknowledgement

	terms.definition_id
	terms.definition
	terms.preferred
	terms.synonyms

	label.slide (as above)
	label.terms (as above)
	label.x
	label.y
	label.z

    atlas.atlas_id,
    atlas.slide_count,
    atlas.name,
    atlas.description

	options.organism
	options.sex
	options.age_units
	options.results_per_page

	search.q
	search.organism
	search.sex
	search.age_fr
	search.age_fr_units
	search.age_to
	search.age_to_units
	search.results_per_page
	search.thumbnails
	search.results
	search.total_results
	search.last_page
	search.current_page
	search.current_page_start
	search.current_page_end
	search.was_submitted
*/

// --------------------------------------------------------------------------
// Debugging info
// --------------------------------------------------------------------------

if (DEBUGGING) {
	setMessage('<h1>$_GET</h1>', 'Debug');
	setMessage(print_r($_GET, true), 'Debug');
	setMessage('<h1>$search</h1>', 'Debug');
	setMessage(print_r($search, true), 'Debug');
	setMessage('<h1>$options</h1>', 'Debug');
	setMessage(print_r($options, true), 'Debug');
	setMessage(sprintf('%d results found; printing %d', count($full_results), $rpp), 'Note');
	setMessage(sprintf('Executed %d queries in %f seconds', $zf_mysql_query_count, $zf_mysql_query_time));
	setMessage("Query hash: $query_key");
	writeMessages();
}
$search['query_count'] = $zf_mysql_query_count;
$search['query_time' ] = $zf_mysql_query_time;

// --------------------------------------------------------------------------
// Render page
// --------------------------------------------------------------------------

echo $twig->render('search.twig.html', array(
	'search' => $search,
	'options' => $options,
	'page' => array(
		'title'	=> $search['results'] ? 'Search results' : 'Search',
		'species' => 'human',
		'scripts' => array(
			'scriptaculous-js-1.9.0/lib/prototype.js',
			'search.js'
		),
		'debug'	=> DEBUGGING
	)
));
