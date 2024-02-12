<?php

	// get atlas info
	if (isset($_GET, $_GET['atlas']) && ctype_digit($_GET['atlas'])) {

		require_once 'inc/series.php';

		$atlas = get_atlas((int)$_GET['atlas'], true);
		if ($atlas) {
			echo $atlas;
		} else {
			header('HTTP/1.1 404 Not Found', true, 404);
			echo '{/* atlas not found */}';
		}

	// get list of slide ids & titles for a given atlas
	} else if (isset($_GET, $_GET['atlas_list']) && ctype_digit($_GET['atlas_list'])) {

		require_once 'inc/base.php';
		require_once 'inc/model.php';
		require_once 'inc/connect.php';

		// fetch slides
		$result = get_atlas_slides((int)$_GET['atlas_list']);
		if ($result) {

			echo json_encode($result);

		} else {
			header('HTTP/1.1 404 Not Found', true, 404);
			echo '{/* atlas not found */}';
		}

	} else {

		header('HTTP/1.1 400 Bad Request', true, 400);
		echo '{/* incorrect parameters */}';

	}
