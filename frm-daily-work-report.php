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
            margin: 10px;
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

        .image-row {
            display: flex;
        }

        .image-row img {
            margin: 5px;
        }
    </style>
</head>

<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper"><?php include './include-sidebar.php'; ?> <div class="content-wrapper">
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
                                                <div class="row pt-3"><input type="hidden" id="user_id" name="user_id">
                                                    <div class="col-md-6 form-group"><label for="date">दिनांक:</label><input type="text" class="form-control" id="date" name="date" required readOnly></div>
                                                    <div class="col-md-6 form-group"><label for="location">स्थानाचे नाव:</label><input type="text" class="form-control" id="location" name="location" required></div>
                                                </div>
                                                <div class="row pt-3">
                                                    <div class="col-md-9 form-group"><label for="completed_work">पूर्ण केलेले काम:</label><textarea class="form-control" id="completed_work" name="completed_work" rows="3" required></textarea></div>
                                                    <div class="col-md-3 form-group"><label for="type_of_work">कामाचे स्वरूप :</label><textarea class="form-control" id="type_of_work" name="type_of_work" rows="3" required></textarea></div>
                                                </div>
                                                <!-- <div class="row">
                                                    <div class="col-md-6 form-group" id="location_img">
                                                        <label for="location_photos">स्थानाचे फोटो :</label>
                                                        <div class="col-md-6 form-group">
                                                            <input type="file" class="form-control-file" id="image_of_location" name="location_photos[]" accept="image/*">
                                                            <button id="location_camera_icon" class="btn datatable-button my-2 ">
                                                                <i class="fa fa-camera"></i> Open Camera
                                                            </button>
                                                            <video id="location_video" width="320" height="240" autoplay style="display: none;"></video>
                                                            <div class="row">
                                                                <button id="location_capture" class="btn datatable-button my-2" style="display: none;">Capture</button>
                                                            </div>
                                                            <canvas id="location_canvas" width="120" height="120" style="display: none;"></canvas>
                                                            <div id="location_snapshot" style="display: none;">
                                                                <h3>Snapshot</h3>
                                                                <div id="location_snapshot-images" class="image-row"></div>
                                                            </div>
                                                            <button id="location_upload" class="btn datatable-button my-2" style="display: none;">Upload</button>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 form-group" id="meeting_img">
                                                        <label for="meeting_photos">मीटिंगचे फोटो (किमान 1, जास्तीत जास्त 5):</label>
                                                        <div class="col-md-6 form-group">
                                                            <input type="file" class="form-control-file" id="meeting_photos" name="meeting_photos[]" accept="image/*" multiple>
                                                            <button id="meeting_camera_icon" class="btn datatable-button my-2">
                                                                <i class="fa fa-camera"></i> Open Camera
                                                            </button>
                                                            <video id="meeting_video" width="320" height="240" autoplay style="display: none;"></video>
                                                            <div class="row">
                                                                <button id="meeting_capture" class="btn datatable-button my-2" style="display: none;">Capture</button>
                                                            </div>
                                                            <canvas id="meeting_canvas" width="120" height="120" style="display: none;"></canvas>
                                                            <div id="meeting_snapshot" style="display: none;">
                                                                <h3>Snapshot</h3>
                                                                <div id="meeting_snapshot-images" class="image-row"></div>
                                                            </div>
                                                            <button id="meeting_upload" class="btn datatable-button my-2" style="display: none;">Upload</button>
                                                        </div>
                                                    </div>
                                                </div> -->
                                                <div class="row " id="dailyReportImages">
                                                    <div class="col-md-6 form-group" id="location_img">
                                                        <label for="location_photos">स्थानाचे फोटो :</label>
                                                        <div class="col-md-6 form-group">
                                                            <input type="file" class="form-control-file" id="image_of_location" name="location_photos[]" accept="image/*">
                                                            <button id="location_camera_icon" class="btn btn-primary my-2">
                                                                <i class="fa fa-camera"></i> Open Camera
                                                            </button>
                                                            <video id="location_video" width="320" height="240" autoplay style="display: none;"></video>
                                                            <div class="row">
                                                                <button id="location_capture" class="btn datatable-button my-2" style="display: none;">Capture</button>
                                                            </div>
                                                            <canvas id="location_canvas" width="120" height="120" style="display: none;"></canvas>
                                                            <div id="location_snapshot" style="display: none;">
                                                                <h3>Snapshot</h3>
                                                                <div id="location_snapshot-images" class="image-row"></div>
                                                            </div>
                                                            <button id="location_upload" class="btn datatable-button my-2" style="display: none;">Upload</button>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 form-group" id="meeting_img">
                                                        <label for="meeting_photos">मीटिंगचे फोटो (किमान 1, जास्तीत जास्त 5):</label>
                                                        <div class="col-md-6 form-group">
                                                            <input type="file" class="form-control-file" id="meeting_photos" name="meeting_photos[]" accept="image/*" multiple>
                                                            <button id="meeting_camera_icon" class="btn btn-primary my-2">
                                                                <i class="fa fa-camera"></i> Open Camera
                                                            </button>
                                                            <video id="meeting_video" width="320" height="240" autoplay style="display: none;"></video>
                                                            <div class="row">
                                                                <button id="meeting_capture" class="btn datatable-button my-2" style="display: none;">Capture</button>
                                                            </div>
                                                            <canvas id="meeting_canvas" width="120" height="120" style="display: none;"></canvas>
                                                            <div id="meeting_snapshot" style="display: none;">
                                                                <h3>Snapshot</h3>
                                                                <div id="meeting_snapshot-images" class="image-row"></div>
                                                            </div>
                                                            <button id="meeting_upload" class="btn datatable-button my-2" style="display: none;">Upload</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="row pt-3">
                                                <div class="col-md-6 form-group" id="remark1_div"><label for="remark1">पूर्ण केलेल्या कामाबद्दल प्रभाग समन्यवक टिप्पणी </label><input type="text" class="form-control" id="remark1" name="remark1" required></div>
                                                <div class="col-md-6 form-group" id="remark2_div"><label for="remark2">पूर्ण केलेल्या कामाबद्दल तालुका अभियान व्यवस्थापक टिप्पणी</label><input type="text" class="form-control" id="remark2" name="remark2" required></div>
                                            </div>

                                            <div class="row pt-3">
                                                <div class="col-md-6 form-group" id="remarkDmm_div"><label for="remarkDmm">पूर्ण केलेल्या कामाबद्दल जिल्हा अभियान व्यवस्थापक टिप्पणी </label><input type="text" class="form-control" id="remarkDmm" name="remarkDmm" required></div>
                                                <div class="col-md-6 form-group" id="remarkPd_div"><label for="remarkPd">पूर्ण केलेल्या कामाबद्दल प्रकल्प संचालक टिप्पणी</label><input type="text" class="form-control" id="remarkPd" name="remarkPd" required></div>
                                            </div>
                                            <div class="row pt-3">
                                                <div class="col-md-6 form-group" id="statuscc"><label for="" class="form-label">प्रभाग समन्यवक शेरा :</label><select name="role" id="statusDropDowncc" class="form-control" required>
                                                        <option value="मंजूर">मंजूर</option>
                                                        <option value="नामंजूर">नामंजूर</option>
                                                        <option value="पेंडिंग">पेंडिंग</option>
                                                    </select></div>
                                                <div class="col-md-6 form-group" id="statusbmm"><label for="" class="form-label">तालुका अभियान व्यवस्थापक शेरा :</label><select name="role" id="statusDropDownbmm" class="form-control" required>
                                                        <option value="मंजूर">मंजूर</option>
                                                        <option value="नामंजूर">नामंजूर</option>
                                                        <option value="पेंडिंग">पेंडिंग</option>
                                                    </select></div>
                                            </div>
                                            <div class="row pt-3">
                                                <div class="col-md-6 form-group" id="statusDmm"><label for="" class="form-label">जिल्हा अभियान व्यवस्थापक शेरा :</label><select name="role" id="statusDropDownDmm" class="form-control" required>
                                                        <option value="मंजूर">मंजूर</option>
                                                        <option value="नामंजूर">नामंजूर</option>
                                                        <option value="पेंडिंग">पेंडिंग</option>
                                                    </select></div>
                                                <div class="col-md-6 form-group" id="statusPd"><label for="" class="form-label">प्रकल्प संचालक शेरा :</label><select name="role" id="statusDropDownPd" class="form-control" required>
                                                        <option value="मंजूर">मंजूर</option>
                                                        <option value="नामंजूर">नामंजूर</option>
                                                        <option value="पेंडिंग">पेंडिंग</option>
                                                    </select></div>
                                            </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 d-flex justify-content-center"><button type="button" class="btn datatable-button my-2" id="submit">जतन करा </button></div>
                                    </div>
                                    </form>
                                </div>
                            </div>
                    </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
    </div>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const meeting_photosInput = document.getElementById("meeting_photos");

            meeting_photosInput.addEventListener("change", function() {
                const files = this.files;

                if (files.length > 5) {
                    this.value = "";
                    alert("कृपया केवळ 5 फोटो अपलोड करा।");
                }
            });
        });
    </script>

    <script>
        $(document).ready(function() {
            function formatDateWithLeadingZeros(date) {
                return date < 10 ? '0' + date : date;
            }

            var now = new Date();
            var year = now.getFullYear();
            var month = formatDateWithLeadingZeros(now.getMonth() + 1);
            var day = formatDateWithLeadingZeros(now.getDate());
            var hours = formatDateWithLeadingZeros(now.getHours());
            var minutes = formatDateWithLeadingZeros(now.getMinutes());

            var currentDateTime = year + '-' + month + '-' + day + '    |    ' + hours + ':' + minutes;

            $('#date').val(currentDateTime);

            console.log('Current date and time:', currentDateTime);
        });
    </script>

    <script>
        const locationInput = document.getElementById("location");

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                locationInput.value = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=mr`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const address = data.locality;
                    locationInput.value = address;
                })
                .catch(error => {
                    console.error('Error fetching reverse geocoding data:', error);
                    locationInput.value = "Unable to determine location.";
                });
        }

        getLocation();
    </script>

    <?php include './include-copy-right.php' ?>

    <!-- ./wrapper -->
    <?php include './include-common-scripts.php'; ?>
    <?php include './include-datatable-scripts.php'; ?>

    <script src="./assets/js/filter/updateDailyWorkReport.js"></script>
    <!-- <script scr="./assets/js/filter/registerWorkReport.js"></script> -->
    <script src="assets/js/parseData.js"></script>
    <script src="./assets/js/filter/registerWorkReport.js"></script>
    <script>
        const user = JSON.parse(localStorage.getItem("user"));
        const {
            id
        } = user;

        document.getElementById("user_id").value = id;
        // document.addEventListener("DOMContentLoaded", function() {


        //     registerWorkReport();
        // });
        (() => {
            let id = getQueryParamValue("id");
            console.log("get it", id);
            if (id) {
                updateDailyWorkReport(id);
                return;
            }
            registerWorkReport();
        })();
    </script>

    <script>
        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        })
        const data1 = parseData("user");
    </script>

    <script>
        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        })
    </script>
</body>

</html>