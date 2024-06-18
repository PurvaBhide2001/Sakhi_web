// const monthlyReportList = async (
//   stateCode,
//   districtCode,
//   blockCode,
//   clusterId,
//   selectedDate
// ) => {
//   console.log("monthlyReportList by date called ", selectedDate);
//   const userData = JSON.parse(localStorage.getItem("user"));
//   let response;
//   if (stateCode && districtCode && blockCode && clusterId && selectedDate) {
//     response = await monthlyReportApi.GetList(stateCode, districtCode, blockCode, clusterId, selectedDate);
//   } else if (stateCode && districtCode && blockCode && selectedDate) {
//     response = await monthlyReportApi.DailyReportByBlockAndDate(stateCode, districtCode, blockCode, selectedDate);
//   } else if (stateCode && districtCode && selectedDate) {
//     response = await monthlyReportApi.DailyReportByDistrictAndDate(stateCode, districtCode, selectedDate);
//   }

//   const report = response?.dailywork_report_data || [];
//   console.log(report, "data from daily now");

//   const monthlyReport = document.querySelector("#monthlyReportsList");
//   if (response.status === 200) {
//     const trList = report.map((item, i) => {
//       const report = item;
//       const user = item?.user_data;

//       const imageOfLocationHtml =
//         report.image_of_location !== "undefined" && report.image_of_location
//           ? `<img src="${report?.image_of_location}" alt="Location Image" style="max-width: 100px; max-height: 100px;">`
//           : "";

//       let meetingPhotos = [];
//       if (report.meeting_photos && report.meeting_photos !== '["undefined"]') {
//         try {
//           // Double parse the JSON string
//           meetingPhotos = JSON.parse(JSON.parse(report.meeting_photos));
//         } catch (error) {
//           console.error("Error parsing meeting_photos: ", error);
//         }
//       }

//       console.log(meetingPhotos, "meeting photos");

//       const photosHtml = meetingPhotos.length > 0
//         ? meetingPhotos.map(
//             (photo) =>
//               `<img src="${photo}" alt="Meeting Photo" style="max-width: 100px; max-height: 100px;">`
//           ).join("")
//         : "";

//       let statusStylecc = "";
//       let statusStylebmm = "";
//       let statusStyleDmm = "";
//       let statusStylePd = "";
//       let remarkCC = "";
//       let remarkBMM = "";
//       let remarkDMM = "";
//       let remarkPD = "";
//       // remark by cc 
//       if (report?.remark1 === "") {
//         remarkCC = `<span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`;
//       } else {
//         remarkCC = `<span>${report?.remark1}</span>`;
//       }
//       // remark by bmm
//       if (report?.remark2 === "") {
//         remarkBMM = `<span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`;
//       } else {
//         remarkBMM = `<span>${report?.remark2}</span>`;
//       }
//       // report by dmm
//       if (report?.remark_by_DMM === "") {
//         remarkDMM = `<span style="color:#D2042D">जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही.</span>`;
//       } else {
//         remarkDMM = `<span>${report?.remark_by_DMM}</span>`;
//       }
//       // remark by pd
//       if (report?.remark_by_PD === "") {
//         remarkPD = `<span style="color:#D2042D">प्रकल्प संचालकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही.</span>`;
//       } else {
//         remarkPD = `<span>${report?.remark_by_PD}</span>`;
//       }
//       // status by cc
//       if (report?.status_by_cc === "मंजूर") {
//         statusStylecc = `<span style="background-color:#008000;color:#fff;padding:5px 15px;border-radius:5px">${report?.status_by_cc}</span>`;
//       } else if (report?.status_by_cc === "नामंजूर") {
//         statusStylecc = `<span style="background-color:#D2042D;color:#fff;padding:5px 15px;border-radius:5px">${report?.status_by_cc}</span>`;
//       } else if (report?.status_by_cc === "पेंडिंग") {
//         statusStylecc = `<span style="background-color:#F4BB44;color:#fff;padding:5px 15px;border-radius:5px">${report?.status_by_cc}</span>`;
//       } else {
//         statusStylecc = `<span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही. </span>`;
//       }
//       // status by bmm
//       if (report?.status_by_bmm === "मंजूर") {
//         statusStylebmm = `<span style="background-color:#008000;color:#fff;padding:5px 15px;border-radius:5px">${report?.status_by_bmm}</span>`;
//       } else if (report?.status_by_bmm === "नामंजूर") {
//         statusStylebmm = `<span style="background-color:#D2042D;color:#fff;padding:5px 15px;border-radius:5px">${report?.status_by_bmm}</span>`;
//       } else if (report?.status_by_bmm === "पेंडिंग") {
//         statusStylebmm = `<span style="background-color:#F4BB44;color:#fff;padding:5px 15px;border-radius:5px">${report?.status_by_bmm}</span>`;
//       } else {
//         statusStylebmm = `<span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही. </span>`;
//       }
//       // status by dmm
//       if (report?.status_by_DMM === "मंजूर") {
//         statusStyleDmm = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_DMM}</span>`;
//       } else if (report?.status_by_DMM === "नामंजूर") {
//         statusStyleDmm = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_DMM}</span>`;
//       } else if (report?.status_by_DMM === "पेंडिंग") {
//         statusStyleDmm = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_DMM}</span>`;
//       } else {
//         statusStyleDmm = `<span style="color:#D2042D">जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेली नाही.</span>`;
//       }
//       // status by pd
//       if (report?.status_by_PD === "मंजूर") {
//         statusStylePd = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_PD}</span>`;
//       } else if (report?.status_by_PD === "नामंजूर") {
//         statusStylePd = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_PD}</span>`;
//       } else if (report?.status_by_PD === "पेंडिंग") {
//         statusStylePd = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${report?.status_by_PD}</span>`;
//       } else {
//         statusStylePd = `<span style="color:#D2042D">प्रकल्प संचालकाकडून अद्याप कोणतीही शेरा प्राप्त झालेली नाही.</span>`;
//       }

