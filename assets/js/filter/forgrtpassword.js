const forgetPassword = async () => {
  console.log("forget pass");
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const new_password = document.getElementById("new_password").value.trim();
  if (password !== new_password) {
    alert(
      "पासवर्ड आणि पासवर्डची पुष्टी करा सामायिक नाहीत. कृपया तपासा आणि पुन्हा प्रयत्न करा."
    );
    return;
  }
  const passData = {
    username,
    new_password,
  };
  const response = await forgetPassApi(passData);
  if (response.message === "Password updated successfully.") {
    alert("पासवर्ड सफलतापूर्वक अपडेट केला गेला आहे!");
    window.location.href = "frm-login.php";
  } else {
    alert("पासवर्ड अपडेट करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.");
  }
};

const submitOTP = (json) => {
  const otp = document.querySelector("#otp");
  const submit = document.querySelector("#loginBtn");
  const emailValue = getQueryParamValue("email");
  console.log(emailValue);
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const forget = {
      email: emailValue,
      otp: otp.value,
    };

    const { data, status } = login.OTPsubmit(forget);
    if (status == 200 && data === "otp authenticated") {
      console.log("response data---", data);
      alert("ओटीपी यशस्वीरित्या पुष्टी झाला !!!");
      window.location.href = `frm-chengepassword.php?email=${emailValue}`;
    }
    if (status !== 200) {
      alert("कृपया योग्य ओटीपी प्रविष्ट करा");
      return;
    }
  });
};

const chengepassword = (json) => {
  const password = document.querySelector("#password");
  const submit = document.querySelector("#submit");
  const emailValue = getQueryParamValue("email");
  console.log(emailValue, "miiiii");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const forget = {
      password: password.value,
      email: emailValue,
    };

    if (!validatePassword1()) {
      alert("पासवर्ड वैध नाही ");

      return;
    }
    if (!checkPassword1($("#password"))) {
      alert("पासवर्ड वैध नाही ");
      return;
    }

    const { data, status } = login.chengepass(forget);

    if (status !== 200) {
      alert("कोणताही डेट आढळला नाही ");
      return;
    }
    alert(" तुमचा पासवर्ड यशस्वीरित्या अपडेट झाला !!!");

    window.location.href = "./frm-login.php";
  });
};
