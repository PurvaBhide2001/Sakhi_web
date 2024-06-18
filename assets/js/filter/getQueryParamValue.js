const idNameOfObj = {
  karyalay_name: "कार्यालयाचे नाव ,",
  user_f_name: "वापरकर्त्याचे नाव ,",
  user_m_name: "वडिलांचे नाव ,",
  user_l_name: "आडनाव नाव ,",
  user_email_id: "ई-मेल आयडी ,",
  user_contact_number: "वापरकर्त्याचा नंबर ,",
  role_id: "रोल ,",
  user_password: "पासवर्ड ",
  district: "जिल्हा ,",
  bhusampadan_adhikari_name: "भूसंपादन अधिकारी नाव ,",
  karyalay_contact_number: "कार्यालय नंबर ,",
  state: "राज्य ,",
  district: "जिल्हा ,",
  block: "तालुका ,",
  village: "गाव ,",
  zip_code: "पिन कोड ,",
  document_name: "कागदपत्र नाव ,",
  document_type: "कागदपत्र प्रकार ",
  prakarn_name: "प्रकरण नाव ,",
  prayojan: "प्रयोजन ,",
  prakarn_no: "प्रकरण क्रमांक ,",
  gat_count: "गट क्रमांक संख्या ,",
  gat_no: "गट क्रमांक ,",
  rol: "रोल",
};
idNameOfKaryalay = {};
const notFillValue = (arr) => {
  const arrOfValue = [];
  arr.forEach((val) => {
    arrOfValue.push(idNameOfObj[$(val).attr("id")]);
  });
  return arrOfValue;
};
const checkaryalay = (arr) => {
  const arrOfValue = [];
  arr.forEach((val) => {
    arrOfValue.push(idNameOfKaryalay[val]);
  });
  return arrOfValue;
};

const getQueryParamValue = (value) => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  return params[value]; // "some_value"
};

// Zip Code Validation

function isUSAZipCode(str) {
  return /^\d{6}(-\d{4})?$/.test(str);
}

function zipCode() {
  let pin_code = document.getElementById("zip_code").value;
  let message = "";
  if (isUSAZipCode(pin_code)) {
    // message = "Valid Zip Code";
    document.getElementById("msg").innerHTML = "";
    return true;
  } else {
    message = " पिन कोड नंबर वैध नाही ";
    document.getElementById("msg").innerHTML = message;
    return false;
  }
}

// MPIN Code Validation

function isUSAMpiCode(str) {
  return /^\d{4}(-\d{4})?$/.test(str);
}

function pinCode() {
  let pin_code = document.getElementById("mpin").value;
  let message = "";
  if (isUSAMpiCode(pin_code)) {
    // message = "Valid Zip Code";
    document.getElementById("msgP").innerHTML = "";
    return true;
  } else {
    message = "एम पिन नंबर वैध नाही ";
    document.getElementById("msgP").innerHTML = message;
    return false;
  }
}

// function isUSAContactNO(str) {
//   return /^\d{10}(-\d{4})?$/.test(str);
// }

// function contactNumber() {
//   let contact_no = document.getElementById("contact_no").value;
//   let message = "";
//   if (isUSAContactNO(contact_no)) {
//     // message = "Valid";
//   } else {
//     message = "अवैध संपर्क क्रमांक";
//   }
//   document.getElementById("msg1").innerHTML = message;
// }

// karyalay no
function isContactNO(str) {
  return /^\d{10}(-\d{4})?$/.test(str);
}

function contactNumber() {
  let contact_no = document.getElementById("contact_no").value;
  let message = "";
  if (isContactNO(contact_no)) {
    // message = "Valid";
  } else {
    message = "अवैध संपर्क क्रमांक";
  }
  document.getElementById("msg1").innerHTML = message;
}

