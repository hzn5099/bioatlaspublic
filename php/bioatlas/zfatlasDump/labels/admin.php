<?php
// Enable all PHP error reporting and explicitly set the error reporting level (should use constants like E_ALL).
error_reporting(E_ALL);
ini_set('display_errors', 2);

// Include external PHP scripts for additional functionality.
require '../../zfatlasScripts/scripts/bulk_upload';
include 'inc/twig.php';
?>

<!-- HTML content for the user interface, providing instructions and file upload capabilities -->
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

<!-- Form for selecting files to upload -->
<div id="background" class="shadow-box">
    <div class="form-group">
        <label><b>Select Files:</b></label>
        </br>
        <input type="file" class="form-control" id="fileInput">
    </div>

    <div id="fileList"></div>
    </br>

    <!-- Button to trigger file upload -->
    <div class="form-group">
        <a id="uploadBtn" href="javascript:;" class="btn btn-success">Upload Files</a>
    </div>
    </br>

    <!-- Progress bar and status response list for visual feedback during upload -->
    <div class="progress"></div>
    </br>

    <div id="statusResponseList"></div>
</div>
</br>

<!-- Form for submitting the request to import files into the atlas -->
<div id="background" class="shadow-box">
    <form action="admin.php" method="post" enctype="multipart/form-data">
        <input id="submit" type="submit" value="Import Uploaded Files into Atlas" name="submit">
    </form>
</div>

<?php
// Server-side directory setup for file uploads.
$target_dir = "../../../uploads/";
$target_file = $target_dir . "metadata.csv";
$_exit = 0;

// Handling the post submission for file import.
if (isset($_POST["submit"])) {
    // Scan the directory for tif files, initially attempting to read all files before filtering.
    $files = preg_grep('~\.(tif)$~', scandir($target_dir));
    $files = scandir($target_dir); // This line seems redundant after filtering tif files above.
    // Check for metadata.csv file existence.
    if (!is_file($target_file)) {
        $_exit = 1;
    }
    // If the metadata.csv is missing or other exit conditions are met, show error message.
    if ($_exit != 0) {
        echo "<div id='background' class='shadow-box'>";
        echo "Please verify that a metadata.csv file has been uploaded. <br />";
        // Display the files available for upload, filtered by tif and csv extensions.
        $files = preg_grep('~\.(tif|csv)$~', scandir($target_dir));
        foreach($files as $file) {
            echo $file . "<br />";
        }
        echo "</div>";
    } else {
        // If all required files are present, attempt to run the upload and import process.
        $import_msg = run_upload($target_file, $target_dir);
        // Display the result of the import process.
        echo "<div id='background' class='shadow-box'>" . $import_msg . "</div>'";
    }
}
?>

<!-- Render the Twig template for consistent page layout and include necessary scripts -->
<?php
echo $twig->render('base.twig.html', array(
    'page' => array(
        'content' => ob_get_clean(),
        'scripts' => array(
            'scriptaculous-js-1.9.0/lib/prototype.js',
            'scriptaculous-js-1.9.0/src/scriptaculous.js?load=effects',
            'about.js',
            'plupload.full.min.js'
        )
    )
));
?>

<!-- JavaScript for initializing and configuring the Plupload file uploader -->
<script>
    // Initialize the Plupload uploader with specific configurations.
    var uploader = new plupload.Uploader({
        runtimes : 'html5',
        browse_button : 'fileInput', // The ID of the file input button.
        url : 'upload.php', // The server-side script to handle uploads.
        multi_selection: true, // Allow multiple file selection.
        chunk_size: '15mb', // Split files into chunks of this size.

        // Specify the allowed file types and size limits.
        filters : {
            max_file_size : '100000mb',
            mime_types: [
                {title : "Image files", extensions : "tif"},
                {title : "Document files", extensions : "csv"}
            ]
        },

        // Event handlers for various uploader events.
        init: {
            // Initialization actions after loading.
            PostInit: function() {
                // Clear the file list on the page and set up the upload button action.
                document.getElementById('fileList').innerHTML = '';
                document.getElementById('uploadBtn').onclick = function() {
                    // Check if files were selected and start the upload process.
                    if (uploader.files.length < 1) {
                        // Display error if no files are selected.
                        document.getElementById('statusResponse').innerHTML = '<p style="color:#EA4335;">Please select a file to upload.</p>';
                        return false;
                    } else {
                        uploader.start();
                        // Disable the submit button until upload is complete.
                        document.getElementById('submit').disabled = true;
                        return false;
                    }
                };
            },

            // Update the UI with the file list when files are added.
            FilesAdded: function(up, files) {
                plupload.each(files, function(file) {
                    document.getElementById('fileList').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
                });
            },

            // Update the UI with upload progress.
            UploadProgress: function(up, file) {
                document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
                document.querySelector(".progress").innerHTML = '<div class="progress-bar" style="width: '+file.percent+'%;">'+file.percent+'%</div>';
            },

            // Handle individual file upload success.
            FileUploaded: function(up, file, result) {
                // Parse and display the server response for each file.
                var responseData = result.response.replace('"{', '{').replace('}"', '}');
                var objResponse = JSON.parse(responseData);
                document.getElementById('statusResponseList').innerHTML += '<p style="color:#198754;">' + file.name + ' ' + objResponse.result.message + '</p>';
                // Re-enable the submit button after file upload completion.
                document.getElementById('submit').disabled = false;
            },

            // Handle upload errors.
            Error: function(up, err) {
                document.getElementById('statusResponse').innerHTML = '<p style="color:#EA4335;">Error #' + err.code + ': ' + err.message + '</p>';
            }
        }
    });
    uploader.init();
</script>
