const ListKrushiReport = (stateCode, districtCode, blockCode, clusterId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  // const { id, role } = user;
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Function to get the last day of the current month
  const getLastDayOfCurrentMonth = () => {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  };

  const isEditable = (() => {
    const lastDayOfCurrentMonth = getLastDayOfCurrentMonth();

    // Check if current day is between 25th and end of the current month
    if (currentDay >= 25 && currentDay <= lastDayOfCurrentMonth) {
      return true;
    }

    // Check if current day is between 1st and 5th of the next month
    if (currentDay >= 1 && currentDay <= 5) {
      return true;
    }

    return false;
  })();
  // const data = evaluationApi.ShowKrushiSakhiByClusterId(
  //   stateCode,
  //   districtCode,
  //   blockCode,
  //   clusterId
  // );
  let data;
  if (stateCode && districtCode && blockCode && clusterId) {
    // Call the ShowKrushiSakhiByClusterId API
    data = evaluationApi.ShowKrushiSakhiByClusterId(
      stateCode,
      districtCode,
      blockCode,
      clusterId
    );
  } else if (stateCode && districtCode && blockCode && !clusterId) {
    // Call the ShowKrushiSakhiByBlock API
    data = evaluationApi.ShowKrushiSakhiByBlock(
      stateCode,
      districtCode,
      blockCode
    );
  } else if (stateCode && districtCode) {
    // Call the ShowKrushiSakhiByDistrict API
    data = evaluationApi.ShowKrushiSakhiByDistrict(stateCode, districtCode);
  }
  const tableData = document.querySelector("#krushiSakhiList");
  let tr = "";
  if (data && data.length > 0) {
    data.forEach((item, i) => {
      const userData = item?.user_data;
      const submitted_answer = item?.submitted_answer;

      console.log("data", userData);
      const fileName = submitted_answer?.file_upload
        ? submitted_answer.file_upload.split("/").pop()
        : "";
      if (user.role === "9") {
        let statusStylecc = "";
        let statusStylebmm = "";
        let remarkCC = "";
        let remarkBMM = "";
        if (submitted_answer?.status_remark_of_cc === "") {
          remarkCC = ` <span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`;
        } else {
          remarkCC = `<span> ${submitted_answer?.status_remark_of_cc} </span>`;
        }

        if (submitted_answer?.status_remark_of_bmm === "") {
          remarkBMM = ` <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`;
        } else {
          remarkBMM = `<span> ${submitted_answer?.status_remark_of_bmm} </span>`;
        }

        if (submitted_answer?.status_by_cc === "मंजूर") {
          statusStylecc = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_cc}</span>`;
        } else if (submitted_answer?.status_by_cc === "नामंजूर") {
          statusStylecc = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_cc}</span>`;
        } else if (submitted_answer?.status_by_cc === "पेंडिंग") {
          statusStylecc = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_cc}</span>`;
        } else {
          statusStylecc = ` <span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span>`;
        }
        // }else{
        if (submitted_answer?.status_by_bmm === "मंजूर") {
          statusStylebmm = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_bmm}</span>`;
        } else if (submitted_answer?.status_by_bmm === "नामंजूर") {
          statusStylebmm = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_bmm}</span>`;
        } else if (submitted_answer?.status_by_bmm === "पेंडिंग") {
          statusStylebmm = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_bmm}</span>`;
        } else {
          statusStylebmm = ` <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span>`;
        }

        tr += `
              <tr>
                <td>${i + 1}</td>
                <td><a href="employeeDetailsDashboard.php?id=${userData?.id}">${
          userData?.f_name
        } ${userData?.m_name} ${userData?.l_name}</a></td>
                <td>${userData?.role_name}</td>
                <td>${statusStylecc}</td>
                <td>${remarkCC}</td>
              <td>${statusStylebmm}</td>
            
              <td>${remarkBMM}</td>
              <td class="text-center">
              ${
                isEditable
                  ? `<span>
                      <a href="frm-krushi-sakhi-evaluation.php?id=${submitted_answer?.id}">
                        <i class="fas fa-edit mr-3 text-primary"></i>
                      </a>
                    </span>`
                  : `<span style="color:#81aa2b">
                  अहवाल २५ तारखेपर्यंत अपडेट करता येणार नाही 
                    </span>`
              }
            </td>
              
              </tr>
        `;
      } else if (user.role === "16") {
        let statusStylecc = "";
        let statusStylebmm = "";
        let remarkCC = "";
        let remarkBMM = "";
        document.getElementById("statusLable2").style.display = "none";
        document.getElementById("remarkBmm").style.display = "none";
        if (submitted_answer?.status_remark_of_cc === "") {
          remarkCC = ` <span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`;
        } else {
          remarkCC = `<span> ${submitted_answer?.status_remark_of_cc} </span>`;
        }

        if (submitted_answer?.status_remark_of_bmm === "") {
          remarkBMM = ` <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`;
        } else {
          remarkBMM = `<span> ${submitted_answer?.status_remark_of_bmm} </span>`;
        }

        if (submitted_answer?.status_by_cc === "मंजूर") {
          statusStylecc = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_cc}</span>`;
        } else if (submitted_answer?.status_by_cc === "नामंजूर") {
          statusStylecc = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_cc}</span>`;
        } else if (submitted_answer?.status_by_cc === "पेंडिंग") {
          statusStylecc = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_cc}</span>`;
        } else {
          statusStylecc = ` <span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span>`;
        }
        // }else{
        if (submitted_answer?.status_by_bmm === "मंजूर") {
          statusStylebmm = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_bmm}</span>`;
        } else if (submitted_answer?.status_by_bmm === "नामंजूर") {
          statusStylebmm = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_bmm}</span>`;
        } else if (submitted_answer?.status_by_bmm === "पेंडिंग") {
          statusStylebmm = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_bmm}</span>`;
        } else {
          statusStylebmm = ` <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span>`;
        }

        tr += `
              <tr>
                <td>${i + 1}</td>
                <td><a href="employeeDetailsDashboard.php?id=${userData?.id}">${
          userData?.f_name
        } ${userData?.m_name} ${userData?.l_name}</a></td>
                <td>${userData?.role_name}</td>
                <td>${statusStylecc}</td>
              <td>${remarkCC}</td>
              <td class="text-center">
              ${
                isEditable
                  ? `<span>
                      <a href="frm-krushi-sakhi-evaluation.php?id=${submitted_answer?.id}">
                        <i class="fas fa-edit mr-3 text-primary"></i>
                      </a>
                    </span>`
                  : `<span style="color:#81aa2b">
                  अहवाल २५ तारखेपर्यंत अपडेट करता येणार नाही 
                    </span>`
              }
            </td>
              
              </tr>
        `;
      } else {
        let statusStylecc = "";
        let statusStylebmm = "";
        let remarkCC = "";
        let remarkBMM = "";
        document.getElementById("updateCol").style.display = "none";
        if (submitted_answer?.status_remark_of_cc === "") {
          remarkCC = ` <span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`;
        } else {
          remarkCC = `<span> ${submitted_answer?.status_remark_of_cc} </span>`;
        }

        if (submitted_answer?.status_remark_of_bmm === "") {
          remarkBMM = ` <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`;
        } else {
          remarkBMM = `<span> ${submitted_answer?.status_remark_of_bmm} </span>`;
        }

        if (submitted_answer?.status_by_cc === "मंजूर") {
          statusStylecc = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_cc}</span>`;
        } else if (submitted_answer?.status_by_cc === "नामंजूर") {
          statusStylecc = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_cc}</span>`;
        } else if (submitted_answer?.status_by_cc === "पेंडिंग") {
          statusStylecc = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_cc}</span>`;
        } else {
          statusStylecc = ` <span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span>`;
        }
        // }else{
        if (submitted_answer?.status_by_bmm === "मंजूर") {
          statusStylebmm = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_bmm}</span>`;
        } else if (submitted_answer?.status_by_bmm === "नामंजूर") {
          statusStylebmm = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_bmm}</span>`;
        } else if (submitted_answer?.status_by_bmm === "पेंडिंग") {
          statusStylebmm = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submitted_answer?.status_by_bmm}</span>`;
        } else {
          statusStylebmm = ` <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span>`;
        }

        tr += `
              <tr>
                <td>${i + 1}</td>
                <td><a href="employeeDetailsDashboard.php?id=${userData?.id}">${
          userData?.f_name
        } ${userData?.m_name} ${userData?.l_name}</a></td>
                <td>${userData?.role_name}</td>
                <td>${statusStylecc}</td>
                <td>${remarkCC}</td>
              <td>${statusStylebmm}</td>
            
              <td>${remarkBMM}</td>             
              </tr>
        `;
      }
    });
  } else {
    // Display a message indicating no data is available
    tr = `
      <tr>
          <td colspan="8" class="text-center">No data available for the Selected Address Value.</td>
      </tr>
  `;
  }
  tableData.innerHTML = tr;
};

