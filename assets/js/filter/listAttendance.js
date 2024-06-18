// const listAttendance = () => {
//   const currentDate = new Date();
//   const formattedDate = currentDate.toISOString().split("T")[0];

//   const { data } = AttendanceApi.ListByCurrentDate(formattedDate);
//   const userData = JSON.parse(localStorage.getItem("user"));
//   // console.log("User Data:", userData);
//   // console.log("User Role:", userData?.role);
//   const listAttendanceData = document.querySelector("#attendanceList");
//   const { data: details } = AttendanceApi.ListByUser(userData?.id);
//   console.log(details, "user det");

//   if ((userData?.role == 23, 1, 2, 3, 4, 5, 6, 7, 8)) {
//     console.log("show all");
//     const { data } = AttendanceApi.ListByCurrentDate(formattedDate);
//     if (data && data.length > 0) {
//       const trList = data.map((attendance, i) => {
//              return `
//           <tr>
//             <td>${i + 1}</td>
//             <td>${attendance?.login_info?.date}</td>
//             <td>${attendance?.userData?.f_name} ${
//           attendance?.userData?.m_name
//         } ${attendance?.userData?.l_name}</td>
//             <td>${attendance?.login_info?.login_location}</td>
//             <td>${attendance?.role_name}</td>
//             <td>${attendance?.login_info?.login_time}</td>
//             <td>${attendance?.userData?.cluster_name ? attendance?.userData?.cluster_name : ""}</td>
//             <td>${attendance?.logout_info?.logout_location}</td>
//             <td>${attendance?.logout_info?.logout_time} </td>
//           </tr>`;
//       });
//       listAttendanceData.innerHTML = trList.join("");
//     } else {
//       listAttendanceData.innerHTML =
//         "<tr><td colspan='7' class='text-center'>No data available</td></tr>";
//     }
//   } else if ((userData?.role == 13, 14, 15, 16, 17, 18, 19, 20, 21, 22)) {
//     console.log("show user only");
//     const { data: details } = AttendanceApi.ListByUser(userData.id);
//     console.log(userData.id, "userData.id");
//     console.log(details, "user det");

//     if (details && details.length > 0) {
//       const trList = details.map((attendance, i) => {
//         return `
//           <tr>
//             <td>${i + 1}</td>
//             <td>${attendance?.date}</td>
//             <td>${attendance?.userdata?.f_name} ${
//           attendance?.userdata?.m_name
//         } ${attendance?.userdata?.l_name}</td>
//             <td>${attendance?.login_location}</td>
//             <td>${attendance?.role_name}</td>
//             <td>${attendance?.login_time}</td>
//             <td>${attendance?.userData?.cluster_name ? attendance?.userData?.cluster_name : ""}</td>
//           </tr>`;
//       });
//       listAttendanceData.innerHTML = trList.join("");
//     } else {
//       listAttendanceData.innerHTML =
//         "<tr><td colspan='7' class='text-center'>No data available</td></tr>";
//     }
//   } else {
//     console.log("no data");
//   }
// };
// const all = () => {
//   const { data } = AttendanceApi.ListAll();
//   const listAttendanceData = document.querySelector("#attendanceList");
//   const trList = data.map((attendance, i) => {
//     return `
//             <tr>
//               <td>${i + 1}</td>
//               <td>${attendance?.login_info?.date}</td>

//               <td>${attendance?.user_Data?.f_name} ${
//       attendance?.user_Data?.m_name
//     } ${attendance?.user_Data?.l_name}</td>
//               <td>${attendance?.login_info?.login_location}</td>
//               <td>${attendance?.role_name}</td>
//               <td>${attendance?.login_info?.login_time}</td>
//               <td>${
//                 attendance?.user_Data?.cluster_name
//                   ? attendance?.user_Data?.cluster_name
//                   : ""
//               }</td>
//               <td>${attendance?.logout_info?.logout_location}</td>
//               <td>${attendance?.logout_info?.logout_time} </td>
//             </tr>`;
//   });
//   listAttendanceData.innerHTML = trList.join("");
// };

const all = async () => {
  // Get the current date and format it as "YYYY-MM-DD"
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  // Fetch the attendance data using the formatted date
  const { data } = await AttendanceApi.ListByCurrentDate(formattedDate);

  // Get the DOM element to update
  const listAttendanceData = document.querySelector("#attendanceList");

  // Map the attendance data to HTML table rows
  const trList = data.map((attendance, i) => {
    return `
      <tr>
        <td>${i + 1}</td>
        <td>${attendance?.login_info?.date}</td>
        <td>${attendance?.userData?.f_name} ${
      attendance?.userData?.m_name || ""
    } ${attendance?.userData?.l_name}</td>
        <td>${attendance?.login_info?.login_location}</td>
        <td>${attendance?.role_name}</td>
        <td>${attendance?.login_info?.login_time}</td>
        <td>${attendance?.userData?.cluster_name || ""}</td>
        <td>${attendance?.logout_info?.logout_location || ""}</td>
        <td>${attendance?.logout_info?.logout_time || ""}</td>
      </tr>`;
  });

  // Update the inner HTML of the table with the generated rows
  listAttendanceData.innerHTML = trList.join("");
};

