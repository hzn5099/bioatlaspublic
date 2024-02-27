<?php
error_reporting(E_ALL);
ini_set('display_errors',1);

if (isset($_GET['s'], $_GET['z'], $_GET['i'])
    && ctype_digit($_GET['s'])
    && ctype_digit($_GET['z'])
    && ctype_digit($_GET['i'])
) {
    include 'inc/connect.php';
    include 'inc/base.php';

    $query ='SELECT SQL_NO_CACHE image FROM virtualslide_tiles WHERE slide_id=%d AND level=%d AND tile_id=%d';
    $result = zf_mysql_query($query, $_GET['s'], $_GET['z'], $_GET['i']);
    var_dump($result);
    echo "s:" . $_GET['s'] . "z:" . $_GET['z'] . "i:" . $_GET['i'];

    if (!$result) {

        echo("Reached 1");
        header('HTTP/1.1 503 Service Unavailable', true, 503);

    } else if (!mysqli_num_rows($result)) {

        echo("Reached 2");
        header('HTTP/1.1 404 Not Found', true, 404);

    } else {

        echo("Reached 3");
        header('Content-type: image/jpeg');
        $row = mysqli_fetch_row($result);
        echo $row[0];

    }

} else {

    echo("Reached 4");
    header('HTTP/1.1 400 Bad Request', true, 400);

}