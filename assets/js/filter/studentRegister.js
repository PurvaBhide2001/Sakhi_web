//Student Register
const MAX_IMAGE_SIZE = 300 * 1024; // Maximum allowed size in bytes
const MIN_IMAGE_SIZE = 50 * 1024; // Minimum allowed size in bytes

const studentRegister = (json) => {

  let imgUrl, imgUr2;
  document.querySelector(`#join_photo`).addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_IMAGE_SIZE || file.size < MIN_IMAGE_SIZE) {
        tosterDisplay(` कृपया पूर्ण माहिती भरा !!!`, "error").show();
        return;
      }
      imgUrl = uploadImageaApi(file);
      imgUrl = JSON.parse(imgUrl).url;
    }
  });
  document.querySelector(`#pass_photo`).addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_IMAGE_SIZE || file.size < MIN_IMAGE_SIZE) {
        tosterDisplay(` कृपया पूर्ण माहिती भरा !!!`, "error").show();
        return;
      }
      imgUr2 = uploadImageaApi(file);
      imgUr2 = JSON.parse(imgUr2).url;
    }
  });

  const studentFormData = document.querySelector("#UserFormData");
  const submit = document.querySelector("#submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(studentFormData);
    const studentRegister = Object.fromEntries(formData);
    studentRegister.join_photo = studentRegister.join_photo.name;
    studentRegister.father_name = studentRegister.m_name;
    const user = {
      ...studentRegister,
      join_photo: imgUrl,
      pass_photo: imgUr2,
    };

    const emptyField = [];
    const keys = Object.keys(user);
    keys.forEach((key) => {
      if(key=="zip_code")
      {
        return;
      }
      if (key == "pass_date" || key == "pass_photo" || key == "join_photo") {
        return;
      }
      if (user[key] == "") {
        emptyField.push(key);
      }
    });

    if (emptyField.length != 0) {
      tosterDisplay(` कृपया पूर्ण माहिती भरा !!!`, "error").show();
      return;
    }

    const { response, status } = studentApi.register(user);

    if (status == 200) {
      tosterDisplay(`तुमचा डेटा यशस्वीरित्या सबमिट झाला !!!`, "success").show();
      setTimeout(() => {
        window.location.href = "list-students.php";
      }, 1600);
    }
  });
};
