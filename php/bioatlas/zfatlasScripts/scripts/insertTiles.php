<?php

ini_set('memory_limit', -1);

require '/var/www/zfatlas/working/inc/connect+.php';

// Get a quick file count

$total = `ls /tmp/tiles | wc -l`;
$count = 0;

foreach (glob('/tmp/tiles/*.jpg',GLOB_NOSORT) as $file) {

	if (3 == count(@list($identifier, $z, $i) = explode(',',basename($file,'.jpg')))) {
		$query = 'INSERT IGNORE INTO virtualslide_tiles SELECT id,%d,%d,"%s" FROM virtualslide WHERE identifier="%s"';
    	zf_mysql_query($query, $z, $i, mysql_real_escape_string(file_get_contents($file)), $identifier);

		if (mysql_errno()) printf("\nMySQL error: %s\nfile: %s\n\n", mysql_error(), $file);
		else if ($i == 0 && $z == 0) {
			$query = 'UPDATE virtualslide SET last_modified=NOW() WHERE identifier="%s"';
			zf_mysql_query($query, $identifier);
		}

	} elseif (preg_match('/^(.+?)-(preview|large).jpg$/',basename($file),$match)) {
		$result = mysql_query("SELECT id FROM virtualslide WHERE identifier='$match[1]'");
		if ($result && mysql_num_rows($result)) $id = mysql_result($result,0);
		else continue;
		rename($file,sprintf('/var/www/zfatlas/working/thumbnails/%s/%010d.jpg',$match[2],$id));
		// echo '.';
	}

	if ($count++ % 1000) printf("Loading... %3.2f%%\r",100*$count/$total);
}

echo "\n";
