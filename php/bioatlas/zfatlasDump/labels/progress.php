<?php

	include 'inc/base.php';
	include 'inc/connect.php';
	include 'inc/twig.php';

$labeled_atlases = array(
	4,		// 4dpf (3.7mm) coronal
	5,		// 4dpf (3.7mm) sagittal
	6,		// 4dpf (3.7mm) transverse
	72,		// 21-29dpf (7.8mm) coronal
	73		// 21-29dpf (7.8mm) sagittal
);

$priority_atlases = array(
	47,		// 48hpf (3.1mm)
	19,		// 3dpf (3.5mm)
	3,		// 4dpf (3.7mm)
	7,		// 5dpf (3.9mm)
	23,		// 7-13dpf (4.5mm)
	71,		// 21-29dpf (7.8mm)
	11,		// 30-44dpf (10mm)
	79,		// 45-89dpf (14mm)
	130,	// 3mpf male
	27,		// 3mpf female
	15,		// 12mpf male
	134,	// 12mpf female
	95,		// 24mpf male
	138		// 24mpf female
);

$sql = array();
// --------------------------------------------------------------------------
$sql['get_zebrafish_atlases'] = <<<'SQL_0'
SELECT
	node.atlas_id,
	node.name,
	(SELECT atlas_id FROM atlases parent WHERE node.to_left > parent.to_left AND node.to_left < parent.to_right ORDER BY parent.to_left DESC LIMIT 1) AS parent
FROM
	atlases AS node
WHERE
	node.to_left > (SELECT to_left FROM atlases WHERE atlas_id = 1)
	AND node.to_right < (SELECT to_right FROM atlases WHERE atlas_id = 1)
ORDER BY
	node.to_left
SQL_0;

// --------------------------------------------------------------------------
$sql['get_zebrafish_atlas_slides'] = <<<'SQL_1'
SELECT
	atlas_id,
	slide_id
FROM
	atlases
	JOIN rel_atlases_virtualslides USING (atlas_id)
WHERE
	to_left > (SELECT to_left FROM atlases WHERE atlas_id = 1)
	AND to_right < (SELECT to_right FROM atlases WHERE atlas_id = 1)
ORDER BY
	atlas_id,
	position
SQL_1;


// --------------------------------------------------------------------------
// Populate $zfatlas with zebrafish atlas data
// --------------------------------------------------------------------------
/*
	$zfatlas data structure:

		- age (e.g., "48hpf (3.1mm)") atlases contain plane atlases (e.g., "Coronal") which contain slides
		- 'isPriority' and 'plane' are only in "outer" atlases
		- 'isLabeled' and 'slides' are only in "inner" atlases

	$zfatlas = array(
		$atlas_id	=> array(
			'name'			=> String, name of atlas,
			'isPriority'	=> Boolean
			'plane'			=> Array, contains atlases that actually contain slides
				$atlas_id	=> array(
					'name'			=> String, name of atlas,
					'slides'		=> Array, list of slide_ids,
					'isLabeled'		=> Boolean
				),
				...
		),
		...
	);
*/

$zfatlas = array();
$atlases = zf_mysql_fetch_all(zf_mysql_query($sql['get_zebrafish_atlases']), 'atlas_id');
$slides =  zf_mysql_fetch_all(zf_mysql_query($sql['get_zebrafish_atlas_slides']));
$count = count($slides);

// create 'slides' array on $atlases
foreach ($slides as $slide) {
	if (!isset($atlases[$slide['atlas_id']]['slides']))
		$atlases[$slide['atlas_id']]['slides'] = array();
	$atlases[$slide['atlas_id']]['slides'][] = $slide['slide_id'];
}

// build $zfatlas from $atlases
foreach ($atlases as $atlas_id => $atlas) {
	if ($atlas['parent'] == 1) // if 1, then atlas is top-level age/size category
		$zfatlas[$atlas_id] = array(
			'name'	=> $atlas['name'],
			'plane'	=> array(),
			'isPriority'=> in_array($atlas_id, $priority_atlases)
		);
	else
		$zfatlas[$atlas['parent']]['plane'][$atlas_id] = array(
			'name'		=> $atlas['name'],
			'slides'	=> array_key_exists('slides', $atlas) ? $atlas['slides'] : array(),
			'isLabeled'	=> in_array($atlas_id, $labeled_atlases)
		);
}

// Render view
echo $twig->render('progress.twig.html', array(
	'count'	=> $count,
	'atlas'	=> $zfatlas,
	'page'	=> array(
		'styles'	=> array(
			'viewer.css',
		),
		'debug'		=> isset($_GET['dev'])
	)
));

