let fileUrl;
document.querySelector(`#file_upload`).addEventListener("change", (e) => {
  console.log("file url", e.target.files[0]);
  fileUrl = uploadImageaApi(e.target.files[0]);
  fileUrl = JSON.parse(fileUrl).url;
  console.log("fileUrl", fileUrl);
});

const registerMonthlyReport = async () => {
  try {
    document.querySelector("#submit").addEventListener("click", async (e) => {
      e.preventDefault();

      const formData = new FormData(document.getElementById("userFormData"));

      formData.set("file_upload", fileUrl);

      const payload = {};
      formData.forEach((value, key) => {
        payload[key] = value;
      });

      console.log("Payload:", payload);

      const { data: res, status } = await listMonthlyReportApi.register(
        payload
      );
      console.log(res);
      if (status === 200) {
        alert("Monthly work report registered successfully!");
        window.location.href = "list-monthly-report.php";
      } else {
        alert("Monthly work report registration failed. Please try again.");
      }
    });
  } catch (error) {
    console.error("Error occurred:", error);
    alert("An error occurred. Please try again later.");
  }
};
