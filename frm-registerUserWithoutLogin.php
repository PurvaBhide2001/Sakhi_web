<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>उमेद-मुक्ताई</title>
    <?php include './include-common-style.php'; ?>
</head>


<body class="hold-transition sidebar-mini layout-fixed">

    <div class=" row">
        <div class="col-md-2">
            <div class="qr-code-wrapper">
                <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>
                <img src="./assets/img/qr_download.png" alt="" class="qr-code">
            </div>
        </div>
        <div class="col-md-10">

            <div class="content-wrapper" style="margin-left: 0px;">
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0">यूजर प्रशासक</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="content">
                    <div class="container-fluid text-uppercase">
                        <form id="userFormData" action="">
                            <div class="card card-default">
                                <div class="card-header">
                                    <h3 class="card-title" id="name_update">यूजर प्रशासक नोंदणी </h3>
                                </div>
                                <div class="card-body">
                                    <div class="row" id="dropdowns">
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4 form-group">
                                            <label for="" class="form-label">स्वतःचे नाव<sup class="text-danger">*</sup></label>
                                            <input type="text" name="f_name" class="form-control" id="f_name" placeholder="स्वतःचे नाव प्रविष्ट करा " required>
                                        </div>
                                        <div class="col-md-4 form-group">
                                            <label for="" class="form-label">वडिलांचे/पतीचे नाव</label>
                                            <input type="text" name="m_name" class="form-control" id="m_name" placeholder="वडिलांचे/पतीचे नाव प्रविष्ट करा " required>
                                        </div>

                                        <div class="col-md-4 form-group">
                                            <label for="" class="form-label">आडनाव<sup class="text-danger">*</sup></label>
                                            <input type="text" name="l_name" class="form-control" id="l_name" placeholder="आडनाव प्रविष्ट करा " required>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="" class="form-label">मोबाईल नंबर<sup class="text-danger">*</sup></label><br>
                                                <input type="text" name="username" class="form-control" id="mobilenumber" placeholder="मोबाईल नंबर">
                                            </div>
                                        </div>

                                        <div class="col-md-4 form-group">
                                            <label for="password" class="form-label">पासवर्ड<sup class="text-danger">*</sup></label>
                                            <div class="input-group">
                                                <input type="password" name="password" class="form-control" id="password" placeholder="पासवर्ड प्रविष्ट करा" required>
                                                <div class="input-group-append">
                                                    <button class="btn btn-outline-secondary" type="button" id="showPassword">Show</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <div class="row ">



                                    </div>


                                </div>
                                <hr>
                                <div class="col-md-12 d-flex justify-content-center" id="">
                                    <button type="button" class="btn btn-info my-2" id="submit">जतन करा </button>
                                </div>
                            </div>
                    </div>
                    </form>
            </div>
        </div>
        </section>
    </div>

    <?php include './include-copy-right.php' ?>
    </div>
    <?php include './include-common-scripts.php'; ?>
    <!-- <script src="./assets/js/filter/registerUser.js"></script> -->
    <script src="./assets/js/filter/registerUserWithoutLogin.js"></script>
    <!-- <script src="./assets/js/filter/updateUser.js"></script> -->
    <!-- <script src="assets/js/parseData.js"></script> -->
    <!-- <script src="./assets/js/filter/list-daily-report.js"></script> -->

    <!-- <script src="./assets/js/filter/address.js"></script> -->
    <script>
        const showPasswordButton = document.getElementById("showPassword");
        const passwordInput = document.getElementById("password");

        showPasswordButton.addEventListener("click", function() {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                showPasswordButton.textContent = "Hide";
            } else {
                passwordInput.type = "password";
                showPasswordButton.textContent = "Show";
            }
        });
    </script>

    <script>
        (() => {
            // let id = getQueryParamValue("id");
            // console.log("get it", id);
            // if (id) {
            //     updateUser(id);
            //     return;
            // }
            // registerUser();
            registerUserWithoutLogin();
        })();
        // roles()

        // document.querySelector("#logout").addEventListener("click", function() {

        //     sessionStorage.clear();
        //     window.location.href = "./frm-login.php";
        // })
        // const data1 = parseData("user");
    </script>
</body>

</html>