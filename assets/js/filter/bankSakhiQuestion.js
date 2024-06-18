const bankSakhiQuestion = () => {
  const questionsContainer = document.querySelector("#questionsContainer");
  document.getElementById("remark1_div").style.display = "none";
  document.getElementById("statuscc").style.display = "none";
  document.getElementById("remark2_div").style.display = "none";
  document.getElementById("statusbmm").style.display = "none";
  const responseData = evaluationApi.GetBankQuestion();
  data = responseData.data;
  console.log(data, "asd");
  questionsContainer.innerHTML = "";

  const questionHTML = data
    .map((questionData, i) => {
      return `
            <div class="col-md-6 form-group p-2">
            
              <label class="form-label">${i + 1}. ${
        questionData?.bank_Sakhi_questions
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

// answer
const bankSakhiAnswers = async () => {
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

      let isAnswerEntered = false;

      document
        .querySelectorAll("#questionsContainer input")
        .forEach((input, i) => {
          const answers = input.value;
          const id = parseInt(input.dataset.id);
          if (answers.trim() !== "") {
            isAnswerEntered = true;
          }
          questionAnswers.push({ id, answers });
        });

      if (!isAnswerEntered) {
        alert("कृपया किमान एक प्रश्न उत्तर भरा !!");
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

      try {
        const { data: res, status } = await evaluationApi.SubmitBankAnswer(
          payload
        );
        if (status === 200) {
          alert("बँक सखी मूल्यांकन फॉर्म यशस्वीरित्या सबमिट केला !!!");
          // window.location.href = "list-bank-sakhi-evaluation.php";
          window.location.href = `index.php`;
        } else if (status === 400) {
          const errorMessage = res.messages.error;
          alert(errorMessage);
        } else {
          alert("बँक सखी मूल्यांकन नोंदणी अयशस्वी. कृपया पुन्हा प्रयत्न करा.");
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
