<?php

	include 'inc/twig.php';

	ob_start();

?>

<div id="contentboxgrey">
    <div class="mini-content-width">
        <h1 class="title-header">H&E vs MicroCT Comparisons</h1>
    </div>
</div>

<div class="content-width padding">
	<div class="column column-1">

		<div class="shadow-box">

            <h3><b>MicroCT: Imaging Small-Scale Structures with X-Ray Technology</b></h3>
			<p>MicroCT (micro computerized tomography) is an X-ray based process where serial images are taken around an axial rotation.  The method is analogous to that used for the 3D imaging of human structures, albeit on a smaller scale.  It is dependent upon the interaction of large atoms with X-ray beams and requires the use of contrast agents, still in development, for imaging anything other than bone.  The preliminary images are obtained from <a href="http://www.numirabio.com/">Numira Biosciences</a> and in collaboration with <a href="http://www.microphotonics.com/">Micro Photonics, Inc.</a> (Allentown, PA).  They are visualized using a comparison tool, which will allows the side-by-side comparison of multiple images and imaging modalities.</p>

            <hr>

            <div class="mini-content-width">
                <h4>Coronal (dorsal to ventral)</h4>
                <div style="float:left; margin-right:2%"><!-- DIV wrapper necessary for IE6-7 to display numbers on floated OLs -->
                    <ol>
                        <li><a href="compare.php?layout=vertical&amp;s[]=73&amp;s[]=129">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=74&amp;s[]=130">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=75&amp;s[]=131">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=76&amp;s[]=132">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=79&amp;s[]=133">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=77&amp;s[]=134">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=78&amp;s[]=135">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=72&amp;s[]=136">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=80&amp;s[]=137">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=81&amp;s[]=138">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=82&amp;s[]=139">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=83&amp;s[]=140">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=84&amp;s[]=141">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=85&amp;s[]=142">Juvenile (7.8mm)</a></li>
                    </ol>
                </div>
                <figure class="left">
                    <a href="compare.php?layout=vertical&amp;s[]=85&amp;s[]=142"><img src="images/16260.png" alt="histology" width="540" height="107"><img src="images/0536.png" alt="microCT" width="540" height="115"></a>
                </figure>

                <h4 style="clear:both">Sagittal (left to right)</h4>
                <div style="float:left; margin-right:2%">
                    <ol>
                        <li><a href="compare.php?layout=vertical&amp;s[]=64&amp;s[]=86">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=65&amp;s[]=87">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=66&amp;s[]=88">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=67&amp;s[]=89">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=68&amp;s[]=90">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=69&amp;s[]=106">Juvenile (7.8mm)</a></li>
                        <li><a href="compare.php?layout=vertical&amp;s[]=70&amp;s[]=107">Juvenile (7.8mm)</a></li>
                    </ol>
                </div>
                <figure class="left">
                    <a href="compare.php?layout=vertical&amp;s[]=66&amp;s[]=88"><img src="images/15890.png" alt="histology" width="450" height="107"><img src="images/2471.png" alt="microCT" width="450" height="115"></a>
                </figure>
            </div>

		</div>

    </div>
</div>
    <div id="contentboxgrey-extended">
        <div class="content-width">
            <h3><b>MicroCT X-Ray Projections</b></h3>

            <p>Micro CT (micron scale computed tomography) analysis of zebrafish begins with x-ray projections through the fish from 0&deg; to 180&deg; (mirrored to 360&deg;) in increments of a fixed size. These x-rays are then processed using the Feldkamp algorithm to generate two-dimensional slices through the fish from any given angle<!-- (seen elsewhere within the atlas)-->. The series of aligned two-dimensional slices serves as a basis for three-dimensional reconstruction, analysis, and quantification, areas which we are actively investigating.</p>

            <figure class="centered">
                <a href="view.php?s=262"><img src="tile.jpeg.php?s=262&amp;z=4&amp;i=0" alt="x-ray projection" width="558" height="96"></a>
                <!-- s=263&z=4 is actually 549px, but stretch it to match -->
                <a href="view.php?s=263"><img src="tile.jpeg.php?s=263&amp;z=4&amp;i=0" alt="x-ray projection" width="558" height="146"></a>

                <figcaption>Seen here are a dorsal and a ventral view of an unstained, 60 dpf juvenile zebrafish (fixed in 10% NBF). These x-ray images were generated using the <a href="http://www.skyscan.be/products/1172.htm">SkyScan 1172 Computed Tomography System</a>, operated and calibrated by our collaborators from <a href="http://www.microphotonics.com/">Micro Photonics, Inc</a>.</figcaption>

            </figure>
        </div>
    </div>

<?php

	echo $twig->render('base.twig.html', array(
		'page' => array(
			'content' => ob_get_clean()
		)
	));

