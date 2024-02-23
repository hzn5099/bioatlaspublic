<?php

require 'lib/Twig/Autoloader.php';
include 'assets.php';

Twig_Autoloader::register();

// this would be faster in reverse, but I'm not sure that's possible.
function twig_filter_unpluralize($units, $num, $word_only = false) {

	$exceptions_oes = array('studio', 'piano', 'kangaroo', 'zoo', 'buffalo', 'cargo', 'motto');

	if ($units == '')
		return '';

	elseif ($num != 1) // often considered <= 1; also consider negative values i.e., abs($num) <= 1
		return "$num $units";

	// If a noun ends in a consonant plus the letter "y", change the "y" to "i" and add -es.
	// /[^aeiou]y$/
	elseif (preg_match('/[^aeiou]ies$/', $units))
		return "$num " . substr_replace($units, 'y', -3);

	// When a noun ends in -f or -fe, you change the "f" to "v" and add -es.
	// /fe?$/
	elseif (preg_match('/fe?$/', $units))
		return "$num " . preg_replace('/fe?$/', 'ves', $units);
	elseif (preg_match('/ves$/', $units))
		return "$num " . preg_replace('/v(e?)es$/', 'ves', $units);

	// Sometimes a singular noun ends in -um or -on. To make it a plural, change the -um to an -a.
	// /um$/
	elseif (preg_match('/um$/', $units))
		return "$num " . preg_replace('/um$/', 'a', $units);

	// How about nouns that end in -ex or -ix? To make them plural, change that ending to -ices.
	// /[ei]x$/
	elseif (preg_match('/[ei]x$/', $units))
		return "$num " . preg_replace('/[ei]x$/', 'ices', $units);

	// Nouns that end in -us become plurals by changing the ending to -i.
	// /us$/
	// (This rule needs to precede the generic -s rule.)
	elseif (preg_match('/us$/', $units))
		return "$num " . preg_replace('/us$/', 'i', $units);

	// 	If a word ended in -s, -z, -x, -sh, or -ch, add -es to the end.
	// When a noun ends in -o, you also have to add -es (there are exceptions).
	// Exceptions to the rule: studio, piano, kangaroo, zoo, buffalo, cargo, motto, . Just add -s to these words.
	// /(?:[cs]h|[osxz])$/
	elseif (preg_match('/(?:[cs]h|[osxz])$/', $units) && !in_array($units, $exceptions_oes))
		return "$num ${units}es";

	else
		return "$num ${units}s";

	// Exceptions to pluralization can be kept in an array and checked beforehand
	// octopus -> octopodes is correct, not octopi
	// Oddball plural : one die, two or more dice. One mouse, two mice. One goose, two geese.
	// One tableau, two tableaux. BUT -- One moose, two moose. One deer, two deer.

}
function twig_filter_pluralize($unit, $num, $word_only = false) {

	$exceptions_oes = array('studio', 'piano', 'kangaroo', 'zoo', 'buffalo', 'cargo', 'motto');

	$prefix = $word_only ? '' : "$num ";

	if ($unit == '')
		return '';

	elseif ($num == 1) // often considered <= 1; also consider negative values i.e., abs($num) <= 1
		return $prefix . $unit;

	// If a noun ends in a consonant plus the letter "y", change the "y" to "i" and add -es.
	// /[^aeiou]y$/
	elseif (preg_match('/[^aeiou]y$/', $unit))
		return $prefix . substr_replace($unit, 'ies', -1);


	// When a noun ends in -f or -fe, you change the "f" to "v" and add -es.
	// /fe?$/
	elseif (preg_match('/fe?$/', $unit))
		return $prefix . preg_replace('/fe?$/', 'ves', $unit);

	// Sometimes a singular noun ends in -um or -on. To make it a plural, change the -um to an -a.
	// /um$/
	elseif (preg_match('/um$/', $unit))
		return $prefix . substr_replace($unit, 'a', -2);

	// How about nouns that end in -ex or -ix? To make them plural, change that ending to -ices.
	// /[ei]x$/
	elseif (preg_match('/[ei]x$/', $unit))
		return $prefix . preg_replace('/[ei]x$/', 'ices', $unit);

	// Nouns that end in -us become plurals by changing the ending to -i.
	// /us$/
	// (This rule needs to precede the generic -s rule.)
	elseif (preg_match('/us$/', $unit))
		return $prefix . substr_replace($unit, 'i', -2);

	// 	If a word ended in -s, -z, -x, -sh, or -ch, add -es to the end.
	// When a noun ends in -o, you also have to add -es (there are exceptions).
	// Exceptions to the rule: studio, piano, kangaroo, zoo, buffalo, cargo, motto, . Just add -s to these words.
	// /(?:[cs]h|[osxz])$/
	elseif (preg_match('/(?:[cs]h|[osxz])$/', $unit) && !in_array($unit, $exceptions_oes))
		return "$prefix${unit}es";

	else
		return "$prefix${unit}s";

	// Exceptions to pluralization can be kept in an array and checked beforehand
	// octopus -> octopodes is correct, not octopi
	// Oddball plural : one die, two or more dice. One mouse, two mice. One goose, two geese.
	// One tableau, two tableaux. BUT -- One moose, two moose. One deer, two deer.

}
function twig_filter_http_build_query($arr) {
	return http_build_query($arr);
}

