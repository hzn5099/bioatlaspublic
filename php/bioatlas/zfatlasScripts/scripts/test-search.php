<?php
/*
	x it appears that atlases containing non-public slides are appearing in search results (e.g., Zebrafish Arrays)
		- disabling slide collapsing when text search is used seems to aleviate this
	x relevant slide results are being collapsed into atlases and buried lower than they should be
		- disabling slide collapsing when text search is used seems to aleviate this
	- collapsing behavior should probably be tuned (with some or all of the following):
		- only for atlases with over N slides
		- only for slides with ft_scores lower than X (or 0.000)
		- don't collapse on ft search

	- the ft_min_word_len == 4 still needs to be addressed
		- could be implemented with LIKE for shorter words

	x move is_public into query instead of $where? (or is it necessary for atlas_id search?)
	x sort slides based on atlas_id/to_left + position
	x should add 'firstname' to users fulltext index (lastname, firstname)
	- age string matching ("dpf", etc)
	- single atlas expansion
	- remove excess comments at top
	- add option to load results directly into comparison viewer
*/
require_once 'inc/base.php';
require_once 'inc/connect+.php';

define('FT_MIN_WORD_LEN', 4);

// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

	function shorter_than_ft_min_word_len($w) {
		return strlen($w) < FT_MIN_WORD_LEN;
	}

	function highlight_range_sort($a, $b) {
		$A = abs($a);
		$B = abs($b);
		if ($A == $B)
			return $a < $b ? 1 : 0;
		else
			return $A < $B ? -1 : 1;
	}

	// highlight_keywords():  wraps matching substrings in $prefix/$suffix without nesting tags
	//                        or re-matching text inside tags.

	function highlight_keywords($data, $keywords = array(),
		   $prefix = '<SPAN class="highlight">', $suffix = '</SPAN>') {

		$datacopy = strtolower($data);
		$keywords = array_map('strtolower', $keywords);
		// this will contain offset ranges to be highlighted
		// positive offset indicates start
		// negative offset indicates end
		$ranges = array();

		// find start/end offsets for each keyword
		foreach ($keywords as $keyword) {
			$offset = 0;
			$length = strlen($keyword);
			while (($pos = strpos($datacopy, $keyword, $offset)) !== false) {
				$ranges[] = $pos;
				$ranges[] = -($offset = $pos + $length);
			}
		}

		if (!count($ranges))
			return $data;

		// sort offsets by abs(), positive
		usort($ranges, 'highlight_range_sort');

		// combine overlapping ranges by keeping lesser
		// positive and negative numbers
		$i = 0;
		while ($i < count($ranges) - 1) {
			if ($ranges[$i] < 0) {
				if ($ranges[$i + 1] < 0)
					array_splice($ranges, $i, 1);
				else
					$i++;
			} else if ($ranges[$i + 1] < 0)
				$i++;
			else
				array_splice($ranges, $i + 1, 1);
		}

		// create substrings
		$ranges[] = strlen($data);
		$substrings = array(substr($data, 0, $ranges[0]));
		for ($i = 0, $n = count($ranges) - 1; $i < $n; $i += 2) {
			// prefix + highlighted_text + suffix + regular_text
			$substrings[] = $prefix;
			$substrings[] = substr($data, $ranges[$i], -$ranges[$i + 1] - $ranges[$i]);
			$substrings[] = $suffix;
			$substrings[] = substr($data, -$ranges[$i + 1], $ranges[$i + 2] + $ranges[$i + 1]);
		}

		// join and return substrings
		return implode('', $substrings);
	}

// ----------------------------------------------------------------------------

	function get_string_regexp($words, $column_names, $operator = 'OR') {

		$sql = array();
		foreach ($words as $word) {
			$sql[] = sprintf('(`%s` RLIKE "[[:<:]]%s[[:>:]]")',
				implode("` RLIKE \"[[:<:]]{$word}[[:>:]]\" OR `", $column_names),
				$word
			);
			// $sql[] = sprintf('(%s RLIKE "[[:<:]]%s[[:>:]]")', $column, implode("[[:>:]]\" OR $column RLIKE \"[[:<:]]", $words));
		}

		return implode(" $operator ", $sql);
	}

