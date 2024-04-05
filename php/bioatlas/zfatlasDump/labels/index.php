<?php

include 'inc/twig.php';

ob_start();

?>
    <div id="picturecontentbox">
        <div id="contentboxgrey">
            <div class="mini-content-width">
                <h1>The Atlas</h1>

                <hr>

                <p>
                    We're thrilled to introduce our latest addition to enhancing your
                    slide viewing experience: OpenSeadragon. This cutting-edge image
                    viewer offers unparalleled versatility and performance, allowing
                    you to seamlessly explore our high-resolution images with fluid
                    zooming and smooth navigation. Click on the button below to get
                    started!
                </p>
                <div class="access-viewer-btn">
                    <a href="view.php?s=1761&z=2&c=22013,10742" alt="bioatlas viewer">Access the viewer</a>
                </div>
            </div>
        </div>
    </div>
    <div id="contentboxwhite-extended" class="padding">
        <div class="mini-content-width">
            <h2 class="right padding-main-page"><b>A Collaborative Platform for Comparative Microanatomy</b></h2>

            <hr>

            <p>
                The atlas project was originally focused on the microanatomy of zebrafish and
                humans, viewable as <em>virtual slides</em>.
                The content is being re-organized to have subsections devoted to zebrafish,
                humans, mice, and other model systems. We are working on ways to present
                <em>microCT</em>-based 3D histology.  We welcome ideas and high-resolution
                slides and images from the community and are seeking collaborations that would
                make the resource more valuable.
            </p>
            <p>
                The Bio-Atlas is organized with subsections devoted to humans, zebrafish, mice,
                and other model systems. The project was originally focused on the microanatomy
                of zebrafish. To address the need for a more human orientation, we introduce the
                Bio-Atlas as a platform for coordination of data between human and other model systems.
            </p>
            <p>
                Since pathophysiological mechanisms in humans are reflected in tissue architecture,
                morphological changes in the best models of human disease will involve similar phenotypes
                as in humans. We welcome ideas and high-resolution 2D and 3D images from the community and
                are seeking collaborations to expand this resource.
            </p>
        </div>
    </div>
    <!--<div class="two-column-layoutt">
        <div class="column column-1">
        </div>

        <div class="column column-2">
            <div class="shadow-box news">

                <h2>Publications</h2>

                <h3>2018 August</h3>
<p>
'Comparative analysis of fixation and embedding techniques

                  for optimized histological preparation of zebrafish.

                  Copper JE, Budgeon LR, Foutz CA, van Rossum DB, Vanselow DJ, Hubley MJ, Clark

                  P, Mandrell DT, Cheng KC.

                  Comp Biochem Physiol C Toxicol Pharmacol. 2018 Jun;208:38-46.

                  doi: 10.1016/j.cbpc.2017.11.003. Epub 2017 Nov 20.

                  PMID: 29157956
</p>
                <h4>2013 December 17</h4>

                <p>Extra functionality in the virtualslide viewer has been moved to a
                &quot;sliding panel&quot; on the right side of the viewer.  This frees up more
                space on the slide when the panel is closed and allows longer content to
                scroll. <a href="view.php?s=1761">Try it</a>!</p>
                -->

        <!--</div>-->

    </div>
    </div>-->
<?php

echo $twig->render('base.twig.html', array(
    'page' => array(
        'content' => ob_get_clean()
    )
));