// Email ID
function checkEmail() {
  var email = document.getElementById("email");
  var filter =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!filter.test(email.value)) {
    // alert("ई-मेल आयडी वैध नाही ");
    console.log($(email).parent().find(".msg").removeClass("d-none"));

    email.focus;
    return false;
  }
  $(email).parent().find(".msg").addClass("d-none");
  return true;
}
function isValidUserName(field) {
  let value = $(field).val();
  let message = "";

  var filter = /^[a-zA-Z\-]+$/;
  if (!filter.test(value)) {
    $(field).parent().find(".msg").removeClass("d-none");
    return false;
  }
  $(field).parent().find(".msg").addClass("d-none");
  return true;
}
function isValid$Digit() {
  return "^[0-9]{4}$";
}

const checkPassword = (element) => {
  let password = $(element).val();
  errors = [];
  if (password.length < 8) {
    errors.push("पासवर्ड किमान 8 अक्षरांचा असणे आवश्यक आहे.");
  }
  if (password.search(/[a-z]/i) < 0) {
    errors.push("पासवर्डमध्ये किमान एक अक्षर असणे आवश्यक आहे.");
  }
  if (password.search(/[0-9]/) < 0) {
    errors.push(" पासवर्डमध्ये किमान एक अंक असणे आवश्यक आहे.");
  }
  if (errors.length > 0) {
    $(element).parent().parent().find(".msg").text(errors.join("\n"));
    $(element).parent().parent().find(".msg").removeClass("d-none");

    // alert();
    return false;
  }
  $(element).parent().parent().find(".msg").addClass("d-none");
  return true;
};
// jQuery(document).ready(function () {
//   jQuery("#mpin").keypress(function (e) {
//     var length = jQuery(this).val().length;
//     console.log("eweee", jQuery(this).val());
//     const msg2 = document.querySelector("#msg2");
//     msg2.innerHTML = "कृपया 4 अंकी एम पिन सेट करा";
//     if (length > 3) {
//       msg2.innerHTML = "";
//       return false;
//     } else if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
//       msg2.innerHTML = "";
//       return false;
//     } else if (length == 0 && e.which == 48) {
//       msg2.innerHTML = "";
//       return false;
//     }
//   });
// });

const togglePassword = document.querySelector("#togglePassword");
$("#togglePassword").click(function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the icon
  this.classList.toggle("fa-eye-slash");
  this.classList.toggle("fa-eye");
});

function validatePassword() {
  const contact_no = document.getElementById("contact_no").value;
  const password = document.getElementById("password").value;
  // ("password-error-message");

  if (contact_no !== password) {
    // errorMessage.textContent = "Passwords do not match";
    $("#cPassMsg").removeClass("d-none");
    // alert(" पासवर्ड जुळत नाही ")
    return false;
  } else {
    $("#cPassMsg").addClass("d-none");
    // errorMessage.textContent = "";
    return true;
  }
}








const checkPassword1 = (element) => {
  let password = $(element).val();
  errors = [];
  if (password.length < 8) {
    errors.push("पासवर्ड किमान 8 अक्षरांचा असणे आवश्यक आहे.");
  }
  if (password.search(/[a-z]/i) < 0) {
    errors.push("पासवर्डमध्ये किमान एक अक्षर असणे आवश्यक आहे.");
  }
  if (password.search(/[0-9]/) < 0) {
    errors.push(" पासवर्डमध्ये किमान एक अंक असणे आवश्यक आहे.");
  }
  if (errors.length > 0) {
    $(element).parent().parent().find(".msg").text(errors.join("\n"));
    $(element).parent().parent().find(".msg").removeClass("d-none");

    // alert();
    return false;
  }
  $(element).parent().parent().find(".msg").addClass("d-none");
  return true;
};


const togglePassword1 = document.querySelector("#togglePassword1");
$("#togglePassword1").click(function(){

  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the icon
  this.classList.toggle("fa-eye-slash");
  this.classList.toggle("fa-eye");
})


function validatePassword1() {

  const user_password = document.getElementById("password").value;
  const Password = document.getElementById("Password").value;
  // ("password-error-message");

  if (user_password !== Password) {
    // errorMessage.textContent = "Passwords do not match";
$("#cPassMsg").removeClass("d-none")
// alert(" पासवर्ड जुळत नाही ")
return false
} else {
    $("#cPassMsg").addClass("d-none")
    // errorMessage.textContent = "";
    return true
  }
}
