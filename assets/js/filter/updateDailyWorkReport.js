// const updateDailyWorkReport = async (reportId) => {
//   const response = await fetch(
//     `https://drdajalgaon.com/sakhi-api/public/dailyworkreport/showById/${reportId}`
//   );
//   const responseData = await response.json();
//   const { dailywork_Report_Data: report, user_data: user } = responseData;
//   const userData = JSON.parse(localStorage.getItem("user"));
//   if (userData.role==="9"){
//     document.getElementById("location").value = report.location;
//     document.getElementById("completed_work").value = report.completed_work;
//     document.getElementById("statusDropDownbmm").value = report.status_by_bmm;

//     document.getElementById("type_of_work").value = report.type_of_work;
//     // document.getElementById("remark1_div").style.display = "grid";
//     document.getElementById("remark2_div").style.display = "grid";
//     document.getElementById("statusbmm").style.display = "grid";

//     document.getElementById("remark2").value = report.remark2;
//     // document.getElementById("image_of_location").style.display="none";
//     // document.getElementById("meeting_img").style.display = "none";
//     document.getElementById("dailyReportImages").style.display = "none";
//     document.getElementById("remark1_div").style.display = "none";
//     document.getElementById("statuscc").style.display = "none";
//     document.getElementById("WorkReportFormData").style.display = "block";
//     const submitBtn = document.getElementById("submit");
//     submitBtn.textContent = "अपडेट करा";

//     submitBtn.addEventListener("click", async () => {
//       const updatedReportData = {
//         date: report.date,
//         location: document.getElementById("location").value,
//         completed_work: document.getElementById("completed_work").value,
//         type_of_work: document.getElementById("type_of_work").value,
//         status_by_cc: report.status_by_cc,
//         status_by_bmm: document.getElementById("statusDropDownbmm").value,
//         image_of_location: report.image_of_location,
//         meeting_photos: report.meeting_photos,
//         remark1: report.remark1,
//         remark2: document.getElementById("remark2").value,
//         // Add other fields here
//       };

//       try {
//         const response = await dailyWorkApi.update(report.id, updatedReportData);
//         if (response && response.status === 200) {
//           alert("Report data updated successfully!");
//           window.location.href = "list-daily-report.php";
//         } else {
//           alert("Failed to update report data. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error updating report data:", error);
//         alert(
//           "An error occurred while updating report data. Please try again later."
//         );
//       }
//     });
//   }
//   else{
//     document.getElementById("location").value = report.location;
//     document.getElementById("completed_work").value = report.completed_work;
//     document.getElementById("statusDropDowncc").value = report.status_by_cc;
//     document.getElementById("type_of_work").value = report.type_of_work;
//     document.getElementById("remark1_div").style.display = "grid";
//     document.getElementById("remark2").value = report.remark1;
//     // hide fields
//     document.getElementById("dailyReportImages").style.display = "none";
//     document.getElementById("remark2_div").style.display = "none";
//     document.getElementById("statusbmm").style.display = "none";
//     document.getElementById("WorkReportFormData").style.display = "block";
//     const submitBtn = document.getElementById("submit");
//     submitBtn.textContent = "अपडेट करा";

//     submitBtn.addEventListener("click", async () => {
//       const updatedReportData = {
//         date: report.date,
//         location: document.getElementById("location").value,
//         completed_work: document.getElementById("completed_work").value,
//         type_of_work: document.getElementById("type_of_work").value,
//         status_by_bmm: report.status_by_bmm,
//         status_by_cc: document.getElementById("statusDropDowncc").value,
//         image_of_location: report.image_of_location,
//         meeting_photos: report.meeting_photos,
//         remark1: document.getElementById("remark1").value,
//         remark2: report.remark2,
//         // Add other fields here
//       };

