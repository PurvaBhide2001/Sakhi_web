const loginFunc = () => {
  const username = $("#username").val().trim(); // Changed from 'email' to 'username'
  const password = $("#password").val().trim();
  let save = false;
  if ($("#remember").is(":checked")) {
    save = true;
  } else {
    save = false;
  }
  const loginData = {
    username,
    password,
  };

  const response = loginApi(loginData); // Using synchronous function call here for simplicity
  console.log(response.data);

  if (response.status == 200) {
    const { data, loginInfo, dailyWorkReport } = response;
    const { password, ...user } = data;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
    localStorage.setItem("dailyWorkReport", JSON.stringify(dailyWorkReport));
    var now = new Date();
    var setData = { timestamp: now.getTime() };
    localStorage.setItem("time", JSON.stringify(setData));
    if (save) {
      localStorage.setItem("saveSession", true);
    }
    const role = user.role;
    if (role === "29") {
      window.location.href = "./election.php";
    } else {
      window.location.href = "./index.php";
    }
  } else {
    alert("कृपया वैध ई-मेल आयडी आणि पासवर्ड प्रविष्ट करा !!!!!");
  }
};
