<?php

require '/data/php/bioatlas/bioatlas/zfatlasDump/config.php';

// ------------------------------------------------------------------------
// Connect
// ------------------------------------------------------------------------
$zfatlas_db = mysqli_init();
mysqli_options($zfatlas_db, MYSQLI_OPT_SSL_VERIFY_SERVER_CERT, true);
mysqli_ssl_set($zfatlas_db, null, null, $db_ssl_ca, null , null);
mysqli_real_connect($zfatlas_db, $zf_mysql_host, $zf_mysql_admin, $zf_mysql_admin_pass, $zf_mysql_db, $zf_mysql_port, null, 64);

if ($a=mysqli_connect_errno()) {
    echo $a;
    header('HTTP/1.1 503 Server Error');
    printf("MySQL error:  %s\n",  mysqli_connect_error());
    exit(1);
}