//       try {
//         const response = await dailyWorkApi.update(report.id, updatedReportData);
//         if (response && response.status === 200) {
//           alert("Report data updated successfully!");
//           window.location.href = "list-daily-report.php";
//         } else {
//           alert("Failed to update report data. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error updating report data:", error);
//         alert(
//           "An error occurred while updating report data. Please try again later."
//         );
//       }
//     });
//   }
//  };
const updateDailyWorkReport = async (reportId) => {
  const response = await fetch(
    `https://drdajalgaon.com/sakhi-api/public/dailyworkreport/showById/${reportId}`
  );
  const responseData = await response.json();
  const { dailywork_Report_Data: report, user_data: user } = responseData;
  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData.role === "9") {
    document.getElementById("location").value = report.location;
    document.getElementById("completed_work").value = report.completed_work;
    document.getElementById("statusDropDownbmm").value = report.status_by_bmm;

    document.getElementById("type_of_work").value = report.type_of_work;
    // document.getElementById("remark1_div").style.display = "grid";
    document.getElementById("remark2_div").style.display = "grid";
    document.getElementById("statusbmm").style.display = "grid";

    document.getElementById("remark2").value = report.remark2;
    // document.getElementById("image_of_location").style.display="none";
    // document.getElementById("meeting_img").style.display = "none";
    document.getElementById("dailyReportImages").style.display = "none";
    document.getElementById("remark1_div").style.display = "none";
    document.getElementById("statuscc").style.display = "none";
    document.getElementById("remarkPd_div").style.display = "none";
    document.getElementById("statusPd").style.display = "none";
    document.getElementById("statusDmm").style.display = "none";
    document.getElementById("remarkDmm_div").style.display = "none";
    document.getElementById("WorkReportFormData").style.display = "block";
    const submitBtn = document.getElementById("submit");
    submitBtn.textContent = "अपडेट करा";

    submitBtn.addEventListener("click", async () => {
      const updatedReportData = {
        date: report.date,
        location: document.getElementById("location").value,
        completed_work: document.getElementById("completed_work").value,
        type_of_work: document.getElementById("type_of_work").value,
        status_by_cc: report.status_by_cc,
        status_by_bmm: document.getElementById("statusDropDownbmm").value,
        image_of_location: report.image_of_location,
        meeting_photos: report.meeting_photos,
        remark1: report.remark1,
        remark2: document.getElementById("remark2").value,
        status_by_PD: report.status_by_PD,
        remark_by_PD: report.remark_by_PD,
        status_by_DMM: report.status_by_DMM,
        remark_by_DMM: report.remark_by_DMM,
        // Add other fields here
      };

      try {
        const response = await dailyWorkApi.update(
          report.id,
          updatedReportData
        );
        if (response && response.status === 200) {
          alert("Report data updated successfully!");
          window.location.href = "list-daily-report.php";
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
  } else if (userData.role === "16") {
    document.getElementById("location").value = report.location;
    document.getElementById("completed_work").value = report.completed_work;
    document.getElementById("statusDropDowncc").value = report.status_by_cc;
    document.getElementById("type_of_work").value = report.type_of_work;
    document.getElementById("remark1_div").style.display = "grid";
    document.getElementById("statuscc").style.display = "grid";
    document.getElementById("remark1").value = report.remark1;
    // hide fields
    document.getElementById("dailyReportImages").style.display = "none";
    document.getElementById("remark2_div").style.display = "none";
    document.getElementById("statusbmm").style.display = "none";
    document.getElementById("WorkReportFormData").style.display = "block";
    document.getElementById("statusDmm").style.display = "none";
    document.getElementById("remarkDmm_div").style.display = "none";
    document.getElementById("remarkPd_div").style.display = "none";
    document.getElementById("statusPd").style.display = "none";
    const submitBtn = document.getElementById("submit");
    submitBtn.textContent = "अपडेट करा";

    submitBtn.addEventListener("click", async () => {
      const updatedReportData = {
        date: report.date,
        location: document.getElementById("location").value,
        completed_work: document.getElementById("completed_work").value,
        type_of_work: document.getElementById("type_of_work").value,
        status_by_bmm: report.status_by_bmm,
        status_by_cc: document.getElementById("statusDropDowncc").value,
        image_of_location: report.image_of_location,
        meeting_photos: report.meeting_photos,
        remark1: document.getElementById("remark1").value,
        remark2: report.remark2,
        status_by_DMM: report.status_by_DMM,
        remark_by_DMM: report.remark_by_DMM,
        status_by_PD: report.status_by_PD,
        remark_by_PD: report.remark_by_PD,
        // Add other fields here
      };

      try {
        const response = await dailyWorkApi.update(
          report.id,
          updatedReportData
        );
        if (response && response.status === 200) {
          alert("Report data updated successfully!");
          window.location.href = "list-daily-report.php";
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
  } else if (userData.role === "2") {
    document.getElementById("location").value = report.location;
    document.getElementById("completed_work").value = report.completed_work;
    document.getElementById("statusDropDowncc").value = report.status_by_cc;
    document.getElementById("type_of_work").value = report.type_of_work;
    document.getElementById("statusDropDownbmm").value = report.status_by_bmm;
    document.getElementById("remark2").value = report.remark1;
    // hide fields
    document.getElementById("dailyReportImages").style.display = "none";
    document.getElementById("remark1_div").style.display = "none";
    document.getElementById("statuscc").style.display = "none";
    document.getElementById("remark2_div").style.display = "none";
    document.getElementById("statusbmm").style.display = "none";
    document.getElementById("remarkPd_div").style.display = "none";
    document.getElementById("statusPd").style.display = "none";
    document.getElementById("statusDmm").style.display = "grid";
    document.getElementById("remarkDmm_div").style.display = "grid";
    document.getElementById("WorkReportFormData").style.display = "block";
    const submitBtn = document.getElementById("submit");
    submitBtn.textContent = "अपडेट करा";

    submitBtn.addEventListener("click", async () => {
      const updatedReportData = {
        date: report.date,
        location: document.getElementById("location").value,
        completed_work: document.getElementById("completed_work").value,
        type_of_work: document.getElementById("type_of_work").value,
        status_by_bmm: report.status_by_bmm,
        status_by_cc: report.status_by_cc,
        image_of_location: report.image_of_location,
        meeting_photos: report.meeting_photos,
        remark1: report.remark1,
        remark2: report.remark2,
        status_by_DMM: document.getElementById("statusDropDownDmm").value,
        remark_by_DMM: document.getElementById("remarkDmm").value,
        status_by_PD: report.status_by_PD,
        remark_by_PD: report.remark_by_PD,
      };

      try {
        const response = await dailyWorkApi.update(
          report.id,
          updatedReportData
        );
        if (response && response.status === 200) {
          alert("Report data updated successfully!");
          window.location.href = "list-daily-report.php";
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
  } else if (userData.role === "1") {
    document.getElementById("location").value = report.location;
    document.getElementById("completed_work").value = report.completed_work;
    document.getElementById("statusDropDowncc").value = report.status_by_cc;
    document.getElementById("type_of_work").value = report.type_of_work;
    document.getElementById("statusDropDownbmm").value = report.status_by_bmm;
    document.getElementById("remark2").value = report.remark1;
    // hide fields
    document.getElementById("dailyReportImages").style.display = "none";
    document.getElementById("remark1_div").style.display = "none";
    document.getElementById("statuscc").style.display = "none";
    document.getElementById("remark2_div").style.display = "none";
    document.getElementById("statusbmm").style.display = "none";
    document.getElementById("remarkPd_div").style.display = "grid";
    document.getElementById("statusPd").style.display = "grid";
    document.getElementById("statusDmm").style.display = "none";
    document.getElementById("remarkDmm_div").style.display = "none";
    document.getElementById("WorkReportFormData").style.display = "block";
    const submitBtn = document.getElementById("submit");
    submitBtn.textContent = "अपडेट करा";

    submitBtn.addEventListener("click", async () => {
      const updatedReportData = {
        date: report.date,
        location: document.getElementById("location").value,
        completed_work: document.getElementById("completed_work").value,
        type_of_work: document.getElementById("type_of_work").value,
        status_by_bmm: report.status_by_bmm,
        status_by_cc: report.status_by_cc,
        image_of_location: report.image_of_location,
        meeting_photos: report.meeting_photos,
        remark1: report.remark1,
        remark2: report.remark2,
        status_by_DMM: report.status_by_DMM,
        remark_by_DMM: report.remark_by_DMM,
        status_by_PD: document.getElementById("statusDropDownPd").value,
        remark_by_PD: document.getElementById("remarkPd").value,
      };

      try {
        const response = await dailyWorkApi.update(
          report.id,
          updatedReportData
        );
        if (response && response.status === 200) {
          alert("Report data updated successfully!");
          window.location.href = "list-daily-report.php";
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
