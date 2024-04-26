<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);


/*

	::: Parameters :::


		$_GET['atlas']	atlas.id, atlas_slides.atlas_id
		$_GET['s']		virtualslide.id



	::: Conditions :::


		>>> ?s=1

			Slide exists.  Try to set 'atlas'

		>>> ?s=999999999
		>>> ?s=999999999&atlas=1

			Slide does not exist.  Display error (Slide Not Found) to user, even if atlas exists.
			Do not attempt to fetch atlas (unset it?).

		>>> ?s=1,2,3,4
		>>> ?s=1,2,3,4&atlas=1

			's' is a list of ids.  Create an impromptu atlas from these ids, disregard 'atlas' if set.

		>>> ?atlas=1

			Atlas exists; let JavaScript use iterator.first() to load first slide in atlas.

		>>> ?atlas=999999999

			Atlas does not exist.  Display error (Slide not found).

		>>> ?atlas=999999999?s=1

			Atlas does not exist; slide does exist.  Show slide, disregarding atlas.



		- Disregard 'atlas' if (1) slide does not exist, (2) s= a list of values, (3) atlas doesn't exist, but slide does.
		- Behavior is undefined when slide and atlas exist, but slide is not in atlas.

*/

	require_once('inc/base.php');
	require_once('inc/twig.php');
	require_once('inc/model.php');
	require_once('inc/connect.php');

	// Some initial (pessemistic) values
	$slide = array('id' => 0, 'title' => "Slide not found", 'description' => "No slide id", 'level' => array(array(1,1,1,1)));
	$atlas = array('slides' => array());

	// fetch the slide from the slide id
	if (isset($_GET['s']) && ctype_digit($_GET['s'])) {

        $slides = get_virtualslides_by_id(array($_GET['s']));

		if (count($slides)) {
			$slide = array_shift($slides);

			// if that was successful and 'atlas' is not set, try to set it.
			if (!isset($_GET['atlas'])) {
				$result = zf_mysql_query('SELECT atlas_id FROM rel_atlases_virtualslides WHERE slide_id=%d ORDER BY atlas_id LIMIT 1', $_GET['s']);
// Inside the conditional block where the atlas ID is retrieved
                if ($result) {
                    $row = mysqli_fetch_row($result);
                    $atlas_id = $row[0];
                } else {
                    echo "Error executing SQL query: " . mysqli_error($connection);
                }

			}
		}

	// if s=1,2,3,4, create an impromptu atlas from those ids
	// NOTE: Maximum URL length is ~2000 characters in practice
	} else if (isset($_GET['s']) && preg_match('/^\d+(?:,\d+)+$/', $_GET['s'])) {
		$atlas['slides'] = array_map('intval', explode(',', $_GET['s']));
		unset($_GET['atlas']);
	}

	// set atlas from 'atlas'
	if (isset($_GET['atlas']) && ctype_digit($_GET['atlas'])) {
		$atlas = get_atlas_by_id($_GET['atlas']);
	}
// render view

// Render the second Twig template extending openseadragon.twig.html
$openseadragonContent = $twig->render('openseadragonview.twig.html', array(
    'page'  => array(
        'debug' => isset($_GET['dev'])
    ),
    'slide' => $slide,
    'atlas' => $atlas
));

// Render the first Twig template extending viewer.twig.html
echo $twig->render('view.twig.html', array(
    'page'  => array(
        'debug' => isset($_GET['dev'])
    ),
    'slide' => $slide,
    'atlas' => $atlas,
    'openseadragonContent' => $openseadragonContent  // Pass the rendered content of openseadragon_view.twig.html
));




