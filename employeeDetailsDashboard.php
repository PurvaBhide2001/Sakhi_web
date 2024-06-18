<?php
$activePage = "list-student";
$mainMenu = "student-user"
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>कर्मचारी तपशील</title>
    <?php include './include-common-style.php'; ?>
    <?php include './include-datatable-style.php'; ?>
    <style>
        .icon {
            margin-right: 5px;
        }
    </style>
</head>
<?php include './include-sidebar.php'; ?>

<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h4 class="m-0 title">कर्मचारी तपशील </h4>
                        </div>
                    </div>
                </div>
            </div>
            <section class="content" id="studentDataAll">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3" id="getdata">
                            <div class="card body" id="aboutCard">
                                <div style="background-color:#396488;" class="card-header">
                                    <h3 style="color:White;" class="card-title">कर्मचारी तपशील</h3>
                                </div>
                                <div class="card-body" id="userCountContainer">
                                </div>
                                <!-- <div class="col-md-12 d-flex justify-content-center" id=""> -->
                                <!-- </div> -->
                            </div>
                            <div class="card body" id="aboutCard">
                                <div style="background-color:#396488;" class="card-header">
                                    <h3 style="color:White;" class="card-title">उपस्थिती तपशील</h3>
                                </div>
                                <div class="card-body" id="loginDetails">
                                </div>
                            </div>
                            <div class="card body" id="dateWiseEvaluation">
                                <div style="background-color:#396488;" class="card-header">
                                    <h3 style="color:White;" class="card-title">मागील मासिक अहवाल तपशील</h3>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="" class="form-label">महिना निवडा </label>
                                        <input type="month" name="date" class="form-control" id="selectedDate" required>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-9">
                            <div class="card-header p-2">
                                <div class="card body" id="aboutCard">
                                    <div style="background-color:#396488;" class="card-header">
                                        <h3 style="color:White;" class="card-title">दैनिक अहवाल तपशील</h3>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p><i class="far fa-calendar-alt icon"></i><strong id="dateLabel">दिनांक :</strong> <span id="currentDate"></span></p>
                                            </div>
                                            <div class="col-md-6 form-group">
                                                <p><i class="fas fa-map-marker-alt icon"></i><strong id="locationLabel">जागा :</strong> <span id="currentLocation"></span></p>
                                            </div>
                                            <hr>
                                        </div>
                                        <div class="row" id="StatusRemark">
                                            <div class="col-md-6">
                                                <p><i class="far fa-calendar-alt icon"></i><strong>दिनांक :</strong> <span id="currentDate"></span></p>
                                            </div>
                                            <div class="col-md-6 form-group">
                                                <p><i class="fas fa-map-marker-alt icon"></i><strong>जागा :</strong> <span id="currentLocation"></span></p>
                                            </div>
                                            <hr>
                                        </div>


                                        <div class="row" id="StatusRemarkbmm">
                                            <div class="col-md-6">
                                                <p><i class="far fa-calendar-alt icon"></i><strong>दिनांक :</strong> <span id="currentDate"></span></p>
                                            </div>
                                            <div class="col-md-6 form-group">
                                                <p><i class="fas fa-map-marker-alt icon"></i><strong>जागा :</strong> <span id="currentLocation"></span></p>
                                            </div>
                                            <hr>
                                        </div>
                                        <hr>
                                        <div class="row" id="StatusRemarkPD">
                                            <div id="statusByPD">
                                              
                                            </div>
                                                                                       
                                        </div>
                                        <div class="row" id="StatusRemarkDMM">
                                            <div id="statusByDMM">
                                               
                                            </div>
                                                                              
                                        </div>

                                        <div class="row" id="StatusRemarkBMM">
                                            <div id="StatusByBMM">  </div>
                                        </div>
                                        <div class="row" id="StatusRemarkCC">
                                            <div id="statusBycc">  </div>
                                        </div>

                                        <div class="row" id="dailyimage">
                                            <div class="col-md-6">
                                                <p><i class="far fa-image icon"></i><strong> प्रतिमा :</strong></p>
                                                <div class="col-md-6" id="locationImage">
                                                </div>

                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row" id="dailyimages">
                                            <div class="col-md-12">
                                                <p><i class="far fa-image icon"></i><strong>बैठक प्रतिमा :</strong>
                                                </p>
                                            </div>
                                            <div class="row" id="meetingImages">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- </div> -->
                            <div id="mulyamapan">
                                <div class="card-header p-2">
                                    <div class="card body" id="aboutCard">
                                        <div style="background-color:#396488;" class="card-header">
                                            <h3 style="color:White;" class="card-title">
                                                <span>मासिक अहवाल </span>
                                            </h3>
                                            <div>
                                            </div>
                                        </div>
                                        <div class="card-body" id="quesAnsDiv">
                                            <div class="table-responsive" id="questionAnswerDiv">
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
    </div>
    <script>
        const menu = "createStudent-menu"
        const subMenu = "createStudent-list"
    </script>
    <?php include './include-copy-right.php' ?>
    <!-- ./wrapper -->
    <?php include './include-common-scripts.php'; ?>
    <?php include './include-datatable-scripts.php'; ?>
    <script src="assets/js/parseData.js"></script>
    <!-- <script src="assets/js/filter/ListKrushiReport.js"></script> -->
    <script src="assets/js/filter/employeedasgboard.js"></script>
    <script>
        function setCurrentDate() {
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            const currentDate = new Date().toLocaleDateString('mr-IN', options);
            document.getElementById('currentDate').textContent = currentDate;
        }
        setCurrentDate();
         
    </script>
    <script>
        const locationSpan = document.getElementById("currentLocation");

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                locationSpan.textContent = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            fetch(
                    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=mr`
                )
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    const address = data.locality;
                    locationSpan.textContent = address;
                })
                .catch(error => {
                    console.error('Error fetching reverse geocoding data:', error);
                    locationSpan.textContent = "Unable to determine location.";
                });
        }

        getLocation();
    </script>
    <script>
        (() => {
            let id = getQueryParamValue("id");
            ListUserById(id);
            const selectedDateInput = document.getElementById("selectedDate");
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1;
            const currentYear = currentDate.getFullYear();
            const currentDateString = `${currentYear}-${String(currentMonth).padStart(2, "0")}`;
            selectedDateInput.value = currentDateString;
            selectedDateInput.addEventListener("change", function() {
                const selectedDate = this.value;
                showMonthlyDataByIdDate(id, selectedDate);
            });
            const selectedDate = selectedDateInput.value;
            showMonthlyDataByIdDate(id, selectedDate);

        })();
    </script>
    <script>
        (() => {
            let id = getQueryParamValue("id")
        })()
    </script>
    <script>
        document.querySelector("#logout").addEventListener("click", function() {
            localStorage.clear();
            window.location.href = "frm-login.php";
        })
    </script>
</body>

</html>