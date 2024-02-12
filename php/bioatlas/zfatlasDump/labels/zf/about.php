<?php
	include '../inc/twig.php';

	ob_start();

?>

	<div class="">
		<div class="column column-1">

			<div id="background" class="shadow-box">
				<h1>About the atlas</h1>
				<p>The Zebrafish Atlas was created to answer a community call for a comprehensive, web-based, anatomical and pathological atlas of the zebrafish, which has become one of the most widely used vertebrate animal models globally. The experimental strengths of zebrafish as a model system have made it useful for a wide range of investigations addressing the missions of the NIH and NSF.</p>
				<p>In addition to the organism's small size, economical husbandry, rapid ex utero development, and prolific reproductive capacity, zebrafish as a model organism offers the following advantages:</p>
					<ul>
						<li>the utility of parthenogenetic methods of generating haploids, half-tetrads, or homozygous diploids (Streisinger, 1981) </li>
						<li>whole-mount in situ hybridization to determine RNA expression patterns in embryos (Jowett, 1999)</li>
						<li>a dense genetic map</li>
						<li>an expressed sequence tag (EST) database (<a href="http://genetics.wustl.edu/sjlab/genome-tools/">WashU-Zebrafish Genome Resources EST Project</a>)</li>
						<li>existence of hundreds of genetic mutants from large-scale mutagenesis experiments (Mullins et al., 1994; Driever et al. 1996; Haffter et al., 1996)</li>
						<li>genome sequence (Vogel, 2000)</li>
						<li>effective morpholino-based genetic knockdowns (Nasevicius and Ekker, 2000)</li>
					</ul>
				<p>In support of this work, a readily-available digital registry of reference images in the form of standardized, integrated, web-based atlases was critical to fulfill a long-standing need in the zebrafish community.</p>
				<p>As an important resource for zebrafish and aquatic models research communities, the vision for this atlas is to serve as web-based, interactive, comprehensive reference of normal zebrafish at many different stages of development, integrating histology and 3D anatomy over the life span of the organism. The atlas includes two-dimensional histology images derived from serially sectioned specimens and, most recently (and experimentally), microCT scans. It is also intended to serve as a single resource for comparison with other imaging technologies, including OPT, MRI, and ultrasound, each of which has unique and important applications.</p>
				<p>The Zebrafish Atlas provides reference slides for virtual microscopic viewing of the zebrafish using an Internet browser. Virtual slide technology allows the user to choose their own field of view and magnification, and to consult labeled histological sections of zebrafish. We are planning to include a complete set of embryos, larvae, juveniles, and adults from approximately 25 different ages. Future work will also include a variety of comparisons (e.g., normal vs. mutant, normal vs. diseased, multiple stages of development, zebrafish with other organisms, and different types of cancer).</p>
			</div>

			<div id="scanning" class="shadow-box">
				<h2>Scanning &amp; Image Processing</h2>
				<p>For digitizing histology slides, we purchased a Scanscope XT scanner from Aperio Technologies, Inc.  This system allows us to scan at both 20x and 40x magnification. We can scan entire slides or sections of slides and can scan up to 120 slides in a batch mode with the XT's robotic device.</p>
				<p>While high-throughput can be achieved with batch scanning, production scans have been scanned individually to give us finer control over the placement of focus points.  This time-consuming process is required to obtain the detail necessary for high-quality images.</p>
				<p>Resulting images are pyramidal SVS files.  This means that aside from the original, full-sized image, reduced sized copies are also stored in the same file, allowing special software to view these images as virtual slides with greater efficiency.</p>
				<p>Images captured by the scanner have been adjusted to maximize ease of interpretation of the atlas. The digital processing minimizes artifacts introduced during specimen preparation and photography. Artifacts addressed include color balance, cloudiness introduced by spherical aberration, and the separation of relevant foreground data contained in the tissue from distracting background artifact.</p>
			</div>

			<div id="citing" class="shadow-box">
				<h2>Citing the Zebrafish Atlas</h2>
				<p>If you use images from the atlas, to help us continue our work we request the following:</p>
				<ol type=1>
					<li>Cite the specific frame you are copying from using the "link to this" tool at the top right of any virtualslide.
					<li>Credit http://zfatlas.psu.edu/, NIH grant 5R24 RR01744, Jake Gittlen Cancer Research Foundation, and PA Tobacco Settlement Fund.
				</ol>
			</div>

			<div id="people" class="shadow-box">
				<h2>People</h2>
				<dl class="about-people" style="width:28%">
					<dt>Project PI
					<dd>Keith Cheng

					<dt>Atlas Coordinator
					<dd>Jean Copper

					<dt>Webmaster and<br>Web Resource Coordinator
					<dd>Steven Peckins

					<dt>Programming
					<dd>Steven Peckins

					<dt>Image processing &amp; labeling
					<dd>Steven Peckins

					<dt>Processing and Sectioning
					<dd>Lynn Budgeon
				</dl>
				<dl class="about-people" style="width:32%">
					<dt>Veterinary and Comparative Pathologist
					<dd>Timothy K Cooper

					<dt>3D MicroCT Images
					<dd>Xuying Xin
					<dd>Darin Clark
					<dd>Tim Sledz <sup>4</sup>
					<dd>Arun Tatiparthi <sup>4</sup>
					<dd>Francesco De Carlo <sup>1</sup>
					<dd>Xianghui Xiao <sup>1</sup>
					<dd>Patrick LaRiviere <sup>2</sup>
					<dd>Gordon Kindlmann <sup>2</sup>

					<dt>Bioinformatic Coordinator
					<dd>Victor Canfield

					<dt>Systems Administration
					<dd>Vijay Agarwala <sup>3</sup>
					<dd>Jason Holmes <sup>3</sup>
				</dl>
				<dl class="about-people" style="width:40%">
					<dt>Fish Facility Manager
					<dd>Peggy Hubley

					<dt>Past personnel
					<dd>Christina Foutz (nee Wentz, past atlas coordinator)
					<dd>Adam Sidor (programming)
					<dd>Anthony Cheng (labeling)
					<dd>Saurabha Bhatnagar (web)
					<dd>Eileen Barno
					<dd>Mike Abendroth
					<dd>Zachary Gershenson
					<hr>
					<ol class="about-footnotes">
					<!--
					NOTE:

					Since this is an ordered list, make sure the
					correct numbers are maintained since the
					superscripts are hard-coded above.

					  -->
						<li><a href="http://www.aps.anl.gov/">Advanced Photon Source, Argonne National Labs</a>
						<li>University of Chicago
						<li><a href="http://rcc.its.psu.edu/hpc/">High Performance Computing Group, Penn State University</a>
						<li><a href="http://www.microphotonics.com/">Micro Photonics, Inc.</a>, Allentown, PA
					</ol>
				</dl>
			</div>

			<div id="references" class="shadow-box">
				<h2>References/papers</h2>
				<ul class="about-references">
					<li>Mohideen M-APK, Beckwith LG, Tsao-Wu GS, Moore JL, Wong ACC, Chinoy MR, Cheng KC.  Histology-based screen for zebrafish mutants with abnormal cell differentiation. Developmental Dynamics 228:414-423, 2003.  PMID: 14579380 [<a href="papers/mohideen-2003.pdf">View PDF</a>, 1.3M]</li>
					<li>Sabaliauskas NA, Foutz CA, Mest JR, Budgeon LR, Sidor A, Gershenson J, Joshi S, Cheng KC. High-throughput zebrafish histology.  Methods 39:246-254, 2006.  PMID: 16870470 [<a href="papers/sabaliauskas-2006.pdf">View PDF</a>, 4.5M]</li>
					<li>Tsao-Wu GS, Weber CH, Budgeon LR, Cheng KC. Agarose embedded tissue arrays for histologic and genetic analysis.  Biotechniques 25:614-618, 1998.  PMID: 9793642 [<a href="papers/TsaoWu-1998.pdf">View PDF</a>, 559K]</li>
					<li>Tsao-Wu GS, Weber CH, Budgeon LR, Cheng KC. Agarose embedded tissue arrays for histologic and genetic analysis.  In Expression Genetics:   High-Throughput Methods, Chapter 4, M. McClelland and A. Pardee (eds.), Eaton Publishing, pp. 31-36, 1999. [<a href="papers/TsaoWu-1999.pdf">View PDF</a>, 1.6M]</li>
				</ul>
			</div>

		</div>
	</div>
<?php

	echo $twig->render('base.twig.html', array(
		'page' => array(
			'content'	=> ob_get_clean(),
			'scripts'	=> array(
				'scriptaculous-js-1.9.0/lib/prototype.js',
				'scriptaculous-js-1.9.0/src/scriptaculous.js?load=effects',
				'about.js',
			)
	)));
