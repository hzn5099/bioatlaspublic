<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (isset($_GET['s'], $_GET['z'], $_GET['i'])
    && ctype_digit($_GET['s'])
    && ctype_digit($_GET['z'])
    && ctype_digit($_GET['i'])
) {
    include 'inc/connect.php'; // Include your database connection file
    include 'inc/base.php'; // Include any other necessary files

    $query ='SELECT SQL_NO_CACHE image FROM virtualslide_tiles WHERE slide_id=%d AND level=%d AND tile_id=%d';
    $result = zf_mysql_query($query, $_GET['s'], $_GET['z'], $_GET['i']);

    if (!$result) {
        echo("Query Error: " . mysqli_error($conn)); // Output MySQL error message
        header('HTTP/1.1 503 Service Unavailable', true, 503);
    } else if (!mysqli_num_rows($result)) {
        echo("No rows found"); // Output message for no rows found
        header('HTTP/1.1 404 Not Found', true, 404);
    } else {
        header('Content-type: image/jpeg');
        $row = mysqli_fetch_row($result);
        echo $row[0];
    }

} else {
    echo("Invalid Request"); // Output message for invalid request
    header('HTTP/1.1 400 Bad Request', true, 400);
}
?>
