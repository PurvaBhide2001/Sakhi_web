<?php
$activePage = "monthly_reports";
$mainMenu = "monthly_reports";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>मूल्यांकन यादी</title>
    <?php include './include-common-style.php'; ?>
    <?php include './include-datatable-style.php'; ?>
</head>

<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <?php include './include-sidebar.php'; ?>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0"> मूल्यांकन यादी</h1>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="" style="overflow-x: auto;">
                                        <div class="row">

                                        </div>
                                        <table id="example1" class="table table-bordered table-striped">
                                            <thead class="bg-soft-blue text-white">
                                                <tr>
                                                    <th>अ. क्र. </th>
                                                    <th>कर्मचारी नाव</th>
                                                    <th>पदभार</th>
                                                    <!-- <th>मासिक कामाचा अहवाल</th> -->
                                                    <th>श्रेणी</th>
                                                </tr>
                                            </thead>
                                            <tbody id="krushiSakhiList">
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
        <!-- /.content-wrapper -->
        <?php include './include-copy-right.php'; ?>
    </div>
    <!-- ./wrapper -->
    <?php include './include-common-scripts.php'; ?>
    <?php include './include-datatable-scripts.php'; ?>
    <script src="./assets/js/filter/listMonthlyIncome.js"></script>
    <script src="assets/js/parseData.js"></script>
    <script>
        $(function() {
            $("#example1").DataTable({
                "responsive": true,
                "lengthChange": true,
                "autoWidth": false,
                "searching": true,
                "ordering": false,
                "buttons": ["excel", "print"]
            }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');

        });
        // roles()
        lastMonthReport();
    </script>
    <script>
        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        })
    </script>
</body>