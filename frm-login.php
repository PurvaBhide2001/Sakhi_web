<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>उमेद-मुक्ताई </title>
    <?php include './include-common-style.php'; ?>

    <link rel="shortcut icon" type="image/x-icon" href="./dist/img/idea-80.png">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
    <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
    <link rel="stylesheet" href="dist/css/adminlte.min.css">
    <link rel="stylesheet" href="dist/css/adminlte.min.css">
</head>

<body class="hold-transition sidebar-mini layout-fixed bg-img">
    <div class="row">
        <div class="col-md-3">
        </div>
        <div class="col-md-6">
        </div>
        <div class="col-md-3"></div>
    </div>
    <!-- <div class="d-flex justify-content-center align-items-center py-5">
            <img src="https://kitintellect.tech/storage/public/writable/uploads/election/blob_1715237870.png" alt="" srcset="" height="80px">
            <img src="https://kitintellect.tech/storage/public/writable/uploads/election/blob_1715259718.jpg" alt="" srcset="" height="100px">
    </div> -->
    <div class="d-flex justify-content-center align-items-center py-5">
        <!-- <div class="login-logo">
           
        </div> -->
        <!-- /.login-logo -->
        <div class="card card-outline card-primary" style="width: 345px; height: 472px;">
        <div class="d-flex justify-content-center align-items-center ">
            <img src="https://kitintellect.tech/storage/public/writable/uploads/election/blob_1715237870.png" alt="" srcset="" height="80px">
            <img src="https://kitintellect.tech/storage/public/writable/uploads/election/blob_1715259718.jpg" alt="" srcset="" height="100px">
    </div>
            <div class="card-body login-card-body">
                <p class="login-box-msg "><b>उमेद-मुक्ताई लॉगिन</b> </p>
                <form action="index3.html" method="post">
                    <div class="input-group mb-3">
                        <input type="text" name="username" class="form-control" id="username" placeholder="मोबाईल नंबर प्रविष्ट करा" required>

                        <div class="input-group-append">
                            <div class="input-group-text">
                                <i class="fa fa-envelope" aria-hidden="true"></i>

                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">

                        <input type="password" name="password" id="password" class="form-control" placeholder="पासवर्ड प्रविष्ट करा" validatePassword()>

                        <div class="input-group-append">
                            <div class="input-group-text">
                                <i class="fa fa-eye-slash" aria-hidden="true" id="togglePassword"></i>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary ">
                                <input type="checkbox" id="remember">
                                <label for="remember">
                                    पासवर्ड सेव्ह करा
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
                <br>
                <div class="col-12  d-flex justify-content-center">
                    <button type="submit" id="loginBtn" class="btn btn-primary btn-block">लॉगिन</button>
                </div>
                <br>
                <!-- <p>
                    <a href="./frm-registerUserWithoutLogin.php">नोंदणी करा</a>
                </p> -->
                <p>
                    <a href="./frm-forgetPassword.php">तुमचा पासवर्ड विसरलात ?</a>
                </p>
            </div>
        </div>
    </div>
    <script src="./plugins/jquery/jquery.min.js"></script>
    <script src="./assets/js/api/fetchApi.js"></script>
    <script src="./assets/js/api/all-api.js"></script>
    <script src="./assets/js/filter/login.js"></script>
    <script src="./assets/js/filter/getQueryParamValue.js"></script>
    <!-- ./wrapper -->
    <script>
        $(document).ready(function() {
            $("#loginBtn").click(function(e) {
                e.preventDefault();
                loginFunc();
            });
        });
    </script>
</body>

</html>