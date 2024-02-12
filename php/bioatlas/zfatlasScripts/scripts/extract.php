<?php

/*
	if I added an option to output the width (or columns even) on stdout, I could use this value in montage to
		reconstruct the image with a script.  Use exit code to indicate success/error.
*/

if ($argc < 3)
	exit("Syntax: $argv[0] <slide_id> <level>\n");

if (!ctype_digit($argv[1]) || !ctype_digit($argv[2]))
	exit("slide_id and level need to be positive integers.\n");

ini_set('memory_limit', -1);

require '/var/www/zfatlas/zfatlas/inc/connect+.php';

$identifier = mysql_result(zf_mysql_query('SELECT identifier FROM virtualslides WHERE slide_id=%d', $argv[1]), 0);

$result = zf_mysql_query('SELECT * FROM virtualslide_tiles WHERE slide_id=%d AND level=%d',
	$argv[1],
	$argv[2]
);

if ($result) {
	$n = mysql_num_rows($result);
	if ($n) while ($row = mysql_fetch_row($result)) {
		file_put_contents(sprintf('%05d,%d,%06d.jpg',
			$row[0], // slide_id
			$row[1], // level
			$row[2]  // tile_id
		), $row[3]);
	} else {
		exit("No results.");
	}
} else {
	exit(sprintf("MySQL Error: %s\n", mysql_error()));
}
