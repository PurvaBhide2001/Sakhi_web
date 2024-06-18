const parseData = (objName) => {
  if (!localStorage.getItem(`${objName}`)) return;
  return JSON.parse(localStorage.getItem(`${objName}`));
};

let userSession = parseData("user");
if (userSession?.id === undefined) {
  window.location.replace("frm-login.php");
}

document.querySelector(
  "#user_login_name"
).innerHTML = `${userSession.f_name} ${userSession.l_name} `;
// document.querySelector("#user_login_name").innerHTML=userSession.l_name;
