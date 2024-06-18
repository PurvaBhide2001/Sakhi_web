const FICRPQuestions = () => {
  const questionsContainer = document.querySelector("#questionsContainer");
  document.getElementById("remark1_div").style.display = "none";
  document.getElementById("statuscc").style.display = "none";
  document.getElementById("remark2_div").style.display = "none";
  document.getElementById("statusbmm").style.display = "none";
  const responseData = evaluationApi.GetFICRPQuestion();
  data = responseData.data;
  console.log(data, "asd");
  questionsContainer.innerHTML = "";

  const questionHTML = data
    .map((questionData, i) => {
      return `
              <div class="col-md-6 form-group p-2">
              
                <label class="form-label">${i + 1}. ${
        questionData?.FICRP_questions
      }</label>
                <div class="form-check d-flex justify-content-between">
                  <div class="col-md-11">
                  <input class="form-control" type="text" name="answer${i}" id="answer${i}" data-id="${
        questionData.id
      }" placeholder="तुमचे उत्तर प्रविष्ट करा">
  
                  </div>             
                </div>
              </div>
              `;
    })
    .join("");
  questionsContainer.innerHTML = questionHTML;
};

const FICRPAnswers = async () => {
  console.log("ButtonClick");
  try {
    document.querySelector("#submit").addEventListener("click", async (e) => {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user.id;
      if (!userId) {
        console.error("User ID not found in local storage");
        return;
      }

      const questionAnswers = [];

      let answered = false;
      document
        .querySelectorAll("#questionsContainer input")
        .forEach((input, i) => {
          const answers = input.value.trim();
          const id = parseInt(input.dataset.id);
          if (answers !== "") {
            answered = true;
          }
          questionAnswers.push({ id, answers });
        });

      if (!answered) {
        alert(
          "आर्थिक साक्षरता सखी मूल्यांकन फॉर्ममध्ये किमान एक प्रश्न उत्तर निवडा !!"
        );
        return;
      }

      let fileUrl = null;
      const fileInput = document.querySelector("#file_upload");
      if (fileInput.files.length > 0) {
        const uploadedFile = await uploadImageaApi(fileInput.files[0]);
        fileUrl = JSON.parse(uploadedFile).url;
        console.log(fileUrl);
      }

      const payload = {
        user_id: parseInt(userId),
        question_answers: questionAnswers,
        file_upload: fileUrl,
        remark: document.querySelector("#remark").value.trim(),
      };

      // const { data: res, status } = await evaluationApi.SubmitFICRPAnswers(payload);
      // console.log(res);
      // if (status === 200) {
      // alert(
      //   "आर्थिक साक्षरता सखी मूल्यांकन फॉर्म यशस्वीरित्या सबमिट केला !!!"
      // );
      // window.location.href = "list-FICRP-evaluation.php";
      // } else {
      // alert(
      //   "आर्थिक साक्षरता सखी मूल्यांकन नोंदणी अयशस्वी. कृपया पुन्हा प्रयत्न करा."
      // );
      // }
      try {
        const { data: res, status } = await evaluationApi.SubmitFICRPAnswers(
          payload
        );
        if (status === 200) {
          alert(
            "आर्थिक साक्षरता सखी मूल्यांकन फॉर्म यशस्वीरित्या सबमिट केला !!!"
          );
          // window.location.href = "list-FICRP-evaluation.php";
          window.location.href = `index.php`;
        } else if (status === 400) {
          const errorMessage = res.messages.error;
          alert(errorMessage);
        } else {
          alert(
            "आर्थिक साक्षरता सखी मूल्यांकन नोंदणी अयशस्वी. कृपया पुन्हा प्रयत्न करा."
          );
        }
      } catch (error) {
        console.error("Error submitting answers:", error);
        alert("तुम्ही या महिन्याचा डेटा आधीच सबमिट केला आहे.");
      }
    });
  } catch (error) {
    console.error("Error occurred:", error);
    alert("An error occurred. Please try again later.");
  }
};
