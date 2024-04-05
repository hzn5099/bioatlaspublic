<?php
	include '../inc/twig.php';

	ob_start();

?>


    <div id="contentboxgrey">
        <h1 class="mini-content-width title-header">The Human Atlas</h1>
    </div>
    <div id="contentboxwhite">
        <div class="mini-content-width">
            <h2><b>Understanding Human Morbidity and Mortality Through Tissue Architecture</b></h2>

            <hr>

            <p>
                Virtually all causes of human morbidity and mortality are associated with
                changes in tissue architecture.  Accordingly, the long-term goal of this
                work is to provide a foundation for comparing phenotypes across model systems
                using human tissue architecture as an anchor.  Tissue architecture provides
                context for molecular mechanisms. Good models of human disease show comparable
                patterns of change.
            </p>
            <p>
                Scans of human slides began with Fred Dee's collection at the University of Iowa.
                We are now adding more from Penn State, and enthusiastically invite collaborations
                to incorporate high-quality slide sets from other institutions. Contributors will
                be given proper academic or other credit by citation within the website.
            </p>
            <div class="access-viewer-btn">
                <a href="view.php?s=1761&z=2&c=22013,10742" alt="bioatlas viewer">Access the viewer here</a>
            </div>

        </div>
    </div>
<!--				<div class="two-column-layout">
					<div class="column column-1">
						<div class="shadow-box">

							<h1>Human</h1>
							<p>
Virtually all causes of human morbidity and mortality are associated with changes in tissue architecture.  Accordingly, the long-term goal of this work is to provide a foundation for comparing phenotypes across model systems using human tissue architecture as an anchor.  Tissue architecture provides context for molecular mechanisms. Good models of human disease show comparable patterns of change.
</p>
<p>
Scans of human slides began with Fred Dee's collection at University of Iowa. We are now adding more from Penn State, and enthusiastically invite collaborations to incorporate high-quality slide sets from other institutions. Contributors will be given proper academic or other credit by citation within the web site.
</p>


						</div>
						<div class="shadow-box">

							<figure class="left">
								<a href="view.php?s=1761&amp;z=2&amp;c=22013,10742"><img  src="tile.jpeg.php?s=1761&amp;z=2&amp;i=561" alt="zebrafish tissue section" width="256" height="256"></a>
							</figure>

							<h2>Virtualslides</h2>

							<p>
Virtual slide technology enables users to view high resolution imagery with a significantly reduced download time. Virtual slides are panned and zoomed in a manner similar to a traditional microscope but offer labeling, comparison, and collaborative possibilities beyond the limitations of physical microscopy. We now seek contributions of high-resolution, high-quality 2D and 3D images for inclusion in this resource.
</p>

						</div>
					</div>

<!--
					<div class="column column-2">
						<div class="shadow-box news">

							<h2>News &amp; Updates</h2>

							<h3>Viewer updates</h3>
							<h4>2013 December 17</h4>

							<p>Extra functionality in the virtualslide viewer has been moved to a
							&quot;sliding panel&quot; on the right side of the viewer.  This frees up more
							space on the slide when the panel is closed and allows longer content to
							scroll. <a href="view.php?s=1761">Try it</a>!</p>

						</div>

					</div>
-->
				</div>-->
<?php

	echo $twig->render('base.twig.html', array(
		'page' => array(
			'species' => 'human',
			#'speciesimage' => 'images/croppedVitruvianMan.jpg',
                        #'specieslink' => './',
			#'speciesimagetext' => 'Human atlas',
			'content' => ob_get_clean()
		)
	));

