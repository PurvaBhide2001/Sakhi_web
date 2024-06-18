// const registerUser = async () => {
//   document.querySelector("#submit").addEventListener("click", async (e) => {
//       e.preventDefault();
//       const form = document.getElementById("userFormData");
//       const formData = new FormData(form);

//       let isValid = true;

//      const onlyCharactersRegex = /^[a-zA-Z\s]*$/;

//      const firstName = formData.get("f_name");
//      const middleName = formData.get("m_name");
//      const lastName = formData.get("l_name");

//      let errorMessage = "";

// if (!onlyCharactersRegex.test(firstName)) {
//     isValid = false;
//     errorMessage += "स्वतःचे नाव should contain only characters.\n";
// }

// if (!onlyCharactersRegex.test(middleName)) {
//     isValid = false;
//     errorMessage += "वडिलांचे/पतीचे नाव should contain only characters.\n";
// }

// if (!onlyCharactersRegex.test(lastName)) {
//     isValid = false;
//     errorMessage += "आडनाव should contain only characters.\n";
// }
// if (!isValid) {
//     alert(errorMessage);
//     return;
// }
// // mobile validation
//     const mobileNumber = formData.get("username");
//     if (!isValidMobileNumber(mobileNumber)) {
//         alert("Please enter a valid 10-digit mobile number.");
//         return;
//     }
//      const payload = {};
//       formData.forEach((value, key) => {
//           payload[key] = value;
//       });

//       const clusterDropdown = document.getElementById("cluster_id");
//       const selectedClusterOption = clusterDropdown.options[clusterDropdown.selectedIndex];
//       const selectedClusterName = selectedClusterOption.text;
//       const selectedClusterId = selectedClusterOption.value;

//        if (selectedClusterId && selectedClusterName) {
//           payload["cluster_name"] = selectedClusterName;
//           payload["cluster_id"] = selectedClusterId;
//       }

//       const { data: res, status } = await userApi.register(payload);

//       console.log(res);
//       if (status === 200) {
//           alert("User registered successfully!");
//           window.location.href = "list-user.php";
//       } else if (status === 400) {
//           alert("Username already exists!");
//       } else {
//           alert("User registration failed. Please try again.");
//       }
//   });
// };
// const isValidMobileNumber = (mobileNumber) => {
//   const cleanNumber = mobileNumber.replace(/\D/g, '');
//    return cleanNumber.length === 10;
// };

const registerUser = async () => {
  document.querySelector("#submit").addEventListener("click", async (e) => {
    e.preventDefault();
    const form = document.getElementById("userFormData");
    const formData = new FormData(form);

    let isValid = true;

    const onlyCharactersRegex = /^[a-zA-Z\s]*$/;

    const firstName = formData.get("f_name");
    const middleName = formData.get("m_name");
    const lastName = formData.get("l_name");

    let errorMessage = "";

    if (!onlyCharactersRegex.test(firstName)) {
      isValid = false;
      errorMessage += "स्वतःचे नाव should contain only characters.\n";
    }

    if (!onlyCharactersRegex.test(middleName)) {
      isValid = false;
      errorMessage += "वडिलांचे/पतीचे नाव should contain only characters.\n";
    }

    if (!onlyCharactersRegex.test(lastName)) {
      isValid = false;
      errorMessage += "आडनाव should contain only characters.\n";
    }
    if (!isValid) {
      alert(errorMessage);
      return;
    }

    // Mobile validation
    const mobileNumber = formData.get("username");
    if (!isValidMobileNumber(mobileNumber)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const payload = {};
    formData.forEach((value, key) => {
      if (value && value !== "select") {
        payload[key] = value;
      }
    });

    const { data: res, status } = await userApi.register(payload);

    if (status === 200) {
      alert("User registered successfully!");
      window.location.href = "index.php";
    } else if (status === 400) {
      alert("Username already exists!");
    } else {
      alert("User registration failed. Please try again.");
    }
  });

  const roleDropdown = document.getElementById("role");
  const blockContainer = document.getElementById("blockContainer");
  const clusterContainer = document.getElementById("clusterContainer");
  const grampanchayatContainer = document.getElementById(
    "grampanchayatContainer"
  );
  const villageContainer = document.getElementById("villageContainer");

  roleDropdown.addEventListener("change", function () {
    const selectedRole = parseInt(this.value, 10);
    const rolesWithoutAddressFields = [1, 2, 3, 4, 5, 6, 7, 8];

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
  });
};

const isValidMobileNumber = (mobileNumber) => {
  const cleanNumber = mobileNumber.replace(/\D/g, "");
  return cleanNumber.length === 10;
};

// registerUser();

// registerUser();
