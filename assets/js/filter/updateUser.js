// const updateUser = async (user_id) => {
//   const response = await fetch(
//     `https://drdajalgaon.com/sakhi-api/public/showById/${user_id}`
//   );
//   const responseData = await response.json();
//   const user = responseData.data;
//   console.log("responseData", user);
//   console.log(user, "username");
//   document.getElementById("f_name").value = user?.f_name;
//   document.getElementById("m_name").value = user?.m_name;
//   document.getElementById("l_name").value = user?.l_name;
//   document.getElementById("mobilenumber").value = user?.username;
//   document.getElementById("dob").value = user?.dob;
//   document.getElementById("role").value = user?.role;
//   // document.getElementById("role").style.display = "none";
//   // document.getElementById("rolediv").style.display = "none";
//   // setDataForStudent(user);

//   // Set other fields as needed

//   document.getElementById("userFormData").style.display = "block";

//   const submitBtn = document.getElementById("submit");
//   submitBtn.textContent = "अपडेट करा";
//   submitBtn.addEventListener("click", async () => {
//     const updatedReportData = {
//       f_name: document.getElementById("f_name").value,
//       m_name: document.getElementById("m_name").value,
//       l_name: document.getElementById("l_name").value,
//       dob: document.getElementById("dob").value,
//       role: document.getElementById("role").value,
//       username: document.getElementById("mobilenumber").value,
//       state: document.getElementById("state").value,
//       district: document.getElementById("district").value,
//       block: document.getElementById("block").value,
//       village: document.getElementById("village").value,
//       grampanchayat: document.getElementById("grampanchayat").value,
//       cluster_id: document.getElementById("cluster_id").value,
//     };

//     console.log("Updated report data:", updatedReportData); // Log updated data

//     const { data, status } = await userApi.update(user.id, updatedReportData);
//     console.log(data, status);
//     if (status === 200) {
//       alert("Report data updated successfully!");
//       window.location.href = "./index.php";
//     } else {
//       alert("Failed to update report data. Please try again.");
//     }
//   });
// };

const updateUser = async (user_id) => {
  const response = await fetch(
    `https://drdajalgaon.com/sakhi-api/public/showById/${user_id}`
  );
  const responseData = await response.json();
  const user = responseData.data;
  console.log("responseData", user);
  console.log(user, "username");

  document.getElementById("f_name").value = user?.f_name;
  document.getElementById("m_name").value = user?.m_name;
  document.getElementById("l_name").value = user?.l_name;
  document.getElementById("mobilenumber").value = user?.username;
  document.getElementById("dob").value = user?.dob;
  document.getElementById("role").value = user?.role;

  // Set other fields as needed
  document.getElementById("state").value = user?.state;
  document.getElementById("district").value = user?.district;
  document.getElementById("block").value = user?.block;
  document.getElementById("village").value = user?.village;
  document.getElementById("grampanchayat").value = user?.grampanchayat;
  document.getElementById("cluster_id").value = user?.cluster_id;

  document.getElementById("userFormData").style.display = "block";

  const roleDropdown = document.getElementById("role");
  const blockContainer = document.getElementById("blockContainer");
  const clusterContainer = document.getElementById("clusterContainer");
  const grampanchayatContainer = document.getElementById(
    "grampanchayatContainer"
  );
  const villageContainer = document.getElementById("villageContainer");

  const rolesWithoutAddressFields = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleRoleChange = (selectedRole) => {
    if (rolesWithoutAddressFields.includes(selectedRole)) {
      blockContainer.style.display = "none";
      clusterContainer.style.display = "none";
      grampanchayatContainer.style.display = "none";
      villageContainer.style.display = "none";
    } else {
      blockContainer.style.display = "block";
      clusterContainer.style.display = "block";
      grampanchayatContainer.style.display = "block";
      villageContainer.style.display = "block";
    }
  };

  // Set the initial state based on the user's role
  handleRoleChange(parseInt(user.role, 10));

  // Add event listener to the role dropdown to handle changes
  roleDropdown.addEventListener("change", function () {
    const selectedRole = parseInt(this.value, 10);
    handleRoleChange(selectedRole);
  });

  const submitBtn = document.getElementById("submit");
  submitBtn.textContent = "अपडेट करा";
  submitBtn.removeEventListener("click", handleSubmit); // Ensure no previous listeners
  submitBtn.addEventListener("click", handleSubmit);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = document.getElementById("userFormData");
    const formData = new FormData(form);
    const updatedReportData = {};

    formData.forEach((value, key) => {
      if (value && value !== "select") {
        updatedReportData[key] = value;
      }
    });

    console.log("Updated report data:", updatedReportData); // Log updated data

    const { data, status } = await userApi.update(user.id, updatedReportData);
    console.log(data, status);
    if (status === 200) {
      alert("Report data updated successfully!");
      window.location.href = "./index.php";
    } else {
      alert("Failed to update report data. Please try again.");
    }
  }
};

// Register the event listener when the script loads
// registerUser();
