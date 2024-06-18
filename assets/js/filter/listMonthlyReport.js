const listMonthlyReport = () => {
  const { data } = listMonthlyReportApi.get();
  console.log(data, "dataaa");
  const listUserData = document.querySelector("#monthlyReportsList");

  if (data && data.length > 0) {
    const trList = data.map((report, i) => {
      // Extracting filename from the file path
      const fileName = report.file_upload.split("/").pop();

      return `
          <tr>
            <td>${i + 1}</td>
            <td><a href="${
              report.file_upload
            }" target="_blank">${fileName}</a></td>
            <td>${report.remark}</td>
            <td>${report.created_at}</td>
            <td class="text-center">
              <a href="${report.file_upload}" target="_blank">
                <i class="fas fa-download mr-3 text-primary"></i>
              </a>
              <a href="frm-register_user.php?id=${report.user_id}">
                <i class="fas fa-edit mr-3 text-primary"></i>
              </a>
              <a id="deleteUser-${report.user_id}">
                <i class="fas fa-trash text-danger mr-1"></i>
              </a>
            </td>
          </tr>`;
    });

    listUserData.innerHTML = trList.join("");
  } else {
    listUserData.innerHTML =
      "<tr><td colspan='6' class='text-center'>No data available</td></tr>";
  }

  data?.forEach((report) => {
    const deleteButton = document.querySelector(
      `#deleteUser-${report.user_id}`
    );
    if (!deleteButton) return; // Skip if delete button not found
    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();
      const isConfirmed = confirm(
        "Are you sure you want to delete this report?"
      );
      if (!isConfirmed) return;

      listMonthlyReportApi
        .delete(report.id)
        .then((response) => {
          if (response.status === 200) {
            console.log("report deleted:", response);
            // Remove the row from the table
            deleteButton.closest("tr").remove();
            alert("report deleted successfully!");
          } else {
            console.error("Failed to delete report:", response.error);
            alert("Failed to delete report. Please try again later.");
          }
        })
        .catch((error) => {
          console.error("Error occurred while deleting report:", error);
          alert(
            "An error occurred while deleting report. Please try again later."
          );
        });
    });
  });
};