// ----------------------------------------------------------------------------

	function get_fulltext_query($words, $columns, $operator = 'OR', $search_modifier = '') {
		// MATCH (columns) AGAINST ("words" $search_modifier)
		if (!in_array(strtoupper($search_modifier), array('', 'IN BOOLEAN MODE', 'WITH QUERY EXPANSION'), true)) {
			echo "$search_modifier is not a legal value for a search modifier.\n";
			return;
		}
		// since we can't search multiple across tables in a single MATCH(), in order to perform an AND-query,
		// we'd need to generate separate MATCH()es for each word and combine them in AND/ORs as above
	}

// ----------------------------------------------------------------------------

	function search_slides($text = '', $where = '', $query = 'slide_search', $print_query = false) {

		global $sql;
		if (!array_key_exists($query, $sql)) die(sprintf("'%s' does not exist in \$sql!\n", $query));
		$start = microtime(1);
		$q = zf_mysql_query($sql[$query], $text, $where);
		if ($print_query) echo "$q\n";
		printf("%3.6fs\t%5d\tSlides matched\n", microtime(1) - $start, mysql_affected_rows());
		if (mysql_errno())
			printf("MySQL error:  %s\n%s\n", mysql_error(), $q);

	}

// ----------------------------------------------------------------------------

	function search_labels($text = '', $where = '', $query = 'label_search', $print_query = false) {

		global $sql;
		if (!array_key_exists($query, $sql)) die(sprintf("'%s' does not exist in \$sql!\n", $query));
		$start = microtime(1);
		$q = zf_mysql_query($sql[$query], $text, $where);
		if ($print_query) echo "$q\n";
		printf("%3.6fs\t%5d\tLabels matched\n", microtime(1) - $start, mysql_affected_rows());
		if (mysql_errno())
			printf("MySQL error:  %s\n%s\n", mysql_error(), $q);

		// delete any non-matching ft slides
		$start = microtime(1);
		zf_mysql_query('DELETE FROM tmp_slide_results WHERE ft_score = 0');
		printf("%3.6fs\t%5d\tSlides deleted (no ft match)\n", microtime(1) - $start, mysql_affected_rows());

	}

// ----------------------------------------------------------------------------

$sql = array();

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
	to_left					INT UNSIGNED NOT NULL
)
SQL;

// --------------------------------------------------------------------
// SQL:  search for slides
// --------------------------------------------------------------------
$sql['slide_search'] = <<<'SQL'
INSERT INTO tmp_slide_results SELECT
    slide_id,
    MATCH (title, description) AGAINST ("%1$s")
        + MATCH (common_name, genus, species, strain) AGAINST ("%1$s")
        + MATCH (string) AGAINST ("%1$s")
        + MATCH (name, institution, department) AGAINST ("%1$s")
        + MATCH (lastname, firstname) AGAINST ("%1$s"),
    organism_age_in_hours
FROM
    virtualslides
    LEFT JOIN rel_atlases_virtualslides USING (slide_id)
    LEFT JOIN organism_types USING (organism_type_id)
    LEFT JOIN sources USING (source_id)
    LEFT JOIN groups USING (group_id)
    LEFT JOIN users USING (user_id)
WHERE
    is_public AND %2$s
SQL;

// --------------------------------------------------------------------
// SQL:  search for slides (boolean mode)
// --------------------------------------------------------------------
$sql['slide_search_boolean'] = <<<'SQL'
INSERT INTO tmp_slide_results SELECT
    slide_id,
    MATCH (title, description) AGAINST ("%1$s")
        + MATCH (common_name, genus, species, strain) AGAINST ("%1$s")
        + MATCH (string) AGAINST ("%1$s")
        + MATCH (name, institution, department) AGAINST ("%1$s")
        + MATCH (lastname, firstname) AGAINST ("%1$s"),
    organism_age_in_hours
FROM
    virtualslides
    LEFT JOIN rel_atlases_virtualslides USING (slide_id)
    LEFT JOIN organism_types USING (organism_type_id)
    LEFT JOIN sources USING (source_id)
    LEFT JOIN groups USING (group_id)
    LEFT JOIN users USING (user_id)
