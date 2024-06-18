<?php
$activePage = "list-student";
$mainMenu = "student-user"
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>उमेद-मुक्ताई </title>
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
                            <h1 class="m-0">लाभार्थी यादी</h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <a href="./frm-register_students.php"> <button type="button" class="btn btn-sm datatable-button float-sm-right"> <i class="fas fa-plus"></i>
                                    लाभार्थी समाविष्ट करा </button></a>
                        </div>
                    </div>
                </div>
                <section class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">


                                        <form id="prakalpData1">
                                            <div class="row">
                                                <div class="col-md-4 form-group">
                                                    <label for="Prakalpa" class="form-label">प्रकल्पाचे नाव</label>
                                                    <select name="prakalpa_id" class="form-control" id="prakalpa_id" required>
                                                        <option value="select">निवडा</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-4 form-group">
                                                    <label for="Bit" class="form-label">बिट नाव</label>
                                                    <select name="bit_id" class="form-control" id="bit_id" required>
                                                        <option value="select">निवडा</option>
                                                    </select>
                                                </div>

                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label for="Aganvadi" class="form-label">अंगणवाडी केंद्र</label>
                                                        <select name="anganwadi_id" class="form-control" id="anganwadi_id" required>
                                                            <option value="select">निवडा </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 d-flex justify-content-center" id="">
                                                    <button type="button" class="btn btn-sm datatable-button my-2" id="submit1">शोधा</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>


                                <div class="card-body">
                                    <div class="" style="overflow-x: auto;">
                                        <table id="example1" class="table table-bordered table-striped">
                                            <thead class="bg-soft-blue text-white">
                                                <tr>
                                                    <th>अं.क्रं.</th>
                                                    <th>अंगणवाडी नाव</th>
                                                    <th>लाभार्थ्यांचे नाव</th>
                                                    <th>आईचे नाव</th>
                                                    <th> वडिलांचे नाव</th>
                                                    <th>जन्मतारीख</th>
                                                    <th>लिंग</th>
                                                    <th>रुजू दिनांक</th>
                                                    <th>पत्ता </th>
                                                    <th>अपडेट करा / हटवा</th>
                                                </tr>
                                            </thead>
                                            <tbody id="studentList">
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>

                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                                <!-- /.card-body -->
                            </div>
                            <!-- /.card -->
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->
            </div><!-- /.container-fluid -->
            </section>
            <!-- /.content -->
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

    <script src="./assets/js/filter/anganwadiOpstionListHarshal.js"></script>
    <script src="./assets/js/filter/studentGetList.js"></script>

    <script src="assets/js/parseData.js"></script>
    <script>
        // let dataSet=[]

        $(function() {

            $("#example1").DataTable({
                // data: dataSet,
                "responsive": false,
                "lengthChange": false,
                "autoWidth": false,

                "buttons": [{
                        extend: 'copy',
                        className: 'datatable-button',
                    },
                    {
                        extend: 'excel',
                        className: 'datatable-button',
                    },
                    {
                        extend: 'print',
                        className: 'datatable-button',
                    },
                ],
            }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');

        });

        $("#submit1").click(function() {
            studentLitshow();
            clickToScrollRequiredPlace("studentList", "start");

        })
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
        let {
            data
        } = studentApi.GetList();
        studentGetList(data);

        // rolewisesetdata();
    </script>

    <!--  LogOut -->
    <script>
        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        })
    </script>

</body>

</html>