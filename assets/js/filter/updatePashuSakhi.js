const updatePashuSakhiReport = async (reportId) => {
    const response = await fetch(
      `https://drdajalgaon.com/sakhi-api/public/pashuSakhiMandhanQuestion/showbyid/${reportId}`
    );
    const responseData = await response.json();
    const { submitted_answer: report, user_data: user,question_data_with_selected_options } = responseData;
    console.log("responseeeeeeeeeeee",question_data_with_selected_options);
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData.role==="9"){
      document.getElementById("fileuploaddiv").style.display="none"
      document.getElementById("remark1_div").style.display="none";
          document.getElementById("statuscc").style.display="none"
          document.getElementById("remark2_div").style.display="grid";
          document.getElementById("statusbmm").style.display="grid"
          const questionsContainer = document.querySelector("#questionsContainer");
          questionsContainer.innerHTML = "";
          
        const questionHTML = question_data_with_selected_options .map((question_data_with_selected_options, i) => {
            console.log("answerssss",question_data_with_selected_options);
            return`
            <div class="col-md-6 form-group p-2">
            <label class="form-label">${i + 1}. ${
              question_data_with_selected_options.pashuSakhi_questions
        }</label>
            <div class="form-check d-flex justify-content-between">
            <div>
           ${question_data_with_selected_options.selected_option===1?"होय":"नाही"}
          </div>
              <p style="color: gray; font-size: 14px;    padding-right: 30px;">दर : ${
                question_data_with_selected_options.pashuSakhi_rate
              }</p>
            </div>
          </div>`
          })
          .join("");
          questionsContainer.innerHTML = questionHTML;
          const submitBtn = document.getElementById("submit");
          submitBtn.textContent = "अपडेट करा";
        
          submitBtn.addEventListener("click", async () => {
            const updatedReportData = {
              status_by_cc: report.status_by_cc,
              status_by_bmm: document.getElementById("statusDropDownbmm").value,
              status_remark_of_cc: report.status_remark_of_cc,
              status_remark_of_bmm: document.getElementById("remark2").value,
              // Add other fields here
            };
        
            try {
              const response = await evaluationApi.PashuSakhiAhwalupdate(report.id, updatedReportData);
              if (response && response.status === 200) {
                alert("Report data updated successfully!");
                window.location.href = "list-pashu-sakhi-evaluation.php";
              } else {
                alert("Failed to update report data. Please try again.");
              }
            } catch (error) {
              console.error("Error updating report data:", error);
              alert(
                "An error occurred while updating report data. Please try again later."
              );
            }
          });
    } else if(userData.role==="16"){
      document.getElementById("fileuploaddiv").style.display="none"
      document.getElementById("remark2_div").style.display="none";
          document.getElementById("statusbmm").style.display="none"
       
          document.getElementById("remark1_div").style.display="grid";
              document.getElementById("statuscc").style.display="grid"
          const questionsContainer = document.querySelector("#questionsContainer");
          questionsContainer.innerHTML = "";
          
        const questionHTML = question_data_with_selected_options
      
        
          .map((question_data_with_selected_options, i) => {
            return`
            <div class="col-md-6 form-group p-2">
            <label class="form-label">${i + 1}. ${
              question_data_with_selected_options.pashuSakhi_questions
        }</label>
            <div class="form-check d-flex justify-content-between">
            <div>
            <div>
            ${question_data_with_selected_options.selected_option === 1?"होय":"नाही"}
           </div>
          </div>
              <p style="color: gray; font-size: 14px;    padding-right: 30px;">दर : ${
                question_data_with_selected_options.pashuSakhi_rate
              }</p>
            </div>
          </div>`
          })
          .join("");
          questionsContainer.innerHTML = questionHTML;
          const submitBtn = document.getElementById("submit");
          submitBtn.textContent = "अपडेट करा";
        
          submitBtn.addEventListener("click", async () => {
            const updatedReportData = {
              status_by_bmm: report.status_by_bmm,
             status_by_cc: document.getElementById("statusDropDowncc").value,
              status_remark_of_cc:document.getElementById("remark1").value,
              status_remark_of_bmm: report.status_remark_of_bmm,
              // Add other fields here
            };
        
            try {
              const response = await evaluationApi.PashuSakhiAhwalupdate(report.id, updatedReportData);
              if (response && response.status === 200) {
                alert("Report data updated successfully!");
                window.location.href = "list-pashu-sakhi-evaluation.php";
              } else {
                alert("Failed to update report data. Please try again.");
              }
            } catch (error) {
              console.error("Error updating report data:", error);
              alert(
                "An error occurred while updating report data. Please try again later."
              );
            }
          });
    }


   };
  