<?php

/*
	- view is dependent upon $_GET parameters
		- if appropriately set, use view.twig.html
		- otherwise, use base.twig.html or whatever

	- this will only be necessary until zfatlas.widget.Slider is incorporated into
	  the normal FullScreen viewer.

*/

	set_include_path('../inc/');

	require_once('twig.php');

	// view: slide
	if (isset($_GET['s']) && ctype_digit($_GET['s']) || isset($_GET['atlas']) && ctype_digit($_GET['atlas'])) {

		require_once('base.php');
		require_once('model.php');
		require_once('connect.php');

		$slide = array('id' => 0, 'title' => "Slide not found", 'description' => "No slide id", 'level' => array(array(1,1,1,1)));
		$atlas = array('slides' => array());

		// set slide
		if (isset($_GET['s']) && ctype_digit($_GET['s'])) {
			$slides = get_virtualslides_by_id(array($_GET['s']));
			if (count($slides))
				$slide = array_shift($slides);
		}

		// set atlas
		if (isset($_GET['atlas']) && ctype_digit($_GET['atlas'])) {
			$atlas = get_atlas_by_id($_GET['atlas']);
		}

		echo $twig->render('phenome-view.twig.html', array(
			'page' => array(
				'base'	=> sprintf('http://%s/', $_SERVER['HTTP_HOST']),
				'debug'	=> isset($_GET['dev'])
			),
			'slide'		=> $slide,
			'atlas'		=> $atlas
		));

	// view: page
	} else {

		ob_start();
?>
		<h1>MicroCT series</h1>

		<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->
		<hr>
		<h2>Normal</h2>
		<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->

		<table class="shadow-box">
			<thead>
				<tr>
					<th></th>
					<th>coronal</th>
					<th>sagittal</th>
					<th>transverse</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>4dpf</td>
					<td><a href="phenome/microct.php?atlas=147&amp;s=2229"><img src="thumbnails/preview/0000002229.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=148&amp;s=2791"><img src="thumbnails/preview/0000002791.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=149&amp;s=4118"><img src="thumbnails/preview/0000004118.jpg"></a></td>
				</tr>
				<tr>
					<td>10mm</td>
					<td><a href="phenome/microct.php?atlas=150&amp;s=8055"><img src="thumbnails/preview/0000008055.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=151&amp;s=9535"><img src="thumbnails/preview/0000009535.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=152&amp;s=11600"><img src="thumbnails/preview/0000011600.jpg"></a></td>
				</tr>
			</tbody>
		</table>
		<br>
		<ul style="display:none">
			<li><a href="phenome/microct.php?atlas=147">4dpf PTA-stained coronal</a>
			<li><a href="phenome/microct.php?atlas=148">4dpf PTA-stained sagittal</a>
			<li><a href="phenome/microct.php?atlas=149">4dpf PTA-stained transverse</a>
			<li><a href="phenome/microct.php?atlas=150">10mm PTA-stained coronal</a>
			<li><a href="phenome/microct.php?atlas=151">10mm PTA-stained sagittal</a>
			<li><a href="phenome/microct.php?atlas=152">10mm PTA-stained transverse</a>
		</ul>

		<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->
		<hr>
		<h2>Wild-type vs. Huli hutu (hht) sagittal</h2>
		<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->

		<table class="shadow-box">
			<thead>
				<tr>
					<th></th>
					<th>wild-type</th>
					<th>hht</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>3dpf</td>
					<td><a href="phenome/microct.php?atlas=154&amp;s=18373"><img src="thumbnails/preview/0000018373.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=156&amp;s=19625"><img src="thumbnails/preview/0000019625.jpg"></a></td>
				</tr>
				<tr>
					<td>5dpf</td>
					<td><a href="phenome/microct.php?atlas=155&amp;s=18995"><img src="thumbnails/preview/0000018995.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=157&amp;s=20260"><img src="thumbnails/preview/0000020260.jpg"></a></td>
				</tr>
			</tbody>
		</table>

		<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->
		<hr>
		<h2>Wild-type vs. Huli hutu (hht) vs. 3dpf vs. 5dpf vs. Slabs vs. Slices in Three Planes</h2>
		<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->

		<table class="shadow-box">
			<thead>
				<tr>
					<th colspan=5>Coronal</th>
				</tr>
				<tr>
					<th></th>
					<th colspan=2>wild-type</th>
					<th colspan=2>hht</th>
				</tr>
				<tr>
					<th></th>
					<th>slices</th>
					<th>slabs</th>
					<th>slices</th>
					<th>slabs</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>3dpf</td>
					<!-- WT 3df coronal slices -->
					<td><a href="phenome/microct.php?atlas=176&amp;s=22284"><img src="thumbnails/preview/0000022284.jpg"></a></td>
					<!-- WT 3df coronal slabs -->
					<td><a href="phenome/microct.php?atlas=177&amp;s=20589"><img src="thumbnails/preview/0000020589.jpg"></a></td>
					<!-- hht 3df coronal slices -->
					<td><a href="phenome/microct.php?atlas=182&amp;s=28869"><img src="thumbnails/preview/0000028869.jpg"></a></td>
					<!-- hht 3df coronal slabs -->
					<td><a href="phenome/microct.php?atlas=183&amp;s=21253"><img src="thumbnails/preview/0000021253.jpg"></a></td>
				</tr>
				<tr>
					<td>5dpf</td>
					<!-- WT 5dpf coronal slices -->
					<td><a href="phenome/microct.php?atlas=188&amp;s=25558"><img src="thumbnails/preview/0000025558.jpg"></a></td>
					<!-- WT 5dpf coronal slabs -->
					<td><a href="phenome/microct.php?atlas=189&amp;s=20914"><img src="thumbnails/preview/0000020914.jpg"></a></td>
					<!-- hht 5dpf coronal slices -->
					<td><a href="phenome/microct.php?atlas=194&amp;s=32472"><img src="thumbnails/preview/0000032472.jpg"></a></td>
					<!-- hht 5dpf coronal slabs -->
					<td><a href="phenome/microct.php?atlas=195&amp;s=21619"><img src="thumbnails/preview/0000021619.jpg"></a></td>
				</tr>
			</tbody>
		</table>

		<table class="shadow-box">
			<thead>
				<tr>
					<th colspan=5>Sagittal</th>
				</tr>
				<tr>
					<th></th>
					<th colspan=2>wild-type</th>
					<th colspan=2>hht</th>
				</tr>
				<tr>
					<th></th>
					<th>slices</th>
					<th>slabs</th>
					<th>slices</th>
					<th>slabs</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>3dpf</td>
					<!-- WT 3dpf sagittal slices -->
					<td><a href="phenome/microct.php?atlas=178&amp;s=18373"><img src="thumbnails/preview/0000018373.jpg"></a></td>
					<!-- WT 3dpf sagittal slabs -->
					<td><a href="phenome/microct.php?atlas=179&amp;s=20643"><img src="thumbnails/preview/0000020643.jpg"></a></td>
					<!-- hht 3dpf sagittal slices -->
					<td><a href="phenome/microct.php?atlas=184&amp;s=19625"><img src="thumbnails/preview/0000019625.jpg"></a></td>
					<!-- hht 3dpf sagittal slabs -->
					<td><a href="phenome/microct.php?atlas=185&amp;s=21337"><img src="thumbnails/preview/0000021337.jpg"></a></td>
				</tr>
				<tr>
					<td>5dpf</td>
					<!-- WT 5dpf sagittal slices -->
					<td><a href="phenome/microct.php?atlas=190&amp;s=18995"><img src="thumbnails/preview/0000018995.jpg"></a></td>
					<!-- WT 5dpf sagittal slabs -->
					<td><a href="phenome/microct.php?atlas=191&amp;s=20989"><img src="thumbnails/preview/0000020989.jpg"></a></td>
					<!-- hht 5dpf sagittal slices -->
					<td><a href="phenome/microct.php?atlas=196&amp;s=20260"><img src="thumbnails/preview/0000020260.jpg"></a></td>
					<!-- hht 5dpf sagittal slabs -->
					<td><a href="phenome/microct.php?atlas=197&amp;s=21671"><img src="thumbnails/preview/0000021671.jpg"></a></td>
				</tr>
			</tbody>
		</table>

		<table class="shadow-box">
			<thead>
				<tr>
					<th colspan=5>Transverse</th>
				</tr>
				<tr>
					<th></th>
					<th colspan=2>wild-type</th>
					<th colspan=2>hht</th>
				</tr>
				<tr>
					<th></th>
					<th>slices</th>
					<th>slabs</th>
					<th>slices</th>
					<th>slabs</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>3dpf</td>
					<!-- WT 3dpf transverse slices -->
					<td><a href="phenome/microct.php?atlas=180&amp;s=23453"><img src="thumbnails/preview/0000023453.jpg"></a></td>
					<!-- WT 3dpf transverse slabs -->
					<td><a href="phenome/microct.php?atlas=181&amp;s=20706"><img src="thumbnails/preview/0000020706.jpg"></a></td>
					<!-- hht 3dpf transverse slices -->
					<td><a href="phenome/microct.php?atlas=186&amp;s=30278"><img src="thumbnails/preview/0000030278.jpg"></a></td>
					<!-- hht 3dpf transverse slabs -->
					<td><a href="phenome/microct.php?atlas=187&amp;s=21397"><img src="thumbnails/preview/0000021397.jpg"></a></td>
				</tr>
				<tr>
					<td>5dpf</td>
					<!-- WT 5dpf transverse slices -->
					<td><a href="phenome/microct.php?atlas=192&amp;s=26938"><img src="thumbnails/preview/0000026938.jpg"></a></td>
					<!-- WT 5dpf transverse slabs -->
					<td><a href="phenome/microct.php?atlas=193&amp;s=21059"><img src="thumbnails/preview/0000021059.jpg"></a></td>
					<!-- hht 5dpf transverse slices -->
					<td><a href="phenome/microct.php?atlas=198&amp;s=33513"><img src="thumbnails/preview/0000033513.jpg"></a></td>
					<!-- hht 5dpf transverse slabs -->
					<td><a href="phenome/microct.php?atlas=199&amp;s=21726"><img src="thumbnails/preview/0000021726.jpg"></a></td>
				</tr>
			</tbody>
		</table>

		<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->
		<hr>
		<h2>Volume Render Comparisons</h2>
		<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->

		<h3>4dpf</h3>
		<table class="shadow-box">
			<thead>
				<tr>
					<th>organ</th>
					<th>coronal</th>
					<th>sagittal</th>
					<th>transverse</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>gut connection</td>
					<td><a href="phenome/microct.php?atlas=200&amp;s=35267"><img src="thumbnails/preview/0000035267.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=200&amp;s=35268"><img src="thumbnails/preview/0000035268.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=200&amp;s=35269"><img src="thumbnails/preview/0000035269.jpg"></a></td>
				</tr>
				<tr>
					<td>heart</td>
					<td><a href="phenome/microct.php?atlas=200&amp;s=35270"><img src="thumbnails/preview/0000035270.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=200&amp;s=35271"><img src="thumbnails/preview/0000035271.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=200&amp;s=35272"><img src="thumbnails/preview/0000035272.jpg"></a></td>
				</tr>
				<tr>
					<td>kidney</td>
					<td><a href="phenome/microct.php?atlas=200&amp;s=35273"><img src="thumbnails/preview/0000035273.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=200&amp;s=35274"><img src="thumbnails/preview/0000035274.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=200&amp;s=35275"><img src="thumbnails/preview/0000035275.jpg"></a></td>
				</tr>
				<tr>
					<td rowspan=2>notochord</td>
					<td rowspan=2><a href="phenome/microct.php?atlas=200&amp;s=35276"><img src="thumbnails/preview/0000035276.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=200&amp;s=35277"><img src="thumbnails/preview/0000035277.jpg"></a></td>
					<td rowspan=2><a href="phenome/microct.php?atlas=200&amp;s=35279"><img src="thumbnails/preview/0000035279.jpg"></a></td>
				</tr>
				<tr>
					<!-- notocord, sagittal, alternate view -->
					<td><a href="phenome/microct.php?atlas=200&amp;s=35278"><img src="thumbnails/preview/0000035278.jpg"></a></td>
				</tr>
				<tr>
					<td>optic nerve</td>
					<td><a href="phenome/microct.php?atlas=200&amp;s=35280"><img src="thumbnails/preview/0000035280.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=200&amp;s=35281"><img src="thumbnails/preview/0000035281.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=200&amp;s=35282"><img src="thumbnails/preview/0000035282.jpg"></a></td>
				</tr>
				<tr>
					<td rowspan=2>pancreas islets</td>
					<td rowspan=2><a href="phenome/microct.php?atlas=200&amp;s=35283"><img src="thumbnails/preview/0000035283.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=200&amp;s=35284"><img src="thumbnails/preview/0000035284.jpg"></a></td>
					<td rowspan=2><a href="phenome/microct.php?atlas=200&amp;s=35286"><img src="thumbnails/preview/0000035286.jpg"></a></td>

				</tr>
				<tr>
					<!-- pancreas, sagittal, alternate view -->
					<td><a href="phenome/microct.php?atlas=200&amp;s=35285"><img src="thumbnails/preview/0000035285.jpg"></a></td>
				</tr>
			</tbody>
		</table>

		<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->
		<hr>
		<h2>Scatter HQ</h2>
		<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->

		<h3>10mm Juvenile</h3>
		<table class="shadow-box">
			<thead>
				<tr>
					<th>organ</th>
					<th>coronal</th>
					<th>sagittal</th>
					<th>transverse</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>heart valve</td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35287"><img src="thumbnails/preview/0000035287.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35288"><img src="thumbnails/preview/0000035288.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35289"><img src="thumbnails/preview/0000035289.jpg"></a></td>
				</tr>
				<tr>
					<td>kidney</td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35290"><img src="thumbnails/preview/0000035290.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35291"><img src="thumbnails/preview/0000035291.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35292"><img src="thumbnails/preview/0000035292.jpg"></a></td>
				<tr>
					<td>bone</td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35293"><img src="thumbnails/preview/0000035293.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35294"><img src="thumbnails/preview/0000035294.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35295"><img src="thumbnails/preview/0000035295.jpg"></a></td>
				<tr>
					<td>gut connection (1)</td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35296"><img src="thumbnails/preview/0000035296.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35297"><img src="thumbnails/preview/0000035297.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35298"><img src="thumbnails/preview/0000035298.jpg"></a></td>
				<tr>
					<td>gut connection (2)</td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35299"><img src="thumbnails/preview/0000035299.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35300"><img src="thumbnails/preview/0000035300.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35301"><img src="thumbnails/preview/0000035301.jpg"></a></td>
				<tr>
					<td>optic nerve</td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35302"><img src="thumbnails/preview/0000035302.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35303"><img src="thumbnails/preview/0000035303.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35304"><img src="thumbnails/preview/0000035304.jpg"></a></td>
				<tr>
					<td>pancreas</td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35305"><img src="thumbnails/preview/0000035305.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35306"><img src="thumbnails/preview/0000035306.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=201&amp;s=35307"><img src="thumbnails/preview/0000035307.jpg"></a></td>
				</tr>
			</tbody>
		</table>

		<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->
		<hr>
		<h2>Other views</h2>
		<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->

		<h3>10mm Juvenile</h3>
		<table class="shadow-box">
			<tbody>
				<tr>
					<td><a href="phenome/microct.php?atlas=202&amp;s=35311"><img src="thumbnails/preview/0000035311.jpg"></a></td>
					<td>Scatter HQ1, adjusted</td>
				</tr>
				<tr>
					<td><a href="phenome/microct.php?atlas=202&amp;s=35309"><img src="thumbnails/preview/0000035309.jpg"></a></td>
					<td>MIP, adjusted</td>
				</tr>
				<tr>
					<td><a href="phenome/microct.php?atlas=202&amp;s=35310"><img src="thumbnails/preview/0000035310.jpg"></a></td>
					<td>Phong1, adjusted</td>
				</tr>
				<tr>
					<td><a href="phenome/microct.php?atlas=202&amp;s=35308"><img src="thumbnails/preview/0000035308.jpg"></a></td>
					<td>Isosurface, adjusted</td>
				</tr>
				<tr>
					<td><a href="phenome/microct.php?atlas=202&amp;s=35314"><img src="thumbnails/preview/0000035314.jpg"></a></td>
					<td>X-ray, whole</td>
				</tr>
				<tr>
					<td><a href="phenome/microct.php?atlas=202&amp;s=35312"><img src="thumbnails/preview/0000035312.jpg"></a></td>
					<td>Sum along ray</td>
				</tr>
				<tr>
					<td><a href="phenome/microct.php?atlas=202&amp;s=35313"><img src="thumbnails/preview/0000035313.jpg"></a></td>
					<td>VolumeRendererComparison, adjusted</td>
				</tr>
			</tbody>
		</table>

		<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->
		<hr>
		<h2>Thick Slab MIP</h2>
		<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->

		<h3>4dpf wild-type</h3>
		<table class="shadow-box">
			<thead>
				<tr>
					<th></th>
					<th>left</th>
					<th>right</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>left</td>
					<td><a href="phenome/microct.php?atlas=205&amp;s=35352"><img src="thumbnails/preview/0000035352.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=205&amp;s=35353"><img src="thumbnails/preview/0000035353.jpg"></a></td>
				</tr>
				<tr>
					<td>right</td>
					<td><a href="phenome/microct.php?atlas=205&amp;s=35354"><img src="thumbnails/preview/0000035354.jpg"></a></td>
					<td><a href="phenome/microct.php?atlas=205&amp;s=35355"><img src="thumbnails/preview/0000035355.jpg"></a></td>
				</tr>
			</tbody>
		</table>

<?php

			echo $twig->render('phenome.twig.html', array(
				'page'	=> array(
					'title'		=> 'MicroCT Series',
					'base'		=> sprintf('http://%s/', $_SERVER['HTTP_HOST']),
					'content'	=> ob_get_clean()
				)
			));
	}

