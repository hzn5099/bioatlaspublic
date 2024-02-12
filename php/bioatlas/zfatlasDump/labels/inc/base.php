<?php

error_reporting(E_ALL);
set_error_handler('zf_php_error_handler');

$Messages = array(
    'Note'		=> '',
    'Warning'	=> '',
    'Error'		=> '',
    'Debug'		=> ''
);

function HTMLComment($string = '', $fill = '~') {
	printf("<!-- %s %s -->\n", $string, str_repeat($fill, 91 - strlen($string)));
}

function has_content(&$var) {
	return isset($var) && trim($var);
}

// Use with array_walk_recursive() on $_GET/$_POST
function trim_strings(&$var) {
	// magic_quotes has been removed > PHP 5.4.0 (get_magic_quotes_gpc still works but always returns FALSE)
	if (is_string($var))
		$var = trim(get_magic_quotes_gpc() ? $var : stripslashes($var));
}

function echoif(&$iftrue, $iffalse = '') {
	/* Space-saving function to shorten <?php if (isset($var)) echo .... else; ?> statements */
	if (isset($iftrue)) echo $iftrue;
	elseif (isset($iffalse)) echo $iffalse;
	else echo '';
}

function zf_mysql_quote($value, $with_quotes = false) {
	if (get_magic_quotes_gpc())
		$value = stripslashes($value);
	if ($with_quotes)
		return "'" . mysqli_real_escape_string($zfatlas_db, $value) . "'";
	else
		return mysqli_real_escape_string($zfatlas_db, $value);
}

function zf_mysql_include($file) {
/*
	- Read SQL statement from file
	- Strip comments
	- Remove trailing semicolon
	- C-style block comments should be okay, since they contain a terminator.
	- Whitespace should be okay.

	IMPORTANT:  Currently this does NOT protect quoted comment delimiters;
	            strings with "--" or "#" will break this function!
*/
	$sql = '';

	if (!file_exists($file))
		setMessage('SQL include not found:  ' . $file, 'Debug');
	else
		$sql = file_get_contents($file);

	return trim(preg_replace(array(
		'/-- .*$/m',	// Strip MySQL (-- ) comments
		'/#.*$/m',		// Strip hash (#) comments
		'/;\s*$/',		// Remove trailing semicolon
		'/\n\s*$/m'		// Remove blank lines
	),
	'',
	$sql));
}

$zf_mysql_query_count = 0;
$zf_mysql_query_time  = 0;
function zf_mysql_query()
{
    /*
    Takes an SQL query as the first argument.

    If there are multiple arguments, The first argument is SQL query,
    The following arguments are the user inputs to the sql statement.
    This function then creates a prepared statements that will enter
    the user input into the sql statement and run the prepared statement.


    Returns: MySQL result resource if successful AND if there were rows returned;
                 false otherwise.

    Sets a Debug level message listing the line and file called
    from if an error occurs.
    */
    global $zfatlas_db, $zf_mysql_query_count, $zf_mysql_query_time;
    $zf_mysql_query_count++;
    $arguments = func_get_args();
    $final_args = array();
    $bind_str = '';
    $matches = array();
    /*
    The sql query will contain strings like '%s','%d','%1$d','%2$d', this
    substrings are replaced with '?' and replaced with user input when
    the prepared statement runs.
    The following if statement keeps track of which argument goes where
    in the prepared statement.
    */
    if (count($arguments) > 1) {
        $regex = '/%[sd\d]\$[sd]?|%[sd]?/';
        preg_match_all($regex, $arguments[0], $matches);
        $matches = $matches[0];

        $args_count = 1;
        for ($i = 0; $i < count($matches); $i++) {
           $match = $matches[$i];
           if (strlen($match) == 2){
               // plain substitution match
               $final_args[] = $arguments[$args_count];
               $bind_str .= $match[1];
               $args_count++;
            } else {
               // ordered substitution match
               $place = $match[1];
               $final_args[] = $arguments[$place];
               $bind_str .= $match[3];
           }
        }
        $query = preg_replace($regex, '?', $arguments[0]);

    } else {
        $query = $arguments[0];
    }

    $start = microtime(true);
    $stmt = mysqli_stmt_init($zfatlas_db);
    if (mysqli_stmt_prepare($stmt,$query)) {
        mysqli_stmt_bind_param($stmt, $bind_str, ...$final_args);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
    }

    $zf_mysql_query_time += microtime(true) - $start;

    if (mysqli_errno($zfatlas_db)) {
        $backtrace = debug_backtrace();
        setMessage(sprintf('<b>MySQL Error<br />%s, line %d</b><br /><i>%s</i><br /><br />%s', $backtrace[0]['file'], $backtrace[0]['line'], mysqli_error($zfatlas_db), $query), 'Debug');
    } else {
        setMessage($query, 'Debug');
    }

    if (is_bool($result)) {
        return $result;
    } else {
        return mysqli_num_rows($result) ? $result : false;
    }
}