//       if (userData.role === "9") {
//         if (
//           user.role === "10" ||
//           user.role === "11" ||
//           user.role === "12" ||
//           user.role === "13" ||
//           user.role === "14" ||
//           user.role === "16" ||
//           user.role === "17" ||
//           user.role === "18" ||
//           user.role === "19" ||
//           user.role === "20" ||
//           user.role === "21" ||
//           user.role === "22"
//         ) {
//           document.getElementById("statusLable3").style.display = "none";
//           document.getElementById("remarkDmm").style.display = "none";
//           document.getElementById("statusLable4").style.display = "none";
//           document.getElementById("remarkPd").style.display = "none";
//           document.getElementById("statusLable").style.display = "none";
//           document.getElementById("remarkcc").style.display = "none";
//           return `
//           <tr>
//             <td>${i + 1}</td>
//             <td>${user?.f_name ?? ""} ${user?.m_name ?? ""} ${
//             user?.l_name ?? ""
//           }</td>
//             <td>${report?.date}</td>
//             <td>${user?.role_name}</td>
//             <td>${user?.cluster_name}</td>
//             <td>${report?.location}</td>
//             <td>${report?.completed_work}</td>
//             <td>${report?.type_of_work}</td>
//             <td>${imageOfLocationHtml}</td>
//             <td>${photosHtml}</td>
//             <td>${statusStylebmm}</td>
//             <td>${remarkBMM}</td>
//           </tr>`;
//         }
//       } else if (userData.role === "16") {
//         document.getElementById("statusLable2").style.display = "none";
//         document.getElementById("remarkBmm").style.display = "none";
//         document.getElementById("statusLable3").style.display = "none";
//         document.getElementById("remarkDmm").style.display = "none";
//         document.getElementById("statusLable4").style.display = "none";
//         document.getElementById("remarkPd").style.display = "none";
//         if (
//           user.role === "17" ||
//           user.role === "18" ||
//           user.role === "19" ||
//           user.role === "20" ||
//           user.role === "21" ||
//           user.role === "22"
//         ) {
//           return `
//           <tr>
//             <td>${i + 1}</td>
//             <td>${user?.f_name ?? ""} ${user?.m_name ?? ""} ${
//             user?.l_name ?? ""
//           }</td>
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
//           </tr>`;
//         }
//       } else if (userData.role === "2") {
//         document.getElementById("statusLable2").style.display = "none";
//         document.getElementById("remarkBmm").style.display = "none";
//         document.getElementById("statusLable").style.display = "none";
//         document.getElementById("remarkcc").style.display = "none";
//         document.getElementById("statusLable4").style.display = "none";
//         document.getElementById("remarkPd").style.display = "none";
//         if (
//           user?.role === "3" ||
//           user?.role === "4" ||
//           user?.role === "5" ||
//           user?.role === "6" ||
//           user?.role === "8" ||
//           user?.role === "9" ||
//           user.role === "10" ||
//           user.role === "11" ||
//           user.role === "12" ||
//           user.role === "13" ||
//           user.role === "14"
//         ) {
//           console.log("usssssssssserrrrrrrrrrr idddddddddddd", user.role);
//           return `
      
