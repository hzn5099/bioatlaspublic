<?php
/*
	- echo queries and results to stdout
	- save image to filesystem
	- collect benchmarks

	- test with error conditions
*/

error_reporting(E_ALL);

define('THUMBNAIL_WIDTH', 240);
define('THUMBNAIL_HEIGHT', 160);
define('THUMBNAIL_CACHE_PATH', 'thumbnails/cache/labels');
define('DEBUGGING', false);

$sql = array();
// --------------------------------------------------------------------
// SQL:  retrieve info for rendering label preview:  slide_id, lowest
//       z-level label appears on, and the x/y coords relative to that level
// --------------------------------------------------------------------
$sql['select_label_coords_by_id'] = <<<'SQL_0'
SELECT
	slide_id,
	ROUND(labels.x * target.width/original.width) AS x,
	ROUND(labels.y * target.height/original.height) AS y,
	z
FROM
	virtualslide_levels AS target
	JOIN virtualslide_levels AS original USING (slide_id)
	JOIN (
		SELECT
			label.slide_id AS slide_id,
			FLOOR(LOG2(BIT_OR(similar.z))) AS z,
			x,
			y
		FROM
			virtualslide_labels AS label
			JOIN virtualslide_labels AS similar USING (term_id, x, y)
		WHERE
			label.label_id = %d
		GROUP BY
		term_id, x, y
	) AS labels USING (slide_id)
WHERE
	original.level = 0 AND
	target.level = labels.z
SQL_0;

// testing; once solid, move to base.php
// also, collect benchmarks on how long it takes to generate a file (and maybe even how fast it is to cache)
// and test mysql_unbuffered_query() vs mysql_query()
// --------------------------------------------------------------------------
function extract_region_from_virtualslide($slide_id, $level, $origin_x, $origin_y, $width, $height) {
// --------------------------------------------------------------------------
	global $zfatlas_db;
	$start = microtime(true);
	$max_width  = 400; //maybe a constant instead?
	$max_height = 300;

	// Get image and tile dimensions as well as bgcolor, if possible
	$query = sprintf('SELECT width AS full_width, height AS full_height, tile_width, tile_height, bgcolor FROM virtualslide_levels JOIN virtualslides USING (slide_id) WHERE slide_id=%d AND level=%d',
		$slide_id,
		$level
	);
	if (DEBUGGING) echo "Query:  $query\n";
	$result = mysqli_query($zfatlas_db, $query);
	if (!$result) {
		if (DEBUGGING) printf("(extract) Failed to find slide!  (%s)\n", mysqli_error($zfatlas_db));
		return false;
	}

	if ($result)
		extract(mysqli_fetch_assoc($result));
	else
		return false;

	// --------------------------------------------------------------------------
	// Calculate some values
	// --------------------------------------------------------------------------
	// Make sure these are limited to the image boundaries (hence max/min)
	// (these also need to be bound to miniumum values as well as max; at least not smaller than 0 or 1)
	$width		= min($width,  $full_width  - $origin_x);
	$height		= min($height, $full_height - $origin_y);
	$bgcolor	= is_null($bgcolor) ? 0xffffff : $bgcolor;

	$number_of_columns	= ceil($full_width/$tile_width);
	$first_column		= floor($origin_x/$tile_width);
	$last_column		= floor(($origin_x + $width)/$tile_width);
	$first_row			= floor($origin_y/$tile_height);
	$last_row			= floor(($origin_y + $width)/$tile_height);
	$first_tile			= $first_column + $number_of_columns * $first_row;
	$last_tile			= $last_column + $number_of_columns * $last_row;

	if (DEBUGGING) {
		printf("Image properties\n");
		printf("--------------------------------------------------------------------------\n");
		printf("width: %d; height: %d\n", $width, $height);
		printf("columns: %d (%d - %d)\n", $number_of_columns, $first_column, $last_column);
		printf("rows: %d - %d\n", $first_row, $last_row);
		printf("tiles: %d - %d\n", $first_tile, $last_tile);
	}
	/*
		SQL query can be just five extra numbers:
		...WHERE slide_id = (id) AND level = (level) AND tile_id BETWEEN (first tile) AND (last tile) AND tile_id % (cols) BETWEEN (first col) AND (last col);
	*/
	// --------------------------------------------------------------------------
	// Query necessary images from virtualslide_tiles
	// --------------------------------------------------------------------------
	$query = sprintf('SELECT SQL_NO_CACHE tile_id, image FROM virtualslide_tiles WHERE (slide_id=%d AND level=%d) AND (tile_id BETWEEN %d AND %d) AND (tile_id %% %d BETWEEN %d AND %d)',
	// $result = zf_mysql_query('SELECT tile_id, image FROM virtualslide_tiles WHERE (slide_id=%d AND level=%d) AND (tile_id BETWEEN %d AND %d) AND (tile_id %% %d BETWEEN %d AND %d)',
	// $result = mysql_unbuffered_query(sprintf('SELECT tile_id, image FROM virtualslide_tiles WHERE (slide_id=%d AND level=%d) AND (tile_id BETWEEN %d AND %d) AND (tile_id %% %d BETWEEN %d AND %d)',
		$slide_id,
		$level,
		$first_tile,
		$last_tile,
		$number_of_columns,
		$first_column,
		$last_column
	);
	if (DEBUGGING) echo "Query:  $query\n";
	$result = mysqli_query($zfatlas_db, $query);
	if (!$result) {
		if (DEBUGGING) printf("(extract) Failed to find tiles!  (%s)\n", mysqli_error($zfatlas_db));
		return false;
	}

	// --------------------------------------------------------------------------
	// Create and assemble composite image from tiles
	// --------------------------------------------------------------------------
	/*
		index = row * numberOfCols + col
		row = Math.floor(index / numberOfCols)
		col = index % numberOfCols

		bool imagecopy ( resource $dst_im , resource $src_im , int $dst_x , int $dst_y , int $src_x , int $src_y , int $src_w , int $src_h )

		offset_x(tile_id) = tile_width * number_of_columns % tile_id
		offset_y(tile_id) = tile_height * floor(tile_id/number_of_columns)
	*/
	if ($result !== false) {
		$image = imagecreatetruecolor($width, $height);
		imagefill($image, 0, 0, $bgcolor);
		while ($row = mysqli_fetch_assoc($result)) {
			$tile = imagecreatefromstring($row['image']);
			imagecopy(
				// destination
				$image,
				// source
				$tile,
				// destination (x,y)
				$row['tile_id'] % $number_of_columns * $tile_width - $origin_x,
				floor($row['tile_id'] / $number_of_columns) * $tile_height - $origin_y,
				// source (x,y)
				0, 0,
				// source (w,h)
				$tile_width, $tile_height
			);
			// free memory associated with image
			imagedestroy($tile);
		}
		// collect benchmarks
		file_put_contents(
			'/tmp/extract-image-benchmarks.txt',
			sprintf("%d\t%f\t%d\t%d\t%d\t%d\t%d\t%d\n", memory_get_peak_usage(), microtime(true) - $start, $slide_id, $level, $origin_x, $origin_y, $width, $height),
			FILE_APPEND
		);
		return $image;

	} else {
		return false;
	}
}


