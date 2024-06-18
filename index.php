<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>उमेद-मुक्ताई</title>
    <?php include './include-common-style.php'; ?>
    <script src="https://kit.fontawesome.com/b27d57f29f.js" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <style>
        .text-white1 {
            color: white !important;
        }

        #demo {
            font-family: Arial, sans-serif;
            text-align: center;
            border: 2px solid #ccc;
            padding: 10px;
            border-radius: 10px;
            width: 200px;
            margin: 0 auto;
        }

        .row-day {
            font-size: 20px;
            font-weight: bold;
        }

        .row-date,
        .row-time {
            font-size: 16px;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .card {
            display: flex;
            flex-direction: column;
            width: 100%;
            background: white;
            padding: 15px;
            position: relative;
            border-radius: 15px;
        }

        .temp-img {
            position: absolute;
            opacity: 0.5;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 15px;
        }

        .button-container {
            display: flex;
            justify-content: flex-end;
            flex: 1;
        }

        .button-container button.rounded {
            padding: 5px;
            margin: 5px;
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            cursor: pointer;
            background: transparent;
            border: 1px solid #c7c7c75e;
            z-index: 2;
        }

        button.rounded.active {
            background: #fff;
        }

        svg {
            fill: lightblue;
        }

        .weather {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
        }

        .place-container {
            display: flex;
            flex: 2;
            justify-content: center;
            flex-direction: column;
            margin-left: 30px;
        }

        .place,
        .status {
            margin: 10px 0;
        }

        .status {
            color: gray;
        }

        .temp {
            display: flex;
            flex: 1;
            justify-content: center;
        }

        .temp {
            position: relative;
        }

        .temp-unit.cel::after {
            content: 'o';
            font-size: 3pt;
            position: absolute;
        }

        .temp-unit.feh::after {
            content: 'f';
            font-size: 3pt;
            position: absolute;
        }

        input.place {
            width: 80px;
            /* ouline: none; */
            border: none;
            position: relative;
            margin: 0 20px;
            transition: all 1s ease;
            height: 30px;
        }

        input.place:focus {
            width: 120px;
            border: 1px solid lightgray;
            padding-left: 15px;
        }

        .error {
            color: red;
        }

        .info {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .search {
            background: white;
            border-radius: 5px;
            display: flex;
            padding: 10px 25px;
            justify-content: center;
            align-items: center;
            margin-top: 15px;

        }

        .calendar-container {
            background: #fff;
            width: 90%;
            border-radius: 10px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);

        }

        .calendar-container header {
            display: flex;
            align-items: center;
            padding: 82px 30px 29px;
            background-color: antiquewhite;
            justify-content: space-between;
            background-repeat: no-repeat;
            background-size: cover;
        }

        header .calendar-navigation {
            display: flex;
        }

        header .calendar-navigation span {
            height: 38px;
            width: 38px;
            margin: 0 1px;
            cursor: pointer;
            text-align: center;
            line-height: 38px;
            border-radius: 50%;
            user-select: none;
            color: #aeabab;
            font-size: 1.9rem;
        }

        .calendar-navigation span:last-child {
            margin-right: -10px;
        }

        header .calendar-navigation span:hover {
            background: #f2f2f2;
        }

        header .calendar-current-date {
            font-weight: 500;
            font-size: 1.45rem;
        }

        .calendar-body {
            padding: 20px;
        }

        .calendar-body ul {
            list-style: none;
            flex-wrap: wrap;
            display: flex;
            text-align: center;
        }

        .calendar-body .calendar-dates {
            margin-bottom: 20px;
        }

        .calendar-body li {
            width: calc(100% / 7);
            font-size: 1.07rem;
            color: #787171;
        }

        .calendar-body .calendar-weekdays li {
            cursor: default;
            font-weight: 500;
        }

        .calendar-body .calendar-dates li {
            margin-top: 30px;
            position: relative;
            z-index: 1;
            cursor: pointer;
        }

        .calendar-dates li.inactive {
            color: #aaa;
        }

        .calendar-dates li.active {
            color: #fff;
        }

        .calendar-dates li::before {
            position: absolute;
            content: "";
            z-index: -1;
            top: 50%;
            left: 50%;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }

        .calendar-dates li.active::before {
            background: #6332c5;
        }

        .calendar-dates li:not(.active):hover::before {
            background: #e4e1e1;
        }

        /* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"); */

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
        }

        :root {
            --primary-color: #f6f7fb;
            --white-color: #fff;
            --black-color: #18191a;
            --red-color: #e74c3c;
        }

        body.dark {
            --primary-color: #242526;
            --white-color: #18191a;
            --black-color: #fff;
            --red-color: #e74c3c;
        }

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            /* gap: 60px; */
        }

        .container .clock {
            display: flex;
            height: 300px;
            width: 300px;
            border-radius: 10%;
            align-items: center;
            justify-content: center;
            background: var(--white-color);
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1), 0 25px 45px rgba(0, 0, 0, 0.1);
            position: relative;
        }

        .clock label {
            position: absolute;
            inset: 5px;
            text-align: center;
            transform: rotate(calc(var(--i) * (360deg / 12)));
        }

        .clock label span {
            display: inline-block;
            font-size: 22px;
            /* font-weight: 600; */
            color: #787171;
            transform: rotate(calc(var(--i)*(-360deg / 12)));
        }

        .container .indicator {
            position: absolute;
            height: 10px;
            width: 10px;
            display: flex;
            justify-content: center;
        }

        .indicator::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 100%;
            border-radius: 50%;
            z-index: 100;
            background: #6332C5;
            border: 4px solid #787171;
        }

        .indicator .hand {
            position: absolute;
            height: 105px;
            width: 2px;
            bottom: 0;
            border-radius: 25px;
            transform-origin: bottom;
            background: #787171;
        }

        .hand.minute {
            height: 98px;
            width: 4px;
            background: #6332C5;
        }

        .hand.hour {
            height: 71px;
            width: 6px;
            background: #6332C5;
        }

        .mode-switch {
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 22px;
            font-weight: 400;
            display: inline-block;
            color: var(--white-color);
            background: var(--black-color);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            cursor: pointer;
        }

        .mode-switch:active {
            transform: scale (0.98);
        }

        /* Button */
        .button-63 {
            align-items: center;
            background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
            border: 0;
            border-radius: 8px;
            box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
            box-sizing: border-box;
            color: #FFFFFF;
            display: flex;
            font-family: Phantomsans, sans-serif;
            font-size: 20px;
            justify-content: center;
            line-height: 1em;
            max-width: 100%;
            min-width: 140px;
            padding: 19px 24px;
            text-decoration: none;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            white-space: nowrap;
            cursor: pointer;
        }

        .button-63:active,
        .button-63:hover {
            outline: 0;
        }

        .carousel {
            position: relative;
        }

        .carousel-inner {
            position: relative;
            width: 100%;
            overflow: hidden;
        }

        .carousel-item {
            display: none;
        }

        .carousel-item.active {
            display: block;
        }

        .carousel-control-prev,
        .carousel-control-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 10px;
            width: 5%;
            height: 21%;
        }

        .carousel-control-prev {
            left: 0;
        }

        .carousel-control-next {
            right: 0;
        }

        .btn:disabled {
            background-color: grey !important;
            border: none;
            cursor: not-allowed;
            opacity: 0.65;
        }

        @media (min-width: 768px) {
            .button-63 {
                font-size: 24px;
                min-width: 196px;
            }
        }
    </style>
