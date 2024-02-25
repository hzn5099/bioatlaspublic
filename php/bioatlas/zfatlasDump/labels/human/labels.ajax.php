<?php

$sql = array();
include_once 'inc/base.php';
include_once 'inc/connect+.php';
include_once 'inc/VirtualSlideLabel.php';

// ----------------------------------------------------------------------------
// SQL:  Fetch all labels for a slide
// ----------------------------------------------------------------------------
// the self LEFT JOIN on log_virtualslide_labels selects the row with the earliest last_modified, i.e., the original entry
$sql['get_virtualslide_labels'] =<<<'SQL'
SELECT
	label.label_id AS id,
	label.x,
	label.y,
	label.z,
	label.constructor,
	label.term_id,
	term,
	definition,
	label.annotation,
	IF(LEFT(identifier, 4) = "ZFA:", identifier, NULL) AS ontology_id,
	CONCAT_WS(" ", firstname, lastname) AS orig_author
FROM
	virtualslide_labels AS label
	JOIN log_virtualslide_labels log1 USING (label_id)
	LEFT JOIN log_virtualslide_labels log2 ON (log1.label_id = log2.label_id AND log1.last_modified > log2.last_modified)
	LEFT JOIN ontology_terms ON (ontology_terms.term_id = label.term_id)
	LEFT JOIN ontology_definitions ON (ontology_definitions.definition_id = ontology_terms.definition_id)
	JOIN users ON (log1.user_id = users.user_id)
WHERE
	log2.label_id IS NULL
	AND label.slide_id = %d
SQL;

// ----------------------------------------------------------------------------
if (isset($_GET['slide_id']) && ctype_digit($_GET['slide_id'])) {
// Retrieve labels
// ----------------------------------------------------------------------------
	require_once 'inc/base.php';
	require_once 'inc/connect.php';

	$labels = zf_mysql_fetch_all(zf_mysql_query($sql['get_virtualslide_labels'], $_GET['slide_id']));

	$escaped_labels = htmlspecialchars($labels, ENT_QUOTES);

	if (count($labels)) {

		// Return label objects
		echo str_replace('\/', '/', json_encode($escaped_labels, JSON_NUMERIC_CHECK));

	} else if (mysqli_errno($zfatlas_db)) {
		// database error
		printf("[/* Database error: %s */]\n", mysqli_error($zfatlas_db));
	} else {
		// no results
		echo "[/* No results. */]\n";
	}


// ----------------------------------------------------------------------------
// }
	// else if ($_POST['labels'] && $labels = json_decode($_POST['labels'], true)) {
// // create, update, and delete labels
// // ----------------------------------------------------------------------------
// 	require_once 'inc/base.php';
// 	require_once 'inc/connect.php';
// 	require_once 'inc/VirtualSlideLabel.php';

// 	session_start();

// 	$slide_id = isset($_POST['slide_id']) && ctype_digit($_POST['slide_id'])
// 		? $_POST['slide_id']
// 		: null;
// 	$user_id = isset($_SESSION['user_id'])
// 		? $_SESSION['user_id']
// 		: 0;

// 	$responses = array();

// 	foreach ($labels as $label) {
// 		echo "/*\n";
// 		print_r($label);
// 		echo "*/\n";
// 		if ($label['deleted'])
// 			$action = 'delete';
// 		else if (!array_key_exists('id', $label))
// 			$action = 'create';
// 		else
// 			$action = 'update';

// 		$vslabel = new VirtualSlideLabel($label);
// 		if (!isset($vslabel->slide_id) && $slide_id)
// 			$vslabel->slide_id = $slide_id;
// 		$vslabel->user_id = $user_id;
// 		$responses[] = $vslabel->$action();
// 	}

// 	// Return responses
// 	echo json_encode(array_values(array_filter($responses)), JSON_NUMERIC_CHECK);

 } else {
	// slide_id not set
	echo "[/* slide_id not set. */]\n";
}
