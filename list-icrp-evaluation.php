<?php
$activePage = "monthly_reports";
$mainMenu = "monthly_reports";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>समुदाय संसाधन व्यक्ती</title>
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
                            <h1 class="m-0">समुदाय संसाधन व्यक्ती</h1>
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
                                                    <th>अ. क्र. </th>
                                                    <th>कर्मचारी नाव</th>
                                                    <th>पदभार</th>
                                                    <th id="statusLable">प्रभाग समन्यवक शेरा</th>
                                                    <th id="remarkcc">प्रभाग समन्यवक टिप्पणी</th>
                                                    <th id="statusLable2">तालुका अभियान व्यवस्थापक शेरा</th>

                                                    <th id="remarkBmm">तालुका अभियान व्यवस्थापक टिप्पणी</th>
                                                    <th id="updateCol">अपडेट</th>
                                                </tr>
                                            </thead>
                                            <tbody id="ICRPList">
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
    <script src='./assets/js/filter/ListICRP.js'></script>
    <script src="assets/js/parseData.js"></script>
    <script src="./assets/js/filter/addressByFiler.js"></script>
    <script src="./assets/js/filter/getAllAnswersByCluster.js"></script>
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

                    await setClusterDropdown(userblock, userCluster);
                    getAllAnswersByClusterParams();
                } else if ([9, 10, 11, 12, 13].includes(userRole)) {
                    console.log("Role in [9, 10, 11, 12, 13]. Allowing user to change Cluster.");
                    clusterDropdown.disabled = false;

                    await setClusterDropdown(userblock, userCluster);

                    dailyWork(userState, userdistrict, userblock, userCluster, userRole);
                } else if ([1, 2, 3, 4, 5, 6, 7, 8].includes(userRole)) {
                    console.log("Role in [2, 3, 4, 5, 6, 7, 8]. Allowing user to change Block and Cluster.");

                    blockDropdown.disabled = false;
                    clusterDropdown.disabled = false;

                    if (userblock) {
                        await setClusterDropdown(userblock, userCluster);
                    }

                    getAllAnswersByClusterParams();
                } else {
                    console.log("Role not in specified lists. No special handling required.");
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

        async function getAllAnswersByClusterParams() {
            const stateCode = stateDropdown.value;
            const districtCode = districtDropdown.value;
            const blockCode = blockDropdown.value;
            const clusterId = clusterDropdown.value;
            if (!stateCode && !districtCode && !blockCode && !clusterId) {
                ListAllICRPReport();
            } else {
                ListICRPReport(stateCode, districtCode, blockCode, clusterId);
            }
        }
    </script>
    <script>
        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        })
    </script>
</body>