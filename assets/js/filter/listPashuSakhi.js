const ListPashuSakhiReport = async (
  stateCode,
  districtCode,
  blockCode,
  clusterId
) => {
  const user = JSON.parse(localStorage.getItem("user"));
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
    if (currentDay >= 24 && currentDay <= lastDayOfCurrentMonth) {
      return true;
    }

    // Check if current day is between 1st and 5th of the next month
    if (currentDay >= 1 && currentDay <= 5) {
      return true;
    }

    return false;
  })();
  // const data = await evaluationApi.ShowPashuSakhiByClusterId(
  //   stateCode,
  //   districtCode,
  //   blockCode,
  //   clusterId
  // );
  let data;
  if (stateCode && districtCode && blockCode && clusterId) {
    // Call the ShowKrushiSakhiByClusterId API
    data = await evaluationApi.ShowPashuSakhiByClusterId(
      stateCode,
      districtCode,
      blockCode,
      clusterId
    );
  } else if (stateCode && districtCode && blockCode && !clusterId) {
    // Call the ShowKrushiSakhiByBlock API
    data = await evaluationApi.ShowPashuSakhiByBlock(
      stateCode,
      districtCode,
      blockCode
    );
  } else if (stateCode && districtCode) {
    // Call the ShowKrushiSakhiByDistrict API
    data = await evaluationApi.ShowPashuSakhiByDistrict(
      stateCode,
      districtCode
    );
  }
  const listUserData = document.querySelector("#pashuSakhiReportsList");
  // console.log(data[ ].file_upload, "dataaa");

  if (data && data.length > 0) {
    const trList = data.map((report, i) => {
      console.log(data[i], "dataaa");
      const fileurl = data[i].submitted_answer.file_upload;
      const fileName = fileurl.split("/").pop();
      let userData = data[i].user_data;
      const submitted_answer = data[i].submitted_answer;
      // console.log("reporrrrrrrtttttttttt",userData);
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

        return `
                      <tr>
                        <td>${i + 1}</td>
                        <td><a href="employeeDetailsDashboard.php?id=${
                          userData?.id
                        }">${userData?.f_name} ${userData?.m_name} ${
          userData?.l_name
        }</a></td>
                        <td>${userData?.role_name}</td>
                        <td>${statusStylecc}</td>
                        <td>${remarkCC}</td>
                      <td>${statusStylebmm}</td>
                     
                      <td>${remarkBMM}</td>
                      <td class="text-center">
                      ${
                        isEditable
                          ? `<span>
                              <a href="frm-pashu-sakhi-evaluation.php?id=${submitted_answer?.id}">
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

        return `
                      <tr>
                        <td>${i + 1}</td>
                        <td><a href="employeeDetailsDashboard.php?id=${
                          userData?.id
                        }">${userData?.f_name} ${userData?.m_name} ${
          userData?.l_name
        }</a></td>
                        <td>${userData?.role_name}</td>
                        <td>${statusStylecc}</td>
                      <td>${remarkCC}</td>
                      <td class="text-center">
                      ${
                        isEditable
                          ? `<span>
                              <a href="frm-pashu-sakhi-evaluation.php?id=${submitted_answer?.id}">
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

        return `
                      <tr>
                        <td>${i + 1}</td>
                        <td><a href="employeeDetailsDashboard.php?id=${
                          userData?.id
                        }">${userData?.f_name} ${userData?.m_name} ${
          userData?.l_name
        }</a></td>
                        <td>${userData?.role_name}</td>
                        <td>${statusStylecc}</td>
                        <td>${remarkCC}</td>
                      <td>${statusStylebmm}</td>
                   
                      <td>${remarkBMM}</td>             
                      </tr>
                `;
      }
      // return `
      //                 <tr>
      //                 <td>${i + 1}</td>
      //                 <td><a href="employeeDetailsDashboard.php?id=${
      //                   userData?.id
      //                 }">${userData?.f_name} ${userData?.m_name} ${
      //   userData?.l_name
      // }</a></td>
      //                 <td>${userData?.role_name} </td>

      //                 </tr>`;
    });

    listUserData.innerHTML = trList.join("");

    // Set event listeners for delete buttons
  } else {
    listUserData.innerHTML =
      "<tr><td colspan='8' class='text-center'>No data available</td></tr>";
  }
};

// list All
const ListAllPashuSakhiReport = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { id, role } = user;

  const data = await evaluationApi.GetPashuSakhiList();

  const listUserData = document.querySelector("#pashuSakhiReportsList");
  // console.log(data[ ].file_upload, "dataaa");

  if (data && data.length > 0) {
    const trList = data.map((report, i) => {
      console.log(data[i], "dataaa");
      const fileurl = data[i].submitted_answer.file_upload;
      const fileName = fileurl.split("/").pop();
      let userData = data[i].user_data;
      // console.log("reporrrrrrrtttttttttt",userData);
      return `
                        <tr>
                        <td>${i + 1}</td>
                        <td><a href="employeeDetailsDashboard.php?id=${
                          userData?.id
                        }">${userData?.f_name} ${userData?.m_name} ${
        userData?.l_name
      }</a></td>
                        <td>${userData?.role_name} </td>
                        
                        </tr>`;
    });

    listUserData.innerHTML = trList.join("");

    // Set event listeners for delete buttons
  } else {
    listUserData.innerHTML =
      "<tr><td colspan='6' class='text-center'>No data available</td></tr>";
  }
};

/* 
<td>${
                          fileName
                            ? `<a href="${fileurl}" target="_blank">${fileName}</a>`
                            : ""
                        }</td> */
