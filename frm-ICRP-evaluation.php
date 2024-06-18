<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>समुदाय संसाधन व्यक्ती</title>
    <?php include './include-common-style.php'; ?>
    <style>
        .question {
            margin-bottom: 10px;
        }

        @media screen and (max-width: 600px) {
            .question {
                margin-bottom: 20px;
            }
        }

        .question-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .question-row .question {
            width: 48%;
        }

        .question-row .question label {
            display: inline-block;
            margin-right: 10px;
        }

        .submit-button-container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }

        .question-row .question input[type="radio"] {
            margin-left: 20px;
            padding: 10px;
            border-radius: 50%;
        }

        .question-row .question label,
        .question-row .question input[type="radio"] {
            color: #4D4D4E;
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
                            <h1 class="m-0" id="name_upade">समुदाय संसाधन व्यक्ती मूल्यांकन </h1>
                        </div>
                    </div>
                </div>
            </div>
            <section class="content">
                <div class="container-fluid text-uppercase">
                    <div class="card card-default">
                        <div class="card-body">
                            <div class="row" id="questionsContainer">
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-md-6 form-group" id="fileuploaddiv">
                                    <label for="" class="form-label">फाईल अपलोड</label>
                                    <input type="file" name="file_upload" class="form-control" id="file_upload" required>
                                </div>
                                <!-- <div class="col-md-6 form-group">
                                    <label for="" class="form-label">टिप्पणी</label>
                                    <textarea name="remark" class="form-control" id="remark" placeholder="टिप्पणी प्रविष्ट करा" required></textarea>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="" class="form-label">टिप्पणी</label>
                                    <textarea name="remark" class="form-control" id="remark" placeholder="टिप्पणी प्रविष्ट करा" required></textarea>
                                </div> -->
                                <!-- <div class="row pt-3"> -->
                                <div class="col-md-6 form-group" id="remark1_div">
                                    <label for="remark1">पूर्ण केलेल्या कामाबद्दल प्रभाग समन्यवक टिप्पणी </label>
                                    <input type="text" class="form-control" id="remark1" name="remark1" accept="image/*" required>

                                </div>
                                <div class="col-md-6 form-group" id="remark2_div">
                                    <label for="remark2">पूर्ण केलेल्या कामाबद्दल तालुका अभियान व्यवस्थापक टिप्पणी</label>
                                    <input type="text" class="form-control" id="remark2" name="remark2" multiple accept="image/*" required>
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="col-md-6 form-group" id="statuscc">
                                    <label for="" class="form-label">प्रभाग समन्यवक शेरा :</label>
                                    <select name="role" id="statusDropDowncc" class="form-control" required>
                                        <option value="मंजूर">मंजूर</option>

                                        <option value="नामंजूर">नामंजूर</option>

                                        <option value="पेंडिंग">पेंडिंग</option>

                                    </select>
                                </div>

                                <!-- <div class="row pt-3"> -->
                                <div class="col-md-6 form-group" id="statusbmm">
                                    <label for="" class="form-label">तालुका अभियान व्यवस्थापक शेरा :</label>
                                    <select name="role" id="statusDropDownbmm" class="form-control" required>
                                        <option value="मंजूर">मंजूर</option>

                                        <option value="नामंजूर">नामंजूर</option>

                                        <option value="पेंडिंग">पेंडिंग</option>

                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12 d-flex justify-content-center" id="">
                                <button type="button" class="btn btn-info my-2" id="submit">जतन करा </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <?php include './include-common-scripts.php'; ?>
    <script src="./assets/js/filter/IcrpSakhiQuestions.js"></script>
    <script src="./assets/js/filter/updateICRP.js"></script>
    <script src="assets/js/parseData.js"></script>
    <script>
        ICRPQuestions();


        const user = JSON.parse(localStorage.getItem("user"));
        const {
            id
        } = user;
        (() => {
            let id = getQueryParamValue("id");
            console.log("get it", id);
            if (id) {
                updateICRPReport(id);
                return;
            }
            // submitKrushiSakhi()
            ICRPAnswers();
        })();
    </script>
    <script>
        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        })
    </script>
</body>

</html>