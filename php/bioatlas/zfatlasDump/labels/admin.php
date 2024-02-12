<?php
    require '/dev/php/bioatlas/zfatlasScripts/scripts/bulk_upload';
    include 'inc/twig.php';
?>

<div id="background" class="shadow-box">
    <h1>Slide Import</h1>
    <p>The general steps to follow to upload slides to bioatlas:</p>
    <p>You may use the file selector to add multiple .tif files. Selecting the Upload Slides button will then upload each .tif file
    to be available to import into the atlas.</p>

    <p>Note you must also upload a metadata.csv file which rows correspond with the .tif files to be imported. Any .tif slides not
    specified in the metadata.csv file will not be imported.</p>
    <p>After uploading the desired files, you may then select the Import Uploaded Files into Atlas button. This will then verify that a
    metadata.csv file exists and then perform the import. If the import is successful, it will display a success message. If there were issues
    with the import, the import for that slide will be aborted and error messages will be displayed. In both cases, the uploaded metadata.csv file along
    with the uploaded .tif slides will be deleted, and will need to be uploaded again through the Upload Slides button if you wish to try to import them
    into the atlas again.</p>
</div>

<div id="background" class="shadow-box">
    <div class="form-group">
        <label><b>Select Files:</b></label>
        </br>
        <input type="file" class="form-control" id="fileInput">
    </div>

    <div id="fileList"></div>
    </br>

    <div class="form-group">
        <a id="uploadBtn" href="javascript:;" class="btn btn-success">Upload Files</a>
    </div>
    </br>

    <div class="progress"></div>
    </br>

    <div id="statusResponseList"></div>
</div>
</br>

<div id="background" class="shadow-box">
    <form action="admin.php" method="post" enctype="multipart/form-data">
        <input id="submit" type="submit" value="Import Uploaded Files into Atlas" name="submit">
    </form>
</div>

<?php
    $target_dir = "/data/php/uploads/";
    $target_file = $target_dir . "metadata.csv";
    $_exit = 0;

    if (isset($_POST["submit"])) {

        $files = preg_grep('~\.(tif)$~', scandir($target_dir));
        $files = scandir($target_dir);
        if (!is_file($target_file)) {
            $_exit = 1;
        }
        if ($_exit != 0) {
            echo "<div id='background' class='shadow-box'>";
            echo "Please verify that a metadata.csv file has been uploaded. <br />";
            echo "Here are the current files ready for upload: <br />";
            $files = preg_grep('~\.(tif|csv)$~', scandir($target_dir));
            foreach($files as $file) {
                echo $file . "<br />";
            }
            echo "</div>";
        }
        else {
            $import_msg = run_upload($target_file, $target_dir);
            echo "<div id='background' class='shadow-box'>" . $import_msg . "</div>'";
        }
    }
?>

<?php
echo $twig->render('base.twig.html',
        array('page' =>
                array('content'=> ob_get_clean(), 'scripts'=>
                        array('scriptaculous-js-1.9.0/lib/prototype.js',
                          'scriptaculous-js-1.9.0/src/scriptaculous.js?load=effects',
                  'about.js',
                  'plupload.full.min.js'
                        )
                )
        )
);
?>

<script>
// Define Plupload uploader with configuration options
var uploader = new plupload.Uploader({
    runtimes : 'html5',
    browse_button : 'fileInput',
    url : 'upload.php',
    multi_selection: true,
    chunk_size: '15mb',
        
    filters : {
        max_file_size : '100000mb',
        mime_types: [
            {title : "Image files", extensions : "tif"},
            {title : "Document files", extensions : "csv"}
        ]
    },

    init: {
        PostInit: function() {
            document.getElementById('fileList').innerHTML = '';
            document.getElementById('uploadBtn').onclick = function() {
                if (uploader.files.length < 1) {
                    document.getElementById('statusResponse').innerHTML = '<p style="color:#EA4335;">Please select a file to upload.</p>';
                    return false;
                }else{
                    uploader.start();
                    document.getElementById('submit').disabled = true;
                    return false;
                }
            };
        },

        FilesAdded: function(up, files, result) {
            plupload.each(files, function(file) {
                document.getElementById('fileList').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
            });
        },

        UploadProgress: function(up, file) {
            document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
            document.querySelector(".progress").innerHTML = '<div class="progress-bar" style="width: '+file.percent+'%;">'+file.percent+'%</div>';
        },

        FileUploaded: function(up, file, result) {
            var responseData = result.response.replace('"{', '{').replace('}"', '}');
            var objResponse = JSON.parse(responseData);
            document.getElementById('statusResponseList').innerHTML += '<p style="color:#198754;">' + file.name + ' ' + objResponse.result.message + '</p>';
            document.getElementById('submit').disabled = false;
        },

        Error: function(up, err) {
            document.getElementById('statusResponse').innerHTML = '<p style="color:#EA4335;">Error #' + err.code + ': ' + err.message + '</p>';
        }
    }
});
uploader.init();
</script>
