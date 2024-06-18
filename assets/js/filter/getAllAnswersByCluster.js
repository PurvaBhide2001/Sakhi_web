const getAllAnswersByCluster = (
  stateCode,
  districtCode,
  blockCode,
  clusterId
) => {
  const { data } = evaluationApi.getAllAnswersByClusterApi(
    stateCode,
    districtCode,
    blockCode,
    clusterId
  );
  console.log(data, "filter cluster");

  const tableBodyKrushi = document.getElementById("krushiSakhiList");
  const tableBodyICRP = document.getElementById("ICRPList");
  const tableBodyPashu = document.getElementById("pashuSakhiReportsList");
  const tableBodyBank = document.getElementById("BankSakhiList");
  const tableBodyFICRP = document.getElementById("FIRCPSakhiList");
  const tableBodyCTC = document.getElementById("CTCList");

  if (tableBodyKrushi) {
    tableBodyKrushi.innerHTML = "";
    data.forEach((item, index) => {
      const userData = item.user_data;
      console.log(userData, "userData id");
      const fullName = `${userData.f_name} ${userData.m_name} ${userData.l_name}`;
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${index + 1}</td>
            <td><a href="employeeDetailsDashboard.php?id=${
              userData.id
            }">${fullName}</a></td>
            <td>${userData.role_name}</td>
        `;
      tableBodyKrushi.appendChild(row);
    });
  } else if (tableBodyICRP) {
    tableBodyICRP.innerHTML = "";
    data.forEach((item, index) => {
      const userData = item.user_data;
      const fullName = `${userData.f_name} ${userData.m_name} ${userData.l_name}`;
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${index + 1}</td>
            <td><a href="employeeDetailsDashboard.php?id=${
              userData.id
            }">${fullName}</a></td>
            <td>${userData.role_name}</td>
           
        `;
      tableBodyICRP.appendChild(row);
    });
  } else if (tableBodyPashu) {
    tableBodyPashu.innerHTML = "";
    data.forEach((item, index) => {
      const userData = item.user_data;

      const fullName = `${userData.f_name} ${userData.m_name} ${userData.l_name}`;
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${index + 1}</td>
            <td><a href="employeeDetailsDashboard.php?id=${
              userData.id
            }">${fullName}</a></td>
            <td>${userData.role_name}</td>            
        `;
      tableBodyPashu.appendChild(row);
    });
  } else if (tableBodyBank) {
    tableBodyBank.innerHTML = "";
    data.forEach((item, index) => {
      const userData = item.user_data;
      const fullName = `${userData.f_name} ${userData.m_name} ${userData.l_name}`;
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${index + 1}</td>
            <td><a href="employeeDetailsDashboard.php?id=${
              userData.id
            }">${fullName}</a></td>
            <td>${userData.role_name}</td>
        `;
      tableBodyBank.appendChild(row);
    });
  } else if (tableBodyFICRP) {
    tableBodyFICRP.innerHTML = "";
    data.forEach((item, index) => {
      const userData = item.user_data;
      const fullName = `${userData.f_name} ${userData.m_name} ${userData.l_name}`;
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${index + 1}</td>
            <td><a href="employeeDetailsDashboard.php?id=${
              userData.id
            }">${fullName}</a></td>
            <td>${userData.role_name}</td>
          
            
        `;
      tableBodyFICRP.appendChild(row);
    });
  } else if (tableBodyCTC) {
    tableBodyCTC.innerHTML = "";
    data.forEach((item, index) => {
      const userData = item.user_data;
      const fullName = `${userData.f_name} ${userData.m_name} ${userData.l_name}`;
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${index + 1}</td>
            <td><a href="employeeDetailsDashboard.php?id=${
              userData.id
            }">${fullName}</a></td>
            <td>${userData.role_name}</td>
          
            
        `;
      tableBodyCTC.appendChild(row);
    });
  } else {
    // Handle unknown clusterId or default case
    console.error("Unknown clusterId:", clusterId);
  }
};
