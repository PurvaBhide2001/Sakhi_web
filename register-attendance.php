<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>उपस्थिती</title>
    <?php include './include-common-style.php'; ?>
</head>

<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <?php include './include-sidebar.php'; ?>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0" id="name_upade">उपस्थिती</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section class="content">
                <div class="container-fluid text-uppercase">
                    <div class="card card-default">
                        <div class="card-body">
                            <form id="attendanceFormData" action="">
                                <div id="timeFieldsContainer" class="row pt-3">
                                    <input type="hidden" id="user_id" name="user_id">
                                    <div id="loginTimeField" class="col-md-4 form-group">
                                        <label for="" class="form-label">लॉगिन वेळ <sup class="text-danger">*</sup></label>
                                        <input type="text" name="login_time" class="form-control" id="login_time" placeholder=" लॉगिन करण्यासाठी खालील बटणावर क्लिक करा " required readonly>
                                    </div>
                                    <div id="logoutTimeField" class="col-md-4 form-group" style="display: none;">
                                        <label for="" class="form-label">लॉगआउट वेळ <sup class="text-danger">*</sup></label>
                                        <input type="text" name="logout_time" class="form-control" id="logout_time" placeholder=" लॉगआउट करण्यासाठी खालील बटणावर क्लिक करा " required readonly>
                                    </div>
                                </div>
                                <div class="justify-content-center">
                                    <button type="button" class="btn datatable-button my-2" id="log_in_button">लॉग इन</button>
                                    <button type="button" class="btn datatable-button my-2" id="log_out_button" style="display: none;">लॉग आउट</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <script>
        let timerInterval;
        let totalSeconds = 0;

        function checkLoginStatus() {
            const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
            if (loginInfo && loginInfo.login_time) {
                document.getElementById('login_time').value = loginInfo.login_time;
                document.getElementById('log_in_button').style.display = 'none';
                document.getElementById('log_out_button').style.display = 'block';
                document.getElementById('logoutTimeField').style.display = 'block';
                isLoggedIn = true;

                const totalWorkingHours = sessionStorage.getItem('total_working_hours');
                if (totalWorkingHours) {
                    document.getElementById('total_time').value = totalWorkingHours;
                    document.getElementById('totalTimeField').style.display = 'block';
                }
            } else {
                document.getElementById('log_in_button').style.display = 'block';
                document.getElementById('log_out_button').style.display = 'none';
                document.getElementById('logoutTimeField').style.display = 'none';
                isLoggedIn = false;
            }
        }

        window.onload = checkLoginStatus;

        document.querySelector("#log_in_button").addEventListener("click", logIn);
        document.querySelector("#log_out_button").addEventListener("click", logOut);

        async function logIn() {
            console.log("Log In button clicked");
            await getLocationAndDate("Log In");
            startTimer();
        }

        async function logOut() {
            console.log("Log Out button clicked");
            clearInterval(timerInterval);

            const currentDate = new Date().toISOString().slice(0, 10);
            const currentTime = new Date().toLocaleTimeString('en-US');
            document.getElementById('logout_time').value = `${currentDate} ${currentTime}`;

            localStorage.removeItem('loginInfo');
            sessionStorage.removeItem('login_time');
            sessionStorage.removeItem('total_working_hours');

            document.getElementById('log_in_button').style.display = 'block';
            document.getElementById('log_out_button').style.display = 'none';
            document.getElementById('logoutTimeField').style.display = 'none';

            isLoggedIn = false;

            await getLocationAndDate("Log Out"); // Ensure this is called
        }

        function startTimer() {
            timerInterval = setInterval(function() {
                totalSeconds++;
                updateTimer();
            }, 1000);
        }

        function updateTimer() {
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            // document.getElementById('total_time').value = `${hours} तास ${minutes} मिनट ${seconds} सेकंद`;
        }

        function calculateWorkingHours(loginTime, logoutTime) {
            const loginDateTime = new Date(loginTime);
            const logoutDateTime = new Date(logoutTime);

            const timeDifference = logoutDateTime - loginDateTime;

            const hours = Math.floor(timeDifference / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            const formattedWorkingHours = `${hours}:${minutes}:${seconds}`;

            return formattedWorkingHours;
        }

        // New function to check time and trigger logout
        function checkTimeAndLogout() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            console.log(`Current time: ${hours}:${minutes}`); // Log current time

            if (hours === 23 && minutes === 59) {
                console.log("It's 23:59 PM, logging out...");
                logOut();
            }
        }

        // Set interval to check every minute
        setInterval(checkTimeAndLogout, 60000); // 60000ms = 1 minute

        async function getLocationAndDate(action) {
            console.log("getLocationAndDate called with action:", action);
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async position => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    console.log("Geolocation obtained:", latitude, longitude);

                    try {
                        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=mr`);
                        const data = await response.json();
                        const location = data.localityInfo.administrative[3].name;
                        const currentDate = new Date().toISOString().slice(0, 10);
                        const currentTime = new Date().toLocaleTimeString('en-US');

                        if (action === "Log In") {
                            const payload = {
                                user_id: id,
                                login_time: `${currentDate} ${currentTime}`,
                                login_location: location,
                                date: currentDate
                            };
                            console.log("Login payload:", payload);

                            const {
                                data: res,
                                status
                            } = await AttendanceApi.createLogin(payload);
                            if (status === 200) {
                                localStorage.setItem('loginInfo', JSON.stringify({
                                    login_time: `${currentDate} ${currentTime}`,
                                    login_location: location
                                }));
                                document.getElementById('login_time').value = `${currentDate} ${currentTime} (${location})`;
                                document.getElementById('log_in_button').style.display = 'none';
                                document.getElementById('log_out_button').style.display = 'block';
                                document.getElementById('logoutTimeField').style.display = 'block';
                                isLoggedIn = true;
                                console.log("Login successful");
                            } else if (status === 400 && !res) {
                                alert("A login entry already exists for this date.");
                                console.log("Login entry already exists");
                            } else {
                                console.error("Login failed:", res);
                            }
                        } else if (action === "Log Out") {
                            const loginTime = localStorage.getItem('login_time');
                            const formattedWorkingHours = calculateWorkingHours(loginTime, `${currentDate} ${currentTime}`);
                            console.log("Calculated working hours:", formattedWorkingHours);

                            const payload = {
                                user_id: id,
                                logout_time: `${currentDate} ${currentTime}`,
                                working_hours: formattedWorkingHours,
                                logout_location: location,
                                date: currentDate
                            };
                            console.log("Logout payload:", payload);

                            const {
                                data: res,
                                status
                            } = await AttendanceApi.createLogout(payload);
                            if (status === 200) {
                                localStorage.removeItem('loginInfo');
                                sessionStorage.removeItem('login_time');
                                sessionStorage.removeItem('total_working_hours');
                                document.getElementById('log_out_button').style.display = 'none';
                                document.getElementById('log_in_button').style.display = 'block';
                                document.getElementById('logoutTimeField').style.display = 'none';
                                // document.getElementById('total_time').style.display = 'none';
                                isLoggedIn = false;
                                console.log("Logout successful");
                                window.location.href = 'index.php';

                            } else {
                                console.error("Logout failed:", res);
                            }
                        }
                    } catch (error) {
                        console.error('Error fetching location data:', error);
                    }
                }, error => {
                    console.error('Error getting geolocation:', error);
                });
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        }

        const user = JSON.parse(localStorage.getItem("user"));
        const {
            id
        } = user;
        document.getElementById("user_id").value = id;

        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        });
    </script>

    <?php include './include-common-scripts.php'; ?>
</body>

</html>