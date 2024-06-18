const electionListByCluster = (
  stateCode,
  districtCode,
  blockCode,
  clusterId
) => {
  const data = ElectionApi.GetByCluster(
    stateCode,
    districtCode,
    blockCode,
    clusterId
  );
  console.log(data, "data by cluster for election");
  const electionTable = document.querySelector("#electionReportsList");
  const trList = data.map((item, i) => {
    const election = item.election_report_data;

    const user = item.user_data;
    const images =
      election.election_images && election.election_images !== "undefined"
        ? JSON.parse(election.election_images)
        : [];
    const imagesHtml = images
      .map(
        (image) =>
          `<img src="${image}" alt="Election Image" style="max-width: 100px; max-height: 100px;">`
      )
      .join("");
    return `
            <tr>
                <td>${i + 1}</td>
                <td>${election?.created_at}</td>
                <td>${user?.f_name} ${user?.m_name} ${user?.l_name}</td>
                <td>${user?.role_name}</td>
                <td>${user?.cluster_name}</td>
                <td>${imagesHtml}</td>
            </tr>
        `;
  });
  electionTable.innerHTML = trList.join("");
};
