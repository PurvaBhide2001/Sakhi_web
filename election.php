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
        .thumbnail {
            display: inline-block;
            margin: 5px;
        }

        .thumbnail img {
            width: 100px;
            height: 100px;
        }

        .thumbnail .remove-btn {
            display: block;
            margin-top: 5px;
            padding: 5px 10px;
            /* background-color: #ff0000; */
            color: #6c0031;

            border: none;
            cursor: pointer;
        }

        .modal-content {
            width: 50%;
        }

        .secondary-button {
            background-color: #6c0031;
            color: #ffffff;
            cursor: pointer;
        }

        @media only screen and (max-width:467px) {
            .imgMobile {
                height: 50px !important;
                width: 50px !important;
            }
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
                            <div class="card" style="background-image:url('https://kitintellect.tech/storage/public/writable/uploads/election/t2_1715230211.png'); background-size:cover">
                                <div class="card-body">
                                    <div class="row" style="display:flex; justify-content:right">
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-md-12 m-1" style="display:flex; justify-content:right">
                                                    <img src="https://kitintellect.tech/storage/public/writable/uploads/election/blob_1715237693.png" class="pr-2 pl-2 imgMobile" height="80px" width="80px">
                                                    <!-- </div> -->
                                                    <!-- <div class="col-md-2 m-1" style="display:flex; justify-content:center"> -->
                                                    <img src="https://kitintellect.tech/storage/public/writable/uploads/election/blob_1715238263.png" class="pr-2 pl-2 imgMobile" height="90px" width="90px">
                                                    <!-- </div> -->
                                                    <!-- <div class="col-md-2 m-1" style="display:flex; justify-content:center"> -->
                                                    <img src="https://kitintellect.tech/storage/public/writable/uploads/election/blob_1715237748.png" class="pr-2 pl-2 imgMobile" height="100px" width="100px">
                                                    <!-- </div> -->
                                                    <!-- <div class="col-md-2 m-1"style="display:flex; justify-content:center">
                                                <img src="https://kitintellect.tech/storage/public/writable/uploads/election/blob_1715237693.png" height="80px" width="80px">
                                                </div> -->
                                                    <!-- <div class="col-md-2 m-1 pt-2"
                                                    style="display:flex; justify-content:center"> -->
                                                    <img src="https://kitintellect.tech/storage/public/writable/uploads/election/blob_1715237870.png" class="pr-2 pl-2 imgMobile" height="70px" width="70px">
                                                    <!-- </div>
                                                <div class="col-md-2 m-1" style="display:flex; justify-content:center"> -->
                                                    <img src="https://kitintellect.tech/storage/public/writable/uploads/election/SHG_E_Shop_Logo-removebg-preview_1715247352.png" class="pr-2 pl-2 imgMobile" height="90px" width="100px">
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-md-12 m-2 mt-5 text-center" style="display: flex;justify-content: center;">
                                            <h4>चूज फाईल ला क्लिक करून मतदानास जनजागृती करतानाचे काढलेले फोटो अपलोड करा
                                                आणि सबमिट करून आपले सर्टिफिकेट मिळवा.</h4>
                                        </div>
                                        <div class="col-md-12 m-2 mt-5" style="display: flex;justify-content: center;">
                                            <input type="file" id="fileInput" accept="image/*" multiple>
                                        </div>
                                        <div class="col-md-12 m-2 pt-2 pb-2" style="display: flex;justify-content: center;">
                                            <div id="thumbnails"></div>
                                        </div>
                                        <div class="col-md-12 m-2" style="display: flex;justify-content: center;">
                                            <button id="submit-btn" class="btn btn-primary">Submit</button>
                                        </div>
                                        <!-- Modal -->
                                        <div id="modal" class="modal">
                                            <div class="modal-content">
                                                <!-- Image and options will be dynamically added here -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
    <script src="assets/js/filter/electionReport.js"></script>
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

    <script>
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
    </script>

    <script>
        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        })
    </script>
</body>

</html>