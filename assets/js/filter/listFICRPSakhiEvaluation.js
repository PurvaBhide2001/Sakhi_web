const ListAllFICRPReport = async () => {
  const { data } = await evaluationApi.GetFICRPList();

  const listUserData = document.querySelector("#FIRCPSakhiList");
  console.log(data[0], "dataaa");

  if (data && data.length > 0) {
    const trList = data.map((report, i) => {
      const fileName = report.file_upload.split("/").pop();
      console.log("reporrrrrrrtttttttttt", report.user_data);
      return `
                    <tr>
                    <td>${i + 1}</td>
                    <td><a href="employeeDetailsDashboard.php?id=${
                      report?.user_id
                    }">${report?.user_data.f_name} ${
        report?.user_data.m_name
      } ${report?.user_data.l_name}</a></td>
                    <td>${report.user_data.role_name} </td>
                    
                    </tr>`;
    });

    listUserData.innerHTML = trList.join("");

    // Set event listeners for delete buttons
  } else {
    listUserData.innerHTML =
      "<tr><td colspan='6' class='text-center'>No data available</td></tr>";
  }
};

const ListFICRPReport = async (
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
  try {
    let response;
    if( stateCode && districtCode && blockCode && clusterId){
      response = await evaluationApi.ShowFICRPByClusterId(stateCode,districtCode,blockCode,clusterId);
    }else if( stateCode && districtCode && blockCode ){
      response = await evaluationApi.ShowFICRPByBlock(stateCode,districtCode,blockCode);
    }else if( stateCode && districtCode ){
      response = await evaluationApi.ShowFICRPByDistrict(stateCode,districtCode);
    }
    // const { data } = await evaluationApi.ShowFICRPByClusterId(
    //   stateCode,
    //   districtCode,
    //   blockCode,
    //   clusterId
    // );
    const data = response?.data || [];
    const listUserData = document.querySelector("#FIRCPSakhiList");
    console.log(data[0], "dataaa");

    if (Array.isArray(data) && data.length > 0) {
      const trList = data.map((report, i) => {
        const fileName = report.file_upload
          ? report?.file_upload.split("/").pop()
          : ""; // Add a check for undefined
        console.log("reporrrrrrrtttttttttt", report?.user_data);
        let statusStylecc = "";
        let statusStylebmm = "";
        let remarkCC = "";
        let remarkBMM = "";
        if (report?.submitted_answer?.status_remark_of_cc === "") {
          remarkCC = ` <span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`;
        } else {
          remarkCC = `<span> ${report?.submitted_answer?.status_remark_of_cc} </span>`;
        }

        if (report?.submitted_answer?.status_remark_of_bmm === "") {
          remarkBMM = ` <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`;
        } else {
          remarkBMM = `<span> ${report?.submitted_answer?.status_remark_of_bmm} </span>`;
        }

        if (report?.submitted_answer?.status_by_cc === "मंजूर") {
          statusStylecc = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.submitted_answer?.status_by_cc}</span>`;
        } else if (report?.submitted_answer?.status_by_cc === "नामंजूर") {
          statusStylecc = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.submitted_answer?.status_by_cc}</span>`;
        } else if (report?.submitted_answer?.status_by_cc === "पेंडिंग") {
          statusStylecc = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.submitted_answer?.status_by_cc}</span>`;
        } else {
          statusStylecc = ` <span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span>`;
        }
        // }else{
        if (report?.submitted_answer?.status_by_bmm === "मंजूर") {
          statusStylebmm = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.submitted_answer?.status_by_bmm}</span>`;
        } else if (report?.submitted_answer?.status_by_bmm === "नामंजूर") {
          statusStylebmm = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.submitted_answer?.status_by_bmm}</span>`;
        } else if (report?.submitted_answer?.status_by_bmm === "पेंडिंग") {
          statusStylebmm = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.submitted_answer?.status_by_bmm}</span>`;
        } else {
          statusStylebmm = ` <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span>`;
        }
        if(user.role==="9"){
          return `
          <tr>
            <td>${i + 1}</td>
            <td><a href="employeeDetailsDashboard.php?id=${
              report?.user_id || report?.submitted_answer?.user_id
            }">${report?.user_data.f_name} ${report?.user_data.m_name} ${
        report?.user_data?.l_name
      }</a></td>
            <td>${report?.user_data?.role_name}</td>
            <td>${statusStylecc}</td>
            <td>${remarkCC}</td>
            <td>${statusStylebmm}</td>
          
            <td>${remarkBMM}</td>
            <td class="text-center">
            ${
              isEditable
                ? `<span>
                    <a href="frm-FICRP-evaluation.php?id=${report?.submitted_answer?.id}">
                      <i class="fas fa-edit mr-3 text-primary"></i>
                    </a>
                  </span>`
                : `<span style="color:#81aa2b">
                अहवाल २५ तारखेपर्यंत अपडेट करता येणार नाही 
                  </span>`
            }
          </td>
          </tr>`;
        }else if(user.role==="16"){
          return `
          <tr>
            <td>${i + 1}</td>
            <td><a href="employeeDetailsDashboard.php?id=${
              report?.user_id || report?.submitted_answer?.user_id
            }">${report?.user_data.f_name} ${report?.user_data.m_name} ${
        report?.user_data?.l_name
      }</a></td>
            <td>${report?.user_data?.role_name}</td>
            <td>${statusStylecc}</td>
            <td>${remarkCC}</td>
            <td class="text-center">
            ${
              isEditable
                ? `<span>
                    <a href="frm-FICRP-evaluation.php?id=${report?.submitted_answer?.id}">
                      <i class="fas fa-edit mr-3 text-primary"></i>
                    </a>
                  </span>`
                : `<span style="color:#81aa2b">
                अहवाल २५ तारखेपर्यंत अपडेट करता येणार नाही 
                  </span>`
            }
          </td>
          </tr>`;
        }else{
          document.getElementById("updateCol").style.display = "none";
          return `
          <tr>
            <td>${i + 1}</td>
            <td><a href="employeeDetailsDashboard.php?id=${
              report?.user_id || report?.submitted_answer?.user_id
            }">${report?.user_data.f_name} ${report?.user_data.m_name} ${
        report?.user_data?.l_name
      }</a></td>
            <td>${report?.user_data?.role_name}</td>
            <td>${statusStylecc}</td>
            <td>${remarkCC}</td>
            <td>${statusStylebmm}</td>
            
            <td>${remarkBMM}</td>
            
          </tr>`;
        }
        // return `
        //     <tr>
        //       <td>${i + 1}</td>
        //       <td><a href="employeeDetailsDashboard.php?id=${
        //         report?.user_id || report?.submitted_answer?.user_id
        //       }">${report?.user_data.f_name} ${report?.user_data.m_name} ${
        //   report?.user_data?.l_name
        // }</a></td>
        //       <td>${report?.user_data?.role_name}</td>
        //       <td>${statusStylecc}</td>
        //       <td>${statusStylebmm}</td>
        //       <td>${remarkCC}</td>
        //       <td>${remarkBMM}</td>
        //       <td class="text-center">
        //       ${
        //         isEditable
        //           ? `<span>
        //               <a href="frm-FICRP-evaluation.php?id=${report?.submitted_answer?.id}">
        //                 <i class="fas fa-edit mr-3 text-primary"></i>
        //               </a>
        //             </span>`
        //           : `<span style="color:#81aa2b">
        //           अहवाल २५ तारखेपर्यंत अपडेट करता येणार नाही 
        //             </span>`
        //       }
        //     </td>
        //     </tr>`;
      });

      listUserData.innerHTML = trList.join("");

      // Set event listeners for delete buttons
    } else {
      listUserData.innerHTML =
        "<tr><td colspan='6' class='text-center'>No data available</td></tr>";
    }
  } catch (error) {
    console.error("Error fetching Bank Sakhi report:", error);
    listUserData.innerHTML =
      "<tr><td colspan='3' class='text-center'>Error fetching data</td></tr>";
  }
};
