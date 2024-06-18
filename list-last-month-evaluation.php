<?php
$activePage = "daily_reports";
$mainMenu = "daily_reports";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>मासिक मागील अहवाल यादी </title>
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
                            <h1 class="m-0">उमेद-मुक्ताई मासिक मागील अहवाल </h1>
                        </div>

                    </div>
                </div>
            </div>
            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    <div class="card">
                        <div class="card-body">
                            <div class="" style="overflow-x: auto;">
                                <div class="row">
                                    <div class="col-md-3 form-group">
                                        <label for="" class="form-label">महिना निवडा <sup class="text-danger">*</sup></label>
                                        <input type="month" name="selectedDate" class="form-control" id="selectedDate" required>
                                    </div>
                                </div>
                                <div class="row ">
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
                                            <th>आयडी नंबर</th>
                                            <th>नाव</th>
                                            <th>रोल </th>
                                            <th>क्लस्टर नाव</th>
                                        </tr>
                                    </thead>
                                    <tbody id="lastMonthReportsList">

                                    </tbody>
                                </table>
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
    <script src="./assets/js/filter/list-last-month-evaluation.js"></script>
    <script src="assets/js/parseData.js"></script>
    <script src="./assets/js/filter/addressByFiler.js"></script>


    <script>
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
        const datePicker = document.getElementById("selectedDate");

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
                    stateDropdown.disabled = false;
                    districtDropdown.disabled = false;
                    blockDropdown.disabled = false;
                    clusterDropdown.disabled = false;

                    // Initialize state, district, block, and cluster dropdowns
                    await addressOptionSet.state();
                    await addressOptionSet.district(userState);
                    await addressOptionSet.block(userdistrict);
                    await setClusterDropdown(userblock, userCluster);

                    // Call dailyWork with current values
                    getAllAnswersByClusterParams();
                } else if ([9, 10, 11, 12, 13].includes(userRole)) {
                    clusterDropdown.disabled = false;

                    // Initialize cluster dropdown with value from localStorage
                    await setClusterDropdown(userblock, userCluster);

                    // Call dailyWork with values from localStorage
                    // dailyWork(userState, userdistrict, userblock, userCluster, userRole);
                } else if ([1, 2, 3, 4, 5, 6, 7, 8].includes(userRole)) {
                    // Enable block and cluster dropdowns
                    blockDropdown.disabled = false;
                    clusterDropdown.disabled = false;

                    // Initialize block and cluster dropdowns
                    if (userblock) {
                        await setClusterDropdown(userblock, userCluster);
                    }

                    // Call dailyWork with current values
                    getAllAnswersByClusterParams();
                } else {}
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
        datePicker.addEventListener("change", getAllAnswersByClusterParams);

        async function getAllAnswersByClusterParams() {
            const stateCode = stateDropdown.value;
            const districtCode = districtDropdown.value;
            const blockCode = blockDropdown.value;
            const clusterId = clusterDropdown.value;
            const selectedDate = datePicker.value;
            const selectedMonth = new Date(selectedDate).getMonth() + 1;
            const selectedYear = new Date(selectedDate).getFullYear();

            console.log("Parameters for ListLastMonthReport:", {
                stateCode,
                districtCode,
                blockCode,
                clusterId,
                selectedDate,
                selectedMonth,
                selectedYear,
            });

            ListLastMonthReport(stateCode, districtCode, blockCode, clusterId, selectedMonth, selectedYear);
        }
        // function getAllAnswersByClusterParams() {
        //     const stateCode = stateDropdown.value;
        //     const districtCode = districtDropdown.value;
        //     const blockCode = blockDropdown.value;
        //     const clusterId = clusterDropdown.value;
        //     const selectedDate = document.getElementById("selectedDate").value;
        //     const selectedMonth = new Date(selectedDate).getMonth() +
        //         1;
        //     const selectedYear = new Date(selectedDate).getFullYear();

        //     console.log("Selected state:", stateCode);
        //     console.log("Selected district:", districtCode);
        //     console.log("Selected block:", blockCode);
        //     console.log("Selected cluster:", clusterId);
        //     console.log("Selected month:", selectedMonth);
        //     console.log("Selected year:", selectedYear);

        //     ListLastMonthReport(stateCode, districtCode, blockCode, clusterId, selectedMonth, selectedYear);
        // }
    </script>
    <script>

    </script>
    <script>
        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        })
    </script>
</body>

</html>