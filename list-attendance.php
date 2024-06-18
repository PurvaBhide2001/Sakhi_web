<?php
$activePage = "daily_reports";
$mainMenu = "daily_reports";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>उमेद-मुक्ताई - उपस्थिती</title>
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
                            <h1 class="m-0">उमेद-मुक्ताई उपस्थिती</h1>
                        </div>
                        <div class="col-sm-6">
                            <a href="./register-attendance.php">
                                <button type="button" class="btn btn-sm datatable-button float-sm-right">
                                    <i class="fas fa-plus"></i> उपस्थिती जोडा
                                </button>
                            </a>
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
                                            <div class="col-md-3 form-group">
                                                <label for="" class="form-label">तारीख निवडा :</label>
                                                <input type="date" name="selectedDate" class="form-control" id="selectedDate" required>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label for="state" class="form-label">राज्य<sup class="text-danger">*</sup></label>
                                                    <select name="state" class="form-control" id="state">
                                                        <option value="select">निवडा </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label for="" class="form-label">जिल्हा <sup class="text-danger">*</sup></label>
                                                    <select name="district" class="form-control" id="district">
                                                        <option value="select">निवडा </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>तालुका <sup class="text-danger">*</sup></label>
                                                    <select name="block" class="form-control" id="block">
                                                        <option value="select">निवडा </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>क्लस्टर नाव <sup class="text-danger">*</sup></label>
                                                    <select name="cluster" class="form-control" id="cluster">
                                                        <option value="select">क्लस्टर निवडा </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <table id="example1" class="table table-bordered table-striped">
                                            <thead class="bg-soft-blue text-white">
                                                <tr>
                                                    <th>अ. क्र. </th>
                                                    <th>तारीख</th>
                                                    <th>वापरकर्ता नाव</th>
                                                    <th>स्थान</th>
                                                    <th>कर्मचारी पद</th>
                                                    <th>लॉगिन</th>
                                                    <th>विभाग</th>
                                                    <th>लॉगआउट वेळेचे स्थान</th>
                                                    <th>लॉगआउट वेळ</th>
                                                </tr>
                                            </thead>
                                            <tbody id="attendanceList">
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
    <script src="./assets/js/filter/listAttendance.js"></script>

    <script src="./assets/js/filter/addressByFiler.js"></script>
    <script src="assets/js/parseData.js"></script>
    <script>
        $(function() {
            $("#example1").DataTable({
                "responsive": true,
                "lengthChange": true,
                "autoWidth": false,
                "searching": true,
                "ordering": true,
                "buttons": ["excel", "print"]
            }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
        });

        const user = JSON.parse(localStorage.getItem('user'));

        const userState = user?.state;
        const userdistrict = user?.district;
        const userblock = user?.block;
        const userCluster = user?.cluster_id;
        const userRole = parseInt(user?.role, 10); // Convert user role to number

        const stateDropdown = document.getElementById("state");
        const districtDropdown = document.getElementById("district");
        const blockDropdown = document.getElementById("block");
        const clusterDropdown = document.getElementById("cluster");

        const addressOptionSet = new AddressOptionSet("state", "district", "block");

        const setClusterDropdown = async (blockCode, selectedCluster) => {
            console.log("Fetching clusters for block:", blockCode);
            const {
                data
            } = await addressApi.getCluster(blockCode);
            console.log("Received data:", data);

            // Ensure data is an array
            if (!Array.isArray(data)) {
                console.error("Expected array but received:", data);
                return;
            }

            const optionsSet = ['<option value="" selected>क्लस्टर निवडा</option>'];
            data?.forEach((element) => {
                const html = `<option value="${element.id}">${element.cluster_name}</option>`;
                optionsSet.push(html);
            });
            clusterDropdown.innerHTML = optionsSet.join("");

            if (selectedCluster) {
                clusterDropdown.value = selectedCluster;
                console.log("Cluster set from localStorage:", selectedCluster);
            }
        };

        const initializeDropdowns = async () => {
            if (userState && userdistrict && userRole) {
                stateDropdown.disabled = true;
                districtDropdown.disabled = true;
                blockDropdown.disabled = true;

                await addressOptionSet.state(userState);
                await addressOptionSet.district(userState, userdistrict);
                await addressOptionSet.block(userdistrict, userblock);

                if ([16].includes(userRole)) {
                    stateDropdown.disabled = true;
                    districtDropdown.disabled = true;
                    blockDropdown.disabled = true;
                    clusterDropdown.disabled = true;

                    await addressOptionSet.state(userState);
                    await addressOptionSet.district(userState, userdistrict);
                    await addressOptionSet.block(userdistrict, userblock);
                    await setClusterDropdown(userblock, userCluster);

                    getAllAnswersByClusterParams();
                } else if ([9, 10, 11, 12, 13].includes(userRole)) {
                    clusterDropdown.disabled = false;

                    await setClusterDropdown(userblock, userCluster);
                    getAllAnswersByClusterParams();
                } else if ([1, 2, 3, 4, 5, 6, 7, 8].includes(userRole)) {
                    blockDropdown.disabled = false;
                    clusterDropdown.disabled = false;

                    if (userblock) {
                        await setClusterDropdown(userblock, userCluster);
                    }

                    getAllAnswersByClusterParams();
                } else {
                    getAllAnswersByClusterParams();
                }
            } else {
                addressOptionSet.state();
                getAllAnswersByClusterParams();
            }
        };

        initializeDropdowns();

        stateDropdown.addEventListener("change", getAllAnswersByClusterParams);
        districtDropdown.addEventListener("change", getAllAnswersByClusterParams);
        blockDropdown.addEventListener("change", async function() {
            await setClusterDropdown(this.value);
            getAllAnswersByClusterParams();
        });
        clusterDropdown.addEventListener("change", getAllAnswersByClusterParams);
        document.getElementById("selectedDate").addEventListener("change", getAllAnswersByClusterParams);

        async function getAllAnswersByClusterParams() {
            const selectedDate = document.getElementById("selectedDate").value;
            const stateCode = stateDropdown.value;
            const districtCode = districtDropdown.value;
            const blockCode = blockDropdown.value;
            const clusterId = clusterDropdown.value;
            // if(stateCode && districtCode){
            //     listAttendanceByDistrict(stateCode, districtCode)
            // }else if(stateCode && districtCode && blockCode){
            //     listAttendanceByDistrictAndBlock(stateCode, districtCode, blockCode)
            // }
            console.log("api function is called",clusterId);
            listAttendance(stateCode, districtCode, blockCode, clusterId, selectedDate);
        }


        // const stateDropdown = document.getElementById("state");
        // const districtDropdown = document.getElementById("district");
        // const blockDropdown = document.getElementById("block");
        // const clusterDropdown = document.getElementById("cluster");

        // stateDropdown.addEventListener("change", function() {
        //     getAllAnswersByClusterParams(); // Call the function to pass selected values
        // });

        // districtDropdown.addEventListener("change", function() {
        //     getAllAnswersByClusterParams(); // Call the function to pass selected values
        // });

        // blockDropdown.addEventListener("change", function() {
        //     clusters(this.value); // Pass selected block value to clusters function
        //     getAllAnswersByClusterParams(); // Call the function to pass selected values
        // });

        // clusterDropdown.addEventListener("change", function() {
        //     getAllAnswersByClusterParams(); // Call the function to pass selected values
        // });

        // const clusters = (blockCode) => {
        //     const {
        //         data
        //     } = addressApi.getCluster(blockCode);
        //     console.log(data, "clusters");
        //     const optionsSet = [];
        //     optionsSet.push(`<option value="" selected>क्लस्टर निवडा</option>`);

        //     data?.forEach((element) => {
        //         const html = `<option value="${element.id}">${element.cluster_name}</option>`;
        //         optionsSet.push(html);
        //     });
        //     document.getElementById("cluster").innerHTML = optionsSet.join("");
        //     const clusterSelect = document.getElementById("cluster");
        // };

        // const addressOptionSet = new AddressOptionSet(
        //     "state",
        //     "district",
        //     "block",
        // );
        // addressOptionSet.state();
        // clusters(blockCode);

        // function getAllAnswersByClusterParams() {
        //     const stateCode = stateDropdown.value;
        //     const districtCode = districtDropdown.value;
        //     const blockCode = blockDropdown.value;
        //     const clusterId = clusterDropdown.value;

        //     // Extracting month and year from the selected date
        //     const selectedDate = document.getElementById("selectedDate").value;
        //     const selectedMonth = new Date(selectedDate).getMonth() + 1; // Adding 1 because getMonth returns zero-based month index
        //     const selectedYear = new Date(selectedDate).getFullYear();

        //     console.log("Selected state:", stateCode);
        //     console.log("Selected district:", districtCode);
        //     console.log("Selected block:", blockCode);
        //     console.log("Selected cluster:", clusterId);
        //     console.log("Selected selectedDate:", selectedDate);

        //     // Check if any filter is selected
        //     if (!stateCode && !districtCode && !blockCode && !clusterId && !selectedDate) {
        //         // If no filter is selected, call listTodaysAttendance with today's date
        //         const today = new Date();
        //         const todayDate = today.toISOString().slice(0, 10); // Format: YYYY-MM-DD
        //     } else {
        //         // If any filter is selected, call listAttendance with selected parameters
        //         listAttendance(stateCode, districtCode, blockCode, clusterId, selectedDate);
        //     }
        // }


        // Fetch daily reports
        // listAttendance()
    </script>
    <!--  Logout -->
    <script>
        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        })
    </script>
</body>

</html>