function zf_mysql_fetch_all($result, $key_by = null, $result_type = MYSQL_ASSOC)
{
    /*
    zf_mysql_fetch_all($result, $key_by, $result_type)

    $result is a MySQL result resource
    $key_by is an optional column name (or number) by which to key results
    $result_type is the result type, MYSQL_ASSOC (default) or MYSQL_NUM
    */
    $rows = array();
    if ($result) {
        if (mysqli_num_fields($result) == 1) {
            while ($row = mysqli_fetch_row($result)) {
                $rows[] = $row[0];
            }
        } else if ($key_by) {
            while ($row = mysqli_fetch_array($result, $result_type)) {
                $rows[$row[$key_by]] = $row;
            }
        } else {
            while ($row = mysqli_fetch_array($result, $result_type)) {
                $rows[] = $row;
            }
        }
            mysqli_free_result($result);
    }

    return $rows;
}

// Some useful functions for verifying SQL values
function is_between(&$val, $min, $max, $inclusive = true) {
	return $inclusive
		? $val >= $min && $val <= $max
		: $val >  $min && $val <  $max;
}
function is_posint(&$val) {
	return is_int($val) && $val > 0;
}
/*
	Type	Storage	Minimum Value			Maximum Value
			(Bytes)	(Signed/Unsigned)		(Signed/Unsigned)
	TINYINT		1	-128/0					127/255
	SMALLINT	2	-32768/0				32767/65535
	MEDIUMINT	3	-8388608/0				8388607/16777215
	INTEGER		4	-2147483648/0			2147483647/4294967295
	BIGINT		8	-9223372036854775808/0	9223372036854775807/18446744073709551615
*/
function is_sql_tinyint(&$val, $unsigned = false) {
	return is_int($val) && $unsigned
		? is_between($val, 0, 255)
		: is_between($val, -128, 127);
}

function is_sql_smallint(&$val, $unsigned = false) {
	return is_int($val) && $unsigned
		? is_between($val, 0, 65535)
		: is_between($val, -32768, 32767);
}

function is_sql_mediumint(&$val, $unsigned = false) {
	return is_int($val) && $unsigned
		? is_between($val, 0, 16777215)
		: is_between($val, -8388608, 8388607);
}

function is_sql_int(&$val, $unsigned = false) {
	return is_int($val) && $unsigned
		? is_between($val, 0, 4294967295)
		: is_between($val, -2147483648, 2147483647);
}

function is_sql_bigint(&$val, $unsigned = false) {
	return is_int($val) && $unsigned
		? is_between($val, 0, 18446744073709551615)
		: is_between($val, -9223372036854775808, 9223372036854775807);
}
/*
	CHAR(M)						M x w bytes, 0 <= M <= 255, where w is the number of bytes required for the maximum-length character in the character set
	BINARY(M)					M bytes, 0 <= M <= 255
	VARCHAR(M), VARBINARY(M)	L + 1 bytes if column values require 0-255 bytes, L + 2 bytes if values may require more than 255 bytes
	TINYBLOB, TINYTEXT			L + 1 bytes, where L < 2^8
	BLOB, TEXT					L + 2 bytes, where L < 2^16
	MEDIUMBLOB, MEDIUMTEXT		L + 3 bytes, where L < 2^24
	LONGBLOB, LONGTEXT			L + 4 bytes, where L < 2^32
*/
function is_sql_char(&$val, $length = 1) {
	return is_string($val) && strlen($val) <= $length;
}
function is_sql_tinytext(&$val) {
	return is_string($val) && strlen($val) < pow(2,8)  - 1;
}
function is_sql_text(&$val) {
	return is_string($val) && strlen($val) < pow(2,16) - 2;
}
function is_sql_mediumtext(&$val) {
	return is_string($val) && strlen($val) < pow(2,24) - 3;
}
function is_sql_longtext(&$val) {
	return is_string($val) && strlen($val) < pow(2,32) - 4;
}

function zf_mysql_value(&$val) {
	if (is_null($val))
		return 'NULL';
	if (is_string($val))
		return '"' . mysqli_real_escape_string($zfatlas_db, $val) . '"';
	// if (is_boolean($val)) return $val ? 1 : 0;
	return $val;
}

