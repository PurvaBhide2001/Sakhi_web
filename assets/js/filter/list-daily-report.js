// const dailyWork = (stateCode, districtCode, blockCode, clusterId, roleId) => {
//   const data = dailyWorkApi.GetByClusterRole(
//     stateCode,
//     districtCode,
//     blockCode,
//     clusterId,
//     roleId
//   );
//   const userData = JSON.parse(localStorage.getItem("user"));

//   console.log(data, "dataaasa");
//   const listreportData = document.querySelector("#dailyReportsList");
//   if (data && data.length > 0) {
//     const trList = data.map((item, i) => {
//       const report = item.dailywork_report_data;
//       const user = item.user_data;

//       // document.getElementById("statusLable").innerHTML ="Status By CC"
//       // document.getElementById("statusLabel2").innerHTML = "Status By BMM"

//       let statusStylecc = "";
//       let statusStylebmm = "";
//       let remarkCC="";
//       let remarkBMM="";
//       if(report?.remark1 ===""){
//         remarkCC=` <span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`

//       }else{
//         remarkCC=`<span> ${report?.remark1} </span>`;
//       }

//       if(report?.remark2===""){
//         remarkBMM=` <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`
//       }else{
//         remarkBMM=`<span> ${report?.remark2} </span>`;
//       }

//       if (report?.status_by_cc === "मंजूर") {
//         statusStylecc = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_cc}</span>`;
//       } else if (report?.status_by_cc === "नामंजूर") {
//         statusStylecc = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_cc}</span>`;
//       } else if (report?.status_by_cc === "पेंडिंग") {
//         statusStylecc = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_cc}</span>`;
//       } else {
//         statusStylecc = ` <span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span>`;
//       }
//       // }else{
//       if (report?.status_by_bmm === "मंजूर") {
//         statusStylebmm = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_bmm}</span>`;
//       } else if (report?.status_by_bmm === "नामंजूर") {
//         statusStylebmm = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_bmm}</span>`;
//       } else if (report?.status_by_bmm === "पेंडिंग") {
//         statusStylebmm = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_bmm}</span>`;
//       } else {
//         statusStylebmm = ` <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span>`;
//       }
//       // }

//       // Check if report is null or undefined
//       if (!report) {
//         return ""; // Skip this item if report is null or undefined
//       }

//       // const remarks =
//       //   report?.remark1 || report?.remark2
//       //     ? `${report?.remark1} ${report?.remark2}`
//       //     : "";

//       const imageOfLocationHtml =
//         report && report.image_of_location
//           ? `<img src="${report.image_of_location}" alt="Location Image" style="max-width: 100px; max-height: 100px;">`
//           : "";

//       const meetingPhotos =
//         report &&
//         report.meeting_photos &&
//         report.meeting_photos !== '["undefined"]'
//           ? JSON.parse(JSON.parse(report.meeting_photos))
//           : [];
//       const photosHtml = meetingPhotos
//         .map(
//           (photo) =>
//             `<img src="${photo}" alt="Meeting Photo" style="max-width: 100px; max-height: 100px;">`
//         )
//         .join("");
//       if (userData.role === "9") {
//         // document.getElementById("statusLable2").style.display = "grid";
//         // document.getElementById("remarkBmm").style.display = "grid";
//         return `
//           <tr>
//             <td>${i + 1}</td>
//             <td>${user?.f_name ?? ""} ${user?.m_name ?? ""} ${
//           user?.l_name ?? ""
//         }</td>
//             <td>${report?.date}</td>
//             <td>${user?.role_name}</td>
//             <td>${user?.cluster_name}</td>
//             <td>${report?.location}</td>
//             <td>${report?.completed_work}</td>
//             <td>${report?.type_of_work}</td>
//             <td>${imageOfLocationHtml}</td>
//             <td>${photosHtml}</td>
//             <td>${statusStylecc}</td>
//             <td>${statusStylebmm}</td>
//             <td>${remarkCC}</td>
//             <td>${remarkBMM}</td>
//             <td class="text-center">
//               <span>
//                 <a href="frm-daily-work-report.php?id=${report?.id}">
//                   <i class="fas fa-edit mr-3 text-primary"></i>
//                 </a>
//               </span>
//             </td>
//           </tr>`;
//       } else if (userData.role === "16") {
//         document.getElementById("statusLable2").style.display = "none";
//         document.getElementById("remarkBmm").style.display = "none";
//         return `
//           <tr>
//             <td>${i + 1}</td>
//             <td>${user?.f_name ?? ""} ${user?.m_name ?? ""} ${
//           user?.l_name ?? ""
//         }</td>
//             <td>${report?.date}</td>
//             <td>${user?.role_name}</td>
//             <td>${user?.cluster_name}</td>
//             <td>${report?.location}</td>
//             <td>${report?.completed_work}</td>
//             <td>${report?.type_of_work}</td>
//             <td>${imageOfLocationHtml}</td>
//             <td>${photosHtml}</td>
//             <td>${statusStylecc}</td>
//             <td>${remarkCC}</td>
//             <td class="text-center">
//               <span>
//                 <a href="frm-daily-work-report.php?id=${report?.id}">
//                   <i class="fas fa-edit mr-3 text-primary"></i>
//                 </a>
//               </span>
//             </td>
//           </tr>`;
//       } else {
//         document.getElementById("updateCol").style.display = "none";