const listTodaysAttendance = async (todayDate) => {
  console.log("listTodaysAttendancelistTodaysAttendance");
  const user = JSON.parse(localStorage.getItem("user"));
  const { data } = await AttendanceApi.ListByCurrentDate(todayDate);
  console.log(data, "datadata");
  const listAttendanceData = document.querySelector("#attendanceList");

  if (data && data.length > 0) {
    const trList = data.map((attendance, i) => {
      return `
              <tr>
                <td>${i + 1}</td>
                <td>${attendance?.login_info?.date}</td>
                <td>${attendance?.userData?.f_name} ${
        attendance?.userData?.m_name
      } ${attendance?.userData?.l_name}</td>
                <td>${attendance?.login_info?.login_location}</td>
                <td>${attendance?.role_name}</td>
                <td>${attendance?.login_info?.login_time}</td>
                <td>${
                  attendance?.userData?.cluster_name
                    ? attendance?.userData?.cluster_name
                    : ""
                }</td>
                <td>${attendance?.logout_info?.logout_location}</td>
                <td>${attendance?.logout_info?.logout_time} </td>
              </tr>`;
    });
    listAttendanceData.innerHTML = trList.join("");
  } else {
    listAttendanceData.innerHTML =
      "<tr><td colspan='9' class='text-center'>No data available</td></tr>";
  }
};

const listAttendance = async (
  stateCode,
  districtCode,
  blockCode,
  clusterId,
  selectedDate
) => {
  let response;

  const user = JSON.parse(localStorage.getItem("user"));
  if(stateCode && districtCode && blockCode && clusterId && selectedDate){
   response = await AttendanceApi.ListAttendaceByFilter(
      stateCode,
      districtCode,
      blockCode,
      clusterId,
      selectedDate
    );
  }else if(stateCode && districtCode && blockCode &&clusterId){
    response = await AttendanceApi.ListAttendaceByCluster(
      stateCode,
      districtCode,
      blockCode,
      clusterId
    );
  } else if(stateCode && districtCode && blockCode &&selectedDate){
    response = await AttendanceApi.ListAttendaceByBlockByDate(
      stateCode,
      districtCode,
      blockCode,
      selectedDate
    );
  }
  else if(stateCode && districtCode && blockCode){
    response = await AttendanceApi.ListAttendaceByBlock(
      stateCode,
      districtCode,
      blockCode
    );
  }else if(stateCode && districtCode &&selectedDate){
    response = await AttendanceApi.ListAttendaceByDistrictByDate(
      stateCode,
      districtCode,
      selectedDate
    );
  }else if(stateCode && districtCode){
    response = await AttendanceApi.ListAttendaceByDistrict(
      stateCode,
      districtCode,
    );
  }
  // const { data } = await AttendanceApi.ListAttendaceByFilter(
  //   stateCode,
  //   districtCode,
  //   blockCode,
  //   clusterId,
  //   selectedDate
  // );
  const data = response?.data || [];
  console.log(data, "datadatalistAttendance");
  const listAttendanceData = document.querySelector("#attendanceList");

  if (data.length > 0) {
    const trList = data.map((item, i) => {
      const datedata = item.login_info?.login_time
      const dateObject = new Date(datedata); 
      const dateOnly = dateObject.toISOString().split('T')[0];
      const timeOnly = `${('0' + dateObject.getHours()).slice(-2)}:${('0' + dateObject.getMinutes()).slice(-2)}:${('0' + dateObject.getSeconds()).slice(-2)}`;

        
      return `
        <tr>
          <td>${i + 1}</td>
          <td>${dateOnly || ''}</td>
          <td>${item.userData?.f_name || ''} ${item.userData?.m_name || ''} ${item.userData?.l_name || ''}</td>
          <td>${item.login_info?.login_location || ''}</td>
          <td>${item.role_name || ''}</td>
          <td>${timeOnly || ''}</td>
          <td>${item.userData?.cluster_name || ''}</td>
          <td>${item.logout_info?.logout_location || ''}</td>
          <td>${item.logout_info?.logout_time || ''}</td>
        </tr>`;
    });
    listAttendanceData.innerHTML = trList.join("");
  } else {
    listAttendanceData.innerHTML =
      "<tr><td colspan='9' class='text-center'>No data available</td></tr>";
  }
};