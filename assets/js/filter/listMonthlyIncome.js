const ListMonthlyInccomeReport = async () => {
  try {
    const { data } = await listMonthlyReportApi.getAllMulyamapan();
    const tableData = document.querySelector("#monthlyReportsList");
    tableData.innerHTML = "";
    const totalCount = data.reduce((count, item) => count + item.length, 0);
    let rowNumber = 1;

    data.forEach((item, i) => {
      item.forEach((innerItem, j) => {
        const userData = innerItem.user_data;
        const submittedAnswer = innerItem?.submitted_answer;
        const classVar = submittedAnswer.class ? submittedAnswer.class : " - ";
        let date = submittedAnswer.created_at;
        const formattedDate= date.split(" ",1)
        const incomeVar = submittedAnswer.monthly_income
          ? submittedAnswer.monthly_income
          : " - ";
          let statusStylecc = "";
          let statusStylebmm = "";
          let remarkCC = "";
          let remarkBMM = "";
         
          if (submittedAnswer?.status_remark_of_cc === "") {
            remarkCC = ` <span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`;
          } else {
            remarkCC = `<span> ${submittedAnswer?.status_remark_of_cc} </span>`;
          }
  
          if (submittedAnswer?.status_remark_of_bmm === "") {
            remarkBMM = ` <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>`;
          } else {
            remarkBMM = `<span> ${submittedAnswer?.status_remark_of_bmm} </span>`;
          }
  
          if (submittedAnswer?.status_by_cc === "मंजूर") {
            statusStylecc = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submittedAnswer?.status_by_cc}</span>`;
          } else if (submittedAnswer?.status_by_cc === "नामंजूर") {
            statusStylecc = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submittedAnswer?.status_by_cc}</span>`;
          } else if (submittedAnswer?.status_by_cc === "पेंडिंग") {
            statusStylecc = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submittedAnswer?.status_by_cc}</span>`;
          } else {
            statusStylecc = ` <span style="color:#D2042D">प्रभाग समन्वयकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span>`;
          }
          // }else{
          if (submittedAnswer?.status_by_bmm === "मंजूर") {
            statusStylebmm = `<span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submittedAnswer?.status_by_bmm}</span>`;
          } else if (submittedAnswer?.status_by_bmm === "नामंजूर") {
            statusStylebmm = `<span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submittedAnswer?.status_by_bmm}</span>`;
          } else if (submittedAnswer?.status_by_bmm === "पेंडिंग") {
            statusStylebmm = `<span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px">${submittedAnswer?.status_by_bmm}</span>`;
          } else {
            statusStylebmm = ` <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span>`;
          }
          const row = `
          <tr>
            <td>${rowNumber++}</td>
            <td>${userData.f_name} ${userData.m_name} ${userData.l_name}</td>
            <td>${userData.role_name}</td>
            <td>${formattedDate}</td>
            <td>${statusStylecc}</td>
            <td>${remarkCC}</td>
          <td>${statusStylebmm}</td>
         
          <td>${remarkBMM}</td>
             
            <td>${classVar}</td>
            <td>
              <input type="number" class="monthly-income-input form-control form-control-sm" data-user-id="${userData.id}" value="${incomeVar}">
            </td>
            <td>
              <input type="text" value="${submittedAnswer?.suggestion_remarks}" class="remark-input form-control form-control-sm" data-user-id="${userData.id}">
            </td>
            <td class="text-center">
              <span><a href="#" class="update-monthly-income-btn disabled" data-user-id="${userData.id}">
              <button class="btn datatable-button" style="width: max-content;" disabled>अपडेट करा</button>
              </a></span>
            </td>
          </tr>
        `;

        tableData.innerHTML += row;
      });
    });

   const inputFields = document.querySelectorAll('.monthly-income-input, .remark-input');
    inputFields.forEach(field => {
      field.addEventListener('input', () => {
        const row = field.closest('tr'); 
        const updateButton = row.querySelector('.update-monthly-income-btn');
        if (updateButton) {
          updateButton.classList.remove('disabled');
          updateButton.querySelector('button').removeAttribute('disabled');
        }
      });
    });

    const updateButtons = document.querySelectorAll(".update-monthly-income-btn");
    updateButtons.forEach((button) => {
      button.addEventListener("click", async () => {
        const userId = button.getAttribute("data-user-id");
        const newMonthlyIncome = document.querySelector(
          `.monthly-income-input[data-user-id="${userId}"]`
        ).value;
        const remark = document.querySelector(
          `.remark-input[data-user-id="${userId}"]`
        ).value;
        try {
          await updateMonthlyIncome(userId, newMonthlyIncome, remark);
         alert("Monthly income updated successfully!");
          await ListMonthlyInccomeReport();
        } catch (error) {
          console.error("Error updating monthly income:", error);
        }
      });
    });
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
};

