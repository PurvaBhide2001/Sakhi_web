// const ListAllBankSakhiReport = async () => {
//   const { data } = await evaluationApi.GetBankSakhiList();

//   console.log(data, "dataaa");
//   const listUserData = document.querySelector("#BankSakhiList");

//   if (data && data.length > 0) {
//     const trList = data.map((report, i) => {
//       const fileName = report.file_upload.split("/").pop();
//       console.log("reporrrrrrrtttttttttt", report.user_id);
//       return `
//                 <tr>
//                   <td>${i + 1}</td>
//                   <td><a href="employeeDetailsDashboard.php?id=${
//                     report?.user_id
//                   }">${report?.user_data.f_name} ${report?.user_data.m_name} ${
//         report?.user_data.l_name
//       }</a></td>
//                   <td>${report.user_data.role_name} </td>
                 
//                 </tr>`;
//     });

//     listUserData.innerHTML = trList.join("");

//     // Set event listeners for delete buttons
//   } else {
//     listUserData.innerHTML =
//       "<tr><td colspan='6' class='text-center'>No data available</td></tr>";
//   }
// };

// by cluster id
const ListBankSakhiReport = async (stateCode, districtCode, blockCode, clusterId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const getLastDayOfCurrentMonth = () => {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  };
  
  const isEditable = (() => {
    const lastDayOfCurrentMonth = getLastDayOfCurrentMonth();
    
    if (currentDay >= 25 && currentDay <= lastDayOfCurrentMonth) {
      return true;
    }
    
    if (currentDay >= 1 && currentDay <= 5) {
      return true;
    }
    
    return false;
  })();

  try {
    let response;
  
    if (stateCode && districtCode && blockCode && clusterId) {
      response = await evaluationApi.ShowBankSakhiByClusterId(stateCode, districtCode, blockCode, clusterId);
    } else if (stateCode && districtCode && blockCode) {
      response = await evaluationApi.ShowBankSakhiByBlock(stateCode, districtCode, blockCode);
    } else if(stateCode && districtCode){
      response = await evaluationApi.ShowBankSakhiByDistrict(stateCode, districtCode);
    } 
    
    const data = response?.data || [];
    console.log(data, "bank data");
    const listUserData = document.querySelector("#BankSakhiList");
    let statusStylecc = "";
    let statusStylebmm = "";
    
    let remarkCC = "";
    let remarkBMM = "";
    
    if (Array.isArray(data) && data.length > 0) {
      const trList = data.map((report, i) => {
        const submittedAnswer = report?.submitted_answer || {};
        const userData = report?.user_data || {};
        
        if (submittedAnswer.status_remark_of_cc === "") {
          remarkCC = `<span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही.</span>`;
        } else {
          remarkCC = `<span>${submittedAnswer.status_remark_of_cc}</span>`;
        }

        if (submittedAnswer.status_remark_of_bmm === "") {
          remarkBMM = `<span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही.</span>`;
        } else {
          remarkBMM = `<span>${submittedAnswer.status_remark_of_bmm}</span>`;
        }

        switch (submittedAnswer.status_by_cc) {
          case "मंजूर":
            statusStylecc = `<span style="background-color:#008000;color:#fff;padding:5px 15px;border-radius:5px">${submittedAnswer.status_by_cc}</span>`;
            break;
          case "नामंजूर":
            statusStylecc = `<span style="background-color:#D2042D;color:#fff;padding:5px 15px;border-radius:5px">${submittedAnswer.status_by_cc}</span>`;
            break;
          case "पेंडिंग":
            statusStylecc = `<span style="background-color:#F4BB44;color:#fff;padding:5px 15px;border-radius:5px">${submittedAnswer.status_by_cc}</span>`;
            break;
          default:
            statusStylecc = `<span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही.</span>`;
            break;
        }

        switch (submittedAnswer.status_by_bmm) {
          case "मंजूर":
            statusStylebmm = `<span style="background-color:#008000;color:#fff;padding:5px 15px;border-radius:5px">${submittedAnswer.status_by_bmm}</span>`;
            break;
          case "नामंजूर":
            statusStylebmm = `<span style="background-color:#D2042D;color:#fff;padding:5px 15px;border-radius:5px">${submittedAnswer.status_by_bmm}</span>`;
            break;
          case "पेंडिंग":
            statusStylebmm = `<span style="background-color:#F4BB44;color:#fff;padding:5px 15px;border-radius:5px">${submittedAnswer.status_by_bmm}</span>`;
            break;
          default:
            statusStylebmm = `<span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही.</span>`;
            break;
        }

        const editableLink = isEditable
          ? `<a href="frm-bank-sakhi-evalutaion.php?id=${submittedAnswer.id}"><i class="fas fa-edit mr-3 text-primary"></i></a>`
          : `<span style="color:#81aa2b">अहवाल २५ तारखेपर्यंत अपडेट करता येणार नाही</span>`;
        
        if (user.role === "9") {
          return `
            <tr>
              <td>${i + 1}</td>
              <td><a href="employeeDetailsDashboard.php?id=${submittedAnswer.user_id || report.user_id}">${userData.f_name} ${userData.m_name} ${userData.l_name}</a></td>
              <td>${userData.role_name}</td>
              <td>${statusStylecc}</td>
              <td>${remarkCC}</td>
              <td>${statusStylebmm}</td>
              <td>${remarkBMM}</td>
              <td class="text-center">${editableLink}</td>
            </tr>`;
        } else if (user.role === "16") {
          document.getElementById("statusLable2").style.display = "none";
          document.getElementById("remarkBmm").style.display = "none";
          return `
            <tr>
              <td>${i + 1}</td>
              <td><a href="employeeDetailsDashboard.php?id=${submittedAnswer.user_id || report.user_id}">${userData.f_name} ${userData.m_name} ${userData.l_name}</a></td>
              <td>${userData.role_name}</td>
              <td>${statusStylecc}</td>
              <td>${remarkCC}</td>
              <td class="text-center">${editableLink}</td>
            </tr>`;
        } else {
          document.getElementById("updateCol").style.display = "none";
          return `
            <tr>
              <td>${i + 1}</td>
              <td><a href="employeeDetailsDashboard.php?id=${submittedAnswer.user_id || report.user_id}">${userData.f_name} ${userData.m_name} ${userData.l_name}</a></td>
              <td>${userData.role_name}</td>
              <td>${statusStylecc}</td>
              <td>${remarkCC}</td>
              <td>${statusStylebmm}</td>
              <td>${remarkBMM}</td>
            </tr>`;
        }
      });

      listUserData.innerHTML = trList.join("");
    } else {
      listUserData.innerHTML = "<tr><td colspan='8' class='text-center'>No data available</td></tr>";
    }
  } catch (error) {
    console.error("Error fetching Bank Sakhi report:", error);
    listUserData.innerHTML = "<tr><td colspan='8' class='text-center'>Error fetching data</td></tr>";
  }
};

