const ListLastMonthReport = async (
  stateCode,
  districtCode,
  blockCode,
  clusterId,
  month,
  year
) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;
  const listUserData = document.querySelector("#lastMonthReportsList");

  // Clear existing content before fetching new data
  listUserData.innerHTML = "";

  let data;

  try {
    if (stateCode && districtCode && blockCode && clusterId && month && year) {
      data = await evaluationApi.GetLastMonthEvaluation(
        stateCode,
        districtCode,
        blockCode,
        clusterId,
        month,
        year
      );
    } else if (stateCode && districtCode && blockCode && month && year) {
      data = await evaluationApi.GetLastMonthEvaluationSDBMY(
        stateCode,
        districtCode,
        blockCode,
        month,
        year
      );
    } else if (stateCode && districtCode && month && year) {
      data = await evaluationApi.GetLastMonthEvaluationSDMY(
        stateCode,
        districtCode,
        month,
        year
      );
    } else {
      listUserData.innerHTML =
        "<tr><td colspan='4' class='text-center'>No data available</td></tr>";
      return;
    }

    const {
      KrushisakhiMandhanSubmitedAnswers,
      PashuSakhiMandhanSubmitedAnswers,
      CTCAhwalSubmitedAnswers,
      ICRPSubmitedAnswers,
      FICRPSubmitedAnswers,
      BanksakhiSubmitedAnswers,
    } = data || {};

    let index = 1;

    const displayData = (entries) => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const userData = entry.userData;

        const tr = `
                  <tr>
                      <td>${index++}</td>
                      <td><a href="employeeDetailsDashboard.php?id=${
                        userData?.id
                      }">${userData?.f_name} ${userData?.m_name} ${
          userData?.l_name
        }</a></td>
                      <td>${userData?.role_name}</td>
                      <td>${userData?.cluster_name}</td>
                  </tr>`;
        listUserData.insertAdjacentHTML("beforeend", tr);
      }
    };

    displayData(KrushisakhiMandhanSubmitedAnswers || []);
    displayData(PashuSakhiMandhanSubmitedAnswers || []);
    displayData(CTCAhwalSubmitedAnswers || []);
    displayData(ICRPSubmitedAnswers || []);
    displayData(FICRPSubmitedAnswers || []);
    displayData(BanksakhiSubmitedAnswers || []);

    if (!listUserData.innerHTML) {
      listUserData.innerHTML =
        "<tr><td colspan='4' class='text-center'>No data available</td></tr>";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    listUserData.innerHTML =
      "<tr><td colspan='4' class='text-center'>An error occurred while fetching data</td></tr>";
  }
};
