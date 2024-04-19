<?php

	include '../labels/inc/twig.php';

	ob_start();

?>

    <div id="contentboxgrey-extended">
        <div class="mini-content-width">
            <h1>About the atlas</h1>

            <hr>

            <p>
                Glass histology slides have long been the standard for analysis of normal,
                mutant, and disease microanatomy.  Recent advancements in microscopy,
                computation, and the internet have made possible exciting new ways to share
                the data residing on traditional glass slides.  With the introduction of
                slide scanning technologies, glass slides can be imaged in their entirety
                and saved as <em>virtual slides</em> in computer databases.  This has set the
                stage for the creation of online histology atlases that enable users from
                around the world to share slide data.
            </p>
            <p>
                Virtual slide technology enables users to view high-resolution imagery with
                a significantly reduced download time. Virtual slides are panned and
                magnified in a manner similar to a traditional microscope but offer
                constant context with respect to the remainder of the slide, labeling,
                comparison, and collaborative possibilities beyond the limitations of
                physical microscopy.
            </p>
            <p>
                This atlas was originally constructed primarily for zebrafish and human
                tissues.  We are seeking partners to help us find and share internationally
                unique slide collections that are in danger of being lost. We invite ideas
                and involvement from scientific and medical individuals and communities to
                make available unique and compelling slide collections.  To this end we
                encourage and seek discussion with members of the scientific community for
                the benefit of society.
            </p>
        </div>
    </div>
    <div class="padding-bottom">
        <div id="contentboxwhite">
            <div class="mini-content-width">
                <h2><b>The following are the component atlases under current construction:</b></h2>
                <dl>

                    <dt><b>Zebrafish virtual slides:</b></dt>
                    <hr>
                    <dd>The first goal was to provide infrastructure
                        for service as a central repository for digital histological sections of
                        normal and abnormal zebrafish tissue that allows progressive magnification
                        and labeling in a manner that is coordinated with existing anatomical and
                        phenotypic ontologies.  The next goals for this project are to plan for
                        scanning of slide collections, and to customize the database structure to a
                        more scalable format.
                    </dd>
                    <hr>
                    <dt><b>Human and other virtual slides:</b></dt>
                    <hr>
                    <dd>The second goal, which may become a
                        primary goal, was to obtain slides from human anatomy and pathology for
                        comparison with data from other model organisms.  A subgoal was to
                        establish post slides from other model systems.</dd>
                    <hr>
                    <dt><b>MicroCT:</b></dt>
                    <hr>
                    <dd>We are using the zebrafish to pursue the goal of 3D imaging of
                        whole, mm-scale organisms (and later, specimens) for phenomics, the
                        high-throughput study of phenotype. Accordingly, we have pursued a form of
                        X-ray tomography in micron scale with cellular resolution.  Using
                        synchrotron microCT, we have created a 3-dimensional version of histology
                        for zebrafish we are calling Pan-Cellular Tissue Tomography (PANCETTO).
                        Our goal is to generate reconstructions from which the full animal can be
                        visualized from 2D slices in any direction.  This work is a collaboration
                        with the La Riviere laboratory at University of Chicago and physicists at
                        the Advanced Photon Source of Argonne National Laboratory.</dd>
                </dl>
            </div>
        </div>
    </div>
    <div id="citing">
        <div id="contentboxgrey" class="padding">
            <div class="mini-content-width">
                <h2><b>Citing the Atlas</b></h2>
                <p>If you use images from the atlas, to help us continue our work we request the following:</p>
                <ol type=1>
                    <li>Cite the specific frame you are copying from using the "link to this" tool at the top right of any virtualslide.
                    <li>Credit <a href="https://bio-atlas.psu.edu/">https://bio-atlas.psu.edu/</a>, NIH grant 5R24 RR01744, Jake Gittlen Cancer Research Foundation, and PA Tobacco Settlement Fund.
                    <li>Comparative analysis of fixation and embedding techniques for optimized histological preparation of zebrafish.
                        <br/>Copper JE, Budgeon LR, Foutz CA, van Rossum DB, Vanselow DJ, Hubley MJ, Clark DP, Mandrell DT, Cheng KC.
                        <br/>Comp Biochem Physiol C Toxicol Pharmacol. 2018 Jun;208:38-46.
                </ol>
            </div>
        </div>
    </div>
	<div class="padding padding-bottom">
		<div class="column column-1">

			<!--<div id="background" class="shadow-box">
				<h1>About the atlas</h1>
				<p>
				    Glass histology slides have long been the standard for analysis of normal,
                    mutant, and disease microanatomy.  Recent advancements in microscopy,
                    computation, and the internet have made possible exciting new ways to share
                    the data residing on traditional glass slides.  With the introduction of
                    slide scanning technologies, glass slides can be imaged in their entirety
                    and saved as <em>virtual slides</em> in computer databases.  This has set the
                    stage for the creation of online histology atlases that enable users from
                    around the world to share slide data.
                </p>
				<p>
				    Virtual slide technology enables users to view high-resolution imagery with
                    a significantly reduced download time. Virtual slides are panned and
                    magnified in a manner similar to a traditional microscope but offer
                    constant context with respect to the remainder of the slide, labeling,
                    comparison, and collaborative possibilities beyond the limitations of
                    physical microscopy.
				</p>
				<p>
  				    This atlas was originally constructed primarily for zebrafish and human
                    tissues.  We are seeking partners to help us find and share internationally
                    unique slide collections that are in danger of being lost. We invite ideas
                    and involvement from scientific and medical individuals and communities to
                    make available unique and compelling slide collections.  To this end we
                    encourage and seek discussion with members of the scientific community for
                    the benefit of society.
				</p>
			</div>-->
			<!--<div id="progress" class="shadow-box">
				<h2>The following are the component atlases under current construction:</h2>
				<dl>
                                <dt>Zebrafish virtual slides:</dt>
				<dd>The first goal was to provide infrastructure
                    for service as a central repository for digital histological sections of
                    normal and abnormal zebrafish tissue that allows progressive magnification
                    and labeling in a manner that is coordinated with existing anatomical and
                    phenotypic ontologies.  The next goals for this project are to plan for
                    scanning of slide collections, and to customize the database structure to a
                    more scalable format.
                </dd>
				<dt>Human and other virtual slides:</dt>
				<dd>The second goal, which may become a
