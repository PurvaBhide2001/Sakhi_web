<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Thank You Certificate</title>
    <?php include './include-common-style.php'; ?>
</head>

<body class="hold-transition sidebar-mini layout-fixed">



    <div class=" row">
        <div class="col-md-2">
            <div class="qr-code-wrapper">
                <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>
                <img src="./assets/img/qr_download.png" alt="" class="qr-code">
            </div>
        </div>
        <div class="col-md-10">


            <div class="content-wrapper">
                <section class="content">
                    <div class="card card-default certificate-border">
                        <a class="text-center m-3" href="./assets/img/cert.jpeg" download style="display: inline-block; padding: 10px 20px; background-color: #396488; color: #fff; text-decoration: none; border-radius: 5px;     align-self: center;">येथे डाउनलोड करा</a>
                        <img src="./assets/img/cert.jpeg" alt="W3Schools" width="100%" height="auto">
                    </div>


                    <section class="content">
                        <div class="container-fluid text-uppercase">
                            <div class="card card-default certificate-border">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 offset-md-3">
                                            <div class="certificate-content text-center">
                                                <div class="image-container">
                                                    <img src="l1.png" alt="Image" class="centered-image">
                                                </div>
                                                <h2 class="marathi-text">प्रमाणपत्र</h2>
                                                <hr>
                                                <div class="name">
                                                    <div id="name" class="name-column marathi-text"></div>


                                                </div>


                                                <div id="rolename" class="role-column marathi-text"> </div>
                                                <div class="certificate-info">
                                                    <p class="marathi-text">लोकसभा निवडणूक २०२४ मध्ये लोकांना मतदान करण्यास प्रवृत्त केल्याबद्दल आपले धन्यवाद.</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div class="certificate-date-place">

                                        <?php
                                        $currentDate = date("F j, Y");
                                        $currentPlace = "";
                                        echo "<div id='day'> " . $currentDate . "</div>";
                                        echo "<div id='place'> " . $currentPlace . "</div>";
                                        ?>
                                    </div>


                                    <div class="logo-container">
                                        <img src="t6.png" alt="Logo">
                                        <img style="max-width: 60%" ; src="l2.png" alt="Logo">
                                        <img src="l3.png" alt="Logo">
                                    </div>
                                </div>
                            </div>
                    </section>
            </div>
        </div>
        <!-- Include copyright -->
        <?php include './include-copy-right.php'; ?>
        <script src="./assets/js/filter/thankyou.js"></script>
    </div>


    <script>
        const locationInput = document.getElementById("place");

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                locationInput.textContent = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=mr`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const address = data.locality;
                    locationInput.textContent = " " + address;
                })
                .catch(error => {
                    console.error('Error fetching reverse geocoding data:', error);
                    locationInput.textContent = "Unable to determine location.";
                });
        }

        getLocation();
    </script>
    <script>
        // function thankyou() {

        //     console.log("Fetching and displaying employee details");
        // }

        thankyou();
    </script>


    <!-- Include common scripts -->

    <?php include './include-common-scripts.php'; ?>
</body>

</html>