<?php
$activePage = "user-student";
$mainMenu = "student-user"
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>उमेद-मुक्ताई </title>

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
                            <h1 class="m-0" id="name_upade">लाभार्थी समाविष्ट करा </h1>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid text-uppercase">

                    <!-- SELECT2 EXAMPLE -->

                    <div class="card card-default">
                        <div class="card-body">
                            <form id="UserFormData" action="">
                                <div class="row" id="prakalpData">
                                    <div class="col-md-4 form-group">
                                        <label for="Prakalpa" class="form-label">प्रकल्पाचे नाव<sup class="text-danger">*</sup></label>
                                        <select name="prakalpa_id" class="form-control" id="prakalpa_id" required>
                                            <option value="select">निवडा</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4 form-group">
                                        <label for="Bit" class="form-label">बिट नाव<sup class="text-danger">*</sup></label>
                                        <select name="bit_id" class="form-control" id="bit_id" required>
                                            <option value="select">निवडा</option>
                                        </select>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="Aganvadi" class="form-label">अंगणवाडी केंद्र <sup class="text-danger">*</sup></label>
                                            <select name="anganwadi_id" class="form-control" id="anganwadi_id" required>
                                                <option value="select">निवडा </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-header">
                                    <h3 class="card-title">लाभार्थी माहिती</h3>
                                </div>
                                <div id="studentFormData">
                                    <div class="row pt-3">
                                        <div class="col-md-4 form-group">
                                            <label for="" class="form-label">लाभार्थ्यांचे नाव<sup class="text-danger">*</sup></label>
                                            <input type="text" name="f_name" class="form-control" id="f_name" placeholder="स्वतःचे नाव प्रविष्ट करा " required>

                                        </div>
                                        <div class="col-md-4 form-group">
                                            <label for="" class="form-label">वडिलांचे नाव <sup class="text-danger">*</sup></label>
                                            <input type="text" name="m_name" class="form-control" id="m_name" placeholder="वडिलांचे नाव प्रविष्ट करा " required>

                                        </div>
                                        <div class="col-md-4 form-group">
                                            <label for="" class="form-label">आडनाव <sup class="text-danger">*</sup></label>
                                            <input type="text" name="l_name" class="form-control" id="l_name" placeholder="आडनाव प्रविष्ट करा" required>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-4 form-group">
                                            <label for="" class="form-label">आईचे नाव <sup class="text-danger">*</sup></label>
                                            <input type="text" name="mother_name" class="form-control" id="mother_name" placeholder="आईचे नाव प्रविष्ट करा" required>
                                        </div>
                                        <div class="col-md-4 form-group">
                                            <label for="" class="form-label">जन्मतारीख<sup class="text-danger">*</sup></label>
                                            <input type="date" name="dob" class="form-control" id="dob" placeholder=" " required>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="state" class="form-label">लिंग<sup class="text-danger">
                                                        *</sup></label>
                                                <select name="gender" class="form-control" id="gender">
                                                    <option value="select">निवडा </option>
                                                    <option value="Male">मुलगा</option>
                                                    <option value="Female">मुलगी </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">

                                        <div class="col-md-4 form-group">
                                            <label for="" class="form-label">अंगणवाडीत प्रवेश करण्याची तारीख <sup class="text-danger">*</sup></label>
                                            <input type="date" name="join_date" class="form-control" id="join_date" placeholder=" " required>
                                        </div>



                                        <div class="col-md-4 form-group">
                                            <label for="" class="form-label">वजन (किलो)<sup class="text-danger">*</sup></label>
                                            <input type="number" name="weight" class="form-control" id="weight" placeholder=" वजन प्रविष्ट करा" required>
                                        </div>
                                        <div class="col-md-4 form-group">
                                            <label for="" class="form-label">उंची (सेमी)<sup class="text-danger">*</sup></label>
                                            <input type="number" name="height" class="form-control" id="height" placeholder="उंची प्रविष्ट करा " required>
                                        </div>
                                    </div>
                                    <div class="row">

                                        <div class="col-md-4 form-group">
                                            <label for="" class="form-label">अंगणवाडीतुन पास झाल्याची तारीख</label>
                                            <input type="date" name="pass_date" class="form-control" id="pass_date" placeholder=" " required>
                                        </div>
                                        <div class="col-md-4 form-group">
                                            <label for="" class="form-label">सामील होण्याचा फोटो<sup class="text-danger">*</sup></label>
                                            <input type="file" name="join_photo" class="form-control" id="join_photo" placeholder=" " required accept="image/*">
                                        </div>

                                        <div class="col-md-4 form-group">
                                            <label for="" class="form-label">पास आउट फोटो
                                            </label>
                                            <input type="file" name="pass_photo" class="form-control" id="pass_photo" placeholder="" required accept="image/*">
                                        </div>
                                    </div>

                                    <div class="card-header">
                                        <h3 class="card-title">लाभार्थ्यांचा पत्ता</h3>
                                    </div>
                                </div>

                                <div id="addressData">
                                    <div class="row pt-3">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="state" class="form-label">राज्य<sup class="text-danger">*</sup></label>
                                                <select name="state" class="form-control" id="state">
                                                    <option value="select">निवडा </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="" class="form-label">जिल्हा <sup class="text-danger">*</sup></label>
                                                <select name="district" class="form-control" id="district">
                                                    <option value="select">निवडा </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>तालुका <sup class="text-danger">*</sup></label>
                                                <select name="block" class="form-control" id="block">
                                                    <option value="select">निवडा </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>गाव <sup class="text-danger">*</sup></label>
                                                <select name="village" class="form-control" id="village">
                                                    <option value="select">निवडा</option>
                                                </select>
                                            </div>

                                        </div>
                                        <div class="col-md-4 form-group">
                                            <label for="" class="form-label">पिन कोड</label>
                                            <span class="text-danger" id="msg"></span>
                                            <input type="tel" name="zip_code" class="form-control" id="zip_code" placeholder="पिन कोड प्रविष्ट करा" minlength="6" maxlength="6" onKeyUp="zipCode()" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 d-flex justify-content-center" id="">
                                        <button type="button" class="btn datatable-button my-2" id="submit">जतन करा </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
            <!-- /.content -->
        </div>
        <script>
            const menu = "createStudent-menu"
            const subMenu = "createstudent-Register"
        </script>
        <?php include './include-copy-right.php' ?>
    </div>
    <!-- ./wrapper -->
    <?php include './include-common-scripts.php'; ?>

    <!-- <script src="./assets/js/filter/anganwadiOpstionListHarshal.js"></script> -->
    <script src="./assets/js/filter/studentRegister.js"></script>
    <script src="./assets/js/filter/updateStudent.js"></script>
    <script src="./assets/js/filter/address.js"></script>

    <script src="assets/js/parseData.js"></script>

    <script>
        // stateOptionsSet(document.querySelector("#addressData"));
        // aganwadiOpstionList();
        // sectorListallstudent();
    </script>

    <script>
        (() => {
            let id = getQueryParamValue("id")

            if (!id) {
                const idObj = {
                    prakalID: "prakalpa_id",
                    bitID: "bit_id",
                    anganwadiID: "anganwadi_id"
                }
                const isSingleObj = {
                    isPrakalp: false,
                    isBit: false,
                    isAnganwadi: false,
                }
                seAsPerRoleValue(idObj, isSingleObj)
                // prakalpDropDown(idObj, isSingleObj)
                studentRegister();
                const addressOptionSet = new AddressOptionSet(
                    "state",
                    "district",
                    "block",
                    "village"
                );
                addressOptionSet.state()

                return
            }
            updateStudent(id)
        })()
    </script>

    <!--  LogOut -->
    <script>
        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        })

        const data1 = parseData("user");
    </script>
</body>

</html>