primary goal, was to obtain slides from human anatomy and pathology for
comparison with data from other model organisms.  A subgoal was to
establish post slides from other model systems.</dd>
				<dt>MicroCT:</dt>
				<dd>We are using the zebrafish to pursue the goal of 3D imaging of
whole, mm-scale organisms (and later, specimens) for phenomics, the
high-throughput study of phenotype. Accordingly, we have pursued a form of
X-ray tomography in micron scale with cellular resolution.  Using
synchrotron microCT, we have created a 3-dimensional version of histology
for zebrafish we are calling Pan-Cellular Tissue Tomography (PANCETTO).
Our goal is to generate reconstructions from which the full animal can be
visualized from 2D slices in any direction.  This work is a collaboration
with the La Riviere laboratory at University of Chicago and physicists at
the Advanced Photon Source of Argonne National Laboratory.</dd>
                                </dl>
			</div>-->

			<!--<div id="citing" class="shadow-box">
				<h2>Citing the Atlas</h2>
				<p>If you use images from the atlas, to help us continue our work we request the following:</p>
				<ol type=1>
					<li>Cite the specific frame you are copying from using the "link to this" tool at the top right of any virtualslide.
					<li>Credit <a href="https://bio-atlas.psu.edu/">https://bio-atlas.psu.edu/</a>, NIH grant 5R24 RR01744, Jake Gittlen Cancer Research Foundation, and PA Tobacco Settlement Fund.
					<li>Comparative analysis of fixation and embedding techniques for optimized histological preparation of zebrafish.
						<br/>Copper JE, Budgeon LR, Foutz CA, van Rossum DB, Vanselow DJ, Hubley MJ, Clark DP, Mandrell DT, Cheng KC.
						<br/>Comp Biochem Physiol C Toxicol Pharmacol. 2018 Jun;208:38-46.
				</ol>
			</div>-->

			<div id="people" class="shadow-box mini-content-width">
				<h2 >People</h2>
				<dl class="about-people" style="width:28%">
					<dt>Project PI
                    <dd>Khai Ang
					<dd>Keith Cheng

					<dt>Atlas Coordinator
					<dd>Jean Copper

					<dt>Website Management
					<dd>Ed Buckingham

					<dt>Programming
					<dd>Hien Nguyen
					<dd>Dylan Martin
                    <dd>Khoa Nguyen
                    <dd>Tyler Page
                    <dd>Daniel Vanselow

					<dt>Image Processing and Labeling
					<dd>Jean Copper
					<dd>MeeSiing Ngu
                    <dd>Rachelle Saint-Fort
				</dl>
				<dl class="about-people" style="width:32%">

                    <dt>Processing and Sectioning
                    <dd>MeeSiing Ngu

					<dt>3D MicroCT Images
					<dd>Francesco De Carlo
                    <dd>Patrick LaRiviere
                    <dd>Daniel Vanselow

					<dt>Systems Administration
					<dd>Penn State Univ.

                    <dt>Fish Facility Manager
                    <dd>Jessica Christ
					
				</dl>
				<dl class="about-people" style="width:40%">
					<dt>Past Personnel
					<dd>Mike Abendroth
					<dd>Eileen Barno
					<dd>Saurabha Bhatnagar
					<dd>Lynn Budgeon
					<dd>Victor Canfield
					<dd>Anthony Cheng
					<dd>Darrin Clark
					<dd>Timothy Cooper
                    <dd>Christina Foutz
                    <dd>Belinda Giardine
                    <dd>Zachary Gershenson
                    <dd>Peggy Hubley
                    <dd>Gordon Kindlmann
                    <dd>David Mandrell
                    <dd>Steven Peckins
                    <dd>Adam Sidor
                    <dd>Tim Sledz
                    <dd>Arun Tatiparthi
                    <dd>Xianghui Xiao
                    <dd>Xuying Xin
				</dl>
			</div>

			<div id="references" class="shadow-box mini-content-width">
				<h2>References/Publications</h2>
				<ul class="about-references">
                    <li>Copper JE, Budgeon LR, Foutz CA, van Rossum DB, Vanselow DJ, Hubley MJ, Clark P, Mandrell DT, Cheng KC. Comparative analysis of fixation and embedding techniques for optimized histological preparation of zebrafish. Comp Biochem Physiol C Toxicol Pharmacol. 2018 Jun;208:38-46. doi: 10.1016/j.cbpc.2017.11.003. Epub 2017 Nov 20. PMID: 29157956</li>
					<li>Mohideen M-APK, Beckwith LG, Tsao-Wu GS, Moore JL, Wong ACC, Chinoy MR, Cheng KC.  Histology-based screen for zebrafish mutants with abnormal cell differentiation. Developmental Dynamics 228:414-423, 2003.  PMID: 14579380 [<a href="papers/mohideen-2003.pdf">View PDF</a>, 1.3M]</li>
					<li>Sabaliauskas NA, Foutz CA, Mest JR, Budgeon LR, Sidor A, Gershenson J, Joshi S, Cheng KC. High-throughput zebrafish histology.  Methods 39:246-254, 2006.  PMID: 16870470 [<a href="papers/sabaliauskas-2006.pdf">View PDF</a>, 4.5M]</li>
					<li>Tsao-Wu GS, Weber CH, Budgeon LR, Cheng KC. Agarose embedded tissue arrays for histologic and genetic analysis.  Biotechniques 25:614-618, 1998.  PMID: 9793642 [<a href="papers/TsaoWu-1998.pdf">View PDF</a>, 559K]</li>
                    <li>Comparative analysis of fixation and embedding techniques for optimized histological preparation of zebrafish.Copper JE, Budgeon LR, Foutz CA, van Rossum DB, Vanselow DJ, Hubley MJ, Clark DP, Mandrell DT, Cheng KC.Comp Biochem Physiol C Toxicol Pharmacol. 2018 Jun;208:38-46.</li>
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
