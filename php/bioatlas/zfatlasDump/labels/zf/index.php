<?php

	include '../inc/twig.php';

	ob_start();

?>

    <div id="contentboxgrey">
        <h1 class="mini-content-width title-header">The Zebrafish Atlas</h1>
    </div>
    <div id="contentboxwhite-extended">
        <div class="mini-content-width">
            <h1>Lifespan Atlas</h1>
            <hr>
            <p>
                Zebrafish (<i>Danio rerio</i>) have become an increasingly popular genetic model over the past
                twenty years. In our lab we use the zebrafish for cancer research, and it is the basis for this
                histological atlas. The atlas spans the life of the zebrafish from embryo to adult and contains
                sections of tissue from three anatomical planes (sagittal, coronal, and transverse).
            </p>
            <p>
                The Zebrafish Atlas contains 2- and 3-dimensional, anatomical reference slides of zebrafish to
                support research and education worldwide.
                <a href="http://en.wikipedia.com/wiki/H%26E_stain">Hematoxylin &amp; eosin</a>
                histological slides, at various points in the lifespan of the zebrafish, are scanned at 40x
                resolution and available here through a virtual slide viewer originally developed by Steven
                Peckins at Penn State.
            </p>

            <p>
                The size of the zebrafish allows sections to fall conveniently within the dimensions of the
                common 1&quot; x 3&quot; glass slide. We present slices cut in three orthogonal directions, chosen from
                multiple candidate fish and slices that were cut in complete sets. Our hope is for the site
                to increasingly function as a scaffold for collaborative research and educational activity.</p>

            <p>For the publication “Comparative Analysis of Fixation and Embedding Techniques for Optmized
                Histological Preparation of Zebrafish” full resolution figure slides and replicates can be
                found
                <a href="http://publications.chenglab.com">here</a>
            </p>
            <div class="access-viewer-btn">
                <a href="view.php?s=1761&z=2&c=22013,10742" alt="bioatlas viewer">Access the viewer here</a>
            </div>
        </div>
    </div>

				<!--<div class="two-column-layout">
					<div class="column column-1">
						<div class="shadow-box">

							<h1>A Lifespan Atlas of the Zebrafish</h1>

							<p>
Zebrafish (<i>Danio rerio</i>) have become an increasingly popular genetic model over the past twenty years. In our lab we use the zebrafish for cancer research, and it is the basis for this histological atlas. The atlas spans the life of the zebrafish from embryo to adult and contains sections of tissue from three anatomical planes (sagittal, coronal, and transverse).
</p>

							<figure class="right">
								<img src="../images/zebrafish.png" alt="adult wild-type zebrafish" width="256" height="66">
								<figcaption>Adult, wild-type zebrafish (<i>Danio rerio</i>)</figcaption>
							</figure>

							<p>
The Zebrafish Atlas contains 2- and 3-dimensional, anatomical reference slides of zebrafish to support research and education worldwide. 
 <a href="http://en.wikipedia.com/wiki/H%26E_stain">Hematoxylin &amp; eosin</a>
histological slides, at various points in the lifespan of the zebrafish, are scanned at 40x resolution and available here through a virtual slide viewer originally developed by Steven Peckins at Penn State.</p>

							<p>
The size of the zebrafish allows sections to fall conveniently within the dimensions of the common 1&quot; x 3&quot; glass slide. We present slices cut in three orthogonal directions, chosen from multiple candidate fish and slices that were cut in complete sets. Our hope is for the site to increasingly function as a scaffold for collaborative research and educational activity.</p>

<p>For the publication “Comparative Analysis of Fixation and Embedding Techniques for Optmized Histological Preparation of Zebrafish” full resolution figure slides and replicates can be found <a href="http://publications.chenglab.com">here</a></p>

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
			'content' => ob_get_clean(),
			'species' => 'zebrafish',
                        'speciesimage' => '../images/zebrafishNoBack.png',
			'speciesimagetext' => 'Zebrafish atlas',
                        'specieslink' => './'
		)
	));

