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
        <div class="card card-outline card-primary" style="width: 480px; height: 450px">
            <div class="card-body login-card-body">
                <p class="login-box-msg "><b>पासवर्ड विसरलात ?</b> </p>
                <form method="post">
                    <div class="row">
                        <div class="col-md-12 form-group">
                            <label for="username" class="form-label"> मोबाईल नंबर </label>
                            <input type="text" name="username" class="form-control" id="username" placeholder="मोबाईल नंबर प्रविष्ट करा" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 form-group">
                            <label for="" class="form-label"> नवीन पासवर्ड </label>
                            <input type="password" name="password" class="form-control" id="password" placeholder="नवीन पासवर्ड" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 form-group">
                            <label for="" class="form-label"> पासवर्डची पुष्टी करा </label>
                            <input type="password" name="new_password" class="form-control" id="new_password" placeholder="पासवर्डची पुष्टी करा" required>
                        </div>
                    </div>
                </form>
                <br>
                <div class="col-12  d-flex justify-content-center">
                    <button type="submit" id="submit" class="btn btn-primary btn-block">सबमिट </button>
                </div>
                <br>
                <p class="mb-1">
                    <a href="frm-login.php">लॉगिन करा</a>
                </p>
            </div>
        </div>
    </div>
    <script src="./assets/js/api/all-api.js"></script>
    <script src="./assets/js/api/fetchApi.js"></script>
    <script src="./assets/js/filter/forgrtpassword.js"></script>
    <script>
        function validatePassword() {
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("new_password").value;

            if (password !== confirmPassword) {
                alert("पासवर्ड आणि पासवर्डची पुष्टी करा सामायिक नाहीत. कृपया तपासा आणि पुन्हा प्रयत्न करा.");
                return false;
            }
            return true;
        }
        // Function to attach event listener to the submit button
        function attachSubmitListener() {
            var submitButton = document.getElementById("submit");
            submitButton.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent form submission
                forgetPassword(); // Call the forgetPassword function
            });
        }


        // Call the function to attach event listener when the document is ready
        document.addEventListener("DOMContentLoaded", function() {
            attachSubmitListener();
        });
    </script>
    <script src="./plugins/jquery/jquery.min.js"></script>
</body>

</html>