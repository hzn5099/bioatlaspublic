<?php

	require_once('inc/twig.php');

	echo $twig->render('compare.twig.html' , array(
		'page'		=> array(
			'debug'	=> isset($_GET['dev'])
		)
	));

