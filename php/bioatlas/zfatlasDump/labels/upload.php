<?php

header("Expires: Mon, 26 Jul 1997 05:00:00 GMT"); 
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT"); 
header("Cache-Control: no-store, no-cache, must-revalidate"); 
header("Cache-Control: post-check=0, pre-check=0", false); 
header("Pragma: no-cache"); 
 
$targetDir = "../../../uploads/";
$cleanupTargetDir = true;
$maxFileAge = 5 * 3600;
 
// Create target dir 
if (!file_exists($targetDir)) { 
   @mkdir($targetDir, 0660, true);
}

$fileName = isset($_REQUEST["name"]) ? $_REQUEST["name"] : uniqid("file_");
$fileName = basename($fileName);

$filePath = $targetDir . DIRECTORY_SEPARATOR . $fileName; 
 
// Chunking might be enabled 
$chunk = isset($_REQUEST["chunk"]) ? intval($_REQUEST["chunk"]) : 0; 
$chunks = isset($_REQUEST["chunks"]) ? intval($_REQUEST["chunks"]) : 0; 

$allowedExtensions = array("tif", "csv");
$uploadedExtension = pathinfo($fileName, PATHINFO_EXTENSION);
if (!in_array(strtolower($uploadedExtension), $allowedExtensions)) {
    die('{"jsonrpc" : "2.0", "error" : {"code": 104, "message": "Invalid file type."}, "id" : "id"}');
}

// Remove old temp files
if ($cleanupTargetDir) {
    if (!is_dir($targetDir) || !$dir = opendir($targetDir)) { 
        die('{"jsonrpc" : "2.0", "error" : {"code": 100, "message": "Failed to open temp directory."}, "id" : "id"}'); 
    } 
 
    while (($file = readdir($dir)) !== false) { 
        $tmpfilePath = $targetDir . DIRECTORY_SEPARATOR . $file; 
 
        // If temp file is current file proceed to the next 
        if ($tmpfilePath == "{$filePath}.part") { 
            continue; 
        } 
 
        // Remove temp file if it is older than the max age and is not the current file 
        if (preg_match('/\.part$/', $file) && (filemtime($tmpfilePath) < time() - $maxFileAge)) { 
            @unlink($tmpfilePath); 
        } 
    } 
    closedir($dir); 
}     
 
// Open temp file 
if (!$out = @fopen("{$filePath}.part", $chunks ? "ab" : "wb")) { 
    die('{"jsonrpc" : "2.0", "error" : {"code": 102, "message": "Failed to open output stream."}, "id" : "id"}'); 
} 
 
if (!empty($_FILES)) { 
    if ($_FILES["file"]["error"] || !is_uploaded_file($_FILES["file"]["tmp_name"])) { 
        die('{"jsonrpc" : "2.0", "error" : {"code": 103, "message": "Failed to move uploaded file."}, "id" : "id"}'); 
    } 
 
    // Read binary input stream and append it to temp file 
    if (!$in = @fopen($_FILES["file"]["tmp_name"], "rb")) { 
        die('{"jsonrpc" : "2.0", "error" : {"code": 101, "message": "Failed to open input stream."}, "id" : "id"}'); 
    } 
} else {     
    if (!$in = @fopen("php://input", "rb")) { 
        die('{"jsonrpc" : "2.0", "error" : {"code": 101, "message": "Failed to open input stream."}, "id" : "id"}'); 
    } 
} 
 
while ($buff = fread($in, 4096)) { 
    fwrite($out, $buff); 
} 
 
@fclose($out); 
@fclose($in); 
 
// Check if file has been uploaded 
if (!$chunks || $chunk == $chunks - 1) { 
    // Strip the temp .part suffix off  
    rename("{$filePath}.part", $filePath); 
} 
 
// Return Success JSON-RPC response 
die('{"jsonrpc" : "2.0", "result" : {"status": 200, "message": "The file has been uploaded successfully!"}}'); 
?>