</head>


<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <?php include './include-sidebar.php'; ?>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">जिल्हा ग्रामीण विकास यंत्रणा,
                                जळगाव</h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">होम पेज</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>


            <!-- bannersssss -->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mb-2">
                        <!-- <div class="card"> -->
                        <!-- <div class="card-body"> -->
                        <!-- <div id="carouselExampleControlsNoTouching" class="carousel slide">
                            <div class="carousel-inner">
                               
                                <div class="carousel-item">
                                    <img src="https://cdn.s3waas.gov.in/s3013d407166ec4fa56eb1e1f8cbe183b9/uploads/2024/04/2024040758-2.jpeg" class="d-block w-100" style="border-radius:10px" alt="Image 2">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://cdn.s3waas.gov.in/s3013d407166ec4fa56eb1e1f8cbe183b9/uploads/2024/04/2024040735.jpeg" class="d-block w-100" style="border-radius:10px" alt="Image 3">
                                </div>
                               
                                
                                <div class="carousel-item">
                                    <img src="https://cdn.s3waas.gov.in/s3013d407166ec4fa56eb1e1f8cbe183b9/uploads/2024/04/2024040794.jpeg" class="d-block w-100" style="border-radius:10px" alt="Image 6">
                                </div>
                                
                               
                            </div>
                            <button class="carousel-control-prev" type="button" onclick="prevSlide()">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden"></span>
                            </button>
                            <button class="carousel-control-next" type="button" onclick="nextSlide()">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden"></span>
                            </button>
                        </div> -->
                        <img src="https://kitintellect.tech/storage/public/writable/uploads/sakhi/संघटनेतून_समृद्धीचा_मार्ग!_1716899515.png" class="d-block w-100" style="border-radius:10px" alt="Image 2">
                        <!-- </div> -->
                        <!-- </div> -->
                    </div>
                </div>

                <!-- <div class="row mb-4" style="display:flex;justify-content:center;">
                    <div class="col-md-3">
                        <a href="./election.php"> <button type="button" class="btn btn-block1 m-2" style="background-color:#21234E;color:#fff">निवडणूक २०२४</button>
                        </a>
                    </div>

                </div> -->
            </div>


            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <!-- <div class="card"> -->
                        <!-- <div class="card-body"> -->
                        <div class="row" id="prakalpData">


                            <div class="container">
                                <div class="card">
                                    <img class="temp-img" src="" />
                                    <div class="button-container">
                                        <button class="rounded">F</button>
                                        <button class="rounded active">C</button>
                                    </div>
                                    <div class="weather">
                                        <div class="place-container">
                                            <h4 class="place-name"></h4>
                                            <h6 class="status"></h6>
                                            <div class="info">
                                                <span class="temp-range">
                                                    <svg viewBox="0 0 512 512" width="20" title="temperature-high">
                                                        <path d="M416 0c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm-160-16C256 50.1 205.9 0 144 0S32 50.1 32 112v166.5C12.3 303.2 0 334 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34-12.3-64.9-32-89.5V112zM144 448c-44.1 0-80-35.9-80-80 0-25.5 12.2-48.9 32-63.8V112c0-26.5 21.5-48 48-48s48 21.5 48 48v192.2c19.8 14.8 32 38.3 32 63.8 0 44.1-35.9 80-80 80zm16-125.1V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v210.9c-18.6 6.6-32 24.2-32 45.1 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1z" />
                                                    </svg>
                                                    <b class="min">00</b><span class="temp-unit cel"></span> /
                                                    <b class="max">00</b><span class="temp-unit cel"></span>
                                                </span>
                                                <span>
                                                    <svg viewBox="0 0 576 512" width="20" title="hand-holding-water">
                                                        <path d="M288 256c53 0 96-42.1 96-94 0-40-57.1-120.7-83.2-155.6-6.4-8.5-19.2-8.5-25.6 0C249.1 41.3 192 122 192 162c0 51.9 43 94 96 94zm277.3 72.1c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z" />
                                                    </svg> <b class="hum">00%</b>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="temp">
                                            <span class="temp-value"></span> <span class="temp-unit cel"></span>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="search"> -->
                                <!-- <small>City Name</small> <input class="place" placeholder="City" onkeyup="onchangeCity(event)"> -->
                                <div class="error"></div>
                            </div>
                        </div>

                        <!-- </div> -->
                        <!-- </div> -->
                    </div>
                </div>
            </div>
            <!-- <div class="content-wrapper"> -->
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
                            <div class="row">
                                <div class="col-md-8 form-group">
                                    <form id="attendanceFormData" action="">
                                        <div id="timeFieldsContainer" class="row pt-3">
                                            <input type="hidden" id="user_id" name="user_id">
                                            <div id="loginTimeField" class="col-md-6 form-group">
                                                <label for="" class="form-label">लॉगिन वेळ <sup class="text-danger">*</sup></label>
                                                <input type="text" name="login_time" class="form-control" id="login_time" placeholder=" लॉगिन करण्यासाठी खालील बटणावर क्लिक करा" required readonly>
                                            </div>
                                            <div id="logoutTimeField" class="col-md-6 form-group" style="display: none;">
                                                <label for="" class="form-label">लॉगआउट वेळ <sup class="text-danger">*</sup></label>
                                                <input type="text" name="logout_time" class="form-control" id="logout_time" placeholder=" लॉगआउट करण्यासाठी खालील बटणावर क्लिक करा" required readonly>
                                            </div>
                                        </div>
                                        <div class="justify-content-center">
                                            <button type="button" class="btn datatable-button my-2" style="background-color:#6332C5" id="log_in_button">लॉग इन</button>
                                            <button type="button" class="btn datatable-button my-2" style="background-color:#6332C5" id="log_out_button" style="display: none;">लॉग आउट</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-4 form-group">
                                    <a href="./frm-daily-work-report.php">
                                        <button type="button" class="btn btn-primary btn-lg btn-block m-2"> दैनंदिन
                                            कामाचा अहवाल</button>
                                    </a>
                                    <button type="button" class="btn btn-success btn-lg btn-block m-2" id="roleWiseReport"> मासिक कामाचा अहवाल</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <!-- </div> -->
            <section class="content">
                <div class="container-fluid">
                    <div class="row" id="userCount">
                    </div>
                </div>
            </section>
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row" id="calenderDiv">
                                        <!-- calender -->
                                        <div class="col-md-8 form-group">
                                            <div class="calendar-container">
                                                <header class="calendar-header">
                                                    <p class="calendar-current-date"></p>
                                                    <div class="calendar-navigation">
                                                        <span id="calendar-prev" class="material-symbols-rounded"><i class="fa-solid fa-chevron-left"></i></span>
                                                        <span id="calendar-next" class="material-symbols-rounded"><i class="fa-solid fa-chevron-right"></i></span>
                                                    </div>
                                                </header>
                                                <div class="calendar-body">
                                                    <ul class="calendar-weekdays">
                                                        <li>रवि</li>
                                                        <li>सोम</li>
                                                        <li>मंगळ</li>
                                                        <li>बुध</li>
                                                        <li>गुरु</li>
                                                        <li>शुक्र</li>
                                                        <li>शनि</li>
                                                    </ul>
                                                    <ul class="calendar-dates"></ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- clock -->
                                        <div class="col-md-4 p-5">

                                            <div class="container">
                                                <div class="clock">
                                                    <label style="--i: 1"><span>१</span></label>
                                                    <label style="--i: 2"><span>२</span></label>
                                                    <label style="--i: 3"><span>३</span></label>
                                                    <label style="--i: 4"><span>४</span></label>
                                                    <label style="--i: 5"><span>५</span></label>
                                                    <label style="--i: 6"><span>६</span></label>
                                                    <label style="--i: 7"><span>७</span></label>
                                                    <label style="--i: 8"><span>८</span></label>
                                                    <label style="--i: 9"><span>९</span></label>
                                                    <label style="--i: 10"><span>१०</span></label>
                                                    <label style="--i: 11"><span>११</span></label>
                                                    <label style="--i: 12"><span>१२</span></label>
                                                    <div class="indicator">
                                                        <span class="hand hour"></span>
                                                        <span class="hand minute"></span>
                                                        <span class="hand second"></span>
                                                    </div>
                                                </div>
                                                <div class="mode-switch" style="display:none"></div>
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
        <script>
            const menu = "dashbord"
            const subMenu = "dashbord-Create"
        </script>
        <?php include './include-copy-right.php' ?>
    </div>
    <!-- ./wrapper -->
    <?php include './include-common-scripts.php'; ?>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script src="./assets/js/filter/dashboard.js"></script>
    <script src="assets/js/parseData.js"></script>
    <script>
        dashboardGetUserCount()
        document.addEventListener("DOMContentLoaded", function() {
            const roleWiseReportButton = document.querySelector("#roleWiseReport");

            function checkDateAndToggleButton() {
                const currentDate = new Date();
                const currentDay = currentDate.getDate();

                if (currentDay === 25 || currentDay === 26 || currentDay === 27) {
                    roleWiseReportButton.disabled = false;
                } else {
                    roleWiseReportButton.disabled = true;
                }
            }

            checkDateAndToggleButton();

            roleWiseReportButton.addEventListener("click", function() {
                roleWiseReport();
            });
        });
        const d = new Date("2022-03-25");
        document.getElementById("demo").innerHTML = d;
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            flatpickr('#calendar', {
                enableTime: false,
                dateFormat: "Y-m-d",
                locale: {
                    firstDayOfWeek: 1, // Monday
                    weekdays: {
                        shorthand: ['आठ', 'सोम', 'मंगळ', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
                        longhand: ['आठवडा', 'सोमवार', 'मंगळवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
                    },
                    months: {
                        shorthand: ['जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून', 'जुलै',
                            'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर', 'डिसेंबर'
                        ],
                        longhand: ['जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून', 'जुलै',
                            'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर', 'डिसेंबर'
                        ],
                    },
                },
            });
        });
    </script>
    <Script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;
        let intervalId;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }

        function startAutoplay() {
            intervalId = setInterval(nextSlide,
                3000); // Change 3000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds)
        }

        function stopAutoplay() {
            clearInterval(intervalId);
        }

        // Start autoplay when the document loads
        document.addEventListener('DOMContentLoaded', startAutoplay);

        // Stop autoplay when the user interacts with the carousel (clicks on prev/next buttons)
        document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(btn => {
            btn.addEventListener('click', stopAutoplay);
        });
    </script>

    <script>
        let date = new Date(); // creates a new date object with the current date and time
        let year = date.getFullYear(); // gets the current year
        let month = date.getMonth(); // gets the current month (index based, 0-11)

        const day = document.querySelector(".calendar-dates"); // selects the element with class "calendar-dates"
        const currdate = document.querySelector(
            ".calendar-current-date"); // selects the element with class "calendar-current-date"
        const prenexIcons = document.querySelectorAll(
            ".calendar-navigation span"); // selects all elements with class "calendar-navigation span"

        const months = [
            'जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून', 'जुलै',
            'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर', 'डिसेंबर'
        ]; // array of month names

        const gifUrls = {
            winter: 'https://i.pinimg.com/originals/49/0e/43/490e433082a04c1d32c542b76d91e9e1.gif',
            spring: 'https://i.pinimg.com/originals/10/47/99/1047993b3e830e3e79f765a60829d61c.gif',
            summer: 'https://i.pinimg.com/originals/b3/bf/1c/b3bf1c281806ca216c3627bfbbd63ae1.gif',
            fall: 'https://www.icegif.com/wp-content/uploads/2021/11/icegif-695.gif'
        };

        // Function to determine the current season based on the month
        function getSeason(month) {
            if (month >= 2 && month <= 4) {
                return 'spring';
            } else if (month >= 5 && month <= 7) {
                return 'summer';
            } else if (month >= 8 && month <= 10) {
                return 'fall';
            } else {
                return 'winter';
            }
        }

        function updateHeaderGIF(season) {
            // console.log('Updating header GIF with season:', season);
            const header = document.querySelector('.calendar-header');
            header.style.backgroundImage = `url(${gifUrls[season]})`;
            // console.log('Header updated with GIF:', gifUrls[season]);
        }
        // function to generate the calendar
        const manipulate = () => {
            // get the first day of the month
            // console.log('Manipulating calendar...');
            // Your existing calendar generation code...

            // Call updateHeaderGIF to set the initial GIF based on the current season
            const currentSeason = getSeason(month);
            // console.log('Current season:', currentSeason);
            updateHeaderGIF(currentSeason);

            let dayone = new Date(year, month, 1).getDay();

            // get the last date of the month
            let lastdate = new Date(year, month + 1, 0).getDate();

            // get the day of the last date of the month
            let dayend = new Date(year, month, lastdate).getDay();

            // get the last date of the previous month
            let monthlastdate = new Date(year, month, 0).getDate();

            let lit = ""; // variable to store the generated calendar HTML

            // loop to add the last dates of the previous month
            for (let i = dayone; i > 0; i--) {
                lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
            }

            // loop to add the dates of the current month
            for (let i = 1; i <= lastdate; i++) {
                // check if the current date is today
                let isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date()
                    .getFullYear() ? "active" : "";
                lit += `<li class="${isToday}">${i}</li>`;
            }

            // loop to add the first dates of the next month
            for (let i = dayend; i < 6; i++) {
                lit += `<li class="inactive">${i - dayend + 1}</li>`
            }

            // update the text of the current date element with the formatted current month and year
            currdate.innerText = `${months[month]} ${year}`;

            // update the HTML of the dates element with the generated calendar
            day.innerHTML = lit;


        }

        manipulate();

        // Attach a click event listener to each icon
        prenexIcons.forEach(icon => {

            // When an icon is clicked
            icon.addEventListener("click", () => {
                // Check if the icon is "calendar-prev" or "calendar-next"
                month = icon.id === "calendar-prev" ? month - 1 : month + 1;

                // Check if the month is out of range
                if (month < 0 || month > 11) {
                    // Set the date to the first day of the month with the new year
                    date = new Date(year, month, new Date().getDate());
                    // Set the year to the new year
                    year = date.getFullYear();
                    // Set the month to the new month
                    month = date.getMonth();
                } else {
                    // Set the date to the current date
                    date = new Date();
                }

                // Call the manipulate function to update the calendar display
                manipulate();
            });

            function updateCalendarAndHeader() {
                // console.log('Updating calendar and header...');
                manipulate();
                const currentSeason = getSeason(month);
                // console.log('Current season:', currentSeason);
                updateHeaderGIF(currentSeason);
            }
        });
    </script>
    <script>
        // Get references to DOM elements
        const body = document.querySelector("body"),
            hourHand = document.querySelector(".hour"),
            minuteHand = document.querySelector(".minute"),
            secondHand = document.querySelector(".second"),
            modeSwitch = document.querySelector(".mode-switch");

        // check if the mode is already set to "Dark Mode" in localStorage
        if (localStorage.getItem("mode") === "Dark") {
            // add "dark" calass to body and set modeSwitch text to "Light Mode"
            body.classList.add("dark");
            modeSwitch.textContent = "Light";
        }

        // add a click event listener to modeSwitch
        modeSwitch.addEventListener("click", () => {
            // toggle the "dark" class on the body element
            body.classList.toggle("dark");
            // check if the "dark" class is currently present on the body element
            const isDarkMode = body.classList.contains("dark");
            // set modeSwitch text based on "dark" class presence
            modeSwitch.textContent = isDarkMode ? "Light" : "Dark";
            // set localStorage "mode" item based on "dark" class presence
            localStorage.setItem("mode", isDarkMode ? "Dark" : "Light");
        });

        const updateTime = () => {
            // Get current time and calculate degrees for clock hands
            let date = new Date(),
                secToDeg = (date.getSeconds() / 60) * 360,
                minToDeg = (date.getMinutes() / 60) * 360,
                hrToDeg = (date.getHours() / 12) * 360;

            // Rotate the clock hands to the appropriate degree based on the current time
            secondHand.style.transform = `rotate(${secToDeg}deg)`;
            minuteHand.style.transform = `rotate(${minToDeg}deg)`;
            hourHand.style.transform = `rotate(${hrToDeg}deg)`;
        };

        // call updateTime to set clock hands every second
        setInterval(updateTime, 1000);

        //call updateTime function on page load
        updateTime();
    </script>
    <script>
        const imgs = {
            Clouds: "https://media.tenor.com/438H6u87JfsAAAAM/sky-clouds.gif",
            Mist: "https://i.pinimg.com/originals/29/9f/38/299f387c22dcf938ddd553f1e8d99d45.gif",
            Rain: "https://img.wattpad.com/34cf3a2c2c4ed777c22733e00c224e82fc423072/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f476c5241534a547a6145334d56513d3d2d3431383131303330362e313565616637326439613162343566313735393932333733313634362e676966",
            Haze: "https://www.pngkey.com/png/detail/123-1236518_smoke-haze-png-haze-png.png",
            Snow: "https://media1.tenor.com/images/735e68b36fb24b5cadda815230daad05/tenor.gif?itemid=13649339",
            Clear: "https://static.vecteezy.com/system/resources/thumbnails/002/596/183/small_2x/blue-sky-and-clouds-wallpaper-background-and-sunny-day-free-photo.jpg",
            Thunderstorm: "https://i.pinimg.com/originals/14/0f/02/140f02ad145786db59e085b058749131.jpg"
        };
        const API_KEY = "14067ca47d30fb0bcb278f67509d646d";

        function getInfo(city) {
            var unit = document.querySelector('button.active').innerText;
            var unit_map = unit == "C" ? 'metric' : 'imperial';
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit_map}&APPID=${API_KEY}`)
                .then(response => response.json())
                .then(data => {
                    var card = document.querySelector('.card');
                    var place = document.querySelector('.place-name');
                    var status = document.querySelector('.status');
                    var hum = document.querySelector('.hum');
                    var min = document.querySelector('.min');
                    var max = document.querySelector('.max');
                    var error = document.querySelector('.error');
                    var temp = document.querySelector('.temp-value');
                    var img = document.querySelector('.temp-img');

                    if (data.cod == "404") {
                        error.innerHTML = data.message;
                        return;
                    }
                    setTimeout(() => {
                        card.animate([{
                                transform: "rotate3d(1, 0, 0, 10deg)",
                                filter: "blur(2px)"
                            },
                            {
                                transform: "rotate3d(1, 0, 0, 80deg)",
                                filter: "blur(2px)"
                            },
                            {
                                transform: "rotate3d(1, 0, 0, 120deg)",
                                filter: "blur(2px)"
                            },
                            {
                                transform: "rotate3d(1, 0, 0, 170deg)",
                                filter: "blur(2px)"
                            },
                            {
                                transform: "rotate3d(1, 0, 0, 220deg)",
                                filter: "blur(2px)"
                            },
                            {
                                transform: "rotate3d(1, 0, 0, 260deg)",
                                filter: "blur(2px)"
                            },
                            {
                                transform: "rotate3d(1, 0, 0, 300deg)",
                                filter: "blur(2px)"
                            },
                            {
                                transform: "rotate3d(1, 0, 0, 360deg)",
                                filter: "blur(2px)"
                            },
                        ], {
                            duration: 1000
                        })
                    })
                    document.querySelector('.error').innerHTML = "";
                    status.innerHTML = data['weather'][0]['main'];
                    place.innerHTML = data['name'] + ' ' + data['sys']['country'];
                    temp.innerHTML = data['main']['temp'];
                    max.innerHTML = data['main']['temp_max'];
                    min.innerHTML = data['main']['temp_min'];
                    hum.innerHTML = data['main']['humidity'] + '%';
                    img.src = imgs[data['weather'][0]['main']];
                    document.querySelectorAll('.temp-unit').forEach((ele) => {
                        if (unit == 'C') {
                            ele.classList.add('cel');
                            ele.classList.remove('feh');
                        } else {
                            ele.classList.add('feh');
                            ele.classList.remove('cel');
                        }
                    })

                })
                .catch(err => {
                    console.log(err);
                });

        }

        function onchangeCity(event) {
            if (event.keyCode != 13) return;
            var city = document.querySelector('.place').value;
            getInfo(city);
        }

        function changeUnit(event) {
            var button = event.target;
            document.querySelector('button.active').classList.toggle('active')
            button.classList.add('active');

            getInfo(document.querySelector('.place-name').innerText.split(" ")[0]);

        }

        document.querySelectorAll('button').forEach((ele) => ele.addEventListener('click', changeUnit));

        // Get user's geolocation
        function getLocation() {
            navigator.geolocation.getCurrentPosition(position => {
                const {
                    latitude,
                    longitude
                } = position.coords;
                fetch(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
                    )
                    .then(response => response.json())
                    .then(data => {
                        const city = data.name;
                        getInfo(city);
                    })
                    .catch(error => {
                        console.error('Error fetching weather data:', error);
                    });
            }, error => {
                // Handle geolocation error here
                var img = document.querySelector('.temp-img');
                img.src = "https://kitintellect.tech/storage/public/writable/uploads/sakhi/Add_a_heading_1715840300.png";
            });
        }

        getLocation();
    </script>


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

        // function checkLoginStatus() {
        //     const loginTime = sessionStorage.getItem('login_time');
        //     if (loginTime) {
        //         document.getElementById('login_time').value = loginTime;
        //         document.getElementById('log_in_button').style.display = 'none';
        //         document.getElementById('log_out_button').style.display = 'block';
        //         document.getElementById('logoutTimeField').style.display = 'block';
        //         isLoggedIn = true;

        //         const totalWorkingHours = sessionStorage.getItem('total_working_hours');
        //         if (totalWorkingHours) {
        //             // document.getElementById('total_time').value = totalWorkingHours;
        //             document.getElementById('totalTimeField').style.display = 'block';
        //         }
        //     } else {
        //         document.getElementById('log_in_button').style.display = 'block';
        //         document.getElementById('log_out_button').style.display = 'none';
        //         document.getElementById('logoutTimeField').style.display = 'none';
        //         isLoggedIn = false;
        //     }
        // }

        // window.onload = checkLoginStatus;

        // document.querySelector("#log_in_button").addEventListener("click", logIn);
        // document.querySelector("#log_out_button").addEventListener("click", logOut);

        // let timerInterval;
        // let totalSeconds = 0;

        // function updateTotalWorkingHours(totalHours) {
        //     sessionStorage.setItem('total_working_hours', totalHours);
        // }
        // async function logIn() {
        //     await getLocationAndDate("Log In");

        //     startTimer();
        // }

        // async function logOut() {
        //     await getLocationAndDate("Log Out");

        //     clearInterval(timerInterval);

        //     const loginTime = sessionStorage.getItem('login_time');
        //     const currentTime = new Date().toLocaleTimeString('en-US');
        //     document.getElementById('logout_time').value = currentTime;
        //     const formattedWorkingHours = calculateWorkingHours(loginTime, `${currentDate} ${currentTime}`);
        //     // document.getElementById('total_time').value = formattedWorkingHours;
        //     updateTotalWorkingHours(formattedWorkingHours);

        //     sessionStorage.setItem('total_working_hours', formattedWorkingHours);
        //     document.getElementById('log_in_button').style.display = 'none';
        //     document.getElementById('log_out_button').style.display = 'none';
        //     document.getElementById('logoutTimeField').style.display = 'block';
        //     // document.getElementById('total_time').style.display = 'block';
        // }

        // function startTimer() {
        //     timerInterval = setInterval(function() {
        //         totalSeconds++;
        //         updateTimer();
        //     }, 1000);
        // }

        // function updateTimer() {
        //     const hours = Math.floor(totalSeconds / 3600);
        //     const minutes = Math.floor((totalSeconds % 3600) / 60);
        //     const seconds = totalSeconds % 60;

        //     // document.getElementById('total_time').value = `${hours} तास ${minutes} मिनट ${seconds} सेकंद`;
        // }

        // function calculateWorkingHours(loginTime, logoutTime) {
        //     const loginDateTime = new Date(loginTime);
        //     const logoutDateTime = new Date(logoutTime);

        //     const timeDifference = logoutDateTime - loginDateTime;

        //     const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        //     const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        //     const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        //     const formattedWorkingHours = `${hours}:${minutes}:${seconds}`;

        //     return formattedWorkingHours;
        // }

        // async function getLocationAndDate(action) {
        //     if (navigator.geolocation) {
        //         navigator.geolocation.getCurrentPosition(async position => {
        //             const latitude = position.coords.latitude;
        //             const longitude = position.coords.longitude;

        //             try {
        //                 const response = await fetch(
        //                     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=mr`
        //                 );
        //                 const data = await response.json();
        //                 const location = data.localityInfo.administrative[3].name;
        //                 const currentDate = new Date().toISOString().slice(0, 10);

        //                 const currentTime = new Date().toLocaleTimeString('en-US');

        //                 if (action === "Log In") {
        //                     const payload = {
        //                         user_id: id, // Assuming id is accessible here
        //                         login_time: `${currentDate} ${currentTime}`,
        //                         login_location: location,
        //                         date: currentDate
        //                     };

        //                     const {
        //                         data: res,
        //                         status
        //                     } = await AttendanceApi.createLogin(payload);
        //                     if (status === 200) {
        //                         // console.log("Login successful:", res);
        //                         // Update UI or perform any additional actions after successful login
        //                         sessionStorage.setItem('login_time', payload.login_time);
        //                         document.getElementById('login_time').value = payload.login_time;
        //                         document.getElementById('log_in_button').style.display = 'none';
        //                         document.getElementById('log_out_button').style.display = 'block';
        //                         document.getElementById('logoutTimeField').style.display = 'block';
        //                         isLoggedIn = true;
        //                     } else if (status === 400 && !res) {
        //                         alert("A login entry already exists for this date.");
        //                         // document.getElementById('totalTimeField').style.display = 'none';
        //                         // Display error message to the user
        //                     } else {
        //                         console.error("Login failed:", res);
        //                     }
        //                 } else if (action === "Log Out") {
        //                     const loginTime = sessionStorage.getItem('login_time');
        //                     const formattedWorkingHours = calculateWorkingHours(loginTime,
        //                         `${currentDate} ${currentTime}`);

        //                     const payload = {
        //                         user_id: id, // Assuming id is accessible here
        //                         logout_time: `${currentDate} ${currentTime}`,
        //                         working_hours: formattedWorkingHours,
        //                         logout_location: location,
        //                         date: currentDate
        //                     };

        //                     const {
        //                         data: res,
        //                         status
        //                     } = await AttendanceApi.createLogout(payload);
        //                     if (status === 200) {
        //                         // console.log("Logout successful:", res);
        //                         sessionStorage.removeItem('login_time');
        //                         document.getElementById('log_out_button').style.display = 'none';
        //                         document.getElementById('log_in_button').style.display = 'none';
        //                         document.getElementById('logoutTimeField').style.display = 'block';
        //                         isLoggedIn = false;
        //                     } else {
        //                         console.error("Logout failed:", res);
        //                     }
        //                 }
        //             } catch (error) {
        //                 console.error('Error fetching location data:', error);
        //             }
        //         }, error => {
        //             console.error('Error getting geolocation:', error);
        //         });
        //     } else {
        //         console.error('Geolocation is not supported by this browser.');
        //     }
        // }

        const user = JSON.parse(localStorage.getItem("user"));
        const {
            id
        } = user;
        document.getElementById("user_id").value = id;

        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        });

        const data1 = parseData("user");
    </script>

    <script>
        (() => {
            let id = getQueryParamValue("id")
            // updateStudent(id)
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