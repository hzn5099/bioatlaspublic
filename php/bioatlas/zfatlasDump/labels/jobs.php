<?php

	include 'inc/twig.php';

	ob_start();

?>

<div class="section shadow-box">
	<h1>Job Opportunities</h1>
	<p>Nothing currently available; check back periodically.</p>
</div>

<?php

	echo $twig->render('base.twig.html', array('page' => array('content' => ob_get_clean())));

