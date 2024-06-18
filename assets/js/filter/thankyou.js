const thankyou = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    console.log("userData", userData);
    const nameElement = document.getElementById("name");

    const rolenameElement = document.getElementById("rolename");

    if (nameElement && userData) {
      nameElement.innerText = `${userData.f_name}  ${userData.l_name} `;
    } else {
      console.error("One or more elements not found or user data missing.");
    }
  });
};
