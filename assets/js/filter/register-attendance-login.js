const createAttendanceLogin = async () => {
  try {
    document
      .querySelector("#log_in_button")
      .addEventListener("click", async (e) => {
        e.preventDefault();

        // Fetch location and date
        getLocationAndDate(
          "Log In",
          async (location, currentDate, currentTime) => {
            // Get user id from hidden input
            const userId = document.getElementById("user_id").value;

            // Construct the login payload object
            const payload = {
              user_id: userId,
              login_time: `${currentDate} ${currentTime}`,
              login_location: location,
              date: currentDate,
            };

            console.log("Payload:", payload);

            try {
              // Send the login payload to the server
              const { data: res, status } = await AttendanceApi.createLogin(
                payload
              );
              console.log(res);
              if (status === 200) {
                alert("Log in successful!");
                // window.location.href = "list-work-report.php";
              } else {
                alert("Log in failed. Please try again.");
              }
            } catch (error) {
              console.error("Error occurred:", error);
              alert("An error occurred. Please try again later.");
            }
          }
        );
      });
  } catch (error) {
    console.error("Error occurred:", error);
    alert("An error occurred. Please try again later.");
  }
};

function getLocationAndDate(action, callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Fetch location data using latitude and longitude
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=mr`
        )
          .then((response) => response.json())
          .then((data) => {
            const location = data.localityInfo.administrative[3].name;
            const currentDate = new Date().toISOString().split("T")[0]; // Format date as YYYY-MM-DD
            const currentTime = new Date()
              .toISOString()
              .split("T")[1]
              .split(".")[0]; // Format time as HH:mm:ss
            const loginDateTime = `${currentDate} ${currentTime}`;
            console.log(`${action} Location: ${location}`);
            console.log(`${action} Date and Time: ${loginDateTime}`);

            // Call the callback function with location, date, and time
            callback(location, currentDate, loginDateTime);
          })
          .catch((error) => {
            // console.error("Error fetching location data:", error);
            // alert("Error fetching location data. Please try again.");
          });
      },
      (error) => {
        console.error("Error getting geolocation:", error);
        alert(
          "Error getting geolocation. Please make sure location services are enabled and try again."
        );
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    alert("Geolocation is not supported by this browser.");
  }
}

