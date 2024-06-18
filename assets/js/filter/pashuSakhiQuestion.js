let data;

const pashuSakhiQuestion = () => {
  const questionsContainer = document.querySelector("#questionsContainer");
  document.getElementById("remark1_div").style.display = "none";
  document.getElementById("statuscc").style.display = "none";
  document.getElementById("remark2_div").style.display = "none";
  document.getElementById("statusbmm").style.display = "none";
  const responseData = evaluationApi.GetPashuQuestion();
  data = responseData.data;
  console.log(data, "asd");
  questionsContainer.innerHTML = "";

  const questionHTML = data
    .map((questionData, i) => {
      return `
        <div class="col-md-6 form-group p-2">
          <label class="form-label">${i + 1}. ${
        questionData?.pashuSakhi_questions
      }</label>
          <div class="form-check d-flex justify-content-between">
            <div>
              <input class="form-check-input" type="radio" name="answer${i}" id="yes${i}" value="1">
              <label class="form-check-label pr-5" for="yes${i}">होय</label>
              <input class="form-check-input" type="radio" name="answer${i}" id="no${i}" value="0">
              <label class="form-check-label" for="no${i}">नाही</label>
            </div>
            <p style="color: gray; font-size: 14px;    padding-right: 30px;">दर : ${
              questionData?.pashuSakhi_rate
            }</p>
          </div>
        </div>
        `;
    })
    .join("");
  questionsContainer.innerHTML = questionHTML;
};

let fileUrl;
document.querySelector(`#file_upload`).addEventListener("change", (e) => {
  fileUrl = uploadImageaApi(e.target.files[0]);
  fileUrl = JSON.parse(fileUrl).url;
});

// const submitPashuSakhi = () => {
//   const userId = JSON.parse(localStorage.getItem("user"));
//   document.querySelector("#submit").addEventListener("click", async (e) => {
//     e.preventDefault();
//     const payload = {
//       user_id: userId?.id,
//       file_upload: fileUrl,
//       remark: document.querySelector("#remark").value.trim(),
//       question_answers: [],
//     };

//     data.forEach((questionData, i) => {
//       const yesRadio = document.querySelector(`#yes${i}`);
//       const noRadio = document.querySelector(`#no${i}`);

//       if (yesRadio.checked) {
//         payload.question_answers.push({
//           id: questionData.id,
//           selected_options: 1,
//         });
//       } else if (noRadio.checked) {
//         payload.question_answers.push({
//           id: questionData.id,
//           selected_options: 0,
//         });
//       }
//     });

//     const { data: res, status } = await evaluationApi.registerPashu(payload);
//     if (status === 200) {
//       alert("पशु सखी मूल्यांकन फॉर्म यशस्वीरित्या सबमिट केला !!");
//       window.location.href = "list-pashu-sakhi-evaluation.php";
//     } else {
//       alert("पशु सखी मूल्यांकन नोंदणी अयशस्वी. कृपया पुन्हा प्रयत्न करा.");
//     }
//   });
// };

// const submitPashuSakhi = () => {
//   const userId = JSON.parse(localStorage.getItem("user"));
//   document.querySelector("#submit").addEventListener("click", async (e) => {
//     e.preventDefault();

//     // Check if at least one question is answered
//     let atLeastOneAnswered = false;

//     const payload = {
//       user_id: userId?.id,
//       file_upload: fileUrl,
//       remark: document.querySelector("#remark").value.trim(),
//       question_answers: [],
//     };

//     data.forEach((questionData, i) => {
//       const yesRadio = document.querySelector(`#yes${i}`);
//       const noRadio = document.querySelector(`#no${i}`);

//       if (yesRadio.checked) {
//         payload.question_answers.push({
//           id: questionData.id,
//           selected_options: 1,
//         });
//         atLeastOneAnswered = true;
//       } else if (noRadio.checked) {
//         payload.question_answers.push({
//           id: questionData.id,
//           selected_options: 0,
//         });
//         atLeastOneAnswered = true;
//       }
//     });

//     // If no question is answered, display an alert and prevent form submission
//     if (!atLeastOneAnswered) {
//       alert("पशु सखी मूल्यांकन फॉर्ममध्ये किमान एक प्रश्नाची उत्तरे निवडा !!");
//       return;
//     }

//     const { data: res, status } = await evaluationApi.registerPashu(payload);

//     if (status === 200) {
//       alert("पशु सखी मूल्यांकन फॉर्म यशस्वीरित्या सबमिट केला !!");
//       window.location.href = "list-pashu-sakhi-evaluation.php";
//     } else {
//       alert("पशु सखी मूल्यांकन नोंदणी अयशस्वी. कृपया पुन्हा प्रयत्न करा.");
//     }
//   });
// };
const submitPashuSakhi = () => {
  const userId = JSON.parse(localStorage.getItem("user"));

  document.querySelector("#submit").addEventListener("click", async (e) => {
    e.preventDefault();

    // Check if at least one question is answered
    let atLeastOneAnswered = false;

    const payload = {
      user_id: userId?.id,
      file_upload: fileUrl,
      remark: document.querySelector("#remark").value.trim(),
      question_answers: [],
    };

    data.forEach((questionData, i) => {
      const yesRadio = document.querySelector(`#yes${i}`);
      const noRadio = document.querySelector(`#no${i}`);

      if (yesRadio.checked) {
        payload.question_answers.push({
          id: questionData.id,
          selected_options: 1,
        });
        atLeastOneAnswered = true;
      } else if (noRadio.checked) {
        payload.question_answers.push({
          id: questionData.id,
          selected_options: 0,
        });
        atLeastOneAnswered = true;
      }
    });

    // If no question is answered, display an alert and prevent form submission
    if (!atLeastOneAnswered) {
      alert("पशु सखी मूल्यांकन फॉर्ममध्ये किमान एक प्रश्नाची उत्तरे निवडा !!");
      return;
    }

    try {
      const { data: res, status } = await evaluationApi.registerPashu(payload);

      if (status === 200) {
        alert("पशु सखी मूल्यांकन फॉर्म यशस्वीरित्या सबमिट केला !!");
        // window.location.href = "list-pashu-sakhi-evaluation.php";
        window.location.href = `index.php`;
      } else {
        alert("पशु सखी मूल्यांकन नोंदणी अयशस्वी. कृपया पुन्हा प्रयत्न करा.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("तुम्ही या महिन्याचा डेटा आधीच सबमिट केला आहे");
    }
  });
};