// main():
if (array_key_exists('id', $_GET) && ctype_digit($_GET['id'])) {

	require_once('inc/base.php');
	require_once('inc/connect.php');

	// We'll store it by location (z-x-y) in case term_id/definition_id changes
	// Get slide_id, lowest level, and label coords
	$query = sprintf($sql['select_label_coords_by_id'], $_GET['id']);
	if (DEBUGGING) echo "$query\n";

	$result = mysqli_query($zfatlas_db, $query);

	if ($result && ($row = mysqli_fetch_assoc($result))) {
		if (DEBUGGING) echo "Query OK.  Results: ", print_r($row, true), "\n";
		// check cache first

		// test/create directory
		$cache_path = sprintf('%s/%010d', THUMBNAIL_CACHE_PATH, $row['slide_id']);
		if (!file_exists($cache_path) && !mkdir($cache_path, 0775, true)) {
			if (DEBUGGING) echo "$cache_slide_dir doesn't exist and failed to create it\n";
			exit(1);
		}

		// generate thumbnail filename and check for it
		$cache_filename = sprintf('%s/%010d/%03d%+011d%+011d.jpg',
			THUMBNAIL_CACHE_PATH,
			$row['slide_id'],
			$row['z'],
			$row['x'],
			$row['y']
		);

		if (DEBUGGING) printf("Filename: %s\n", $cache_filename);

		if (!file_exists($cache_filename)) {
			if (DEBUGGING) echo "File not found; generating...\n";

			// if not found, generate image
			$image = extract_region_from_virtualslide(
				$row['slide_id'],
				$row['z'],
				$row['x'] - floor(THUMBNAIL_WIDTH/2),
				$row['y'] - floor(THUMBNAIL_HEIGHT/2),
				THUMBNAIL_WIDTH,
				THUMBNAIL_HEIGHT);

			if ($image) {
				header('Content-type: image/jpeg');
				if (!DEBUGGING) // skip this step if debugging
					imagejpeg($image);
				if (!imagejpeg($image, $cache_filename) && DEBUGGING)
					echo "Failed to create file!\n";
				exit(0);
			} else {
				header('HTTP/1.1 503 Service Unavailable', true, 503);
				if (DEBUGGING)
					echo "No image\n";
				exit(1);
			}
		} else {
			if (DEBUGGING) echo "File exists.\n";
			// output image
			header('Content-type: image/jpeg');
			if (!DEBUGGING)
				readfile($cache_filename);
		}
	} else if (DEBUGGING) {
		printf("MySQL error: %s\n", mysqli_error($zfatlas_db));
	}
} else {
	header('HTTP/1.1 400 Bad Request', true, 400);
}

exit(0);
