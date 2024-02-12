<?php

// --------------------------------------------------------------------------
// SQL query definitions
// --------------------------------------------------------------------------
/*
	get_species_list

		Retrieves a list of organism_types suitable for generating a SELECT element

	Arguments: (none)
	Returns:
		'opt'
		'val'



	create_slide_results
	create_label_results
	create_atlas_results

		Create temporary tables for search matches.

	slide_search

		Arguments:
			%1$s:	Query text (search string)
			%2$s:	WHERE clause
*/

$sql = array();

// FYI:  It should be okay to use the same terminator for each heredoc

// --------------------------------------------------------------------------
// Get organism types from database for SELECT
// --------------------------------------------------------------------------
$sql['get_species_list'] = <<<'SQL_0'
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
SQL_0;
// --------------------------------------------------------------------
// SQL:  create a temporary table for matching slides
// --------------------------------------------------------------------
$sql['create_slide_results'] = <<<'SQL_1'
CREATE TEMPORARY TABLE tmp_slide_results (
    slide_id                INT UNSIGNED NOT NULL PRIMARY KEY,
    ft_score                FLOAT NOT NULL DEFAULT 0,
    organism_age_in_hours   INT UNSIGNED
)
SQL_1;

// --------------------------------------------------------------------
// SQL:  create temporary table for matching labels
// --------------------------------------------------------------------
$sql['create_label_results'] = <<<'SQL_2'
CREATE TEMPORARY TABLE tmp_label_results (
    label_id                INT UNSIGNED NOT NULL,
    ft_score                FLOAT NOT NULL DEFAULT 0,
    is_exact                BOOLEAN NOT NULL DEFAULT FALSE
)
SQL_2;

// --------------------------------------------------------------------
// SQL:  create temporary table for matching atlases
// --------------------------------------------------------------------
$sql['create_atlas_results'] = <<<'SQL_3'
CREATE TEMPORARY TABLE tmp_atlas_results (
    atlas_id                MEDIUMINT UNSIGNED NOT NULL,
    ft_score                FLOAT NOT NULL DEFAULT 0,
    matching                FLOAT NOT NULL DEFAULT 0
)
SQL_3;

// --------------------------------------------------------------------
// SQL:  search for slides
// --------------------------------------------------------------------
$sql['slide_search'] = <<<'SQL_4'
INSERT INTO tmp_slide_results SELECT
    slide_id,
    MATCH (title, description) AGAINST ("%1$s")
    + MATCH (common_name, genus, species, strain) AGAINST ("%1$s")
    + MATCH (string) AGAINST ("%1$s")
    + MATCH (name, institution, department) AGAINST ("%1$s")
    + MATCH (lastname) AGAINST ("%1$s"),
    organism_age_in_hours
FROM
    virtualslides
	LEFT JOIN rel_atlases_virtualslides USING (slide_id)
    LEFT JOIN organism_types USING (organism_type_id)
    LEFT JOIN sources USING (source_id)
    LEFT JOIN groups USING (group_id)
    LEFT JOIN users USING (user_id)
WHERE
    %2$s
SQL_4;

// --------------------------------------------------------------------
// SQL:  search for matching labels
// --------------------------------------------------------------------
// NOTE:  I think I'm still going to have to maintain the (x,y)
$sql['label_search'] = <<<'SQL_5'
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
SQL_5;

// --------------------------------------------------------------------
// SQL:  search for matching atlases
// --------------------------------------------------------------------
// Need to also sort by to_left
// http://www.xaprb.com/blog/2006/04/30/how-to-optimize-subqueries-and-joins-in-mysql/
$sql['atlas_search'] = <<<'SQL_6'
INSERT INTO tmp_atlas_results SELECT
    node.atlas_id,
    SUM(MATCH(parent.name, parent.description) AGAINST ("%1$s")),
    matching/total
FROM
    atlases node
    JOIN atlases parent ON node.to_left BETWEEN parent.to_left AND parent.to_right
    LEFT JOIN (
        SELECT
            atlas_id,
            COUNT(b.slide_id) AS matching,
            COUNT(a.slide_id) AS total
        FROM
            rel_atlases_virtualslides AS a
            LEFT JOIN tmp_slide_results AS b USING (slide_id)
        GROUP BY
            atlas_id) AS counts ON node.atlas_id = counts.atlas_id
