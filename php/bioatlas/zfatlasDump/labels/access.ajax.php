<?php
    // Collect some use data
if (isset($_POST, $_POST['slide'], $_POST['clientWidth'], $_POST['clientHeight'])) {
    include 'inc/connect+.php';
    $stmt = $zfatlas_db->prepare("INSERT INTO access VALUES (NOW(), INET_ATON(?), NULL, ?, ?, ?, ?)");
    $stmt->bind_param("sddds",
            $_SERVER['REMOTE_ADDR'],
            intval($_POST['slide']),
            intval($_POST['clientWidth']),
            intval($_POST['clientHeight']),
            mysqli_real_escape_string($zfatlas_db, $_SERVER['HTTP_USER_AGENT'])
);
    $stmt->execute();

    if (mysqli_errno($zfatlas_db)) {
            printf('{/* %s */}', mysqli_error($zfatlas_db));
    }

    $stmt->close();
}
?>