const showMonthlyDataByIdDate = (id, selectedDate) => {
  const user = JSON.parse(localStorage.getItem("user"));
  questionAnswerDiv.innerHTML = "";
  const {
    data,
    KrushisakhiMandhanSubmitedAnswers,
    PashuSakhiMandhanSubmitedAnswers,
    CTCAhwalSubmitedAnswers,
    FICRPSubmitedAnswers,
    BanksakhiSubmitedAnswers,
    ICRPSubmitedAnswers,
  } = evaluationApi.ShowEvaluationByIdDate(id, selectedDate);

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("card-body");
  const table = document.createElement("table");
  table.classList.add("table", "table-bordered");
  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>प्रश्न क्र.</th>
      <th>प्रश्न</th>
      <th>उत्तर</th>
    </tr>
  `;
  const createTBody = (questionAndAnswerData, label) => {
    const tbody = document.createElement("tbody");
    if (
      Array.isArray(questionAndAnswerData) &&
      questionAndAnswerData.length > 0
    ) {
      const labelRow = document.createElement("tr");
      const labelCell = document.createElement("td");
      labelCell.setAttribute("colspan", "3");
      labelCell.textContent = label;
      labelRow.appendChild(labelCell);
      tbody.appendChild(labelRow);

      questionAndAnswerData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${index + 1}</td> 
          <td>${
            item.pashuSakhi_questions ||
            item.krushi_questions ||
            item.CTC_questions ||
            item.FICRP_questions ||
            item.bank_Sakhi_questions ||
            item.icrp_questions
          }</td>
          <td>${
            item.selected_option !== undefined
              ? item.selected_option === 1
                ? "होय"
                : "नाही"
              : item.bank_Sakhi_answers !== undefined
              ? item.bank_Sakhi_answers
              : item.answers !== undefined
              ? item.answers
              : item.submited_answers_rate
          }</td>
        `;
        tbody.appendChild(tr);
      });
    }
    return tbody;
  };

  const addData = (questionAndAnswerData, label) => {
    const tbody = createTBody(questionAndAnswerData, label);
    if (tbody) {
      table.appendChild(tbody);
    }
  };
  addData(
    KrushisakhiMandhanSubmitedAnswers.questionAndAnswerData,
    "Krushisakhi Mandhan Submited Answers"
  );
  addData(
    PashuSakhiMandhanSubmitedAnswers.questionAndAnswerData,
    "Pashu Sakhi Mandhan Submited Answers"
  );
  addData(
    CTCAhwalSubmitedAnswers.questionAndAnswerData,
    "CTC Sakhi Mandhan Submited Answers"
  );
  addData(
    FICRPSubmitedAnswers.questionAndAnswerData,
    "FICRP Sakhi Mandhan Submited Answers"
  );
  addData(
    BanksakhiSubmitedAnswers.questionAndAnswerData,
    "Bank Sakhi Mandhan Submited Answers"
  );
  addData(
    ICRPSubmitedAnswers.questionAndAnswerData,
    "ICRP Sakhi Mandhan Submited Answers"
  );
  questionDiv.appendChild(table);
  questionAnswerDiv.appendChild(questionDiv);
};