function zf_php_error_handler($errno, $errstr, $errfile, $errline) {

	// if this error code is not in error_reporting
	if (!(error_reporting() & $errno))
		return;

	switch ($errno) {
		case E_WARNING:
			setMessage(sprintf('<b>PHP warning (%s, line %d):</b> %s', $errfile, $errline, $errstr), 'Warning'); break;
		case E_NOTICE:
			setMessage(sprintf('<b>PHP notice (%s, line %d):</b> %s', $errfile, $errline, $errstr), 'Warning'); break;
		default: return false;
	}
	return true;
}

function setMessage($message, $type = 'Note') {
	// Sets a string in the $Messages array.  Currently $type is either 'Note', 'Warning', 'Error', or 'Debug'.
	global $Messages;
	if (!array_key_exists($type, $Messages)) $type = 'Note';
	$Messages[$type] .= "<p>$message</p>";
}

function writeMessages() {
	// Outputs the messages in $Messages.
	// Accepts an optional list of message classes to output; outputs all by default.
	// I.e., writeMessages("Note", "Error");

	global $Messages;
	$args = func_get_args();
	$m = count($args)
		// ? array_intersect_key($Messages, array_combine($args, array_fill(0, count($args), null))) // PHP < 5.2.0
		? array_intersect_key($Messages, array_fill_keys($args, null)) // PHP >= 5.2.0
		: $Messages;

	foreach ($m as $key => $value) if ($value) printf('<div class="message %1$s"><div class="title">%1$s</div>%2$s</div>', $key, $value);
}

function hpfToString($hpf) {
	if ($hpf <= 72)				// 0-72 hours "hpf"
		return "$hpf hpf";
	elseif ($hpf <= 90*24)		// 3-90 days  "dpf"
		return round($hpf/24, 1) . ' dpf';
	elseif ($hpf <= 3*365*24)	// 3 months+  "mpf"
		return round($hpf/(365*24/12), 1) . ' mpf';
	else						// 3 years+   "yrs"
		return round($hpf/(365*24), 1) . ' yrs';
}

function hoursToAge($hours, $force_unit = null, $round = 0) {
// $force_unit must match a key in the $units array; be sure it doesn't end with an "s"
// $round is used in the round() function to specify number of decimals to round to
	/*

	1 year 12 months -> 2 years
	1 year 11 months -> 2 years
	1 year  1 month  -> 1 year
	1 year  2 months -> 1 year 2 months


	11 months			-> 11 months
	1 year 11 months	-> 2 years


	8760	Year defined as 365 days
	8766	Year defined as 365.25 days

	730.5	Month defined as 30.4375 days
	720		Month defined as 30 days


	Finding the Age

	Step #1) Find a unit larger than the number of hours
	Step #2) Get the number of those units evenly divisible into hours
	Step #3) Ask if the remainder is larger than one of the next unit (if so, discard remainder)
	Step #4) Ask if the remainder is less than one of the current unit minus one of the next unit (if so round up current unit)
	Step #5) Get number of next unit and return

	*/

	// Note: Hour multiples need to be integers because we use modulo artithmetic.
	// "Operands of modulus are converted to integers (by stripping the decimal part) before processing"
	// -- http://www.php.net/manual/en/language.operators.arithmetic.php

	$units = array( // it's important that $units is ordered largest to smallest
		'year'	=> 24*365.25, // 8766
		'month'	=> 730,  // 30.4375 730.5 -> 730 (round to integer for modulo arithemtic)
		'week'	=> 24*7,
		'day'	=> 24,
		'hour'	=> 1
	);

	// Create copy with numeric indicies
	$unit_values = array_values($units);

	// Return value in forced units if specified
	if ($force_unit && $units[$force_unit])
		return correct_number(round($hours/$units[$force_unit], $round), $force_unit, true);

	#1. Find a unit larger than number of hours
	for ($i = 0; $i < count($units) - 1; $i++)
		if ($hours >= $unit_values[$i]) break;

	if ($i == count($units) - 1) // if we're at hours, return without further ado
		return correct_number(round($hours, $round), array_search($unit_values[$i], $units), true);

	#2. Get evenly divisible units
	$quotient  = floor($hours/$unit_values[$i]);
	$remainder = $hours % $unit_values[$i];

	#3. Ask if the remainder is less than one of the current unit minus one of the next unit (if so round up current unit)

	if ($remainder > $unit_values[$i] - $unit_values[$i + 1])
		return correct_number($quotient + 1, array_search($unit_values[$i], $units), true);

	#4. Ask if the remainder is larger than one of the next unit (if so, discard remainder)

	if ($remainder < $unit_values[$i + 1])
		return correct_number($quotient, array_search($unit_values[$i], $units), true);

	#5. Get number of next unit and return

	return sprintf('%s %s',
		correct_number($quotient, array_search($unit_values[$i], $units), true),
		correct_number(round($remainder/$unit_values[$i + 1], $round), array_search($unit_values[$i + 1], $units), true)
	);

}

