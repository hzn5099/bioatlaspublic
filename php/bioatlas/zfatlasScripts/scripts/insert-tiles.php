<?php
error_reporting(E_ALL);
ini_set('display_errors', 5);

/*
	(This is intended to be run from the command-line: php -f insert-tiles.php)

	Using stored procedures and file streams, this *should* be a faster implementation than the original.

	It does pause at some points; I'm not sure why.  Possibly the disk being overrun by data and needing to catch up?
		If so, that's a good thing 'cause the old script never did that.
		Scratch that, the original script seems to be doing the same thing today, too.
	Lots faster... for 4GB of tiles 2:46 vs 11:48

	Accounting for multiple identifiers:
	- get the id/identifier relationship(s)
	- if multiple exist, take the one with a zero count for tiles
	- otherwise, skip those tiles (and print a message)

	  In tile reading script, execute a query to identify the id-identifier
	  relationship and maintain a local hash; if multiple identifiers exist,
	  take the one with no tiles; if none match these requirements, skip them.
*/
ini_set('memory_limit', -1);


// connect to database

	$zfatlas = new mysqli('localhost', 'root', 'password', 'bioatlas');

	if ($zfatlas->connect_errno)
		die(sprintf("Error connecting to database: %s\n", $zfatlas->connect_error));

// prepare statements

	$select_id			= $zfatlas->prepare('SELECT slide_id FROM virtualslides WHERE identifier = ?');
	$select_empty_id	= $zfatlas->prepare('SELECT slide_id FROM virtualslides LEFT JOIN virtualslide_tiles USING (slide_id) WHERE identifier = ? GROUP BY slide_id HAVING COUNT(tile_id) = 0');
	$update_ts			= $zfatlas->prepare('UPDATE virtualslides SET last_modified=NOW() WHERE slide_id = ?');
	$insert_tile		= $zfatlas->prepare('INSERT IGNORE INTO virtualslide_tiles VALUES (?,?,?,?)');

// get image filenames

	echo 'Reading tile filenames... ';
	$jpeg_files = glob('/tmp/tiles/*.jpg', GLOB_NOSORT);
	$total = count($jpeg_files);
	$count = 0;
	echo "found $total tiles.\n";

// initialize variables

	$ids = array();
	$id = 0;
	$null = NULL; // placeholder for prepared statement binding; it has to be NULL, but it can't be a literal.

// ----------------------------------------------------------------------------
function getId($identifier) {
// ----------------------------------------------------------------------------

	global $select_id, $select_empty_id, $ids;

	if (!array_key_exists($identifier, $ids)) {

		$select_id->bind_param('s', $identifier);
		$select_id->execute();
		$select_id->store_result();
		$select_id->bind_result($id);
		$select_id->fetch();

		if ($select_id->errno) {
			printf("\n\tError looking up id for '%s': %s\n", $identifier, $select_id->error);
			$id = false;
		} else if ($select_id->num_rows > 1) {
			printf("\n\tMultiple ids for '%s'\n", $identifier);
			// in case we've processed the same slide multiple times (same identifier);
			// this can be a long query, so we only do it if necessary
			$select_empty_id->bind_param('s', $identifier);
			$select_empty_id->execute();
			$select_empty_id->store_result();
			$select_empty_id->bind_result($id);
			$select_empty_id->fetch();
			if ($select_empty_id->errno) {
				printf("\tError looking up id for '%s': %s\n", $identifier, $select_empty_id->error);
				$id = false;
			} else if (!$id) {
				printf("\tNo id found for '%s'\n", $identifier);
				$id = false;
			}
			$select_empty_id->free_result();
		} else if (!$id) {
			printf("\tNo id found for '%s'\n", $identifier);
			$id = false;
		}

		$select_id->free_result();

		$ids[$identifier] = $id;
	}

	return $ids[$identifier];
}


// "main()"
// I haven't used this (disable keys) yet, because I think the ENTIRE index will be rebuilt once it's reenabled.
// There are currently over 30 million rows!
// $zfatlas->query('ALTER TABLE virtualslide_tiles DISABLE KEYS');
echo 'Inserting tiles into database... ';
foreach ($jpeg_files as $file) {

	// Tile image
	if (3 == count(@list($identifier, $z, $i) = explode(',', basename($file, '.jpg')))) {

		$id = getId($identifier);
		if (!$id) continue;

		// Insert tile from image stream
		$image = fopen($file, 'r');
		if (!$image)
			die("Failed to open '$file' for reading\n");
		$insert_tile->bind_param('iiib', $id, $z, $i, $null);
		while (!feof($image))
			$insert_tile->send_long_data(3, fread($image, 16384));
		fclose($image);
		$insert_tile->execute();
		$insert_tile->free_result();


		if ($insert_tile->errno) {

			die(sprintf("Error inserting tile while executing statement: %s\n", $insert_tile->error));

		} elseif ($i == 0 && $z == 0) {

			$update_ts->bind_param('i', $id);
			$update_ts->execute();
			$update_ts->errno and printf("Error updating timestamp: %s\n", $update_ts->error);
			$update_ts->free_result();

		}

	// Preview image
	} elseif (substr($file, -12) == '-preview.jpg') {

		$id = getId(basename($file, '-preview.jpg'));
		if (!$id) continue;

		// rename($file, sprintf('/var/www/zfatlas/current/thumbnails/preview/%010d.jpg', $id));
		copy($file, sprintf('/var/www/zfatlas/current/thumbnails/preview/%010d.jpg', $id));

	}

	// Progress indicator
	if ($count++ % 1000) printf("\rInserting tiles into database... %3.2f%%", 100*$count/$total);
}

// $zfatlas->query('ALTER TABLE virtualslide_tiles ENABLE KEYS');
$select_id->close();
$update_ts->close();
$insert_tile->close();

echo "\nDone.\n";
exit(0);