WHERE
    (MATCH(parent.name, parent.description) AGAINST ("%1$s") OR matching) AND
    total
GROUP BY
    node.atlas_id
SQL_6;

// --------------------------------------------------------------------
// SQL:  remove slides already in atlases (for atlas containing  > n%
//       matching slides)
// --------------------------------------------------------------------
$sql['delete_atlas_slides'] = <<<'SQL_7'
DELETE
    tmp_slide_results
FROM
    tmp_slide_results
    JOIN rel_atlases_virtualslides USING (slide_id)
    JOIN tmp_atlas_results USING (atlas_id)
WHERE
    matching > %f
SQL_7;

// --------------------------------------------------------------------
// SQL:  select final rankings
// --------------------------------------------------------------------
//                     1               2         3         4                      5
$sql['select_results'] = <<<'SQL_8'
SELECT type, id FROM (
    (SELECT %2$d AS type, slide_id AS id, ft_score,        0, organism_age_in_hours FROM tmp_slide_results WHERE %1$s) UNION
    (SELECT %3$d AS type, atlas_id AS id, ft_score, matching,                     0 FROM tmp_atlas_results WHERE %1$s) UNION
    (SELECT %4$d AS type, label_id AS id, ft_score, is_exact,                     0 FROM tmp_label_results WHERE %1$s)
    ORDER BY
        ft_score DESC, 4 DESC, 5, 2
) AS results
SQL_8;

// --------------------------------------------------------------------
// SQL:  retrieve slide info
// --------------------------------------------------------------------
$sql['select_slide_data'] = <<<'SQL_9'
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
SQL_9;

// --------------------------------------------------------------------
// SQL:  retrieve label data
// --------------------------------------------------------------------
// will also need x, y, z coords
// Not quite sure about "...AND NOT is_plural"
$sql['select_label_data'] = <<<'SQL_10'
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
	a.term_id
SQL_10;

// --------------------------------------------------------------------
// SQL:  retrieve atlas data
// --------------------------------------------------------------------
$sql['select_atlas_data'] = <<<'SQL_11'
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
SQL_11;

// --------------------------------------------------------------------
// SQL:  retrieve definition data
// --------------------------------------------------------------------
$sql['select_definition_data'] = <<<'SQL_12'
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
SQL_12;

// --------------------------------------------------------------------
// SQL:  retrieve atlas slides
// --------------------------------------------------------------------
$sql['select_atlas_slides'] = <<<'SQL_13'
SELECT
	slide_id
FROM
	rel_atlases_virtualslides
WHERE
	atlas_id = %d
ORDER BY
	position
SQL_13;


// --------------------------------------------------------------------
// Get virtualslides
// --------------------------------------------------------------------
$sql['get_virtualslides'] = <<<'SQL_14'
SELECT
	slide_id AS id,
	power,
	bgcolor AS bgColor,
	title,
	description,
	string AS source
FROM
	virtualslides
	LEFT JOIN sources USING (source_id)
WHERE
	slide_id IN (%IN_STR%)
GROUP BY
	slide_id
SQL_14;

// --------------------------------------------------------------------
// Get virtualslide levels
// --------------------------------------------------------------------
$sql['get_virtualslide_levels'] = <<<'SQL_15'
SELECT
	slide_id, width, height, tile_width, tile_height
FROM
	virtualslide_levels
WHERE
	slide_id IN (%IN_STR%)
ORDER BY
	slide_id,
	level
SQL_15;

// --------------------------------------------------------------------
// Get atlas info
// --------------------------------------------------------------------
$sql['get_atlas'] = <<<'SQL_16'
SELECT
	node.atlas_id AS id,
	GROUP_CONCAT(parent.name ORDER BY parent.to_left SEPARATOR " &gt; ") AS name,
	node.description AS description
FROM
	atlases node
	JOIN atlases parent ON node.to_left BETWEEN parent.to_left AND parent.to_right
WHERE
	node.atlas_id = %d
GROUP BY
	node.atlas_id
SQL_16;

// --------------------------------------------------------------------
// Get virtualslides in atlas
// --------------------------------------------------------------------
$sql['get_atlas_slides'] = <<<'SQL_17'
SELECT
	slide_id
FROM
	rel_atlases_virtualslides
WHERE
	atlas_id = %d
ORDER BY
	position
SQL_17;

