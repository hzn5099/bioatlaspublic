<?php

error_reporting(E_ALL);

// sleep(2);

if (isset($_GET['s']) && ctype_digit($_GET['s'])) {

	require_once 'inc/base.php';
	require_once 'inc/model.php';
	require_once 'inc/connect.php';

	/*
		Get virtualslide metadata
	*/
	// Forever:
	// header('Expires: ' . date(DATE_RFC1123, 0x7fffffff));
	// For one week:
	/*
	header('Expires: ' . date(DATE_RFC1123, time() + 7*24*3600));
	header('Last-Modified: ' . date(DATE_RFC1123, $row['last_modified']));
	header('Cache-Control: public');
	*/

	$virtualslides = get_virtualslides_by_id(array($_GET['s']));
	if (count($virtualslides))
		echo json_encode($virtualslides[0], JSON_NUMERIC_CHECK | JSON_UNESCAPED_SLASHES);
	else
		echo '{id:0,title:"Slide not found",description:"Slide not found in database",levels:[[1,1,1,1]]}';

} else {
	echo '{id:0,title:"Slide not found",description:"No slide id",levels:[[1,1,1,1]]}';
}
