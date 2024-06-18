<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>उमेद-मुक्ताई</title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="shortcut icon" type="image/x-icon" href="./dist/img/idea-80.png">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
    <!-- icheck bootstrap -->
    <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="dist/css/adminlte.min.css">
    <link rel="stylesheet" href="dist/css/adminlte.min.css">
    <style>
        /* .bg-img {
            background-image: url(./assets/img/DJI_0309.JPG);
            background-repeat: no-repeat;
            background-size: cover;
        } */
    </style>
</head>

<body class="hold-transition sidebar-mini layout-fixed bg-img">
    <div class="row">
        <div class="col-md-3">

        </div>
        <div class="col-md-6">

        </div>
        <div class="col-md-3"></div>
    </div>


    <div class="d-flex justify-content-center align-items-center py-5">
        <div class="login-logo">

            <img src="" alt="" srcset="" height="150px">
        </div>
        <!-- /.login-logo -->
        <div class="card card-outline card-primary" style="width: 345px; height: 330px">
            <div class="card-body login-card-body">

                <p class="login-box-msg "><b>नवीन पासवर्ड तयार करा </b> </p>

                <form action="" method="post">
                    <div class="row">


                        <div class="col-md-12 form-group">
                            <label for="" class="form-label">पासवर्ड <sup class="text-danger">*</sup></label>
                            <span class="text-danger msg d-none" id="">पासवर्ड आयडी वैध नाही </span>
                            <div class="input-group ">
                                <input oninput="checkPassword1(this); validatePassword1()" type="password" id="password" name="password" class="form-control" placeholder="पासवर्ड प्रविष्ट करा ">

                                <div class="input-group-append">
                                    <div class="input-group-text" style="height:38px;">
                                        <!-- <span class="fa fa-eye"></span> -->
                                        <i class="fa fa-eye-slash" aria-hidden="true" id="togglePassword1"></i>
                                    </div>
                                </div>
                            </div>
                        </div><br>

                        <div class="col-md-12 form-group">
                            <label for="" class="form-label">पासवर्ड पुष्टी<sup class="text-danger">*</sup></label>
                            <span class="text-danger msg d-none" id="cPassMsg"> पासवर्ड जुळत नाही </span>

                            <input type="password" id="Password" name="Password" class="form-control" oninput="validatePassword1()" placeholder="पासवर्ड">
                        </div>

                    </div>

                </form>
                <br>
                <div class="col-12  d-flex justify-content-center">
                    <button type="submit" id="submit" class="btn btn-primary btn-block">सबमिट </button>
                </div>
                <br>
                <!-- /.social-auth-links -->
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
    <script src="./plugins/jquery/jquery.min.js"></script>
    <script src="./assets/js/api/fetchApi.js"></script>
    <script src="./assets/js/api/all-api.js"></script>
    <script src="./assets/js/filter/forgrtPassword.js"></script>
    <script src="./assets/js/filter/getQueryParamValue.js"></script>

    <!-- ./wrapper -->
    <script>
        chengepassword();
    </script>

</body>

</html>