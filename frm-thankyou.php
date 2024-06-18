<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>प्रमाणपत्र</title>

    <!-- Include common stylesheets -->
    <?php include './include-common-style.php'; ?>
    <style>
        body {
            font-family: Arial, sans-serif;
        }


        .certificate-content p {
            padding-top: 8%;
            margin-left: -30%;
            font-size: 19px;
        }

        .certificate-border {
            border: 3px solid orange;
            justify-content: center;
            align-items: left;
            border-radius: 1vw;
            padding: 1.5%;
            background-image: url('./assets/img/b1.png');
            background-size: 100% 100%;
            background-position: center;
            position: relative;
            height: 100%;
            width: 100%;
        }

        .certificate-content {
            color: #000;
            width: 80%;
        }

        .certificate-content hr {
            border-color: orange;
            /* margin-left: -33%; */
        }

        .logo-container {
            position: absolute;
            top: 9%;
            right: 0.5%;
            transform: translateY(-50%);
            display: flex;
            justify-content: flex-end;
            align-items: center;
            max-width: 11%;
        }

        .logo-container img {
            max-width: 100%;
            height: auto;
            margin: 0 0.5%;
        }

        .image-container {
            text-align: center;
            margin-top: 17%;
            margin-left: -40%;
        }

        .centered-image {
            max-width: 40%;
            height: auto;
        }

        .name-column {
            font-weight: bold;
            margin-bottom: 1%;
            padding: 0.5% 1%;
            border-radius: 0.5vw;
            color: orange;
        }

        .role-column {
            font-weight: bold;
            color: orange;
            margin-left: -35%;
            font-size: 20px;
        }

        .certificate-date-place {
            text-align: left;
            margin-top: 30px;
            font-size: 10px;
            color: #555;
        }

        .certificate {
            margin-top: 5rem;
            font-size: 40px;
        }

        @media (min-width: 992px) {
            .name-column {
                font-size: 50px;
            }
        }

        /* Tablet view */
        @media (max-width: 991px) {
            .name-column {
                font-size: 40px;
            }
        }

        /* Mobile view */
        @media (max-width: 767px) {
            .name-column {
                font-size: 25px;
                margin-top: -20px;
            }

            .certificate-info h4 {
                font-size: 12px;
            }

            .certificate {
                margin-top: 0px;
                font-size: medium;
                margin-bottom: -10px;

            }

            .certificate-date-place {
                margin: 5px;
                font-size: x-small;
            }
        }
    </style>
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
    <div class="wrapper" >     
        <div class="content-wrapper" style="margin-left: 0px;">
            <div class="content-header">
                <div class="card card-default certificate-border">

                    <div class="container-fluid mt-5">
                        <h2 class=" text-center certificate">Certificate</h2>
                        <hr>
                        <div class="name">
                            <div id="userName" class="name-column  text-center"></div>
                        </div>
                        <div class="certificate-info">
                            <h4 class=" text-center mb-3">Thank you for motivating people to vote in Lok Sabha Election 2024.</h4>
                        </div>
                    </div>
                    <div class="certificate-date-place"></div>
                </div>
            </div>
            <div class=" col-md-12">
                <button id="downloadBtn" onclick="downloadCertificate()" class="btn btn-primary">Download Certificate</button>
            </div>
        </div>

        <?php include './include-copy-right.php'; ?>
        <script src="./assets/js/filter/thankyou.js"></script>
    </div>
        </div>
    <script>
        function downloadCertificate() {
            const certificateContent = document.querySelector('.certificate-border');

            // Get the dimensions of the certificate content
            const width = certificateContent.offsetWidth;
            const height = certificateContent.offsetHeight;

            // Define the scale factor based on device size
            let scale;
            if (width <= 768) {
                // For small devices (mobile and tablets)
                scale = 1; // Increase scale for better quality
            } else {
                // For larger devices (desktop)
                scale = 1; // Keep scale as default
            }

            html2canvas(certificateContent, {
                width: width * scale, // Apply scale to width
                height: height * scale, // Apply scale to height
                scale: scale, // Set scale factor
            }).then(function(canvas) {
                const imgData = canvas.toDataURL('image/jpeg');

                const a = document.createElement('a');
                a.href = imgData;
                a.download = 'certificate.jpg';
                document.body.appendChild(a);
                a.click();

                document.body.removeChild(a);
            });
        }
    </script>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js"></script>

    <script>
        const locationInput = document.querySelector(".certificate-date-place");

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

            fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=En`)
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

        document.addEventListener('DOMContentLoaded', function() {
            const userData = JSON.parse(localStorage.getItem("user"));
            const firstName = userData.f_name;
            const lastName = userData.l_name;

            // Update the content of the name element with the user's first name and last name
            const nameElement = document.getElementById("userName");
            nameElement.textContent = `${firstName} ${lastName}`;

            // Log the user's first name and last name
            console.log("First Name:", firstName);
            console.log("Last Name:", lastName);
            // Set current date and time
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleDateString("en-US", {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            const formattedTime = currentDate.toLocaleTimeString("en-US", {
                hour: '2-digit',
                minute: '2-digit'
            });
            locationInput.textContent += ` | ${formattedDate}, ${formattedTime}`;
        });
    </script>
    <?php include './include-common-scripts.php'; ?>
</body>

</html>