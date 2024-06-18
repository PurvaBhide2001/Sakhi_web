function roleWiseReport() {
  // Retrieve user data from localStorage
  const userData = localStorage.getItem("user");

  // Check if userData exists
  if (userData) {
    // Parse the userData string to convert it back to an object
    const parsedUserData = JSON.parse(userData);

    // Retrieve the user's role
    const userRole = parsedUserData.role;
    console.log(userRole, "userRole");
    // Navigate based on the user's role
    if (userRole === "18") {
      // Role 18 navigation (example)
      window.location.href = "./frm-pashu-sakhi-evaluation.php";
    } else if (userRole === "17") {
      // Role 17 navigation (example)
      window.location.href = "./frm-krushi-sakhi-evaluation.php";
    } else if (userRole === "19") {
      // Role 17 navigation (example)
      window.location.href = "./frm-CTC-evaluation.php";
    } else if (userRole === "20") {
      // Role 17 navigation (example)
      window.location.href = "./frm-FICRP-evaluation.php";
    } else if (userRole === "21") {
      // Role 17 navigation (example)
      window.location.href = "./frm-bank-sakhi-evalutaion.php";
    } else if (userRole === "22") {
      // Role 17 navigation (example)
      window.location.href = "./frm-ICRP-evaluation.php";
    } else {
      window.location.href = "./frm-pashu-sakhi-evaluation.php";
      // Default navigation or error handling
      console.log("Unknown user role");
    }
  } else {
    console.log("User data not found in localStorage");
  }
}
const dashboardGetUserCount = () => {
  const { data } = DashboardApi.GetUserStats();

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  const response = DashboardApi.countbycurrentdate(formattedDate);
  const res = DashboardApi.dailyReportByCurrentDate(formattedDate);
  const resp = DashboardApi.monthlyReportByCurrentDate(formattedDate);
  console.log(resp, "monthly");
  console.log(resp?.total_monthlyreportsCount_for_specified_month);
  const userCountContainer = document.querySelector("#userCount");

  if (data && data.user_count) {
    userCountContainer.innerHTML = `
     <div class="col-lg-3 col-6">
        <div class="small-box bg-info">
          <div class="inner">
            <h3>${data.user_count}</h3>
            <p>एकूण कर्मचारी संख्या</p>
          </div>
          <div class="icon">
            <i class="fa fa-users"></i>
          </div>
        </div>
     </div>
     <div class="col-lg-3 col-6">
        <div class="small-box bg-danger">
          <div class="inner">
            <h3>${response?.total_user_login_on_current_date}</h3>
            <p>कार्यरत कर्मचारी संख्या </p>
          </div>
          <div class="icon">
            <i class="fa fa-user-circle"></i>
          </div>
        </div>
     </div>


     <div class="col-lg-3 col-6">
     <!-- small box -->
     <div class="small-box bg-success">
       <div class="inner">
         <h3>${res?.total_dailyworkreportCount_on_current_date}<sup style="font-size: 20px"></sup></h3>
         <p>एकूण दैनंदिन कामाचा अहवाल </p>
       </div>
       <div class="icon">
         <!-- <i class="ion ion-stats-bars"></i> -->
         <i class="fa fa-calendar-check-o"></i>
       </div>
     </div>
   </div> 

   <div class="col-lg-3 col-6">
   <!-- small box -->
   <div class="small-box bg-yellow">
       <div class="inner text-white">
           <h3 class="">${resp?.total_monthlyreportsCount_for_specified_month}</h3>
           <p>एकूण मासिक कामाचा अहवाल</p>
       </div>
       <div class="icon">
           <i class="fa fa-calendar"></i>
       </div>
   </div>
</div>
     `;
  } else {
    userCountContainer.innerHTML = `<p>No data available</p>`;
  }
};