//         return `
//           <tr>
//             <td>${i + 1}</td>
//             <td>${user?.f_name ?? ""} ${user?.m_name ?? ""} ${
//           user?.l_name ?? ""
//         }</td>
//             <td>${report?.date}</td>
//             <td>${user?.role_name}</td>
//             <td>${user?.cluster_name}</td>
//             <td>${report?.location}</td>
//             <td>${report?.completed_work}</td>
//             <td>${report?.type_of_work}</td>
//             <td>${imageOfLocationHtml}</td>
//             <td>${photosHtml}</td>
//             <td>${statusStylecc}</td>
//             <td>${statusStylebmm}</td>
//             <td>${remarkCC}</td>
//             <td>${remarkBMM}</td>
//           </tr>`;
//       }
//     });
//     listreportData.innerHTML = trList.join("");
//   } else {
//     listreportData.innerHTML =
//       "<tr><td colspan='15' class='text-center'>No data available</td></tr>";
//   }
// };

const dailyWork = async (
  stateCode,
  districtCode,
  blockCode,
  clusterId,
  roleId
) => {
  let response;

  if (stateCode && districtCode && blockCode && clusterId && roleId) {
    // Call the API when all parameters are present
    response = await dailyWorkApi.GetByClusterRole(
      stateCode,
      districtCode,
      blockCode,
      clusterId,
      roleId
    );
  } else if (stateCode && districtCode && blockCode && clusterId) {
    // Call the new API for cluster-wise daily work report listing
    response = await dailyWorkApi.DailyWorkRepotlistingfromfilteeclusterwise(
      stateCode,
      districtCode,
      blockCode,
      clusterId
    );
  } else if (stateCode && districtCode && blockCode && roleId) {
    // Call the API when state, district, block, and role codes are provided
    response = await dailyWorkApi.GetByStateDistrictBlockRole(
      stateCode,
      districtCode,
      blockCode,
      roleId
    );
  } else if (stateCode && districtCode && blockCode) {
    // Call the API when state, district, and block codes are provided
    response = await dailyWorkApi.GetByStateDistrictBlock(
      stateCode,
      districtCode,
      blockCode
    );
  } else if (stateCode && districtCode && roleId) {
    // Call the API when state, district, and role codes are provided
    response = await dailyWorkApi.GetByStateDistrictRole(
      stateCode,
      districtCode,
      roleId
    );
  } else if (stateCode && districtCode) {
    // Call the API when only state and district codes are provided
    response = await dailyWorkApi.GetByStateDistrict(stateCode, districtCode);
  } else {
    // Handle cases where not enough parameters are provided
    alert("Please provide at least the state and district codes.");
    return;
  }

  const data = response;
  console.log(data, " dataresponse");
  const userData = JSON.parse(localStorage.getItem("user"));
  const listreportData = document.querySelector("#dailyReportsList");

  // Clear the existing table data
  listreportData.innerHTML = "";

  if (data && data.length > 0) {
    const trList = data.map((item, i) => {
      const report = item.dailywork_report_data;
      const user = item.user_data;

      let statusStylecc = "";
      let statusStylebmm = "";
      let statusStyleDmm = "";
      let statusStylePd = "";
      let remarkCC = "";
      let remarkBMM = "";
      let remarkDMM = "";
      let remarkPD = "";
      // remark by cc
      if (report?.remark1 === "") {
        remarkCC = `<span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही.</span>`;
      } else {
        remarkCC = `<span>${report?.remark1}</span>`;
      }
      // remark by bmm
      if (report?.remark2 === "") {
        remarkBMM = `<span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही.</span>`;
      } else {
        remarkBMM = `<span>${report?.remark2}</span>`;
      }
      // remark by dmm
      if (report?.remark_by_DMM === "") {
        remarkDMM = `<span style="color:#D2042D">जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही.</span>`;
      } else {
        remarkDMM = `<span>${report?.remark_by_DMM}</span>`;
      }
      // remark by pd
      if (report?.remark_by_PD === "") {
        remarkPD = `<span style="color:#D2042D">प्रकल्प संचालकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही.</span>`;
      } else {
        remarkPD = `<span>${report?.remark_by_PD}</span>`;
      }

      // status by cc
      if (report?.status_by_cc === "मंजूर") {
        statusStylecc = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_cc}</span>`;
      } else if (report?.status_by_cc === "नामंजूर") {
        statusStylecc = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_cc}</span>`;
      } else if (report?.status_by_cc === "पेंडिंग") {
        statusStylecc = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_cc}</span>`;
      } else {
        statusStylecc = `<span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही.</span>`;
      }
      // status by bmm
      if (report?.status_by_bmm === "मंजूर") {
        statusStylebmm = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_bmm}</span>`;
      } else if (report?.status_by_bmm === "नामंजूर") {
        statusStylebmm = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_bmm}</span>`;
      } else if (report?.status_by_bmm === "पेंडिंग") {
        statusStylebmm = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_bmm}</span>`;
      } else {
        statusStylebmm = `<span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेली नाही.</span>`;
      }
      //status by dmm

      if (report?.status_by_DMM === "मंजूर") {
        statusStyleDmm = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_DMM}</span>`;
      } else if (report?.status_by_DMM === "नामंजूर") {
        statusStyleDmm = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_DMM}</span>`;
      } else if (report?.status_by_DMM === "पेंडिंग") {
        statusStyleDmm = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_DMM}</span>`;
      } else {
        statusStyleDmm = `<span style="color:#D2042D">जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेली नाही.</span>`;
      }
      // status by pd

      if (report?.status_by_PD === "मंजूर") {
        statusStylePd = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_PD}</span>`;
      } else if (report?.status_by_PD === "नामंजूर") {
        statusStylePd = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_PD}</span>`;
      } else if (report?.status_by_PD === "पेंडिंग") {
        statusStylePd = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_PD}</span>`;
      } else {
        statusStylePd = `<span style="color:#D2042D">प्रकल्प संचालकाकडून अद्याप कोणतीही शेरा प्राप्त झालेली नाही.</span>`;
      }

      if (!report) {
        return ""; // Skip this item if report is null or undefined
      }

      const imageOfLocationHtml =
        report && report.image_of_location
          ? `<img src="${report.image_of_location}" alt="Location Image" style="max-width: 100px; max-height: 100px;">`
          : "";

      let meetingPhotos = [];
      if (report && report.meeting_photos) {
        try {
          // Try to parse the JSON string twice to handle the escaped format
          meetingPhotos = JSON.parse(JSON.parse(report.meeting_photos));
        } catch (e) {
          try {
            // If the first parse fails, it means the format is already JSON
            meetingPhotos = JSON.parse(report.meeting_photos);
          } catch (e) {
            console.error("Unable to parse meeting_photos:", e);
          }
        }
      }

      const photosHtml = meetingPhotos
        .map(
          (photo) =>
            `<img src="${photo}" alt="Meeting Photo" style="max-width: 100px; max-height: 100px;">`
        )
        .join("");

      if (userData.role === "9") {
        if (
          user.role === "10" ||
          user.role === "11" ||
          user.role === "12" ||
          user.role === "13" ||
          user.role === "14" ||
          user.role === "16" ||
          user.role === "17" ||
          user.role === "18" ||
          user.role === "19" ||
          user.role === "20" ||
          user.role === "21" ||
          user.role === "22"
        ) {
          document.getElementById("statusLable3").style.display = "none";
          document.getElementById("remarkDmm").style.display = "none";
          document.getElementById("statusLable4").style.display = "none";
          document.getElementById("remarkPd").style.display = "none"; 
          document.getElementById("statusLable").style.display = "none";
          document.getElementById("remarkcc").style.display = "none";

          return `
          <tr>
            <td>${i + 1}</td>
            <td>${user?.f_name ?? ""} ${user?.m_name ?? ""} ${
            user?.l_name ?? ""
          }</td>
            <td>${report?.date}</td>
            <td>${user?.role_name}</td>
            <td>${user?.cluster_name}</td>
            <td>${report?.location}</td>
            <td>${report?.completed_work}</td>
            <td>${report?.type_of_work}</td>
            <td>${imageOfLocationHtml}</td>
            <td>${photosHtml}</td>
            <td>${statusStylebmm}</td>
            <td>${remarkBMM}</td>
            <td class="text-center">
              <span>
                <a href="frm-daily-work-report.php?id=${report?.id}">
                  <i class="fas fa-edit mr-3 text-primary"></i>
                </a>
              </span>
            </td>
          </tr>`;
        }
      } else if (userData.role === "16") {
        document.getElementById("statusLable2").style.display = "none";
        document.getElementById("remarkBmm").style.display = "none";
        document.getElementById("statusLable3").style.display = "none";
        document.getElementById("remarkDmm").style.display = "none";
        document.getElementById("statusLable4").style.display = "none";
        document.getElementById("remarkPd").style.display = "none";
        if (
          user.role === "17" ||
          user.role === "18" ||
          user.role === "19" ||
          user.role === "20" ||
          user.role === "21" ||
          user.role === "22"
        ) {
          return `
          <tr>
            <td>${i + 1}</td>
            <td>${user?.f_name ?? ""} ${user?.m_name ?? ""} ${
            user?.l_name ?? ""
          }</td>
            <td>${report?.date}</td>
            <td>${user?.role_name}</td>
            <td>${user?.cluster_name}</td>
            <td>${report?.location}</td>
            <td>${report?.completed_work}</td>
            <td>${report?.type_of_work}</td>
            <td>${imageOfLocationHtml}</td>
            <td>${photosHtml}</td>
            <td>${statusStylecc}</td>
            <td>${remarkCC}</td>
            <td class="text-center">
              <span>
                <a href="frm-daily-work-report.php?id=${report?.id}">
                  <i class="fas fa-edit mr-3 text-primary"></i>
                </a>
              </span>
            </td>
          </tr>`;
        }
      } else if (userData.role === "2") {
        document.getElementById("statusLable2").style.display = "none";
        document.getElementById("remarkBmm").style.display = "none";
        document.getElementById("statusLable").style.display = "none";
        document.getElementById("remarkcc").style.display = "none";
        document.getElementById("statusLable4").style.display = "none";
        document.getElementById("remarkPd").style.display = "none";
        if (
          user?.role === "3" ||
          user?.role === "4" ||
          user?.role === "5" ||
          user?.role === "6" ||
          user?.role === "8" ||
          user?.role === "9" ||
          user.role === "10" ||
          user.role === "11" ||
          user.role === "12" ||
          user.role === "13" ||
          user.role === "14"
        ) {
          console.log("usssssssssserrrrrrrrrrr idddddddddddd", user.role);
          return `
      
          <tr>
            <td>${i + 1}</td>
            <td>${user?.f_name ?? ""} ${user?.m_name ?? ""} ${
            user?.l_name ?? ""
          }</td>
            <td>${report?.date}</td>
            <td>${user?.role_name}</td>
            <td>${user?.cluster_name}</td>
            <td>${report?.location}</td>
            <td>${report?.completed_work}</td>
            <td>${report?.type_of_work}</td>
            <td>${imageOfLocationHtml}</td>
            <td>${photosHtml}</td>
            <td>${statusStyleDmm}</td>
            <td>${remarkDMM}</td>
            <td class="text-center">
              <span>
                <a href="frm-daily-work-report.php?id=${report?.id}">
                  <i class="fas fa-edit mr-3 text-primary"></i>
                </a>
              </span>
            </td>
          </tr>`;
        }
      } else if (userData.role === "1") {
        document.getElementById("statusLable2").style.display = "none";
        document.getElementById("remarkBmm").style.display = "none";
        document.getElementById("statusLable").style.display = "none";
        document.getElementById("remarkcc").style.display = "none";
        document.getElementById("statusLable3").style.display = "none";
        document.getElementById("remarkDmm").style.display = "none";
        if (user?.role === "2") {
          console.log("usssssssssserrrrrrrrrrr idddddddddddd", user.role);
          return `
          <tr>
            <td>${i + 1}</td>
            <td>${user?.f_name ?? ""} ${user?.m_name ?? ""} ${
            user?.l_name ?? ""
          }</td>
            <td>${report?.date}</td>
            <td>${user?.role_name}</td>
            <td>${user?.cluster_name}</td>
            <td>${report?.location}</td>
            <td>${report?.completed_work}</td>
            <td>${report?.type_of_work}</td>
            <td>${imageOfLocationHtml}</td>
            <td>${photosHtml}</td>
            <td>${statusStylePd}</td>
            <td>${remarkPD}</td>
            <td class="text-center">
              <span>
                <a href="frm-daily-work-report.php?id=${report?.id}">
                  <i class="fas fa-edit mr-3 text-primary"></i>
                </a>
              </span>
            </td>
          </tr>`;
        }
      }
    });

    listreportData.innerHTML = trList.join("");
  } else {
    listreportData.innerHTML =
      "<tr><td colspan='15' class='text-center'>No data available</td></tr>";
  }
};
