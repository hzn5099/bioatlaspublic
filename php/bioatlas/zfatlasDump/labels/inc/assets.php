<?php
/*
 * assets.php
 *
 * This is to avoid client-side caching behavior on updated assets (CSS and
 * JavaScript files especially).  It is designed to be updated with something
 * like a date/timestamp or Git commit hash using a post-receive hook, e.g.,
 * "vs.js?20130304" or "zfatlas.css?d4e0725".
 *
*/

$asset_versions = array(
	'zfatlas.css'		=> '',
	'viewer.css'		=> '',
	'reference.css'		=> '',

	'vs.js'				=> '',
	'vs-with-slider.js'	=> '',
);