// --------------------------------------------------------------------
// Get virtualslide for reference.php
// --------------------------------------------------------------------
$sql['get_reference_slide'] = <<<'SQL_18'
SELECT
	slide_id AS id,
	power,
	bgcolor AS bgColor,
	title,

	citations AS source,
	zfin_ref,
	definition AS description,
	startzoom,
	startpos
FROM
	anatomical_reference
	JOIN virtualslides USING (slide_id)
WHERE
	anatomical_reference.id = %d
SQL_18;

// --------------------------------------------------------------------
// Get id, title of slides by atlas id
// --------------------------------------------------------------------
$sql['get_atlas_list'] = <<<'SQL_19'
SELECT
	slide_id AS id,
	title
FROM
	virtualslides
	JOIN rel_atlases_virtualslides USING (slide_id)
WHERE
	atlas_id = %d
ORDER BY
	position
SQL_19;

// --------------------------------------------------------------------
function get_atlas_by_id($atlas_id) {
// --------------------------------------------------------------------

	global $sql;

	$result = zf_mysql_query($sql['get_atlas'], $atlas_id);
	if ($result) {
		$atlas = mysqli_fetch_assoc($result);

		// Add "plane" for zf.widget.Iterator if it's part of the zebrafish atlas
		// this might be useful even more generically, i.e., /(coronal|sagittal|transverse)/i
		if (preg_match('/^Zebrafish .+ (Coronal|Sagittal|Transverse)$/', $atlas['name'], $match))
			$atlas['plane'] = $match[1];

		$atlas['slides'] = zf_mysql_fetch_all(zf_mysql_query($sql['get_atlas_slides'], $atlas_id));
		return $atlas;

	} else {
		return false;
	}
}

// --------------------------------------------------------------------
function get_atlas_slides($atlas_id) {
// --------------------------------------------------------------------
	global $sql;

	return zf_mysql_fetch_all(zf_mysql_query($sql['get_atlas_list'], $atlas_id));
}

// --------------------------------------------------------------------
function get_virtualslides_by_id($slide_ids, $indexed_by_id = false)
{
    // --------------------------------------------------------------------

    global $sql;

    $slides = zf_mysql_fetch_all(
        zf_mysql_query(
            str_replace("%IN_STR%", implode(',', array_fill(0,count(array_unique($slide_ids)), '%s')),
            $sql['get_virtualslides']), ...array_unique(($slide_ids))
        ),
        'id'
    );
    $levels = zf_mysql_fetch_all(
        zf_mysql_query(
            str_replace("%IN_STR%", implode(',', array_fill(0,count(array_unique($slide_ids)), '%s')),
            $sql['get_virtualslide_levels']), ...array_unique(($slide_ids))
        ),
        null, MYSQL_NUM
    );

    foreach ($slides as &$slide) {
        $slide['description'] = slide_description_to_HTML($slide['description']);
    }

    foreach ($levels as $level) { // slide_id, level, width, height, tile_width, tile_height
        $slides[$level[0]]['levels'][] = array_slice($level, 1);
    }

    foreach ($slides as $slide) {

        // Set (and save) bgcolor if null
        if (is_null($slide['bgColor'])) {
            $slide['bgColor'] = zf_guess_bgcolor($slide['id']);
        }
        // zf_mysql_query('UPDATE virtualslides SET bgcolor = %d WHERE id = %d', $slide['bgcolor'] = zf_guess_bgcolor($slide['slide_id']), $slide['id']);

        // Convert bgcolor to hex string
        $slide['bgColor'] = sprintf('#%06X', $slide['bgColor']);

    }

    // Re-index and return array
    return $indexed_by_id ? $slides : array_values($slides);
}

// --------------------------------------------------------------------
function get_anatomical_reference_slide($ref_id)
{
    // --------------------------------------------------------------------

    global $sql;

    $slide = array();

    $result = zf_mysql_query($sql['get_reference_slide'], $ref_id);
    if ($result) {
        $slide = mysqli_fetch_assoc($result);
        $slide['startpos'] = explode(',', $slide['startpos']);
        $levelquery = str_replace("%IN_STR%", implode(',', array_fill(0,count([$ref_id]), '%s')),$sql['get_virtualslide_levels']);
        $levels = zf_mysql_fetch_all(zf_mysql_query($levelquery, $slide['id']),null, MYSQL_NUM);
        foreach ($levels as $level) {
            $slide['levels'][] = array_slice($level, 1);
        }
    }

    return $slide;
}

