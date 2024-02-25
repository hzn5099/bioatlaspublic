<?php
// Redirect to labels/view.php
header("Location: /view.php?" . $_SERVER['QUERY_STRING']);
exit; // Ensure that subsequent code is not executed
?>
