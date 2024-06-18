<?php
$activePage = "list-student";
$mainMenu = "student-user"
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>कर्मचारी तपशील</title>
    <?php include './include-common-style.php'; ?>
    <?php include './include-datatable-style.php'; ?>
    <style>
        .icon {
            margin-right: 5px;
        }
    </style>
</head>
<?php include './include-sidebar.php'; ?>
<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h4 class="m-0 title">कर्मचारी तपशील </h4>
                        </div>
                    </div>
                </div>
            </div>
            <section class="content" id="studentDataAll">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3" id="getdata">
                            <div class="card body" id="aboutCard">
                                <div style="background-color:#396488;" class="card-header">
                                    <h3 style="color:White;" class="card-title">कर्मचारी तपशील</h3>
                                </div>
                                <div class="card-body">
                                    <p><i class="fas fa-user icon"></i><strong>स्वतःचे नाव :</strong> अक्षय</p>
                                    <hr>
                                    <p><i class="fas fa-user icon"></i><strong>वडिलांचे नाव:</strong> अनिल</p>
                                    <hr>
                                    <p><i class="fas fa-user icon"></i><strong>आडनाव :</strong> कोल्हे</p>
                                    <hr>
                                    <p><i class="far fa-calendar-alt icon"></i><strong>जन्मतारीख :</strong> ०५/०९/१९९७</p>
                                    <hr>
                                    <p><i class="fas fa-user-tie icon"></i><strong>कर्मचारी पद :</strong> या क</p>
                                    <hr>
                                </div>
                            </div>

                            <div class="card body" id="aboutCard">
                                <div style="background-color:#396488;" class="card-header">
                                    <h3 style="color:White;" class="card-title">उपस्थिती तपशील</h3>
                                </div>
                                <div class="card-body">
                                    <p><i class="fas fa-clock icon"></i><strong>लॉगिन वेळ :</strong> <input type="text" value="2024-04-18 11:49:58" readonly></p>
                                    <hr>
                                    <p><i class="fas fa-clock icon"></i><strong>लॉगआउट वेळ :</strong> <input type="text" value="2024-04-18 11:49:58" readonly></p>
                                    <hr>
                                    <p><i class="fas fa-map-marked-alt icon"></i><strong>लॉगिन जागा :</strong> Jalgaon</p>
                                    <hr>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="card">
                                <div class="card-header p-2">
                                    <div class="card body" id="aboutCard">
                                        <div style="background-color:#396488;" class="card-header">
                                            <h3 style="color:White;" class="card-title">दैनंदिन कामाचा अहवाल</h3>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <p><i class="far fa-calendar-alt icon"></i><strong>दिनांक :</strong> 05/09/1997</p>
                                                </div>
                                                <p><i class="fas fa-map-marker-alt icon"></i><strong>जागा :</strong> १२/०५/१९८५</p>
                                                <hr>
                                            </div>
                                            <hr>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <p><i class="far fa-image icon"></i><strong> प्रतिमा :</strong></p>
                                                    <div class="col-md-6">
                                                        <img src="https://th.bing.com/th/id/OIP.RrxfqHFPMMkzEZfBBuufiQHaHa?rs=1&pid=ImgDetMain" alt=" Image" class="img-fluid" style="max-height: 104;">
                                                    </div>

                                                </div>
                                            </div>
                                            <hr>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <p><i class="far fa-image icon"></i><strong>बैठक प्रतिमा :</strong></p>
                                                </div>
                                                <div class="col-md-2">
                                                    <img src="https://th.bing.com/th/id/OIP.RrxfqHFPMMkzEZfBBuufiQHaHa?rs=1&pid=ImgDetMain" alt="Meeting Image 1" class="img-fluid" style="max-height: 200px;">
                                                </div>
                                                <div class="col-md-2">
                                                    <img src="https://th.bing.com/th/id/OIP.RrxfqHFPMMkzEZfBBuufiQHaHa?rs=1&pid=ImgDetMain" alt="Meeting Image 2" class="img-fluid" style="max-height: 200px;">
                                                </div>
                                                <div class="col-md-2">
                                                    <img src="https://th.bing.com/th/id/OIP.RrxfqHFPMMkzEZfBBuufiQHaHa?rs=1&pid=ImgDetMain" alt="Meeting Image 3" class="img-fluid" style="max-height: 200px;">
                                                </div>
                                                <div class="col-md-2">
                                                    <img src="https://th.bing.com/th/id/OIP.RrxfqHFPMMkzEZfBBuufiQHaHa?rs=1&pid=ImgDetMain" alt="Meeting Image 4" class="img-fluid" style="max-height: 200px;">
                                                </div>
                                                <div class="col-md-2">
                                                    <img src="https://th.bing.com/th/id/OIP.RrxfqHFPMMkzEZfBBuufiQHaHa?rs=1&pid=ImgDetMain" alt="Meeting Image 5" class="img-fluid" style="max-height: 200px;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header p-2">
                                    <div class="card body" id="aboutCard">
                                        <div style="background-color:#396488;" class="card-header">
                                            <h3 style="color:White;" class="card-title">मासिक अहवाल</h3>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <p><i class="fas fa-rupee-sign icon"></i><strong>एकूण देयक :</strong>१०००० </p>
                                                </div>
                                                <div class="col-md-6">
                                                    <p><i class="fas fa-trophy icon"></i><strong>वर्ग :</strong> A क्लास </p>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <p><i class="fas fa-file-upload icon"></i><strong>फाइल अपलोड :</strong> 1</p>
                                                </div>
                                                <div class="col-md-6">
                                                    <p><i class="fas fa-comment icon"></i><strong>शेरा :</strong> १२/०५/१९८५</p>
                                                </div>
                                            </div>
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header p-2">
                            <div class="card body" id="aboutCard">
                                <div style="background-color:#396488;" class="card-header">
                                    <h3 style="color:White;" class="card-title">
                                        <span>मूल्यमापन </span>
                                    </h3>
                                    <div>
                                        <span style="float:right; color:White;">19-04-2024</span>

                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>प्रश्न क्र.</th>
                                                    <th>विकासाचे निर्देशक</th>
                                                    <th>उत्तर</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>सांधिक खेळांत आणि वर्गात खेळताना सक्रियपणे सहभागी होता येते ?</td>
                                                    <td>मदत लागते</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>सागितलेल्या दिशेने चेंडू फेकता / लाथेने मारता येतो?</td>
                                                    <td>चांगले जमते</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>सरळ पुढे / उलटे मागे / एका बाजूला चालता येते ?</td>
                                                    <td>चांगले जमते</td>
                                                </tr>
                                            </tbody>
                                        </table>
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
<script src = "./assets/js/filter/employeedetails1.js"></script>    

</body>

</html>