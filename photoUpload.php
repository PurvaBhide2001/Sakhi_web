
<?php
$activePage = "daily_reports";
$mainMenu = "daily_reports";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>सखी - उपस्थिती</title>
    <?php include './include-common-style.php'; ?>
    <?php include './include-datatable-style.php'; ?>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            /* display: flex; */
            /* flex-direction: column; */
            align-items: center;
            justify-content: center;
        }

        header {
            background: #f4a261;
            padding: 1em;
            width: 100%;
            text-align: center;
        }

        /* .container {
            width: 80%;
            margin: 20px auto;
            text-align: center;
        } */

        video {
            width: 100%;
            max-width: 600px;
            border: 1px solid #ccc;
            border-radius: 10px;
        }

        button,
        input[type="file"] {
            margin-top: 10px;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #2a9d8f;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover,
        input[type="file"] {
            background-color: #264653;
        }

        #photo-container {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .photo-wrapper {
            position: relative;
            display: inline-block;
        }

        .photo-wrapper img {
            max-width: 100%;
            border: 1px solid #ccc;
            border-radius: 10px;
        }

        .delete-button {
            position: absolute;
            top: 5px;
            right: 5px;
            background-color: red;
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 12px;
            padding: 5px;
        }
    </style>
</head>

<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <?php include './include-sidebar.php'; ?>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">सखी -निवडणूक जनजागृति अभियान २०२४ </h1>
                        </div>

                    </div>
                </div>
            </div>


            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="container">
                                <button id="start-camera">Start Camera</button>
                                <button id="stop-camera">Stop Camera</button>
                                <video id="video" autoplay style="display: none;"></video>
                                <button id="capture" style="display: none;">Capture Photo</button>
                                <input type="file" id="upload" accept="image/*" multiple>
                                <canvas id="canvas" style="display: none;"></canvas>
                                <div id="photo-container"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- /.content-wrapper -->
        <?php include './include-copy-right.php'; ?>
    </div>
    <!-- ./wrapper -->
    <?php include './include-common-scripts.php'; ?>
    <?php include './include-datatable-scripts.php'; ?>
    <script src="assets/js/filter/photoUpload.js"></script>
    <script src="assets/js/parseData.js"></script>


    <!-- <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('fileInput').addEventListener('change', handleFileSelect);
            document.getElementById('submit-btn').addEventListener('click', submitImages);
        });

        function handleFileSelect(event) {
            const files = event.target.files;
            const thumbnailsContainer = document.getElementById('thumbnails');

            if (files.length + thumbnailsContainer.childElementCount > 5) {
                alert("You can only upload up to 5 files.");
                event.target.value = null;
                return;
            }

            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imageDataURL = e.target.result;
                    const imageName = file.name;
                    displayThumbnail(imageName, imageDataURL);
                };
                reader.readAsDataURL(file);
            });
        }

        function displayThumbnail(imageName, imageDataURL) {
            const thumbnailsContainer = document.getElementById('thumbnails');
            const thumbnail = document.createElement('div');
            thumbnail.classList.add('thumbnail');
            thumbnail.innerHTML = `
        <img src="${imageDataURL}" alt="Thumbnail" data-file-name="${imageName}">
        <button class="remove-btn" style="border-radius:5px"> <i class="fas fa-trash pr-2"></i> Remove</button>
    `;
            thumbnailsContainer.appendChild(thumbnail);
        }

        document.getElementById('thumbnails').addEventListener('click', function(event) {
            if (event.target.classList.contains('remove-btn')) {
                event.target.parentNode.remove();
            }
        });


        async function submitImages() {
            const thumbnails = document.querySelectorAll('.thumbnail img');
            if (thumbnails.length > 0) {
                const uploadedImageUrls = []; // Array to store uploaded image URLs
                try {
                    for (const thumbnail of thumbnails) {
                        const imageName = thumbnail.getAttribute('data-short-name');
                        const imageDataURL = thumbnail.src;

                        // Convert data URL to Blob
                        const blob = await fetch(imageDataURL).then(res => res.blob());

                        // Upload image
                        const imgUrlResponse = await uploadElectionImageApi(blob);
                        const imgUrl = JSON.parse(imgUrlResponse).url;
                        uploadedImageUrls.push(imgUrl);
                    }

                    // Call function to submit uploaded image URLs
                    submitElectionImages(uploadedImageUrls);
                    console.log('Uploaded image URLs:', uploadedImageUrls);
                } catch (error) {
                    console.error('Error occurred during image upload:', error);
                    alert('Error occurred during image upload. Please try again.');
                }
            } else {
                console.log('No images selected.');
            }
        }
        // Function to convert data URI to Blob
        function dataURItoBlob(dataURI) {
            const byteString = atob(dataURI.split(',')[1]);
            const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ab], {
                type: mimeString
            });
        }
 </script> -->

    <!-- <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('fileInput').addEventListener('change', handleFileSelect);
            document.getElementById('submit-btn').addEventListener('click', submitImages);
        });

        function handleFileSelect(event) {
            const files = event.target.files;
            const thumbnailsContainer = document.getElementById('thumbnails');

            if (files.length + thumbnailsContainer.childElementCount > 30) {
                alert("You can only upload up to 30 files.");
                event.target.value = null;
                return;
            }

            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imageDataURL = e.target.result;
                    const imageName = file.name;
                    displayThumbnail(imageName, imageDataURL);
                };
                reader.readAsDataURL(file);
            });
        }

        function displayThumbnail(imageName, imageDataURL) {
            const thumbnailsContainer = document.getElementById('thumbnails');
            const thumbnail = document.createElement('div');
            thumbnail.classList.add('thumbnail');
            thumbnail.innerHTML = `
            <img src="${imageDataURL}" alt="Thumbnail" data-file-name="${imageName}">
            <button class="remove-btn" style="border-radius:5px"> <i class="fas fa-trash pr-2"></i> Remove</button>
        `;
            thumbnailsContainer.appendChild(thumbnail);
        }

        document.getElementById('thumbnails').addEventListener('click', function(event) {
            if (event.target.classList.contains('remove-btn')) {
                event.target.parentNode.remove();
            }
        });

        async function submitImages() {
            const thumbnails = document.querySelectorAll('.thumbnail img');
            if (thumbnails.length === 0) {
                alert('Please select at least one image.');
                return;
            }

            // Disable submit button to prevent multiple submissions
            document.getElementById('submit-btn').disabled = true;

            const uploadedImageUrls = [];
            try {
                for (const thumbnail of thumbnails) {
                    const imageName = thumbnail.getAttribute('data-short-name');
                    const imageDataURL = thumbnail.src;
                    const blob = await fetch(imageDataURL).then(res => res.blob());
                    const imgUrlResponse = await uploadElectionImageApi(blob);
                    const imgUrl = JSON.parse(imgUrlResponse).url;
                    uploadedImageUrls.push(imgUrl);
                }
                submitElectionImages(uploadedImageUrls);
                console.log('Uploaded image URLs:', uploadedImageUrls);
            } catch (error) {
                console.error('Error occurred during image upload:', error);
                alert('Error occurred during image upload. Please try again.');
            } finally {
                // Re-enable submit button
                document.getElementById('submit-btn').disabled = false;
            }
        }
    </script> -->

    <script>
        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        })
    </script>
</body>

</html>