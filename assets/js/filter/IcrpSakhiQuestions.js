const ICRPQuestions = () => {
  document.getElementById("remark1_div").style.display = "none";
  document.getElementById("statuscc").style.display = "none";
  document.getElementById("remark2_div").style.display = "none";
  document.getElementById("statusbmm").style.display = "none";
  const questionsContainer = document.querySelector("#questionsContainer");
  const responseData = evaluationApi.GetICRPQuestion();
  data = responseData.data;
  console.log(data, "asd");
  questionsContainer.innerHTML = "";

  const questionHTML = data
    .map((questionData, i) => {
      const queID = questionData.id;
      if (queID === "4") {
        return `
          <div class="col-md-6 form-group p-2">
          
            <label class="form-label">${i + 1}. ${
          questionData?.icrp_questions
        }</label>
            <div class="form-check d-flex justify-content-between">
              <div class="col-md-10">
              <input class="form-control" type="text" name="answer${i}" id="answer${i}" data-id="${
          questionData.id
        }" placeholder="${questionData?.target}"> 
              </div>   
              <p style="color: gray; font-size: 14px;    padding-right: 30px;">दर : ${
                questionData.rate
              }</p>          
            </div>
          </div>
          `;
      } else {
        return `
              <div class="col-md-6 form-group p-2">
                <label class="form-label">${i + 1}. ${
          questionData?.icrp_questions
        }</label>
                <div class="form-check d-flex justify-content-between">
                  <div class="col-md-10">
                  
                  <input class="form-control" type="number" name="answer${i}" id="answer${i}" data-id="${
          questionData.id
        }" placeholder="${questionData?.target}">
                  </div>  
                  <p style="color: gray; font-size: 14px;    padding-right: 30px;">दर : ${
                    questionData.rate
                  }</p>           
                </div>
              </div>
              `;
      }
    })
    .join("");
  questionsContainer.innerHTML = questionHTML;
};

// answer
const ICRPAnswers = async () => {
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

      // Check if at least one answer is provided
      let isAnswerProvided = false;

      // Iterate over input fields to gather question answers
      document
        .querySelectorAll("#questionsContainer input")
        .forEach((input, i) => {
          if (input.value.trim() !== "") {
            isAnswerProvided = true;
          }
        });

      // If no answer is provided, display an alert and return
      if (!isAnswerProvided) {
        alert("कृपया किमान एक प्रश्नाचा उत्तर द्या!");
        return;
      }

      // Create an array to store question answers
      const questionAnswers = [];

      // Iterate over input fields to gather question answers
      document
        .querySelectorAll("#questionsContainer input")
        .forEach((input, i) => {
          let id = parseInt(input.dataset.id);
          if (id === 1 || id === 5 || id === 6) {
            let answers = input.value;
            answers = answers + " गट";
            questionAnswers.push({ id, answers });
          } else if (id === 2) {
            let answers = input.value;
            answers = answers + " कुटुंब";
            questionAnswers.push({ id, answers });
          } else if (id === 3) {
            let answers = input.value;
            answers = answers + " टक्के उपस्थिती";
            questionAnswers.push({ id, answers });
          } else if (id === 4) {
            let answers = input.value;
            // answers = " गावातील "+ answers +"गट ";
            questionAnswers.push({ id, answers });
          } else if (id === 7 || id === 8 || id === 9) {
            let answers = input.value;
            answers = answers + " टक्के कुटुंब";
            questionAnswers.push({ id, answers });
          } else if (id === 10) {
            let answers = input.value;
            answers = answers + " टक्के";
            questionAnswers.push({ id, answers });
          } else if (id === 11) {
            let answers = input.value;
            answers = answers + " युवक /युवती";
            questionAnswers.push({ id, answers });
          } else {
            const answers = input.value;
            questionAnswers.push({ id, answers });
          }
        });

      let fileUrl = null; // Initialize fileUrl

      // Wait for the user to select a file and upload it
      const fileInput = document.querySelector("#file_upload");
      if (fileInput.files.length > 0) {
        const uploadedFile = await uploadImageaApi(fileInput.files[i]);
        fileUrl = JSON.parse(uploadedFile).url;
        console.log(fileUrl);
      }

      // Construct the payload object
      const payload = {
        user_id: parseInt(userId), // Convert user ID to number
        question_answers: questionAnswers,
        file_upload: fileUrl,
        remark: document.querySelector("#remark").value.trim(),
      };

      try {
        const { data: res, status } = await evaluationApi.SubmitICRPAnswers(
          payload
        );
        if (status === 200) {
          alert(
            "समुदाय संसाधन व्यक्ती मूल्यांकन फॉर्म यशस्वीरित्या सबमिट केला !!!"
          );
          // window.location.href = "list-icrp-evaluation.php";
          window.location.href = `index.php`;
        } else if (status === 400) {
          const errorMessage = res.messages.error;
          alert(errorMessage);
        } else {
          alert(
            "समुदाय संसाधन व्यक्ती मूल्यांकन नोंदणी अयशस्वी. कृपया पुन्हा प्रयत्न करा."
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
