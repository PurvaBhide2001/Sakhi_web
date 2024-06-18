let data;

const krushiSakhiQuestion = () => {
  const questionsContainer = document.querySelector("#questionsContainer");
document.getElementById("remark1_div").style.display="none";
document.getElementById("statuscc").style.display="none"
document.getElementById("remark2_div").style.display="none";
document.getElementById("statusbmm").style.display="none"

  const responseData = evaluationApi.GetKrushiQuestion();
  
  data = responseData.data;
  questionsContainer.innerHTML = "";

  const questionHTML = data
    .map((questionData, i) => {
      return `
        <div class="col-md-6 form-group p-2">
          <label class="form-label">${i + 1}. ${
        questionData.krushi_questions
      }</label>
          <div class="form-check d-flex justify-content-between">
            <div>
              <input class="form-check-input" type="radio" name="answer${i}" id="yes${i}" value="1">
              <label class="form-check-label pr-5" for="yes${i}" required>होय</label>
              <input class="form-check-input" type="radio" name="answer${i}" id="no${i}" value="0" required>
              <label class="form-check-label" for="no${i}">नाही</label>
            </div>
            <p style="color: gray; font-size: 14px;    padding-right: 30px;">दर : ${
              questionData.krushi_rate
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

// const submitKrushiSakhi = () => {
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
//           krushi_selected_option: 1,
//         });
//       } else if (noRadio.checked) {
//         payload.question_answers.push({
//           id: questionData.id,
//           krushi_selected_option: 0,
//         });
//       }
//     });

//     const { data: res, status } = await evaluationApi.register(payload);
//     if (status === 200) {
//       alert("कृषी सखी मूल्यांकन फॉर्म यशस्वीरित्या सबमिट केला !!");
//       window.location.href = "list-monthly-report.php";
//     } else {
//       alert("कृषी सखी मूल्यांकन नोंदणी अयशस्वी. कृपया पुन्हा प्रयत्न करा.");
//     }
//   });
// };

const submitKrushiSakhi = () => {
  const userId = JSON.parse(localStorage.getItem("user"));
  document.querySelector("#submit").addEventListener("click", async (e) => {
    e.preventDefault();

    const remark = document.querySelector("#remark").value.trim();
    // if (!fileUrl) {
    //   alert("कृषी सखी मूल्यांकन फॉर्ममध्ये किमान एक माहिती भरा !!");
    //   return; // Prevent further execution
    // }

    const payload = {
      user_id: userId?.id,
      file_upload: fileUrl,
      remark: remark,
      question_answers: [],
    };

    data.forEach((questionData, i) => {
      const yesRadio = document.querySelector(`#yes${i}`);
      const noRadio = document.querySelector(`#no${i}`);

      if (yesRadio.checked) {
        payload.question_answers.push({
          id: questionData.id,
          krushi_selected_option: 1,
        });
      } else if (noRadio.checked) {
        payload.question_answers.push({
          id: questionData.id,
          krushi_selected_option: 0,
        });
      }
    });

    // Check if payload has at least one question answer
    if (payload.question_answers.length === 0) {
      alert("कृषी सखी मूल्यांकन फॉर्ममध्ये किमान एक प्रश्न उत्तर निवडा !!");
      return; // Prevent further execution
    }

  try {
          const { data: res, status } = await evaluationApi.register(payload);
          console.log(status, "statsuuuuuuuuuuuuuuuu");

          if (status === 200) {
              alert("कृषी सखी मूल्यांकन फॉर्म यशस्वीरित्या सबमिट केला !!");
              // window.location.href = "list-krushi-sakhi-evaluation.php";
              window.location.href = `index.php`;
          } else {
              alert("कृषी सखी मूल्यांकन नोंदणी अयशस्वी. कृपया पुन्हा प्रयत्न करा.");
          }
      } catch (error) {
          console.error("Error submitting answers:", error);
          alert("तुम्ही या महिन्याचा डेटा आधीच सबमिट केला आहे");
      }  });
};
