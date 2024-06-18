const CTCQuestions = () => {
  const questionsContainer = document.querySelector("#questionsContainer");
  document.getElementById("remark1_div").style.display = "none";
  document.getElementById("statuscc").style.display = "none";
  document.getElementById("remark2_div").style.display = "none";
  document.getElementById("statusbmm").style.display = "none";
  const responseData = evaluationApi.GetCTCQuestion();
  data = responseData.data;
  console.log(data, "asd");
  questionsContainer.innerHTML = "";

  const questionHTML = data
    .map((questionData, i) => {
      return `
              <div class="col-md-6 form-group p-2">
              
                <label class="form-label">${i + 1}. ${
        questionData?.CTC_questions
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

const CTCAnswers = async () => {
  try {
    document.querySelector("#submit").addEventListener("click", async (e) => {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user.id;
      if (!userId) {
        console.error("User ID not found in local storage");
        return;
      }

      // Create an array to store question answers
      const questionAnswers = [];

      // Iterate over input fields to gather question answers
      let answerProvided = false; // Flag to track if at least one answer is provided
      document
        .querySelectorAll("#questionsContainer input")
        .forEach((input, i) => {
          const answers = input.value;
          const id = parseInt(input.dataset.id); // Convert to number
          if (answers.trim() !== "") {
            // If answer is provided, set flag to true
            answerProvided = true;
          }
          questionAnswers.push({ id, answers });
        });

      // Check if at least one answer is provided
      if (!answerProvided) {
        alert("कृपया किमान एक प्रश्नाचा उत्तर प्रविष्ट करा !");
        return;
      }

      let fileUrl = null; // Initialize fileUrl

      // Wait for the user to select a file and upload it
      const fileInput = document.querySelector("#file_upload");
      if (fileInput.files.length > 0) {
        const uploadedFile = await uploadImageaApi(fileInput.files[0]);
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
        const { data: res, status } = await evaluationApi.SubmitCTCPAnswers(
          payload
        );

        if (status === 200) {
          alert(
            "समुदाय स्थरीय प्रशिक्षण सल्लगार मूल्यांकन फॉर्म यशस्वीरित्या सबमिट केला !!!"
          );
          // window.location.href = "list-CTC-evaluation.php";
          window.location.href = `index.php`;
        } else if (status === 400) {
          const errorMessage = res.messages.error;
          alert(errorMessage);
        } else {
          alert(
            "समुदाय स्थरीय प्रशिक्षण सल्लगार मूल्यांकन नोंदणी अयशस्वी. कृपया पुन्हा प्रयत्न करा."
          );
        }
      } catch (error) {
        console.error("Error submitting answers:", error);
        alert("तुम्ही या महिन्याचा डेटा आधीच सबमिट केला आहे.");
      }
    });
  } catch (error) {
    console.error("Error occurred:", error);
    alert("An error occurred. *Please try again later.");
  }
};
