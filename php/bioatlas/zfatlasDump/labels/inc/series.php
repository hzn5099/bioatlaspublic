<?php

error_reporting(E_ALL);

require_once __DIR__.'/base.php';
require_once __DIR__.'/model.php';

function get_atlas($id, $as_json) {

	global $sql, $zfatlas_db;

	if ($as_json) {
		switch($id) {
			// University of Iowa slidebox (1,025 slides)
			case '110':		return '{id:110,name:"University of Iowa Department of Pathology",slides:$A($R(565,1589))}';
			// Digital Path Teching Set (52 slides)
			case '129':		return '{id:129,name:"Digital Pathology Teaching Set",slides:$A($R(1672,1723))}';

			// micro CT "slides"
			case '147':		return '{id:147,name:"4dpf coronal",plane:"coronal",slides:$A($R(1904,2543))}';
			case '148':		return '{id:148,name:"4dpf sagittal",plane:"sagittal",slides:$A($R(2544,3133))}';
			case '149':		return '{id:149,name:"4dpf transverse",plane:"transverse",slides:$A($R(3134,7323))}';
			case '150':		return '{id:150,name:"10mm coronal",plane:"coronal",slides:$A($R(7324,8773))}';
			case '151':		return '{id:151,name:"10mm sagittal",plane:"sagittal",slides:$A($R(8774,9955))}';
			case '152':		return '{id:152,name:"10mm transverse",plane:"transverse",slides:$A($R(9956,17105))}';
			case '154':		return '{id:154,name:"3dpf wild-type sagittal",plane:"sagittal",slides:$A($R(18050,18678))}';
			case '155':		return '{id:155,name:"5dpf wild-type sagittal",plane:"sagittal",slides:$A($R(18679,19298))}';
			case '156':		return '{id:156,name:"3dpf hht sagittal",plane:"sagittal",slides:$A($R(19299,19945))}';
			case '157':		return '{id:157,name:"5dpf hht sagittal",plane:"sagittal",slides:$A($R(19946,20549))}';
			case '176':		return '{id:176,name:"Wild-type &gt; 3dpf &gt; Coronal &gt; Single slices",plane:"coronal",slides:$A($R(21903,22563))}';
			case '177':		return '{id:177,name:"Wild-type &gt; 3dpf &gt; Coronal &gt; Thick slabs",plane:"coronal",slides:$A($R(20550,20616))}';
			case '178':		return '{id:178,name:"Wild-type &gt; 3dpf &gt; Sagittal &gt; Single slices",plane:"sagittal",slides:$A($R(18050,18678))}';
			case '179':		return '{id:179,name:"Wild-type &gt; 3dpf &gt; Sagittal &gt; Thick slabs",plane:"sagittal",slides:$A($R(20617,20680))}';
			case '180':		return '{id:180,name:"Wild-type &gt; 3dpf &gt; Transverse &gt; Single slices",plane:"transverse",slides:$A($R(23193,25119))}';
			case '181':		return '{id:181,name:"Wild-type &gt; 3dpf &gt; Transverse &gt; Thick slabs",plane:"transverse",slides:$A($R(20681,20874))}';
			case '188':		return '{id:188,name:"Wild-type &gt; 5dpf &gt; Coronal &gt; Single slices",plane:"coronal",slides:$A($R(25120,25960))}';
			case '189':		return '{id:189,name:"Wild-type &gt; 5dpf &gt; Coronal &gt; Thick slabs",plane:"coronal",slides:$A($R(20875,20959))}';
			case '190':		return '{id:190,name:"Wild-type &gt; 5dpf &gt; Sagittal &gt; Single slices",plane:"sagittal",slides:$A($R(18679,19298))}';
			case '191':		return '{id:191,name:"Wild-type &gt; 5dpf &gt; Sagittal &gt; Thick slabs",plane:"sagittal",slides:$A($R(20960,21023))}';
			case '192':		return '{id:192,name:"Wild-type &gt; 5dpf &gt; Transverse &gt; Single slices",plane:"transverse",slides:$A($R(26581,28534))}';
			case '193':		return '{id:193,name:"Wild-type &gt; 5dpf &gt; Transverse &gt; Thick slabs",plane:"transverse",slides:$A($R(21024,21219))}';
			case '182':		return '{id:182,name:"Huli hutu &gt; 3dpf &gt; Coronal &gt; Single slices",plane:"coronal",slides:$A($R(28535,29318))}';
			case '183':		return '{id:183,name:"Huli hutu &gt; 3dpf &gt; Coronal &gt; Thick slabs",plane:"coronal",slides:$A($R(21220,21299))}';
			case '184':		return '{id:184,name:"Huli hutu &gt; 3dpf &gt; Sagittal &gt; Single slices",plane:"sagittal",slides:$A($R(19299,19945))}';
			case '185':		return '{id:185,name:"Huli hutu &gt; 3dpf &gt; Sagittal &gt; Thick slabs",plane:"sagittal",slides:$A($R(21300,21365))}';
			case '186':		return '{id:186,name:"Huli hutu &gt; 3dpf &gt; Transverse &gt; Single slices",plane:"transverse",slides:$A($R(29966,31977))}';
			case '187':		return '{id:187,name:"Huli hutu &gt; 3dpf &gt; Transverse &gt; Thick slabs",plane:"transverse",slides:$A($R(21366,21568))}';
			case '194':		return '{id:194,name:"Huli hutu &gt; 5dpf &gt; Coronal &gt; Single slices",plane:"coronal",slides:$A($R(31978,32685))}';
			case '195':		return '{id:195,name:"Huli hutu &gt; 5dpf &gt; Coronal &gt; Thick slabs",plane:"coronal",slides:$A($R(21569,21640))}';
			case '196':		return '{id:196,name:"Huli hutu &gt; 5dpf &gt; Sagittal &gt; Single slices",plane:"sagittal",slides:$A($R(19946,20549))}';
			case '197':		return '{id:197,name:"Huli hutu &gt; 5dpf &gt; Sagittal &gt; Thick slabs",plane:"sagittal",slides:$A($R(21641,21703))}';
			case '198':		return '{id:198,name:"Huli hutu &gt; 5dpf &gt; Transverse &gt; Single slices",plane:"transverse",slides:$A($R(33290,35266))}';
			case '199':		return '{id:199,name:"Huli hutu &gt; 5dpf &gt; Transverse &gt; Thick slabs",plane:"transverse",slides:$A($R(21704,21902))}';

		}
	}

	require_once __DIR__.'/connect.php';

	$series = get_atlas_by_id((int)$id);

	return ($series && $as_json) ? json_encode($series) : $series;
}