const updateMonthlyIncome = async (userId, newMonthlyIncome, remark) => {
  try {
    // Log the values before updating
    console.log("Updating monthly income for user ID:", userId);
    console.log("New monthly income:", newMonthlyIncome);
    console.log("Remark:", remark);

    // Prepare the payload
    const payload = {
      monthly_income: newMonthlyIncome,
      suggestion_remarks: remark,
    };

    const response = await evaluationApi.update(userId, payload);

    console.log("Monthly income updated successfully!");
    console.log("Response:", response); // Log the response from the API
  } catch (error) {
    console.error("Error updating monthly income:", error);
  }
};

const lastMonthReport = async () => {
  try {
    // Fetch data
    const { data } = await listMonthlyReportApi.getAllMulyamapan();

    // Find table element
    const tableData = document.querySelector("#krushiSakhiList");

    // Clear existing table content
    tableData.innerHTML = "";

    // Calculate total count of data entries
    const totalCount = data.reduce((count, item) => count + item.length, 0);

    // Initialize row counter
    let rowNumber = 1;

    // Generate table rows
    data.forEach((item, i) => {
      item.forEach((innerItem, j) => {
        const userData = innerItem.user_data;
        const submittedAnswer = innerItem.submitted_answer;
        const classVar = submittedAnswer.class ? submittedAnswer.class : " - ";
        // Construct HTML row
        const row = `
          <tr>
            <td>${rowNumber++}</td>
            <td>${userData.f_name} ${userData.m_name} ${userData.l_name}</td>
            <td>${userData.role_name}</td>
            <td>${classVar}</td>
            
          </tr>
        `;

        // Append row to table
        tableData.innerHTML += row;
      });
    });
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
};




// const ListMonthlyInccomeReport = async () => {
//   try {
//     const { data } = await listMonthlyReportApi.getAllMulyamapan();
//     const tableData = document.querySelector("#monthlyReportsList");
//     tableData.innerHTML = "";
//     const totalCount = data.reduce((count, item) => count + item.length, 0);
//     let rowNumber = 1;

//     // Get the current date
//     const currentDate = new Date();
//     const currentDay = currentDate.getDate();
//     const isUpdateAllowed = currentDay >= 28 || currentDay <= 5;

//     data.forEach((item, i) => {
//       item.forEach((innerItem, j) => {
//         const userData = innerItem.user_data;
//         const submittedAnswer = innerItem?.submitted_answer;
//         const classVar = submittedAnswer.class ? submittedAnswer.class : " - ";
//         const incomeVar = submittedAnswer.monthly_income
//           ? submittedAnswer.monthly_income
//           : " - ";

//         const row = `
//           <tr>
//             <td>${rowNumber++}</td>
//             <td>${userData.f_name} ${userData.m_name} ${userData.l_name}</td>
//             <td>${userData.role_name}</td>
//             <td>${submittedAnswer.remark}</td>
//             <td>${classVar}</td>
//             <td>
//               <input type="number" class="monthly-income-input form-control form-control-sm" data-user-id="${userData.id}" value="${incomeVar}" ${!isUpdateAllowed ? 'disabled' : ''}>
//             </td>
//             <td>
//               <input type="text" value="${submittedAnswer?.suggestion_remarks}" class="remark-input form-control form-control-sm" data-user-id="${userData.id}" ${!isUpdateAllowed ? 'disabled' : ''}>
//             </td>
//             <td class="text-center">
//               <span><a href="#" class="update-monthly-income-btn disabled" data-user-id="${userData.id}">
//               <button class="btn datatable-button" style="width: max-content;" disabled>अपडेट करा</button>
//               </a></span>
//             </td>
//           </tr>
//         `;

//         tableData.innerHTML += row;
//       });
//     });

//     const inputFields = document.querySelectorAll('.monthly-income-input, .remark-input');
//     inputFields.forEach(field => {
//       if (isUpdateAllowed) {
//         field.addEventListener('input', () => {
//           const row = field.closest('tr'); 
//           const updateButton = row.querySelector('.update-monthly-income-btn');
//           if (updateButton) {
//             updateButton.classList.remove('disabled');
//             updateButton.querySelector('button').removeAttribute('disabled');
//           }
//         });
//       } else {
//         field.addEventListener('click', () => {
//           alert("You can only update this between 28 to 5 in a month");
//         });
//       }
//     });

//     const updateButtons = document.querySelectorAll(".update-monthly-income-btn");
//     updateButtons.forEach((button) => {
//       button.addEventListener("click", async (event) => {
//         event.preventDefault();
//         if (!isUpdateAllowed) {
//           alert("You can only update this between 28 to 5 in a month");
//           return;
//         }
//         const userId = button.getAttribute("data-user-id");
//         const newMonthlyIncome = document.querySelector(
//           `.monthly-income-input[data-user-id="${userId}"]`
//         ).value;
//         const remark = document.querySelector(
//           `.remark-input[data-user-id="${userId}"]`
//         ).value;
//         try {
//           await updateMonthlyIncome(userId, newMonthlyIncome, remark);
//           alert("Monthly income updated successfully!");
//           await ListMonthlyInccomeReport();
//         } catch (error) {
//           console.error("Error updating monthly income:", error);
//         }
//       });
//     });
//   } catch (error) {
//     console.error("Error fetching or processing data:", error);
//   }
// };

// const updateMonthlyIncome = async (userId, newMonthlyIncome, remark) => {
//   try {
//     // Log the values before updating
//     console.log("Updating monthly income for user ID:", userId);
//     console.log("New monthly income:", newMonthlyIncome);
//     console.log("Remark:", remark);

//     // Prepare the payload
//     const payload = {
//       monthly_income: newMonthlyIncome,
//       suggestion_remarks: remark,
//     };

//     const response = await evaluationApi.update(userId, payload);

//     console.log("Monthly income updated successfully!");
//     console.log("Response:", response); // Log the response from the API
//   } catch (error) {
//     console.error("Error updating monthly income:", error);
//   }
// };

// const lastMonthReport = async () => {
//   try {
//     // Fetch data
//     const { data } = await listMonthlyReportApi.getAllMulyamapan();

//     // Find table element
//     const tableData = document.querySelector("#krushiSakhiList");

//     // Clear existing table content
//     tableData.innerHTML = "";

//     // Calculate total count of data entries
//     const totalCount = data.reduce((count, item) => count + item.length, 0);

//     // Initialize row counter
//     let rowNumber = 1;

//     // Generate table rows
//     data.forEach((item, i) => {
//       item.forEach((innerItem, j) => {
//         const userData = innerItem.user_data;
//         const submittedAnswer = innerItem.submitted_answer;
//         const classVar = submittedAnswer.class ? submittedAnswer.class : " - ";
//         // Construct HTML row
//         const row = `
//           <tr>
//             <td>${rowNumber++}</td>
//             <td>${userData.f_name} ${userData.m_name} ${userData.l_name}</td>
//             <td>${userData.role_name}</td>
//             <td>${classVar}</td>
//           </tr>
//         `;

//         // Append row to table
//         tableData.innerHTML += row;
//       });
//     });
//   } catch (error) {
//     console.error("Error fetching or processing data:", error);
//   }
// };





// const ListMonthlyInccomeReport = async () => {
//   try {
//     const { data } = await listMonthlyReportApi.getAllMulyamapan();
//     const tableData = document.querySelector("#monthlyReportsList");
//     tableData.innerHTML = "";
//     const totalCount = data.reduce((count, item) => count + item.length, 0);
//     let rowNumber = 1;

//     // Get the current date
//     const currentDate = new Date();
//     const currentDay = currentDate.getDate();
//     const isUpdateAllowed = currentDay >= 28 || currentDay <= 5;

//     data.forEach((item, i) => {
//       item.forEach((innerItem, j) => {
//         const userData = innerItem.user_data;
//         const submittedAnswer = innerItem?.submitted_answer;
//         const classVar = submittedAnswer.class ? submittedAnswer.class : " - ";
//         const incomeVar = submittedAnswer.monthly_income
//           ? submittedAnswer.monthly_income
//           : " - ";

//         const row = `
//           <tr>
//             <td>${rowNumber++}</td>
//             <td>${userData.f_name} ${userData.m_name} ${userData.l_name}</td>
//             <td>${userData.role_name}</td>
//             <td>${submittedAnswer.remark}</td>
//             <td>${classVar}</td>
//             <td>
//               <input type="number" class="monthly-income-input form-control form-control-sm" data-user-id="${userData.id}" value="${incomeVar}" ${!isUpdateAllowed ? 'disabled' : ''}>
//             </td>
//             <td>
//               <input type="text" value="${submittedAnswer?.suggestion_remarks}" class="remark-input form-control form-control-sm" data-user-id="${userData.id}" ${!isUpdateAllowed ? 'disabled' : ''}>
//             </td>
//             <td class="text-center">
//               <span><a href="#" class="update-monthly-income-btn disabled" data-user-id="${userData.id}">
//               <button class="btn datatable-button" style="width: max-content;" disabled>अपडेट करा</button>
//               </a></span>
//             </td>
//           </tr>
//         `;

//         tableData.innerHTML += row;
//       });
//     });

//     if (isUpdateAllowed) {
//       const inputFields = document.querySelectorAll('.monthly-income-input, .remark-input');
//       inputFields.forEach(field => {
//         field.addEventListener('input', () => {
//           const row = field.closest('tr'); 
//           const updateButton = row.querySelector('.update-monthly-income-btn');
//           if (updateButton) {
//             updateButton.classList.remove('disabled');
//             updateButton.querySelector('button').removeAttribute('disabled');
//           }
//         });
//       });

//       const updateButtons = document.querySelectorAll(".update-monthly-income-btn");
//       updateButtons.forEach((button) => {
//         button.addEventListener("click", async (event) => {
//           event.preventDefault();
//           const userId = button.getAttribute("data-user-id");
//           const newMonthlyIncome = document.querySelector(
//             `.monthly-income-input[data-user-id="${userId}"]`
//           ).value;
//           const remark = document.querySelector(
//             `.remark-input[data-user-id="${userId}"]`
//           ).value;
//           try {
//             await updateMonthlyIncome(userId, newMonthlyIncome, remark);
//             alert("Monthly income updated successfully!");
//             await ListMonthlyInccomeReport();
//           } catch (error) {
//             console.error("Error updating monthly income:", error);
//           }
//         });
//       });
//     }
//   } catch (error) {
//     console.error("Error fetching or processing data:", error);
//   }
// };

// const updateMonthlyIncome = async (userId, newMonthlyIncome, remark) => {
//   try {
//     // Log the values before updating
//     console.log("Updating monthly income for user ID:", userId);
//     console.log("New monthly income:", newMonthlyIncome);
//     console.log("Remark:", remark);

//     // Prepare the payload
//     const payload = {
//       monthly_income: newMonthlyIncome,
//       suggestion_remarks: remark,
//     };

//     const response = await evaluationApi.update(userId, payload);

//     console.log("Monthly income updated successfully!");
//     console.log("Response:", response); // Log the response from the API
//   } catch (error) {
//     console.error("Error updating monthly income:", error);
//   }
// };

// const lastMonthReport = async () => {
//   try {
//     // Fetch data
//     const { data } = await listMonthlyReportApi.getAllMulyamapan();

//     // Find table element
//     const tableData = document.querySelector("#krushiSakhiList");

//     // Clear existing table content
//     tableData.innerHTML = "";

//     // Calculate total count of data entries
//     const totalCount = data.reduce((count, item) => count + item.length, 0);

//     // Initialize row counter
//     let rowNumber = 1;

//     // Generate table rows
//     data.forEach((item, i) => {
//       item.forEach((innerItem, j) => {
//         const userData = innerItem.user_data;
//         const submittedAnswer = innerItem.submitted_answer;
//         const classVar = submittedAnswer.class ? submittedAnswer.class : " - ";
//         // Construct HTML row
//         const row = `
//           <tr>
//             <td>${rowNumber++}</td>
//             <td>${userData.f_name} ${userData.m_name} ${userData.l_name}</td>
//             <td>${userData.role_name}</td>
//             <td>${classVar}</td>
            
//           </tr>
//         `;

//         // Append row to table
//         tableData.innerHTML += row;
//       });
//     });
//   } catch (error) {
//     console.error("Error fetching or processing data:", error);
//   }
// };