// this is the same as the default, except with strict in_array comparison
function twig_in_filter_strict($value, $compare) {
    if (is_array($compare)) {
        return in_array($value, $compare, true);

    } elseif (is_string($compare)) {
        if (!strlen((string) $value)) {
            return empty($compare);
        } else
			return false !== strpos($compare, (string) $value);

    } elseif (is_object($compare) && $compare instanceof Traversable) {
        return in_array($value, iterator_to_array($compare, false), true);
    }

    return false;
}

function twig_filter_get_asset_version($asset) {
	global $asset_versions;

	if ($asset_versions && array_key_exists($asset, $asset_versions) && $asset_versions[$asset])
		return $asset . '?' .  $asset_versions[$asset];
	else
		return $asset;
}

class Twig_Node_Expression_Binary_In_Strict extends Twig_Node_Expression_Binary_In {
	public function compile(Twig_Compiler $compiler) {
		$compiler
			->raw('twig_in_filter_strict(')
			->subcompile($this->getNode('left'))
			->raw(', ')
			->subcompile($this->getNode('right'))
			->raw(')');
	}
}

class Twig_Node_Expression_Binary_NotIn_Strict extends Twig_Node_Expression_Binary_NotIn {
	public function compile(Twig_Compiler $compiler) {
		$compiler
			->raw('!twig_in_filter_strict(')
			->subcompile($this->getNode('left'))
			->raw(', ')
			->subcompile($this->getNode('right'))
			->raw(')');
	}
}

// I could also create new operator(s), i.e., in_array/not in_array
class Strict_Twig_Extension extends Twig_Extension_Core {

	public function getOperators() {
		$operators = parent::getOperators();
		$operators[1]['not in'] = array('precedence' => 20, 'class' => 'Twig_Node_Expression_Binary_NotIn_Strict', 'associativity' => Twig_ExpressionParser::OPERATOR_LEFT);
		$operators[1]['in'    ] = array('precedence' => 20, 'class' => 'Twig_Node_Expression_Binary_In_Strict', 'associativity' => Twig_ExpressionParser::OPERATOR_LEFT);

		return $operators;
	}
}

$twig = new Twig_Environment(new Twig_Loader_Filesystem(dirname(__FILE__).'/templates'));
// $twig->addExtension(new Twig_Extension_Debug);
// $twig->addExtension(new Strict_Twig_Extension);
$twig->addFilter('s', new Twig_Filter_Function('twig_filter_pluralize'));
$twig->addFilter('http_build_query', new Twig_Filter_Function('twig_filter_http_build_query'));
$twig->addFilter('get_asset_version', new Twig_Filter_Function('twig_filter_get_asset_version'));

