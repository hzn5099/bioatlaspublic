<?php

// Using search.php is easier than writing separate logic
header(sprintf('Location:  http://%s/search.php?atlas=107&thumbnails=1', $_SERVER['HTTP_HOST']));
exit;

