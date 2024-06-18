const onUpdateImage = (id, img) => {
  const selector = document.querySelector(`#${id}`);
  selector.closest("div").querySelector("span").innerHTML = img
    .split("/")
    .slice(-1);
};

const updateStudent = (id) => {
  const { data: responseData, status } = studentApi.get(id);
  let imgUrl, imgUr2;
  document.querySelector("#join_photo").addEventListener("change", (e) => {
    imgUrl = uploadImageaApi(e.target.files[0]);
    imgUrl = JSON.parse(imgUrl).url;
    onUpdateImage(e.target.id, imgUrl);
  });

  document.querySelector("#pass_photo").addEventListener("change", (e) => {
    imgUr2 = uploadImageaApi(e.target.files[0]);
    imgUr2 = JSON.parse(imgUr2).url;
    onUpdateImage(e.target.id, imgUr2);
  });

  setDataForStudent(responseData);

  const name_upade = document.querySelector("#name_upade");
  const submit = document.querySelector("#submit");
  submit.innerHTML = "अपडेट";
  name_upade.innerHTML = "लाभार्थी अपडेट करत आहे";

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    const userFormData = document.querySelector("#UserFormData");

    const formData = new FormData(userFormData);
    const userRegister = Object.fromEntries(formData);
    imgUrl = imgUrl ? imgUrl : responseData.join_photo;
    imgUr2 = imgUr2 ? imgUr2 : responseData.pass_photo;
    const user = {
      ...userRegister,
      join_photo: imgUrl,
      pass_photo: imgUr2,
    };

    let emptyField = [];

    Object.keys(user).forEach((key) => {
      if(key=="zip_code")
      {
        return;
      }
      if (key == "pass_date") {
        return;
      }
      if (key == "pass_photo") {
        return;
      }

      if (!user[key]) {
        emptyField.push(key);
      }
    });
    // if (!zipCode()) {
    //   tosterDisplay(`पिन कोड नंबर वैध नाही !!!`, "error").show();
    //   return;
    // }
    if (emptyField.length != 0) {
      // alert(`${emptyField.join(",")} Please fill this field !!`);
      tosterDisplay(` कृपया पूर्ण माहिती भरा !!!`, "error").show();
      return;
    }
    

    const { data, status } = studentApi.update(id, user);
   
    if (status == 200) {
      tosterDisplay("तुमचा डेटा यशस्वीरित्या सबमिट झाला", "success").show();
      Object.keys(user).forEach((key) => {
        document.querySelector(`#${key}`).value = "";
      });
      setTimeout(() => {
        window.location.href = "list-students.php";
      }, 1400);
    }

    if (status != 200) {
      alert("काहीतरी चूक झाली! कृपया पुन्हा प्रयत्न करा");
      return;
    }
    
  });
};