// Not the resource I originally used but interesting:
// http://www.csse.monash.edu.au/~damian/papers/HTML/Plurals.html

function correct_number($num, $unit, $s_only = false) {
	// Currently this function assumes lowercase words
	// Certain regular expressions/substitutions could be changed to faster string functions.

	$exceptions_oes = array('studio', 'piano', 'kangaroo', 'zoo', 'buffalo', 'cargo', 'motto');

	// return "$num $unit" . ($num == 1 ? '' : 's');

	if ($unit == '')
		return '';

	elseif ($num == 1) // often considered <= 1; also consider negative values i.e., abs($num) <= 1
		return "1 $unit";

	elseif ($s_only)
		return "$num ${unit}s";

	// If a noun ends in a consonant plus the letter "y", change the "y" to "i" and add -es.
	// /[^aeiou]y$/
	elseif (preg_match('/[^aeiou]y$/', $unit))
		return "$num " . preg_replace('/y$/', 'ies', $unit);

	// When a noun ends in -f or -fe, you change the "f" to "v" and add -es.
	// /fe?$/
	elseif (preg_match('/fe?$/', $unit))
		return "$num " . preg_replace('/fe?$/', 'ves', $unit);

	// Sometimes a singular noun ends in -um or -on. To make it a plural, change the -um to an -a.
	// /um$/
	elseif (preg_match('/um$/', $unit))
		return "$num " . preg_replace('/um$/', 'a', $unit);

	// How about nouns that end in -ex or -ix? To make them plural, change that ending to -ices.
	// /[ei]x$/
	elseif (preg_match('/[ei]x$/', $unit))
		return "$num " . preg_replace('/[ei]x$/', 'ices', $unit);

	// Nouns that end in -us become plurals by changing the ending to -i.
	// /us$/
	// (This rule needs to precede the generic -s rule.)
	elseif (preg_match('/us$/', $unit))
		return "$num " . preg_replace('/us$/', 'i', $unit);

	// 	If a word ended in -s, -z, -x, -sh, or -ch, add -es to the end.
	// When a noun ends in -o, you also have to add -es (there are exceptions).
	// Exceptions to the rule: studio, piano, kangaroo, zoo, buffalo, cargo, motto, . Just add -s to these words.
	// /(?:[cs]h|[osxz])$/
	elseif (preg_match('/(?:[cs]h|[osxz])$/', $unit) && !in_array($unit, $exceptions_oes))
		return "$num ${unit}es";

	else
		return "$num ${unit}s";

	// Exceptions to pluralization can be kept in an array and checked beforehand
	// octopus -> octopodes is correct, not octopi
	// Oddball plural : one die, two or more dice. One mouse, two mice. One goose, two geese.
	// One tableau, two tableaux. BUT -- One moose, two moose. One deer, two deer.

/*
You already know how to make most nouns into plurals just by adding an -s at the end of the word.
There are plenty of words that do not follow the rule, however.
Here is an easy case to remember: If a word ended in -s, -z, -x, -sh, or -ch, add -es to the end.

Examples: dress - dresses; fizz - fizzes; fox - foxes; wish - wishes; watch - watches.
When a noun ends in -o, you also have to add -es.
Examples: hero - heroes; tomato - tomatoes
Exceptions to the rule: studio, piano, kangaroo, zoo, buffalo, cargo, motto, . Just add -s to these words.

If a noun ends in a consonant plus the letter "y", change the "y" to "i" and add -es.
Examples: city - cities; country - countries
When a noun ends in -f or -fe, you change the "f" to "v" and add -es.
Examples: knife - knives; half - halves; scarf - scarves
Here is one that always gave me trouble. I hope this makes it easier for you!
Sometimes a singular noun ends in -um or -on. To make it a plural, change the -um to an -a.
Examples: curriculum - curricula; phenomenon - phenomena


How about nouns that end in -ex or -ix? To make them plural, change that ending to -ices.
Examples: vertex - vertices; index - indices
Nouns that end in -us become plurals by changing the ending to -i.
Example: stimulus - stimuli
Some nouns are always plural, but do not end in "s".
Examples: cattle, police, people.
*/
}

function highest_order_bit ($z) {
	return 1 << floor(log($z)/log(2));
}

