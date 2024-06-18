<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>उमेद-मुक्ताई </title>
    <?php include './include-common-style.php'; ?>
    <?php include './include-datatable-style.php'; ?>
    <style>
        #video {
            border: 2px solid #ddd;
            margin-bottom: 10px;
            /* display: none; */
        }

        #capture {
            display: block;
            margin: 10px 0;
        }

        #canvas {
            display: none;
        }

        #snapshot {
            display: none;
        }

        #snapshot img {
            max-width: 100%;
            height: auto;
            border: 2px solid #ddd;
            margin-bottom: 10px;
        }

        #upload {
            display: none;
            margin-top: 10px;
        }

        .thumbnail {
            display: inline-block;
            margin: 5px;
            position: relative;
        }

        .thumbnail img {
            max-width: 100px;
            max-height: 100px;
        }

        .remove-btn {
            position: absolute;
            top: 0;
            right: 0;
            background: red;
            color: white;
            border: none;
            padding: 5px;
            cursor: pointer;
        }
    </style>
</head>

<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <?php include './include-sidebar.php'; ?>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0" id="name_upade">दैनंदिन कामाचा अहवाल </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-header">
                <div class="container-fluid">
                    <div class="container ">
                        <section class="content">
                            <div class="container-fluid text-uppercase">
                                <div class="card card-default">
                                    <div class="card-body">

                                        <form id="WorkReportFormData" action="">
                                            <div id="workReport">
                                                <!-- Existing form fields -->

                                                <!-- Capture and upload image section -->
                                                <div class="row pt-3" id="dailyReportImages" class="dailyReportImages">
                                                    <div class="col-md-6 form-group" id="location_img">
                                                        <label for="image_of_location">कर्मचारीचे ठिकाणा वरील छायाचित्र </label>
                                                        <input type="file" class="form-control-file" id="image_of_location" name="image_of_location" accept="image/*" capture="environment">
                                                        <video id="location_video" width="320" height="240" autoplay></video> <!-- Unique ID -->
                                                        <button id="location_capture">Capture</button>
                                                        <canvas id="location_canvas" width="320" height="240"></canvas>
                                                        <div id="location_snapshot">
                                                            <h3>Snapshot</h3>
                                                            <img id="location_snapshot-img" src="" alt="Snapshot">
                                                        </div>
                                                        <button id="location_upload">Upload</button>
                                                    </div>
                                                    <div class="col-md-6 form-group" id="meeting_img">
                                                        <label for="meeting_photos">मीटिंगचे फोटो (किमान 1, जास्तीत जास्त 5):</label>
                                                        <div class="col-md-6 form-group">
                                                            <input type="file" class="form-control-file" id="meeting_photos" name="meeting_photos[]" accept="image/*" multiple>
                                                            <video id="meeting_video" width="320" height="240" autoplay></video> <!-- Unique ID -->
                                                            <button id="meeting_capture">Capture</button>
                                                            <canvas id="meeting_canvas" width="320" height="240"></canvas>
                                                            <div id="meeting_snapshot">
                                                                <h3>Snapshot</h3>
                                                                <div id="meeting_snapshot-images"></div>
                                                            </div>
                                                            <button id="meeting_upload">Upload</button>
                                                        </div>
                                                    </div>

                                                </div>

                                                <!-- Other form fields -->

                                                <div class="row">
                                                    <div class="col-md-12 d-flex justify-content-center">
                                                        <button type="button" class="btn datatable-button my-2" id="submit">जतन करा </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content -->
        </div>
    </div>
    <?php include './include-copy-right.php'; ?>
    </div>
    <?php include './include-common-scripts.php'; ?>
    <?php include './include-datatable-scripts.php'; ?>
    <script src="./assets/js/filter/photoUpload.js"></script>

    <script>
        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        });
    </script>
</body>

</html>