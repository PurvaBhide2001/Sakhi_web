<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>निवडणूक २०२४</title>
    <?php include './include-common-style.php'; ?>
    <script src="https://kit.fontawesome.com/b27d57f29f.js" crossorigin="anonymous"></script>
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
                            <h1 class="m-0">उमेद-मुक्ताई निवडणूक २०२४ अहवाल</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section class="content">
                <div class="container-fluid">
                    <div class="card">
                        <div class="card-body">
                            <div class="" style="overflow-x: auto;">
                                <div class="row ">
                                    <div class="col-md-3 d-none">
                                        <div class="form-group">
                                            <label for="state" class="form-label">राज्य<sup class="text-danger">*</sup></label>
                                            <select name="state" class="form-control" id="state">
                                                <option value="select">निवडा </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3 d-none">
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
                                            <th>नाव</th>
                                            <th>कर्मचारी पद </th>
                                            <th>विभाग</th>
                                            <th>फोटो</th>
                                        </tr>
                                    </thead>
                                    <tbody id="electionReportsList">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <?php include './include-copy-right.php'; ?>
    </div>
    <?php include './include-common-scripts.php'; ?>
    <?php include './include-datatable-scripts.php'; ?>
    <script src="assets/js/parseData.js"></script>
    <script src="./assets/js/filter/election.js"></script>
    <script src="./assets/js/filter/addressByFiler.js"></script>
    <script>
        $(function() {
            $("#example1").DataTable({
                "responsive": true,
                "lengthChange": true,
                "autoWidth": false,
                "searching": false,
                "ordering": true,
                "buttons": []
            }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');

            $("#state").val("27").change();
            $("#district").val("478").change();
            getAllAnswersByClusterParams();
        });

        // electionList();

        const stateDropdown = document.getElementById("state");
        const districtDropdown = document.getElementById("district");
        const blockDropdown = document.getElementById("block");
        const clusterDropdown = document.getElementById("cluster");


        blockDropdown.addEventListener("change", function() {
            clusters(this.value);
            getAllAnswersByClusterParams();
        });

        clusterDropdown.addEventListener("change", function() {
            getAllAnswersByClusterParams();
        });

        const clusters = (blockCode) => {
            const {
                data
            } = addressApi.getCluster(blockCode);
            const optionsSet = [];
            optionsSet.push(`<option value="" selected>क्लस्टर निवडा</option>`);

            data?.forEach((element) => {
                const html = `<option value="${element.id}">${element.cluster_name}</option>`;
                optionsSet.push(html);
            });
            document.getElementById("cluster").innerHTML = optionsSet.join("");
            const clusterSelect = document.getElementById("cluster");
        };

        const addressOptionSet = new AddressOptionSet(
            "state",
            "district",
            "block",
        );
        addressOptionSet.state();
        addressOptionSet.district("27")
        addressOptionSet.block("478")
        clusters(blockCode);

        function getAllAnswersByClusterParams() {
            const stateCode = stateDropdown.value;
            const districtCode = districtDropdown.value;
            const blockCode = blockDropdown.value;
            const clusterId = clusterDropdown.value;

            electionListByCluster(stateCode, districtCode, blockCode, clusterId);
        }
    </script>

    <script>
        document.querySelector("#logout").addEventListener("click", function() {
            sessionStorage.clear();
            window.location.href = "frm-login.php";
        })
    </script>
</body>

</html>