//           <tr>
//             <td>${i + 1}</td>
//             <td>${user?.f_name ?? ""} ${user?.m_name ?? ""} ${
//             user?.l_name ?? ""
//           }</td>
//             <td>${report?.date}</td>
//             <td>${user?.role_name}</td>
//             <td>${user?.cluster_name}</td>
//             <td>${report?.location}</td>
//             <td>${report?.completed_work}</td>
//             <td>${report?.type_of_work}</td>
//             <td>${imageOfLocationHtml}</td>
//             <td>${photosHtml}</td>
//             <td>${statusStyleDmm}</td>
//             <td>${remarkDMM}</td>
//           </tr>`;
//         }
//       } else if (userData.role === "1") {
//         document.getElementById("statusLable2").style.display = "none";
//         document.getElementById("remarkBmm").style.display = "none";
//         document.getElementById("statusLable").style.display = "none";
//         document.getElementById("remarkcc").style.display = "none";
//         document.getElementById("statusLable3").style.display = "none";
//         document.getElementById("remarkDmm").style.display = "none";
//         if (user?.role === "2") {
//           console.log("usssssssssserrrrrrrrrrr idddddddddddd", user.role);
//           return `
//           <tr>
//             <td>${i + 1}</td>
//             <td>${user?.f_name ?? ""} ${user?.m_name ?? ""} ${
//             user?.l_name ?? ""
//           }</td>
//             <td>${report?.date}</td>
//             <td>${user?.role_name}</td>
//             <td>${user?.cluster_name}</td>
//             <td>${report?.location}</td>
//             <td>${report?.completed_work}</td>
//             <td>${report?.type_of_work}</td>
//             <td>${imageOfLocationHtml}</td>
//             <td>${photosHtml}</td>
//             <td>${statusStylePd}</td>
//             <td>${remarkPD}</td>
//           </tr>`;
//         }
//       }
    
