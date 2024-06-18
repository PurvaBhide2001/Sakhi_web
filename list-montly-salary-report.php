<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>मासिक पगाराचा अहवाल</title>
    <?php include './include-common-style.php'; ?>
    <?php include './include-datatable-style.php'; ?>

</head>

<body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
        <?php include './include-sidebar.php'; ?>

        <div class="content-wrapper">

            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">मासिक पगाराचा अहवाल</h1>
                        </div>
                        <div class="col-sm-6">
                            <div class="float-sm-right">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">



                            <div class="card">
                                <div class="card-body">
                                    <div class="" style="overflow-x: auto;">
                                        <table id="example1" class="table table-bordered table-striped">
                                            <thead class="bg-soft-blue text-white">
                                                <tr>
                                                    <th>अ.क्रं.</th>
                                                    <th>कर्मचारी नाव</th>
                                                    <th>पदभार</th>
                                                    <th>तारीख</th>
                                                    <th id="statusLable">प्रभाग समन्यवक शेरा</th>
                                                    <th id="remarkcc">प्रभाग समन्यवक टिप्पणी</th>
                                                    <th id="statusLable2">तालुका अभियान व्यवस्थापक शेरा</th>
                                                    <th id="remarkBmm">तालुका अभियान व्यवस्थापक टिप्पणी</th>
                                                    <th>श्रेणी</th>
                                                    <th>मासिक पगार</th>
                                                    <th>टिप्पणी</th>
                                                    <th>पगार अपडेट करा</th>
                                                </tr>
                                            </thead>
                                            <tbody id="monthlyReportsList">
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
    <script src="assets/js/parseData.js"></script>
    <script src="./assets/js/filter/listMonthlyIncome.js"></script>
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
        ListMonthlyInccomeReport()
        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        });
    </script>
</body>

</html>