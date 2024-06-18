<?php
$activePage = "list-student";
$mainMenu = "student-user"
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>उमेद-मुक्ताई</title>
    <?php include './include-common-style.php'; ?>
    <?php include './include-datatable-style.php'; ?>

</head>

<?php include './include-sidebar.php'; ?>

<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">

        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h4 class="m-0 title">मूल्यमापन तपशील</h4>
                        </div>
                    </div>
                </div>
                <section class="content" id="studentDataAll">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3" id="getdata">
                                <div class="card card-primary card-outline" id="studentInfo">

                                </div>
                                <div class="card card-primary" id="aboutCard">
                                    <div class="card-header">
                                        <h3 class="card-title">माझ्याविषयी</h3>
                                    </div>
                                    <div class="card-body">
                                        <strong><i class="fas fa-pencil-alt mr-1"></i>वडीलांचे नावं</strong>
                                        <hr>
                                        <strong><i class="fas fa-pencil-alt mr-1"></i>आईचे नाव</strong>
                                        <hr>
                                        <strong><i class="fas fa-book mr-1"></i> अंगणवाडीचे नाव</strong>
                                        <p class="text-muted">
                                        </p>
                                        <hr>
                                        <strong><i class="fas fa-map-marker-alt mr-1"></i>पत्ता</strong>
                                        <p class="text-muted"></p>
                                        <hr>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="card">
                                    <div class="card-header p-2">
                                        <ul class="nav nav-pills" id="lists">
                                            <li class="nav-item"><a class="nav-link active" href="#survey0" data-toggle="tab">Survey 1</a></li>
                                            <li class="nav-item"><a class="nav-link" href="#survey1" data-toggle="tab">Survey 2</a></li>
                                            <li class="nav-item"><a class="nav-link" href="#survey2" data-toggle="tab">Survey 3 </a></li>
                                            <li class="nav-item"><a class="nav-link" href="#survey3" data-toggle="tab">Survey 4 </a></li>
                                        </ul>
                                    </div>
                                    <div class="card-body">
                                        <div class="tab-content" id="surveyTabs">
                                            <div class="active tab-pane" id="survey1">
                                                <div class="post">
                                                    <div class="col-md-12">
                                                        <div class="">
                                                            <div class="card-header">
                                                                <h3 class="card-title"></h3>
                                                                <div class="card-tools">

                                                                </div>
                                                            </div>
                                                            <div class="card-body p-0">
                                                                <table class="table">
                                                                    <thead>
                                                                    </thead>
                                                                    <tbody>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>

                                                    </div>
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
        <script src="assets/js/filter/loadeStudentInfo.js"></script>

        <!--  LogOut -->
        <script>
            studentAboutCard();
            createSurveyNavigator()
            surveyData()
            studentCard(res)
            document.querySelector("#logout").addEventListener("click", function() {
                sessionStorage.clear();
                window.location.href = "frm-login.php";
            })
        </script>
</body>

</html>