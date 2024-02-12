<?php

define('DEBUGGING', false);

// slide-fetching mode:
if (isset($_GET, $_GET['s']) && ctype_digit($_GET['s'])) {

	include 'inc/base.php';
	include 'inc/connect.php';
	include 'inc/model.php';

	// fetch slide and output
	echo json_encode(get_anatomical_reference_slide($_GET['s']), JSON_NUMERIC_CHECK | JSON_UNESCAPED_SLASHES);

// normal page rendering mode:
} else {

	include 'inc/twig.php';

	$scripts = array();

	if (DEBUGGING)
		array_push($scripts,
			'vs/base.js',
			'vs/property-map.js',
			'vs/core/keys.js',
			'vs/core/slide.js',
			'vs/core/viewer.js',
			'vs/core/viewerwidget.js',
			'vs/core/viewerlink.js',
			'vs/widget/hyperlink.js',
			'vs/widget/scalebar.js',
			'vs/widget/zoom.js',
			'vs/widget/slidelabel.js',
			'vs/local.js',
			'vs/widget/zf-slidelabel.js',
			'vs/ui/zf-keys.js',
			'vs/app/zf-reference.js'
		);
	else
		$scripts[] = 'vs.js';

	// Render view
	echo $twig->render('reference.twig.html', array(
		'page'	=> array(
			'title'		=> 'Anatomy Reference',
			'debug'		=> DEBUGGING,
			'styles'	=> array(
				'viewer.css',
				'reference.css'
			),
			'scripts'	=> $scripts,
		)
	));

}