function rgb2hsl() {
	// rgb2hsl(): Converts RGB to hue-saturation-lightness model
	// (cf. http://en.wikipedia.org/wiki/HSL_and_HSV)
	// This function can take either an array or three separate values

	$arguments = func_get_args();
	list($r, $g, $b) = is_array($arguments[0])
		? array_values($arguments[0])
		: array_values($arguments);


	// Calculate some more values

	$M = max($r, $g, $b);
	$m = min($r, $g, $b);
	$C = $M - $m;

	// Calculate lightness ($L) and saturation ($S)

	$L = 0.5 * ($M + $m);
	$S = $C == 0
		? 0						// for $C equal to zero
		: ($L > 0.5
			? 0.5 * $C/(1 - $L)	// for $C greater than 1/2
			: 0.5 * $C/$L);		// for $C lte 1/2
	// ...and hue ($H).
	if ($C == 0) $H = null;
	else switch($M) {
		case $r: $H = ($g - $b)/$C % 6; break;
		case $g: $H = ($b - $r) + 2;    break;
		case $b: $H = ($r - $g) + 4;    break;
	}
	$H *= 60;
	return array( $H, $S, $L);
}

function hsl2rgb() {
	// hsl2rgb(): Inverse of rgb2hsl()

	$arguments = func_get_args();
	list($H, $S, $L) = is_array($arguments[0])
		? array_values($arguments[0])
		: array_values($arguments);

	if (is_null($H)) return array(0, 0, 0);

	$r = $g = $b = 0;
	$C = $L > 0.5
		? 2 * (1 - $L) * $S
		: 2 * $L * $S;
	$h = $H/60;
	$X = $C * (1 - abs($h%2 - 1));
	$m = $L - $C/2;

	switch(floor($h)) {
		case 0: $r = $C; $g = $X;          break;
		case 1: $r = $X; $g = $C;          break;
		case 2:          $g = $C; $b = $X; break;
		case 3:          $g = $X; $b = $C; break;
		case 4: $r = $X;          $b = $C; break;
		case 5: $r = $C;          $b = $X; break;
		case null: break;
	}

	$r += $m;
	$g += $m;
	$b += $m;

	return array($r, $g, $b);
}


function zf_guess_bgcolor($slide_id) {
	// until databases are remerged
	// return 0xffffff;

	/*
		Find background color by top left pixel of first tile
		This is mainly for setting a white background for histology slides and a black one for micro CT
	*/
	$n = 3; // Sample square size ( $n x $n )
	$colors = array('r' => 0, 'g' => 0, 'b' => 0);
	$result_BG = zf_mysql_query('SELECT SQL_NO_CACHE image FROM virtualslide_tiles WHERE level=0 AND tile_id=0 AND slide_id=%d', $slide_id);
	if ($result_BG && mysqli_num_rows($result_BG)) {
		$row = mysqli_fetch_row($result_BG);
		$tile = imagecreatefromstring($row[0]);
		// (Should check for FALSE value here)

		foreach(range(0, $n - 1) as $row) {
			foreach (range(0, $n - 1) as $col) {
				$rgb = imagecolorat($tile, 0, 0);
				$colors['r'] += (($rgb >> 16) % 256);
				$colors['g'] += (($rgb >>  8) % 256);
				$colors['b'] += (($rgb      ) % 256);
			}
		}
		$colors['r'] /= (255 * pow($n,2));
		$colors['g'] /= (255 * pow($n,2));
		$colors['b'] /= (255 * pow($n,2));

		// Get HSL values and constrain them to predefined values
		$hsl = rgb2hsl($colors);
		$hsl[1] = min($hsl[1], 0.25);
		$hsl[2] = $hsl[2] < 0.25
			? 0
			: max($hsl[2], 0.85);

		$rgb = hsl2rgb($hsl);

		return ($rgb[0]*255 << 16) + ($rgb[1]*255 << 8) + $rgb[2]*255;
	} else {
		return 0;
	}
}

function slide_description_to_HTML($description) {
	return preg_replace(
		array(
			'/^(.+?)(?=:)/m',		// Embolden first part of line if there's a colon  (i.e., "BOLD: regular...")
			'/<br[\/ ]*?>/',		// Simplify <br>'s
			'/<br>\n/',				// Replace <br>\n with just <br>
			'/(?:\s|<br>)+$/',		// Remove trailing whitespace, inc. <br>
			'/(?:\n|<br>){2,}/',	// Replace combinations of two or more <br> and \n with a single <hr>
			'/\n|<br>/'				// Replace remaining instances of \n with single <br>
		),
		array(
			'<b>$1</b>',
			'<br>',
			'<br>',
			'',
			'<hr>',
			'<br>'
		), $description
	);
}

