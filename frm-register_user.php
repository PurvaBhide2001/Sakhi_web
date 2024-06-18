<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>उमेद-मुक्ताई</title>
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
                                    <div class="col-md-4 form-group">
                                        <label for="role" class="form-label">कर्मचारी पद<sup class="text-danger">*</sup></label>
                                        <select name="role" id="role" class="form-control" required>
                                            <option value="">कर्मचारी पद निवडा</option>
                                        </select>
                                    </div>

                                    <div class="col-md-4 form-group">
                                        <label for="" class="form-label">कर्मचारी जन्मतारीख</label>
                                        <input type="date" name="dob" class="form-control" id="dob" placeholder="कर्मचारीचे जन्मतारीख प्रविष्ट करा ">
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="" class="form-label">मोबाईल नंबर<sup class="text-danger">*</sup></label><br>
                                            <input type="number" name="username" class="form-control" id="mobilenumber" placeholder="मोबाईल नंबर">
                                        </div>
                                    </div>
                                </div>
                                <div id="addressDropdowns">
                                    <div class="row">
                                        <div class="col-md-4 form-group">
                                            <label for="state" class="form-label">राज्य<sup class="text-danger">*</sup></label>
                                            <select name="state" class="form-control" id="state">
                                                <option value="select">निवडा </option>
                                            </select>
                                        </div>
                                        <div class="col-md-4 form-group">
                                            <label for="district" class="form-label">जिल्हा <sup class="text-danger">*</sup></label>
                                            <select name="district" class="form-control" id="district">
                                                <option value="select">निवडा </option>
                                            </select>
                                        </div>
                                        <div id="blockContainer" class="col-md-4 form-group">
                                            <label>तालुका <sup class="text-danger">*</sup></label>
                                            <select name="block" class="form-control" id="block">
                                                <option value="select">निवडा </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div id="clusterContainer" class="col-md-4 form-group">
                                            <label for="cluster_id" class="form-label">क्लस्टर नाव <sup class="text-danger">*</sup></label>
                                            <select name="cluster_id" class="form-control" id="cluster_id">
                                                <option value="select">क्लस्टर निवडा </option>
                                            </select>
                                        </div>
                                        <div id="grampanchayatContainer" class="col-md-4 form-group">
                                            <label for="village" class="form-label"> ग्रामपंचायत<sup class="text-danger">*</sup></label>
                                            <select name="village" class="form-control" id="village">
                                                <option value="select">Select</option>
                                            </select>
                                        </div>
                                        <div id="villageContainer" class="col-md-4 form-group">
                                            <label for="grampanchayat" class="form-label">गाव<sup class="text-danger">*</sup></label>
                                            <select name="grampanchayat" class="form-control" id="grampanchayat">
                                                <option value="select">Select</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
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
                            </div>
                            <hr>
                            <div class="col-md-12 d-flex justify-content-center" id="">
                                <button type="button" class="btn btn-info my-2" id="submit">जतन करा </button>
                            </div>
                        </div>
                </div>
                </form>
        </div>
        </section>
    </div>
    <?php include './include-copy-right.php' ?>
    </div>
    <?php include './include-common-scripts.php'; ?>
    <script src="./assets/js/filter/registerUser.js"></script>
    <script src="./assets/js/filter/updateUser.js"></script>
    <script src="assets/js/parseData.js"></script>
    <script src="./assets/js/filter/list-daily-report.js"></script>
     <script src="./assets/js/filter/address.js"></script>
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
        document.addEventListener("DOMContentLoaded", function() {
            const blockDropdown = document.getElementById("block");

            blockDropdown.addEventListener("change", function() {
                console.log("Selected block:", this.value);
                clusters(this.value); // Pass selected block value to clusters function
            });

            const clusters = (blockCode) => {
                const {
                    data
                } = addressApi.getCluster(blockCode);
                console.log(data, "clusters");
                const optionsSet = [];
                optionsSet.push(`<option value="" selected>क्लस्टर निवडा</option>`);

                data?.forEach((element) => {
                    const html = `<option value="${element.id}">${element.cluster_name}</option>`;
                    optionsSet.push(html);
                });
                document.getElementById("cluster_id").innerHTML = optionsSet.join("");
            };
        });
        const addressOptionSet = new AddressOptionSet(
            "state",
            "district",
            "block",
            "grampanchayat",
            "village"
        );
        addressOptionSet.state()
        clusters(blockCode);
    </script>
    <script>
        (() => {
            let id = getQueryParamValue("id");
            console.log("get it", id);
            if (id) {
                updateUser(id);
                return;
            }
            registerUser();
        })();
        const roles = () => {
            const {
                data
            } = roleApi.getList();
            const optionsSet = [];
            optionsSet.push(`<option value="" selected>पद निवडा </option>`); // Fix typo in "selected"

            data?.forEach((element) => {
                const html = `<option value="${element.id}">${element.role_name}</option>`;
                optionsSet.push(html);
            });
            document.getElementById("role").innerHTML = optionsSet.join("");
        };
        roles()
        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        })
        const data1 = parseData("user");
    </script>
</body>

</html>