const ListAllKrushiReport = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { id, role } = user;

  const data = evaluationApi.GetKrushiAnswers();
  const tableData = document.querySelector("#krushiSakhiList");
  let tr = "";

  data.forEach((item, i) => {
    const userData = item?.user_data;
    const submitted_answer = item?.submitted_answer;
    console.log("data", userData);
    const fileName = submitted_answer?.file_upload
      ? submitted_answer.file_upload.split("/").pop()
      : "";

    tr += `
                    <tr>
                      <td>${i + 1}</td>
                      <td><a href="employeeDetailsDashboard.php?id=${
                        userData?.id
                      }">${userData?.f_name} ${userData?.m_name} ${
      userData?.l_name
    }</a></td>
                      <td>${userData?.role_name}</td>
                    </tr>
              `;
  });

  tableData.innerHTML = tr;
};

const ListUserById = (id) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const {
    data,
    loginInfo,
    dailyWorkReport,
    KrushisakhiMandhanSubmitedAnswers,
    PashuSakhiMandhanSubmitedAnswers,
    CTCAhwalSubmitedAnswers,
    FICRPSubmitedAnswers,
    BanksakhiSubmitedAnswers,
    ICRPSubmitedAnswers,
  } = userApi.get(id);

  const loginDetails = document.getElementById("loginDetails");
  const userCountContainer = document.getElementById("userCountContainer");

  if (data) {
    if (data.state === "0") {
      //   const stateObj = JSON.parse(JSON.parse(data.state_obj));
      // // district data
      // const district = JSON.stringify(data.district_obj);
      // const parseDist = JSON.parse(district);
      // const unescapedString = parseDist.replace(/\\/g, "");
      // const jsonString = unescapedString.substring(
      //   unescapedString.indexOf("{"),
      //   unescapedString.lastIndexOf("}") + 1
      // );
      // const district_obj_json = JSON.parse(jsonString);
      // const distTitle = district_obj_json.district_title;
      // // block data

      // const block = JSON.stringify(data.block_obj);
      // const parseblock = JSON.parse(block);
      // const blockString = parseblock.replace(/\\/g, "");
      // const jsonBlockString = blockString.substring(
      //   blockString.indexOf("{"),
      //   blockString.lastIndexOf("}") + 1
      // );
      // const block_obj_json = JSON.parse(jsonBlockString);
      // const blockTitle = block_obj_json.block_title;

      const userInfoDiv = document.createElement("div");

      userInfoDiv.innerHTML = `
      <p><i class="fas fa-user icon"></i><strong>स्वतःचे नाव :</strong> ${data?.f_name}</p>
      <hr>
      <p><i class="fas fa-user icon"></i><strong>वडिलांचे नाव:</strong> ${data?.m_name}</p>
      <hr>
      <p><i class="fas fa-user icon"></i><strong>आडनाव :</strong> ${data?.l_name}</p>
      <hr>
      <p><i class="far fa-calendar-alt icon"></i><strong>जन्मतारीख :</strong> ${data?.dob}</p>
      <hr>
      <p><i class="fas fa-user-tie icon"></i><strong>कर्मचारी पद :</strong> ${data?.role_name}</p>
      <hr>
      <p><i class="fas fa-map-marker-alt icon"></i><strong>पत्ता :</strong>
      <span style="color:#D10000">प्रोफाइलमध्ये तुमचा पत्ता प्रविष्ट केलेला नाही. कृपया तुमचे प्रोफाइल अपलोड करा.</span>
     </p>
    <div class="col-md-12 d-flex justify-content-center" id="">
                                <button type="button" class="btn btn-success mt-2" id="ToUpdate">कर्मचारी तपशील अपडेट करा</button>
                            </div>
    `;
      document.addEventListener("DOMContentLoaded", function () {
        // Get the button element
        const submitButton = document.getElementById("ToUpdate");

        // Add event listener to the button
        submitButton.addEventListener("click", function () {
          // Get the user ID from localStorage
          const user = JSON.parse(localStorage.getItem("user"));
          const userId = user ? user.id : null;
          if (userId) {
            window.location.href = `frm-register_user.php?id=${userId}`;
          } else {
            console.error("User ID not found in localStorage.");
          }
        });
      });

      userCountContainer.appendChild(userInfoDiv);
    } else {
      console.log("state_obj:", data.state_obj);
      console.log("district_obj:", data.district_obj);
      console.log("block_obj:", data.block_obj);

      let stateObj, distTitle, blockTitle;

      try {
        if (data.state_obj.startsWith("{") && data.state_obj.endsWith("}")) {
          // Directly parse the new format
          stateObj = JSON.parse(data.state_obj);
          distTitle = JSON.parse(data.district_obj).district_title;
          blockTitle = JSON.parse(data.block_obj).block_title;
        } else {
          // Parse the old format
          stateObj = JSON.parse(JSON.parse(data.state_obj));

          // district data
          const district = JSON.stringify(data.district_obj);
          const parseDist = JSON.parse(district);
          const unescapedString = parseDist.replace(/\\/g, "");
          const jsonString = unescapedString.substring(
            unescapedString.indexOf("{"),
            unescapedString.lastIndexOf("}") + 1
          );
          const district_obj_json = JSON.parse(jsonString);
          distTitle = district_obj_json.district_title;

          // block data
          const block = JSON.stringify(data.block_obj);
          const parseblock = JSON.parse(block);
          const blockString = parseblock.replace(/\\/g, "");
          const jsonBlockString = blockString.substring(
            blockString.indexOf("{"),
            blockString.lastIndexOf("}") + 1
          );
          const block_obj_json = JSON.parse(jsonBlockString);
          blockTitle = block_obj_json.block_title;
        }
      } catch (error) {
        console.error("Error parsing JSON data:", error);
        console.error("state_obj:", data.state_obj);
        console.error("district_obj:", data.district_obj);
        console.error("block_obj:", data.block_obj);
      }

      const userInfoDiv = document.createElement("div");

      userInfoDiv.innerHTML = `
      <p><i class="fas fa-user icon"></i><strong>स्वतःचे नाव :</strong> ${
        data?.f_name
      }</p>
      <hr>
      <p><i class="fas fa-user icon"></i><strong>वडिलांचे नाव:</strong> ${
        data?.m_name
      }</p>
      <hr>
      <p><i class="fas fa-user icon"></i><strong>आडनाव :</strong> ${
        data?.l_name
      }</p>
      <hr>
      <p><i class="far fa-calendar-alt icon"></i><strong>जन्मतारीख :</strong> ${
        data?.dob
      }</p>
      <hr>
      <p><i class="fas fa-user-tie icon"></i><strong>कर्मचारी पद :</strong> ${
        data?.role_name
      }</p>
      <hr>
      <p><i class="fas fa-map-marker-alt icon"></i><strong>पत्ता :</strong> ${
        stateObj?.state_title ?? ""
      },${distTitle ?? ""},${blockTitle ?? ""}</p>
    <div class="col-md-12 d-flex justify-content-center" id="">
                                <button type="button" class="btn btn-success mt-2" id="ToUpdate">कर्मचारी तपशील अपडेट करा</button>
                            </div>
    `;
      document.addEventListener("DOMContentLoaded", function () {
        // Get the button element
        const submitButton = document.getElementById("ToUpdate");

        // Add event listener to the button
        submitButton.addEventListener("click", function () {
          // Get the user ID from localStorage
          const user = JSON.parse(localStorage.getItem("user"));
          const userId = user ? user.id : null;
          if (userId) {
            window.location.href = `frm-register_user.php?id=${userId}`;
          } else {
            console.error("User ID not found in localStorage.");
          }
        });
      });
      userCountContainer.appendChild(userInfoDiv);
    }
    // const stateObj = JSON.parse(JSON.parse(data.state_obj));
    // // district data
    // const district = JSON.stringify(data.district_obj);
    // const parseDist = JSON.parse(district);
    // const unescapedString = parseDist.replace(/\\/g, "");
    // const jsonString = unescapedString.substring(
    //   unescapedString.indexOf("{"),
    //   unescapedString.lastIndexOf("}") + 1
    // );
    // const district_obj_json = JSON.parse(jsonString);
    // const distTitle = district_obj_json.district_title;
    // // block data

    // const block = JSON.stringify(data.block_obj);
    // const parseblock = JSON.parse(block);
    // const blockString = parseblock.replace(/\\/g, "");
    // const jsonBlockString = blockString.substring(
    //   blockString.indexOf("{"),
    //   blockString.lastIndexOf("}") + 1
    // );
    // const block_obj_json = JSON.parse(jsonBlockString);
    // const blockTitle = block_obj_json.block_title;

    // const userInfoDiv = document.createElement("div");

    // userInfoDiv.innerHTML = `
    //   <p><i class="fas fa-user icon"></i><strong>स्वतःचे नाव :</strong> ${
    //     data?.f_name
    //   }</p>
    //   <hr>
    //   <p><i class="fas fa-user icon"></i><strong>वडिलांचे नाव:</strong> ${
    //     data?.m_name
    //   }</p>
    //   <hr>
    //   <p><i class="fas fa-user icon"></i><strong>आडनाव :</strong> ${
    //     data?.l_name
    //   }</p>
    //   <hr>
    //   <p><i class="far fa-calendar-alt icon"></i><strong>जन्मतारीख :</strong> ${
    //     data?.dob
    //   }</p>
    //   <hr>
    //   <p><i class="fas fa-user-tie icon"></i><strong>कर्मचारी पद :</strong> ${
    //     data?.role_name
    //   }</p>
    //   <hr>
    //   <p><i class="fas fa-map-marker-alt icon"></i><strong>पत्ता :</strong> ${
    //     stateObj?.state_title ?? ""
    //   },${distTitle ?? ""},${blockTitle ?? ""}</p>
    // <div class="col-md-12 d-flex justify-content-center" id="">
    //                             <button type="button" class="btn btn-success mt-2" id="ToUpdate">कर्मचारी तपशील अपडेट करा</button>
    //                         </div>
    // `;
    // document.addEventListener("DOMContentLoaded", function () {
    //   // Get the button element
    //   const submitButton = document.getElementById("ToUpdate");

    //   // Add event listener to the button
    //   submitButton.addEventListener("click", function () {
    //     // Get the user ID from localStorage
    //     const user = JSON.parse(localStorage.getItem("user"));
    //     const userId = user ? user.id : null;
    //     if (userId) {
    //       window.location.href = `frm-register_user.php?id=${userId}`;
    //     } else {
    //       console.error("User ID not found in localStorage.");
    //     }
    //   });
    // });

    const StatusDiv = document.querySelector("#StatusRemark");
    const StatusDivBmm = document.querySelector("#StatusRemarkbmm");
    // const remark1=dailyWorkReport.remark1?dailyWorkReport.remark1:" data is not available"

    if (dailyWorkReport?.status_by_cc === "मंजूर") {
      StatusDiv.innerHTML = `
      <div class="col-md-6">
      <p><i class="fa fa-bars "></i><strong> प्रभाग समन्वयक शेरा :</strong> <span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
        dailyWorkReport?.status_by_cc
      }</span></p>
  </div>
  <div class="col-md-6 form-group">
      <p><i class="fa fa-list-alt"></i><strong> प्रभाग समन्वयक टिप्पणी :</strong> <ul type="disc" style="position: relative;top: -10px;">
      <li><span>${
        dailyWorkReport?.remark1
          ? dailyWorkReport?.remark1
          : "data is not available"
      }</span></li>
      </ul></p>
  </div>
  <hr>`;
    } else if (dailyWorkReport?.status_by_cc === "नामंजूर") {
      StatusDiv.innerHTML = `
      <div class="col-md-6">
      <p><i class="fa fa-bars "></i><strong> प्रभाग समन्वयक शेरा :</strong> <span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
        dailyWorkReport?.status_by_cc
      }</span></p>
  </div>
  <div class="col-md-6 form-group">
      <p><i class="fa fa-list-alt"></i><strong> प्रभाग समन्वयक टिप्पणी :</strong>  <ul type="disc" style="position: relative;top: -10px;">
      <li><span>${
        dailyWorkReport?.remark1
          ? dailyWorkReport?.remark1
          : "data is not available"
      }</span></li>
      </ul></p>
  </div>
  <hr>`;
    } else if (dailyWorkReport?.status_by_cc === "पेंडिंग") {
      StatusDiv.innerHTML = `
      <div class="col-md-6">
      <p><i class="fa fa-bars "></i><strong> प्रभाग समन्वयक शेरा :</strong>  <span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
        dailyWorkReport?.status_by_cc ? dailyWorkReport?.status_by_cc : " "
      }</span></p>
  </div>
  <div class="col-md-6 form-group">
      <p><i class="fa fa-list-alt"></i><strong> प्रभाग समन्वयक टिप्पणी :</strong> 
      <ul type="disc" style="position: relative;top: -10px;">
      <li><span>${
        dailyWorkReport?.remark1
          ? dailyWorkReport?.remark1
          : "data is not available"
      }</span></li>
      </ul>
      </p>
  </div>
  <hr>`;
    } else {
      StatusDiv.innerHTML = `
      <div class="col-md-6">
      <p><i class="fa fa-bars "></i><strong> प्रभाग समन्वयक शेरा :</strong>  <span style="color:#D2042D"> प्रभाग समन्वयकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span></p>
  </div>
  <div class="col-md-6 form-group">
      <p><i class="fa fa-list-alt"></i><strong> प्रभाग समन्वयक टिप्पणी :</strong> 
      
      <span style="color:#D2042D"> प्रभाग समन्वयकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>
      </ul>
      </p>
  </div>
  <hr>`;
    }

    if (dailyWorkReport?.status_by_bmm === "मंजूर") {
      StatusDivBmm.innerHTML = `
      <div class="col-md-6">
      <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong> <span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
        dailyWorkReport?.status_by_bmm
      }</span></p>
  </div>
  <div class="col-md-6 form-group">
  <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong> <ul type="disc" style="position: relative;top: -10px;">
  <li><span>${
    dailyWorkReport?.remark2
      ? dailyWorkReport?.remark2
      : "data is not available"
  }</span></li>
  </ul></p>
</div>
  <hr>`;
    } else if (dailyWorkReport?.status_by_bmm === "नामंजूर") {
      StatusDivBmm.innerHTML = `
      <div class="col-md-6">
      <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong> <span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
        dailyWorkReport?.status_by_bmm
      }</span></p>
  </div>
  <div class="col-md-6 form-group">
  <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong> <ul type="disc" style="position: relative;top: -10px;">
  <li><span>${
    dailyWorkReport?.remark2
      ? dailyWorkReport?.remark2
      : "data is not available"
  }</span></li>
  </ul></p>
</div>
  <hr>`;
    } else if (dailyWorkReport?.status_by_bmm === "पेंडिंग") {
      StatusDivBmm.innerHTML = `
      <div class="col-md-6">
      <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong>  <span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
        dailyWorkReport?.status_by_bmm ? dailyWorkReport?.status_by_bmm : " "
      }</span></p>
  </div>
  <div class="col-md-6 form-group">
  <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong> <ul type="disc" style="position: relative;top: -10px;">
  <li><span>${
    dailyWorkReport?.remark2
      ? dailyWorkReport?.remark2
      : "data is not available"
  }</span></li>
  </ul></p>
</div>
  <hr>`;
    } else {
      StatusDivBmm.innerHTML = `
      <div class="col-md-6">
      <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong>   <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span></p>
  </div>
  <div class="col-md-6 form-group">
  <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong> 
  <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>
  </p>
</div>
  <hr>`;
    }

    const loginInfoDiv = document.createElement("div");
    loginInfoDiv.innerHTML = `
    <p><i class="fas fa-clock icon"></i><strong>लॉगिन वेळ :</strong> ${
      data?.login_info?.login_time
        ? data?.login_info?.login_time
        : "data is not available"
    }</p>
    <hr>
    <p><i class="fas fa-map-marked-alt icon"></i><strong>लॉगिन जागा :</strong> ${
      data?.login_info?.login_location
        ? data?.login_info?.login_location
        : "data is not available"
    }</p>
    <hr>
    <p><i class="fas fa-clock icon"></i><strong>लॉगआउट वेळ :</strong> 
    ${
      data?.logout_info?.logout_time
        ? data?.logout_info?.logout_time
        : "data is not available"
    }</p>
    <hr>
    <p><i class="fas fa-map-marked-alt icon"></i><strong>लॉगआउट जागा :</strong> ${
      data?.logout_info?.logout_location
        ? data?.logout_info?.logout_location
        : "data is not available"
    }</p>
    <hr>
    `;

    // if daily work report is empty
    if (dailyWorkReport === "आजचा दैनंदिन कामाचा अहवाल सापडला नाही") {
      const locationImageDiv = document.createElement("div");
      locationImageDiv.innerHTML = `
  <p>आजचा दैनंदिन कामाचा अहवाल सापडला नाही</p>`;
      meetingImages.appendChild(locationImageDiv);
    } else {
      // Location image
      const locationImageDiv = document.createElement("div");
      if (dailyWorkReport.image_of_location) {
        console.log(dailyWorkReport.image_of_location);
        const locationImageDiv = document.createElement("div");
        locationImageDiv.innerHTML = `
    <img src="${dailyWorkReport.image_of_location}" alt="Meeting Image 1" class="img-fluid" style="max-height: 200px;">`;
        locationImage.appendChild(locationImageDiv);
      }

      if (dailyWorkReport.meeting_photos === '["undefined"]') {
        const div = document.createElement("div");
        div.textContent = "Meeting photos are not available.";
        meetingImages.appendChild(div);
      } else if (dailyWorkReport.meeting_photos) {
        const meetingImage = JSON.parse(dailyWorkReport.meeting_photos);

        try {
          const meetingData = JSON.parse(meetingImage);

          meetingData.forEach((item, index) => {
            const div = document.createElement("div");
            div.innerHTML = `
              <div class="col-md-12">
                <img src="${item}" alt="Meeting Image ${
              index + 1
            }" class="img-fluid" style="max-height: 200px;"> 
              </div>
            `;
            console.log(`Meeting Image ${index + 1}: ${item}`);
            meetingImages.appendChild(div);
          });
        } catch (error) {
          console.error("Error parsing meeting_photos:", error);
        }
      } else {
        console.error("dailyWorkReport.meeting_photos is not defined");
      }
    }

    // questions
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("card-body");
    const table = document.createElement("table");
    table.classList.add("table", "table-bordered");
    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>प्रश्न क्र.</th>
        <th>प्रश्न</th>
        <th>उत्तर</th>
      </tr>
    `;

    console.log("Before if condition");

    const tbody = document.createElement("tbody");
    KrushisakhiMandhanSubmitedAnswers.forEach((data) => {
      data.questionAndAnswerData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${item.krushi_questions}</td>
          <td>${item.selected_option === 1 ? "होय" : "नाही  "}</td>
        `;
        tbody.appendChild(tr);
      });
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    questionDiv.appendChild(table);

    PashuSakhiMandhanSubmitedAnswers.forEach((data) => {
      data.questionAndAnswerData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td> 
            <td>${item.pashuSakhi_questions}</td>
            <td>${item.selected_options === 1 ? "होय" : "नाही"}</td>
          `;
        tbody.appendChild(tr);
      });
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    questionDiv.appendChild(table);

    CTCAhwalSubmitedAnswers.forEach((data) => {
      data.questionAndAnswerData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.CTC_questions}</td>
            <td>${item.answers}</td>
          `;
        tbody.appendChild(tr);
      });
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    questionDiv.appendChild(table);

    FICRPSubmitedAnswers.forEach((data) => {
      data.questionAndAnswerData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.FICRP_questions}</td>
            <td>${item.answers}</td>
          `;
        tbody.appendChild(tr);
      });
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    questionDiv.appendChild(table);

    BanksakhiSubmitedAnswers.forEach((data) => {
      data.questionAndAnswerData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.bank_Sakhi_questions}</td>
            <td>${item.answers}</td>
          `;
        tbody.appendChild(tr);
      });
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    questionDiv.appendChild(table);

    ICRPSubmitedAnswers.forEach((data) => {
      data.questionAndAnswerData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.icrp_questions}</td>
        <td>${item.submited_answers_rate}</td>
      `;
        tbody.appendChild(tr);
      });
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    questionDiv.appendChild(table);

    loginDetails.appendChild(loginInfoDiv);

    // userCountContainer.appendChild(userInfoDiv);
    questionAnswerDiv.appendChild(questionDiv);
  } else {
    userCountContainer.innerHTML = `<p>No data available</p>`;
  }
};