WHERE
	is_public
    AND (MATCH (title, description) AGAINST ("%1$s" IN BOOLEAN MODE)
    OR MATCH (common_name, genus, species, strain) AGAINST ("%1$s" IN BOOLEAN MODE)
    OR MATCH (string) AGAINST ("%1$s" IN BOOLEAN MODE)
    OR MATCH (name, institution, department) AGAINST ("%1$s" IN BOOLEAN MODE)
    OR MATCH (lastname, firstname) AGAINST ("%1$s" IN BOOLEAN MODE))
    AND %2$s
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
// SQL:  search for matching labels
// --------------------------------------------------------------------
$sql['label_search_with_where'] = <<<'SQL'
INSERT INTO tmp_label_results SELECT
    label_id,
    MATCH (ot1.term) AGAINST ("%1$s"),
    ot1.term = "%1$s"
FROM
    ontology_terms ot1
    JOIN ontology_terms ot2 ON ot1.definition_id = ot2.definition_id
    JOIN virtualslide_labels ON ot2.term_id = virtualslide_labels.term_id
    JOIN virtualslides USING (slide_id)
WHERE
    MATCH (ot1.term) AGAINST ("%1$s")
	AND %2$s
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
    matching/total >= %f
SQL;

// --------------------------------------------------------------------
// SQL: remove atlases without text match or below some threshold %n
// --------------------------------------------------------------------
$sql['prune_atlas_matches'] = <<<'SQL'
DELETE FROM
    tmp_atlas_results
WHERE
    total = 0
    OR (ft_score = 0 AND matching/total < %f)
SQL;

// --------------------------------------------------------------------
// SQL:  select final rankings
// --------------------------------------------------------------------
$sql['select_results'] = <<<'SQL'
SELECT type, id, ft_score FROM (
    (SELECT '%1$s' AS type, slide_id AS id, ft_score, 0.0 AS matching, organism_age_in_hours FROM tmp_slide_results) UNION
    (SELECT '%2$s' AS type, atlas_id AS id, ft_score,  matching/total,               to_left FROM tmp_atlas_results) UNION
    (SELECT '%3$s' AS type, label_id AS id, ft_score,        is_exact,                     0 FROM tmp_label_results)
ORDER BY
    ft_score DESC,
    matching DESC,
    organism_age_in_hours,
    id
) AS results
SQL;