//       // return `
//       //   <tr>
//       //     <td>${i + 1}</td>
//       //     <td><a href="employeeDetailsDashboard.php?id=${user?.id}">${user?.f_name ?? ""} ${user?.m_name ?? ""} ${user?.l_name ?? ""}</a></td>
//       //     <td>${report?.date}</td>
//       //     <td>${user?.role_name}</td>
//       //     <td>${user?.cluster_name ? user?.cluster_name : " "}</td>
//       //     <td>${report?.location}</td>
//       //     <td>${report?.completed_work}</td>
//       //     <td>${report?.type_of_work}</td>
//       //     <td>${imageOfLocationHtml}</td>
//       //     <td>${photosHtml}</td>
//       //     <td>${statusStylecc}</td>
//       //     <td>${remarkCC}</td>
//       //     <td>${statusStylebmm}</td>
//       //     <td>${remarkBMM}</td>
//       //   </tr>`;
//     });
//     monthlyReport.innerHTML = trList.join("");
//   } else {
//     monthlyReport.innerHTML =
//       "<tr><td colspan='14' class='text-center'>No data available for Selected Month</td></tr>";
//   }
// };
const monthlyReportList = async (
  stateCode,
  districtCode,
  blockCode,
  clusterId,
  selectedDate
) => {
  console.log("monthlyReportList by date called ", selectedDate);
  const userData = JSON.parse(localStorage.getItem("user"));
  let response;
  if (stateCode && districtCode && blockCode && clusterId && selectedDate) {
    response = await monthlyReportApi.GetList(stateCode, districtCode, blockCode, clusterId, selectedDate);
  } else if (stateCode && districtCode && blockCode && selectedDate) {
    response = await monthlyReportApi.DailyReportByBlockAndDate(stateCode, districtCode, blockCode, selectedDate);
  } else if (stateCode && districtCode && selectedDate) {
    response = await monthlyReportApi.DailyReportByDistrictAndDate(stateCode, districtCode, selectedDate);
  }

  const report = response?.dailywork_report_data || [];
  console.log(report, "data from daily now");

  const monthlyReport = document.querySelector("#monthlyReportsList");
  if (response.status === 200) {
    const trList = report.map((item, i) => {
      const report = item;
      const user = item?.user_data;

      const imageOfLocationHtml =
        report.image_of_location !== "undefined" && report.image_of_location
          ? `<img src="${report?.image_of_location}" alt="Location Image" style="max-width: 100px; max-height: 100px;">`
          : "";

      let meetingPhotos = [];
      if (report.meeting_photos && report.meeting_photos !== '["undefined"]') {
        try {
          // Double parse the JSON string
          meetingPhotos = JSON.parse(JSON.parse(report.meeting_photos));
        } catch (error) {
          console.error("Error parsing meeting_photos: ", error);
        }
      }

      console.log(meetingPhotos, "meeting photos");

      const photosHtml = meetingPhotos.length > 0
        ? meetingPhotos.map(
            (photo) =>
              `<img src="${photo}" alt="Meeting Photo" style="max-width: 100px; max-height: 100px;">`
          ).join("")
        : "";

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
        remarkCC = `<span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`;
      } else {
        remarkCC = `<span>${report?.remark1}</span>`;
      }
      // remark by bmm
      if (report?.remark2 === "") {
        remarkBMM = `<span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`;
      } else {
        remarkBMM = `<span>${report?.remark2}</span>`;
      }
      // report by dmm
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
        statusStylecc = `<span style="background-color:#008000;color:#fff;padding:5px 15px;border-radius:5px">${report?.status_by_cc}</span>`;
      } else if (report?.status_by_cc === "नामंजूर") {
        statusStylecc = `<span style="background-color:#D2042D;color:#fff;padding:5px 15px;border-radius:5px">${report?.status_by_cc}</span>`;
      } else if (report?.status_by_cc === "पेंडिंग") {
        statusStylecc = `<span style="background-color:#F4BB44;color:#fff;padding:5px 15px;border-radius:5px">${report?.status_by_cc}</span>`;
      } else {
        statusStylecc = `<span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही. </span>`;
      }
      // status by bmm
      if (report?.status_by_bmm === "मंजूर") {
        statusStylebmm = `<span style="background-color:#008000;color:#fff;padding:5px 15px;border-radius:5px">${report?.status_by_bmm}</span>`;
      } else if (report?.status_by_bmm === "नामंजूर") {
        statusStylebmm = `<span style="background-color:#D2042D;color:#fff;padding:5px 15px;border-radius:5px">${report?.status_by_bmm}</span>`;
      } else if (report?.status_by_bmm === "पेंडिंग") {
        statusStylebmm = `<span style="background-color:#F4BB44;color:#fff;padding:5px 15px;border-radius:5px">${report?.status_by_bmm}</span>`;
      } else {
        statusStylebmm = `<span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही. </span>`;
      }
      // status by dmm
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
          </tr>`;
        }
      } else if (userData.role === "16") {
        if (
          user.role === "17" ||
          user.role === "18" ||
          user.role === "19" ||
          user.role === "20" ||
          user.role === "21" ||
          user.role === "22"
        ) {
          document.getElementById("statusLable2").style.display = "none";
          document.getElementById("remarkBmm").style.display = "none";
          document.getElementById("statusLable3").style.display = "none";
          document.getElementById("remarkDmm").style.display = "none";
          document.getElementById("statusLable4").style.display = "none";
          document.getElementById("remarkPd").style.display = "none";
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
          </tr>`;
        }
      } else if (userData.role === "2") {
        if (
          user.role === "3" ||
          user.role === "4" ||
          user.role === "5" ||
          user.role === "6" ||
          user.role === "8" ||
          user.role === "9" ||
          user.role === "10" ||
          user.role === "11" ||
          user.role === "12" ||
          user.role === "13" ||
          user.role === "14"
        ) {
          document.getElementById("statusLable2").style.display = "none";
          document.getElementById("remarkBmm").style.display = "none";
          document.getElementById("statusLable").style.display = "none";
          document.getElementById("remarkcc").style.display = "none";
          document.getElementById("statusLable4").style.display = "none";
          document.getElementById("remarkPd").style.display = "none";
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
          </tr>`;
        }
      } else if (userData.role === "1") {
        if (user.role === "2") {
          document.getElementById("statusLable2").style.display = "none";
          document.getElementById("remarkBmm").style.display = "none";
          document.getElementById("statusLable").style.display = "none";
          document.getElementById("remarkcc").style.display = "none";
          document.getElementById("statusLable3").style.display = "none";
          document.getElementById("remarkDmm").style.display = "none";
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
          </tr>`;
        }
      }
    }).filter(Boolean);

    if (trList.length > 0) {
      monthlyReport.innerHTML = trList.join("");
    } else {
      monthlyReport.innerHTML = "<tr><td colspan='14' class='text-center'>No data available for Selected Month</td></tr>";
    }
  } else {
    monthlyReport.innerHTML = "<tr><td colspan='14' class='text-center'>No data available for Selected Month</td></tr>";
  }
};