// --------------------------------------------------------------------
// Set search parameters
// --------------------------------------------------------------------

	// $query = 'zebrafish carcinoma';
	// $where = 'organism_type_id IN (1,2,25) AND is_public';
	// $where = '1';
	// $where = 'organism_type_id IN (1,2,25)';
	$query = $_GET['q'];
	$where = $_GET['w'];
	$show_results = 50;


	// strip query of extraneous characters
	// (escaping characters requires two slashes, e.g., \\+)
	$query = preg_replace(array(
		'/[^\w\s-]/',				// non-alphanumeric characters
		'/(?<=\W|^)-|-(?=\W|$)/',	// leading hyphens
	), '', $query);

	// split into two groups, words >= ft_min_word_len AND words < ft_min_word_len
	$words = preg_split('/\s+/', $query, -1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE);
	$short_words = array_filter($words, 'shorter_than_ft_min_word_len');
	$query_words = array_diff($words, $short_words);
	printf("Query words: %s\nShort words: %s\n", implode(' ', $query_words), implode(' ', $short_words));

	// create query ... in boolean mode
	printf("SELECT
    slide_id,
    MATCH (title, description) AGAINST (\"%1\$s\")
        + MATCH (common_name, genus, species, strain) AGAINST (\"%1\$s\")
        + MATCH (string) AGAINST (\"%1\$s\")
        + MATCH (name, institution, department) AGAINST (\"%1\$s\")
        + MATCH (lastname) AGAINST (\"%1\$s\"),
    organism_age_in_hours
FROM
    virtualslides
    LEFT JOIN rel_atlases_virtualslides USING (slide_id)
    LEFT JOIN organism_types USING (organism_type_id)
    LEFT JOIN sources USING (source_id)
    LEFT JOIN groups USING (group_id)
    LEFT JOIN users USING (user_id)
WHERE
	is_public
    AND (MATCH (title, description) AGAINST (\"%1\$s\" IN BOOLEAN MODE)
    OR MATCH (common_name, genus, species, strain) AGAINST (\"%1\$s\" IN BOOLEAN MODE)
    OR MATCH (string) AGAINST (\"%1\$s\" IN BOOLEAN MODE)
    OR MATCH (name, institution, department) AGAINST (\"%1\$s\" IN BOOLEAN MODE)
    OR MATCH (lastname) AGAINST (\"%1\$s\" IN BOOLEAN MODE))
	AND %2\$s\n", implode(' ', $query_words), '1');

	echo get_string_regexp($short_words, array('title', 'description', 'string')), "\n";
	echo get_string_regexp($short_words, array('title', 'description', 'string'), 'AND'), "\n";
	echo get_string_regexp(array(), array(), 'AND'), "\n";

// --------------------------------------------------------------------
// Run search
// --------------------------------------------------------------------

	echo "--------------------------------------------------------------------\n";
	echo "'$query' WHERE $where\n";
	echo "--------------------------------------------------------------------\n";

	// create temporary tables

		$start = microtime(1);
		zf_mysql_query($sql['create_slide_results']);
		zf_mysql_query($sql['create_label_results']);
		zf_mysql_query($sql['create_atlas_results']);
		printf("%3.6fs\t%5d\tTemporary tables created\n", microtime(1) - $start, 3);

	// search slides

		search_slides(preg_replace('/\b(\w)/', '+$1', $query), $where, 'slide_search');

	// search labels

		if ($query) {
			search_labels($query, $where, 'label_search_with_where');
		}

	// match atlases

		$start = microtime(1);

		// count matching slides
		zf_mysql_query($sql['atlas_slide_matches']);

		// search atlas title/descriptions
		if ($query)
			zf_mysql_query($sql['atlas_search_ft'], $query);

		// get atlas slide totals
		// zf_mysql_query('UPDATE tmp_atlas_results INNER JOIN (SELECT atlas_id, COUNT(*) AS slide_count FROM rel_atlases_virtualslides GROUP BY atlas_id) AS x USING (atlas_id) SET total=slide_count');
		zf_mysql_query($sql['atlas_slide_counts']);

		printf("%3.6fs\t%5d\tSeries matched\n", microtime(1) - $start, mysql_result(mysql_query('SELECT COUNT(*) FROM tmp_atlas_results'), 0));

		function print_atlas_results() {
			$result = mysql_query('SELECT * FROM tmp_atlas_results');
			if ($result)
				while ($row = mysql_fetch_row($result))
					vprintf("\t%d\t%f\t%d\t%d\n", $row);
			else if (mysql_errno())
				printf("MySQL Error: %s\n", mysql_error());
		}
		// print_atlas_results();


	// collapse slides into matching atlases
	/*
		- only collapse matching == total during full-text search?
		- only collapse for atlases with more than X slides?
			- or partially collapse, showing only the first N matches and providing a link to expand;
			  "See more from this series"
			  Or, instead of several individual slide results, display several thumbnails
			  this might even be possible with Sphinx
		- take into account ft_scores of collapsed slides
			- either AVG(ft_score) or AVG(slide.ft_score) + atlas.ft_score
	*/

		// delete slides from atlases with > threshold
		$threshold = $query ? 1.00 : 0.80;
		// (should ft-matching slides being collapsed have their ft_score incorporated into atlas results somehow?  Averaged?)
		$start = microtime(1);
		// zf_mysql_query($sql['delete_atlas_slides'], 0.8);
		zf_mysql_query($sql['collapse_slides'], $threshold);
		printf("%3.6fs\t%5d\tSlides deleted (collapsed)\n", microtime(1) - $start, mysql_affected_rows());

		// delete atlases from results with no ft_score and less than threshold matches
		$start = microtime(1);
		zf_mysql_query($sql['prune_atlas_matches'], $threshold);
		printf("%3.6fs\t%5d\tSeries deleted\n", microtime(1) - $start, mysql_affected_rows());

		// expand single atlas/no matching slides situation
        // after collapsing slides and pruning atlases, zero slides and one atlas remains
        // this number should be available without issuing any queryies, just check the affected rows from the appropriate queries
		$star = microtime(1);
		$slide_count = mysql_result(mysql_query('SELECT COUNT(*) FROM tmp_slide_results'), 0);
		$atlas_count = mysql_result(mysql_query('SELECT COUNT(*) FROM tmp_atlas_results'), 0);
		if ($slide_count == 0 && $atlas_count == 1) {
			mysql_query('INSERT INTO tmp_slide_results SELECT slide_id, 0.0, organism_age_in_hours FROM tmp_atlas_results JOIN rel_atlases_virtualslides USING (atlas_id) JOIN virtualslides USING (slide_id) ORDER BY position');
			if (mysql_errno())
				printf("MySQL Error:  %s\n", mysql_error());
			mysql_query('DELETE FROM tmp_atlas_results');
			if (mysql_errno())
				printf("MySQL Error:  %s\n", mysql_error());
			printf("%3.6fs\t%5d\tSeries expanded\n", microtime(1) - $start, mysql_affected_rows());
		}

	// show intermediate results

		/*
		echo "\n";

		// slides
		$result = zf_mysql_query('SELECT * FROM tmp_slide_results');
		if ($result)
			while ($row = mysql_fetch_row($result))
				vprintf("\tslide\t%d\t%f\t%d\n", $row);
		else if (mysql_errno())
			printf("MySQL Error: %s\n", mysql_error());

		// labels
		$result = zf_mysql_query('SELECT * FROM tmp_label_results');
		if ($result)
			while ($row = mysql_fetch_row($result))
				vprintf("\tlabel\t%d\t%f\t%d\n", $row);
		else if (mysql_errno())
			printf("MySQL Error: %s\n", mysql_error());

		// atlas
		$result = zf_mysql_query('SELECT * FROM tmp_atlas_results');
		if ($result)
			while ($row = mysql_fetch_row($result))
				vprintf("\tatlas\t%d\t%f\t%d\t%d\n", $row);
		else if (mysql_errno())
			printf("MySQL Error: %s\n", mysql_error());
		*/

	// print summary

		printf("\n%3.6fs\t%5d\tQueries\n", $zf_mysql_query_time, $zf_mysql_query_count);

// --------------------------------------------------------------------
// Fetch results
// --------------------------------------------------------------------

		$full_results = zf_mysql_query($sql['select_results'], 'slide', 'atlas', 'label');
		echo "\n";
		$result = 0;
		$keywords = explode(' ', $query);
		if ($full_results) {
			printf("\t%d results\n\n", mysql_num_rows($full_results));
			while ($result++ < $show_results && $row = mysql_fetch_assoc($full_results)) {
				switch ($row['type']) {
				case 'slide':
					$q = 'SELECT %d, "%s", %f, CONCAT_WS(" | ", title, REPLACE(description, "\n", " "), common_name, genus, species, strain, string, name, institution, department, lastname, firstname) FROM virtualslides LEFT JOIN rel_atlases_virtualslides USING (slide_id) LEFT JOIN organism_types USING (organism_type_id) LEFT JOIN sources USING (source_id) LEFT JOIN groups USING (group_id) LEFT JOIN users USING (user_id) WHERE slide_id = %d';
					break;
				case 'atlas':
					$q = 'SELECT %d, "%s", %f, CONCAT_WS(" | ", GROUP_CONCAT(parent.name ORDER BY parent.to_left SEPARATOR " > "), node.description) FROM atlases node JOIN atlases parent ON node.to_left BETWEEN parent.to_left AND parent.to_right WHERE node.atlas_id = %d GROUP BY node.atlas_id';
					break;
				case 'label':
					$q = 'SELECT %d, "%s", %f, CONCAT_WS(" | ", term, definition) FROM virtualslide_labels JOIN ontology_terms USING (term_id) JOIN ontology_definitions USING (definition_id) WHERE label_id = %d';
					break;
				}
				// result_number, result_type, ft_score, text
				$row2 = mysql_fetch_row(mysql_query(sprintf($q, $result, strtoupper($row['type']), $row['ft_score'], $row['id'])));
				printf("%3d [[1;34m%s[0m] %5d  %.4f  %s\n",
					$row2[0], $row2[1], $row['id'], $row2[2], highlight_keywords($row2[3], $keywords, '[1;32m', '[0m')
			   	);
			}
		} else if (mysql_errno()) {
			printf("MySQL Error:  %s\n", mysql_error());
		} else {
			echo "\tNo results\n";
		}

// SELECT * FROM (SELECT atlas_id, matching/COUNT(slide_id) FROM (SELECT atlas_id, COUNT(*) AS matching FROM tmp_slide_results JOIN rel_atlases_virtualslides USING (slide_id) GROUP BY atlas_id) AS x JOIN rel_atlases_virtualslides USING (atlas_id) GROUP BY atlas_id) AS y JOIN (SELECT node.atlas_id, GROUP_CONCAT(parent.name SEPARATOR " > ") FROM atlases node JOIN atlases parent ON node.to_left BETWEEN parent.to_left AND parent.to_right GROUP BY node.atlas_id) AS z USING (atlas_id);
// SELECT node.atlas_id, SUM(MATCH(parent.name, parent.description) AGAINST ("zebrafish")) AS ft_score, 0.0 FROM atlases node JOIN atlases parent ON node.to_left > parent.to_left AND node.to_left < parent.to_right WHERE MATCH(parent.name, parent.description) AGAINST ("zebrafish") GROUP BY node.atlas_id;
// SELECT node.atlas_id, SUM(MATCH(parent.name, parent.description) AGAINST ("zebrafish")) AS ft_score, GROUP_CONCAT(parent.name SEPARATOR " > ") AS Atlas FROM atlases node JOIN atlases parent ON node.to_left > parent.to_left AND node.to_left < parent.to_right GROUP BY node.atlas_id;
/*
SELECT slide_id,
MATCH (title, description) AGAINST ("zebrafish carcinoma") AS ft_slide,
MATCH (common_name, genus, species, strain) AGAINST ("zebrafish carcinoma") AS ft_organism,
MATCH (string) AGAINST ("zebrafish carcinoma") AS ft_source,
MATCH (name, institution, department) AGAINST ("zebrafish carcinoma") AS ft_group,
MATCH (lastname) AGAINST ("zebrafish carcinoma") AS ft_user,
MATCH (title, description) AGAINST ("zebrafish carcinoma")
+ MATCH (common_name, genus, species, strain) AGAINST ("zebrafish carcinoma")
+ MATCH (string) AGAINST ("zebrafish carcinoma")
+ MATCH (name, institution, department) AGAINST ("zebrafish carcinoma")
+ MATCH (lastname) AGAINST ("zebrafish carcinoma") AS ft_score,
  (MATCH (title, description) AGAINST ("zebrafish carcinoma") > 0)
+ (MATCH (common_name, genus, species, strain) AGAINST ("zebrafish carcinoma") > 0)
+ (MATCH (string) AGAINST ("zebrafish carcinoma") > 0)
+ (MATCH (name, institution, department) AGAINST ("zebrafish carcinoma") > 0)
+ (MATCH (lastname) AGAINST ("zebrafish carcinoma") > 0) AS matching_columns
FROM
    virtualslides
    LEFT JOIN rel_atlases_virtualslides USING (slide_id)
    LEFT JOIN organism_types USING (organism_type_id)
    LEFT JOIN sources USING (source_id)
    LEFT JOIN groups USING (group_id)
    LEFT JOIN users USING (user_id)
WHERE
    is_public
AND (MATCH (title, description) AGAINST ("zebrafish carcinoma")
OR MATCH (common_name, genus, species, strain) AGAINST ("zebrafish carcinoma")
OR MATCH (string) AGAINST ("zebrafish carcinoma")
OR MATCH (name, institution, department) AGAINST ("zebrafish carcinoma")
OR MATCH (lastname) AGAINST ("zebrafish carcinoma"));
*/
