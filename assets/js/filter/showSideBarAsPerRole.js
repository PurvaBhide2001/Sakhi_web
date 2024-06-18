const showSideBarAsPerRole = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const sideBar = document.querySelector("#sideBar");
  let listHtml;

  const { role, id } = user;
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  console.log(role, "role from sideb ar");
  if (role === "12" || role === "13" || role === "14" || role === "24") {
    listHtml = `
      <div class="user-panel mt-1    pb-1   mb-1  d-flex">
      <div class="image">
        <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
      </div>
      <div class="info">
        <a href="./employeeDetailsDashboard.php?id=${id}" class="d-block" id="user_login_name"></a>
      </div>
    </div>

    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar " data-widget="treeview" role="menu" data-accordion="false">

        <li class="nav-item " >
          <a href="./index.php" class="nav-link" id="dashbord-Create">
          <i class="fa-regular fa-grid-horizontal"></i>
          <span> <i class="bi bi-speedometer2 text-blue-icon"></i></span>
            &nbsp;&nbsp;&nbsp;
            <p>
              डॅशबोर्ड
            </p>
          </a>
        </li>

        <li class="nav-item" id="workReport-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-list-alt text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>
          दैनंदिन कामाचा अहवाल
            <i class="right fas fa-angle-left"></i>
          </p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-daily-work-report.php" class="nav-link" id="workrepoert-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p> दैनंदिन अहवाल समाविष्ट करा </p>
            </a>
          </li>
         
        </ul>
      </li>

    <li class="nav-item" id="user-menu">
    <a href="#" class="nav-link">
    <i class="fa fa-user text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
      यूजर
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
    <li class="nav-item active">
    <a href="./list-user.php" class="nav-link" id="user-Register">
      <i class="far fa-circle nav-icon text-warning"></i>
      <p> यूजर प्रशासक यादी </p>
    </a>
  </li>
      </ul>
    </li>

      <li class="nav-item" id="attendance-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-users text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
        उपस्थिती
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
            <i class="far fa-circle nav-icon text-danger"></i>
            <p>उपस्थिती नोंदवा </p>
          </a>
        </li>

      </ul>
    </li>
      <li class="nav-item" id="attendance-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-calendar text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
        मासिक अहवाल
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
      ${
        currentDay >= 25 && currentDay <= 30
          ? `
        <li class="nav-item active">
        <a href="./frm-pashu-sakhi-evaluation.php" class="nav-link" id="attendance-Register">
          <i class="far fa-circle nav-icon text-danger"></i>
          <p>पशु सखी मासिक अहवाल जोडा </p>
        </a>
      </li>
      <li class="nav-item active">
        <a href="./frm-krushi-sakhi-evaluation.php" class="nav-link" id="attendance-Register">
          <i class="far fa-circle nav-icon text-danger"></i>
          <p>कृषी सखी मासिक अहवाल जोडा </p>
        </a>
      </li>
      <li class="nav-item active">
        <a href="./frm-bank-sakhi-evalutaion.php" class="nav-link" id="attendance-Register">
          <i class="far fa-circle nav-icon text-danger"></i>
          <p>बँक सखी मासिक अहवाल जोडा </p>
        </a>
      </li>

      <li class="nav-item active">
        <a href="./frm-FICRP-evaluation.php" class="nav-link" id="attendance-Register">
          <i class="far fa-circle nav-icon text-danger"></i>
          <p>आर्थिक साक्षरता सखी मासिक अहवाल जोडा </p>
        </a>
      </li>
      <li class="nav-item active">
      <a href="./frm-ICRP-evaluation.php" class="nav-link" id="attendance-Register">
        <i class="far fa-circle nav-icon text-danger"></i>
        <p>समुदाय संसाधन व्यक्ती मासिक अहवाल जोडा </p>
      </a>
    </li>

      <li class="nav-item active">
      <a href="./frm-CTC-evaluation.php" class="nav-link" id="attendance-Register">
        <i class="far fa-circle nav-icon text-danger"></i>
        <p>समुदाय स्थरीय प्रशिक्षण सल्लगार मासिक अहवाल जोडा </p>
      </a>
    </li>
    `
          : ""
      }
        <li class="nav-item active">
          <a href="./list-pashu-sakhi-evaluation.php" class="nav-link" id="attendance-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>पशु सखी मासिक अहवाल यादी</p>
          </a>
        </li>
        <li class="nav-item active">
          <a href="./list-krushi-sakhi-evaluation.php" class="nav-link" id="attendance-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>कृषी सखी मासिक अहवाल यादी</p>
          </a>
        </li>
        <li class="nav-item active">
        <a href="./list-bank-sakhi-evaluation.php" class="nav-link" id="attendance-list">
          <i class="far fa-circle nav-icon text-warning"></i>
          <p>बँक सखी मासिक अहवाल यादी</p>
        </a>
      </li>
      <li class="nav-item active">
        <a href="./list-FICRP-evaluation.php" class="nav-link" id="attendance-list">
          <i class="far fa-circle nav-icon text-warning"></i>
          <p>आर्थिक साक्षरता सखी मासिक अहवाल यादी</p>
        </a>
      </li>
      <li class="nav-item active">
        <a href="./list-icrp-evaluation.php" class="nav-link" id="attendance-list">
          <i class="far fa-circle nav-icon text-warning"></i>
          <p>समुदाय संसाधन व्यक्ती सखी मासिक अहवाल यादी</p>
        </a>
      </li>

      <li class="nav-item active">
      <a href="./list-CTC-evaluation.php" class="nav-link" id="attendance-list">
        <i class="far fa-circle nav-icon text-warning"></i>
        <p>समुदाय स्थरीय प्रशिक्षण सल्लगार मासिक अहवाल यादी</p>
      </a>
    </li>
      </ul>
    </li>
    </li>
      <li class="nav-item" id="attendance-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-bars text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
        मूल्यांकन
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">

        <li class="nav-item active">
          <a href="./list-monthly-report.php" class="nav-link" id="attendance-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>मूल्यांकन यादी</p>
          </a>
        </li>
        <li class="nav-item active">
          <a href="./list-montly-salary-report.php" class="nav-link" id="attendance-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>मासिक पगार मूल्यांकन</p>
          </a>
        </li>
      </ul>
    </li>
    <li class="nav-item" id="workReport-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-list-alt text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>
          मागील कामाचा अहवाल
            <i class="right fas fa-angle-left"></i>
          </p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-monthlyReport.php" class="nav-link" id="workreport-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>दैनंदिन मागील अहवाल यादी </p>
            </a>
          </li>
          <li class="nav-item active">
          <a href="./list-daily-report-monthwise.php" class="nav-link" id="workreport-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>मासिक मागील दैनंदिन अहवाल यादी </p>
          </a>
        </li>

          <li class="nav-item active">
          <a href="./list-last-month-evaluation.php" class="nav-link" id="workreport-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>मासिक मागील मूल्यांकन यादी </p>
          </a>
        </li>

        </ul>
      </li>
  
        <br>
      </ul>
    </nav>
    <hr>
    <div class="qr-code-wrapper">
    <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>

    <img src="./assets/img/qr_download.png" alt="" class="qr-code">
  </div>
    </div>
     `;
  } else if (role == "15" || role == "25" || role === "26" || role === "27") {
    listHtml = `
    <div class="user-panel mt-1    pb-1   mb-1  d-flex">
    <div class="image">
      <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
      <a href="#" class="d-block" id="user_login_name"></a>
    </div>
  </div>
  

  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar" data-widget="treeview" role="menu" data-accordion="false">

      <li class="nav-item " >
        <a href="./index.php" class="nav-link" id="dashbord-Create">
          <i class="fa-regular fa-grid-horizontal"></i>
          <span> <i class="bi bi-speedometer2 text-blue-icon"></i>
          </span>
          &nbsp;&nbsp;&nbsp;
          <p>
            डॅशबोर्ड
          </p>
        </a>
      </li>

   <li class="nav-item" id="attendance-menu">
      <a href="#" class="nav-link">
        <i class="bi bi-people text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
        उपस्थिती 
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
            <i class="far fa-circle nav-icon text-danger"></i>
            <p>उपस्थिती नोंदवा </p>
          </a>
        </li>
       
      </ul>
    </li>  
   
      <br>
      <br>
    </ul>
  </nav>
  </div>   
      `;
  } else if (role === "17") {
    listHtml = `
    <div class="user-panel mt-1    pb-1   mb-1  d-flex">
    <div class="image">
      <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
      <a href="./employeeDetailsDashboard.php?id=${id}" class="d-block" id="user_login_name"></a>
    </div>
  </div>
  

  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar " data-widget="treeview" role="menu" data-accordion="false">

      <li class="nav-item " >
        <a href="./index.php" class="nav-link" id="dashbord-Create">
        <i class="fa-regular fa-grid-horizontal"></i>
        <span> <i class="bi bi-speedometer2 text-blue-icon"></i></span>
          &nbsp;&nbsp;&nbsp;
          <p>
            डॅशबोर्ड
          </p>
        </a>
      </li>

      <li class="nav-item" id="workReport-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-list-alt text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
        दैनंदिन कामाचा अहवाल
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./frm-daily-work-report.php" class="nav-link" id="workrepoert-Register">
            <i class="far fa-circle nav-icon text-danger"></i>
            <p> दैनंदिन अहवाल समाविष्ट करा </p>
          </a>
        </li>
      </ul>
    </li>        

    <li class="nav-item" id="attendance-menu">
    <a href="#" class="nav-link">
      <i class="fa fa-users text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
      उपस्थिती 
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
      <li class="nav-item active">
        <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
          <i class="far fa-circle nav-icon text-danger"></i>
          <p>उपस्थिती नोंदवा </p>
        </a>
      </li>
    </ul>
  </li>   
  ${
    currentDay >= 25 && currentDay <= 30
      ? `     
    <li class="nav-item" id="attendance-menu">
    <a href="#" class="nav-link">
      <i class="fa fa-calendar text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
      मासिक अहवाल 
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
   
    <li class="nav-item active">
    <a href="./frm-krushi-sakhi-evaluation.php" class="nav-link" id="attendance-Register">
      <i class="far fa-circle nav-icon text-danger"></i>
      <p>कृषी सखी मासिक अहवाल जोडा </p>
    </a>
  </li>
  `
      : ""
  }
    </ul>  
        
      <br>
      <br>
    </ul>
  </nav>     
  <hr>
  <div class="qr-code-wrapper">
  <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>

  <img src="./assets/img/qr_download.png" alt="" class="qr-code">
</div>
  </div>
      `;
  } else if (role === "18") {
    listHtml = `
    <div class="user-panel mt-1    pb-1   mb-1  d-flex">
    <div class="image">
      <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
      <a href="./employeeDetailsDashboard.php?id=${id}" class="d-block" id="user_login_name"></a>
    </div>
  </div>
  

  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar " data-widget="treeview" role="menu" data-accordion="false">

      <li class="nav-item " >
        <a href="./index.php" class="nav-link" id="dashbord-Create">
        <i class="fa-regular fa-grid-horizontal"></i>
        <span> <i class="bi bi-speedometer2 text-blue-icon"></i></span>
          &nbsp;&nbsp;&nbsp;
          <p>
            डॅशबोर्ड
          </p>
        </a>
      </li>
      <li class="nav-item" id="workReport-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-list-alt text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
        दैनंदिन कामाचा अहवाल
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./frm-daily-work-report.php" class="nav-link" id="workrepoert-Register">
            <i class="far fa-circle nav-icon text-danger"></i>
            <p> दैनंदिन अहवाल समाविष्ट करा </p>
          </a>
        </li>
      </ul>
    </li>        

 
    <li class="nav-item" id="attendance-menu">
    <a href="#" class="nav-link">
      <i class="fa fa-users text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
      उपस्थिती 
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
      <li class="nav-item active">
        <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
          <i class="far fa-circle nav-icon text-danger"></i>
          <p>उपस्थिती नोंदवा </p>
        </a>
      </li>
    
    </ul>
  </li>     
  ${
    currentDay >= 25 && currentDay <= 30
      ? `   
    <li class="nav-item" id="attendance-menu">
    <a href="#" class="nav-link">
      <i class="fa fa-calendar text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
      मासिक अहवाल 
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
      <li class="nav-item active">
      <a href="./frm-pashu-sakhi-evaluation.php" class="nav-link" id="attendance-Register">
        <i class="far fa-circle nav-icon text-danger"></i>
        <p>पशु सखी मासिक अहवाल जोडा </p>
      </a>
    </li>
      
    </ul>
  </li>  
  `
      : ""
  }
      <br>
    </ul>
  </nav>     
  <hr>
  <div class="qr-code-wrapper">
  <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>

  <img src="./assets/img/qr_download.png" alt="" class="qr-code">
</div>
  </div>
      `;
  } else if (role === "19") {
    listHtml = `
    <div class="user-panel mt-1    pb-1   mb-1  d-flex">
    <div class="image">
      <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
      <a href="./employeeDetailsDashboard.php?id=${id}" class="d-block" id="user_login_name"></a>
    </div>
  </div>
  

  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar " data-widget="treeview" role="menu" data-accordion="false">

      <li class="nav-item " >
        <a href="./index.php" class="nav-link" id="dashbord-Create">
        <i class="fa-regular fa-grid-horizontal"></i>
        <span> <i class="bi bi-speedometer2 text-blue-icon"></i></span>
          &nbsp;&nbsp;&nbsp;
          <p>
            डॅशबोर्ड
          </p>
        </a>
      </li>     
      <li class="nav-item" id="workReport-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-list-alt text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
        दैनंदिन कामाचा अहवाल
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./frm-daily-work-report.php" class="nav-link" id="workrepoert-Register">
            <i class="far fa-circle nav-icon text-danger"></i>
            <p> दैनंदिन अहवाल समाविष्ट करा </p>
          </a>
        </li>
      </ul>
    </li>        
    <li class="nav-item" id="attendance-menu">
    <a href="#" class="nav-link">
      <i class="fa fa-users text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
      उपस्थिती 
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
      <li class="nav-item active">
        <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
          <i class="far fa-circle nav-icon text-danger"></i>
          <p>उपस्थिती नोंदवा </p>
        </a>
      </li>
    </ul>
  </li> 
  ${
    currentDay >= 25 && currentDay <= 30
      ? `       
    <li class="nav-item" id="attendance-menu">
    <a href="#" class="nav-link">
      <i class="fa fa-calendar text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
      मासिक अहवाल 
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
    <li class="nav-item active">
      <a href="./frm-CTC-evaluation.php" class="nav-link" id="attendance-Register">
        <i class="far fa-circle nav-icon text-danger"></i>
        <p>समुदाय स्थरीय प्रशिक्षण सल्लगार मासिक अहवाल जोडा </p>
      </a>
    </li>
     </ul>
     `
      : ""
  }
      <br>
      <br>
    </ul>
  </nav>     
  <hr>
  <div class="qr-code-wrapper">
  <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>

  <img src="./assets/img/qr_download.png" alt="" class="qr-code">
</div>
  </div>
      `;
  } else if (role === "20") {
    listHtml = `
    <div class="user-panel mt-1    pb-1   mb-1  d-flex">
    <div class="image">
      <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
      <a href="./employeeDetailsDashboard.php?id=${id}" class="d-block" id="user_login_name"></a>
    </div>
  </div>
  

  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar " data-widget="treeview" role="menu" data-accordion="false">

      <li class="nav-item " >
        <a href="./index.php" class="nav-link" id="dashbord-Create">
        <i class="fa-regular fa-grid-horizontal"></i>
        <span> <i class="bi bi-speedometer2 text-blue-icon"></i></span>
          &nbsp;&nbsp;&nbsp;
          <p>
            डॅशबोर्ड
          </p>
        </a>
      </li>      
      <li class="nav-item" id="workReport-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-list-alt text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
        दैनंदिन कामाचा अहवाल
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./frm-daily-work-report.php" class="nav-link" id="workrepoert-Register">
            <i class="far fa-circle nav-icon text-danger"></i>
            <p> दैनंदिन अहवाल समाविष्ट करा </p>
          </a>
        </li>
      </ul>
    </li>        
    <li class="nav-item" id="attendance-menu">
    <a href="#" class="nav-link">
      <i class="fa fa-users text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
      उपस्थिती 
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
      <li class="nav-item active">
        <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
          <i class="far fa-circle nav-icon text-danger"></i>
          <p>उपस्थिती नोंदवा </p>
        </a>
      </li>

    </ul>
  </li>  
  ${
    currentDay >= 25 && currentDay <= 30
      ? `      
    <li class="nav-item" id="attendance-menu">
    <a href="#" class="nav-link">
      <i class="fa fa-calendar text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
      मासिक अहवाल 
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
    <li class="nav-item active">
        <a href="./frm-FICRP-evaluation.php" class="nav-link" id="attendance-Register">
          <i class="far fa-circle nav-icon text-danger"></i>
          <p>आर्थिक साक्षरता सखी मासिक अहवाल जोडा </p>
        </a>
      </li>
         </ul> 
         `
      : ""
  }  
      <br>
      <br>
    </ul>
  </nav>     
  <hr>
  <div class="qr-code-wrapper">
  <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>

  <img src="./assets/img/qr_download.png" alt="" class="qr-code">
</div>
  </div>
      `;
  } else if (role === "21") {
    listHtml = `
    <div class="user-panel mt-1    pb-1   mb-1  d-flex">
    <div class="image">
      <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
      <a href="./employeeDetailsDashboard.php?id=${id}" class="d-block" id="user_login_name"></a>
    </div>
  </div>
  

  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar " data-widget="treeview" role="menu" data-accordion="false">

      <li class="nav-item " >
        <a href="./index.php" class="nav-link" id="dashbord-Create">
        <i class="fa-regular fa-grid-horizontal"></i>
        <span> <i class="bi bi-speedometer2 text-blue-icon"></i></span>
          &nbsp;&nbsp;&nbsp;
          <p>
            डॅशबोर्ड
          </p>
        </a>
      </li>

      <li class="nav-item" id="workReport-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-list-alt text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
        दैनंदिन कामाचा अहवाल
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./frm-daily-work-report.php" class="nav-link" id="workrepoert-Register">
            <i class="far fa-circle nav-icon text-danger"></i>
            <p> दैनंदिन अहवाल समाविष्ट करा </p>
          </a>
        </li>
      </ul>
    </li>        
    <li class="nav-item" id="attendance-menu">
    <a href="#" class="nav-link">
      <i class="fa fa-users text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
      उपस्थिती 
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
      <li class="nav-item active">
        <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
          <i class="far fa-circle nav-icon text-danger"></i>
          <p>उपस्थिती नोंदवा </p>
        </a>
      </li>
    </ul>
  </li>  
  ${
    currentDay >= 25 && currentDay <= 30
      ? `      
    <li class="nav-item" id="attendance-menu">
    <a href="#" class="nav-link">
      <i class="fa fa-calendar text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
      मासिक अहवाल 
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
    <li class="nav-item active">
        <a href="./frm-bank-sakhi-evalutaion.php" class="nav-link" id="attendance-Register">
          <i class="far fa-circle nav-icon text-danger"></i>
          <p>बँक मासिक अहवाल जोडा </p>
        </a>
      </li>
      `
      : ""
  }
      <br>
    </ul>
  </nav>     
  <hr>
  <div class="qr-code-wrapper">
  <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>

  <img src="./assets/img/qr_download.png" alt="" class="qr-code">
</div>
  </div>
      `;
  } else if (role === "22") {
    listHtml = `
    <div class="user-panel mt-1    pb-1   mb-1  d-flex">
    <div class="image">
      <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
      <a href="./employeeDetailsDashboard.php?id=${id}" class="d-block" id="user_login_name"></a>
    </div>
  </div>
  

  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar " data-widget="treeview" role="menu" data-accordion="false">

      <li class="nav-item " >
        <a href="./index.php" class="nav-link" id="dashbord-Create">
        <i class="fa-regular fa-grid-horizontal"></i>
        <span> <i class="bi bi-speedometer2 text-blue-icon"></i></span>
          &nbsp;&nbsp;&nbsp;
          <p>
            डॅशबोर्ड
          </p>
        </a>
      </li>     
      <li class="nav-item" id="workReport-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-list-alt text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
        दैनंदिन कामाचा अहवाल
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./frm-daily-work-report.php" class="nav-link" id="workrepoert-Register">
            <i class="far fa-circle nav-icon text-danger"></i>
            <p> दैनंदिन अहवाल समाविष्ट करा </p>
          </a>
        </li>
      </ul>
    </li>        
    <li class="nav-item" id="attendance-menu">
    <a href="#" class="nav-link">
      <i class="fa fa-users text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
      उपस्थिती 
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
      <li class="nav-item active">
        <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
          <i class="far fa-circle nav-icon text-danger"></i>
          <p>उपस्थिती नोंदवा </p>
        </a>
      </li>
    </ul>
  </li>      
  ${
    currentDay >= 25 && currentDay <= 30
      ? `  
    <li class="nav-item" id="attendance-menu">
    <a href="#" class="nav-link">
      <i class="fa fa-calendar text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
      मासिक अहवाल 
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
    <li class="nav-item active">
        <a href="./frm-FICRP-evaluation.php" class="nav-link" id="attendance-Register">
          <i class="far fa-circle nav-icon text-danger"></i>
          <p>समुदाय संसाधन व्यक्ती मासिक अहवाल जोडा </p>
        </a>
      </li>
         </ul>
         `
      : ""
  }
   
      <br>
      <br>
    </ul>
  </nav>     
  <hr>
  <div class="qr-code-wrapper">
  <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>

  <img src="./assets/img/qr_download.png" alt="" class="qr-code">
</div>
  </div>
      `;
  } else if (role === "9") {
    listHtml = `
      <div class="user-panel mt-1    pb-1   mb-1  d-flex">
      <div class="image">
        <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
      </div>
      <div class="info">
        <a href="./employeeDetailsDashboard.php?id=${id}" class="d-block" id="user_login_name"></a>
      </div>
    </div>

    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar " data-widget="treeview" role="menu" data-accordion="false">

        <li class="nav-item " >
          <a href="./index.php" class="nav-link" id="dashbord-Create">
          <i class="fa-regular fa-grid-horizontal"></i>
          <span> <i class="bi bi-speedometer2 text-blue-icon"></i></span>
            &nbsp;&nbsp;&nbsp;
            <p>
              डॅशबोर्ड
            </p>
          </a>
        </li>

        <li class="nav-item" id="workReport-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-list-alt text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>
          दैनंदिन कामाचा अहवाल
            <i class="right fas fa-angle-left"></i>
          </p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-daily-work-report.php" class="nav-link" id="workrepoert-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p> दैनंदिन अहवाल समाविष्ट करा </p>
            </a>
          </li>
          <li class="nav-item active">
          <a href="./list-daily-report.php" class="nav-link" id="workrepoert-Register">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p> दैनंदिन अहवाल यादी</p>
          </a>
        </li>
        </ul>
      </li>
   

      <li class="nav-item" id="attendance-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-users text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
        उपस्थिती
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
            <i class="far fa-circle nav-icon text-danger"></i>
            <p>उपस्थिती नोंदवा </p>
          </a>
        </li>
        <li class="nav-item active">
        <a href="./list-attendance.php" class="nav-link" id="attendance-list">
          <i class="far fa-circle nav-icon text-warning"></i>
          <p>उपस्थिती यादी</p>
        </a>
        </li>
      </ul>
    </li>
    <li class="nav-item" id="attendance-menu">
    <a href="#" class="nav-link">
      <i class="fa fa-calendar text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
      मासिक अहवाल
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
    
      <li class="nav-item active">
        <a href="./list-pashu-sakhi-evaluation.php" class="nav-link" id="attendance-list">
          <i class="far fa-circle nav-icon text-warning"></i>
          <p>पशु सखी मासिक अहवाल यादी</p>
        </a>
      </li>
      <li class="nav-item active">
        <a href="./list-krushi-sakhi-evaluation.php" class="nav-link" id="attendance-list">
          <i class="far fa-circle nav-icon text-warning"></i>
          <p>कृषी सखी मासिक अहवाल यादी</p>
        </a>
      </li>
      <li class="nav-item active">
      <a href="./list-bank-sakhi-evaluation.php" class="nav-link" id="attendance-list">
        <i class="far fa-circle nav-icon text-warning"></i>
        <p>बँक सखी मासिक अहवाल यादी</p>
      </a>
    </li>
    <li class="nav-item active">
      <a href="./list-FICRP-evaluation.php" class="nav-link" id="attendance-list">
        <i class="far fa-circle nav-icon text-warning"></i>
        <p>आर्थिक साक्षरता सखी मासिक अहवाल यादी</p>
      </a>
    </li>
    <li class="nav-item active">
      <a href="./list-icrp-evaluation.php" class="nav-link" id="attendance-list">
        <i class="far fa-circle nav-icon text-warning"></i>
        <p>समुदाय संसाधन व्यक्ती सखी मासिक अहवाल यादी</p>
      </a>
    </li>

    <li class="nav-item active">
    <a href="./list-CTC-evaluation.php" class="nav-link" id="attendance-list">
      <i class="far fa-circle nav-icon text-warning"></i>
      <p>समुदाय स्थरीय प्रशिक्षण सल्लगार मासिक अहवाल यादी</p>
    </a>
  </li>
    </ul>
  </li>
    </li>
    </li>   
        <br>
      </ul>
    </nav>
    <hr>
    <div class="qr-code-wrapper">
    <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>

    <img src="./assets/img/qr_download.png" alt="" class="qr-code">
  </div>
    </div>
     `;
  } else if (role === "11") {
    listHtml = `
      <div class="user-panel mt-1    pb-1   mb-1  d-flex">
      <div class="image">
        <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
      </div>
      <div class="info">
        <a href="./employeeDetailsDashboard.php?id=${id}" class="d-block" id="user_login_name"></a>
      </div>
    </div>

    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar " data-widget="treeview" role="menu" data-accordion="false">

        <li class="nav-item " >
          <a href="./index.php" class="nav-link" id="dashbord-Create">
          <i class="fa-regular fa-grid-horizontal"></i>
          <span> <i class="bi bi-speedometer2 text-blue-icon"></i></span>
            &nbsp;&nbsp;&nbsp;
            <p>
              डॅशबोर्ड
            </p>
          </a>
        </li>

        <li class="nav-item" id="workReport-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-list-alt text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>
          दैनंदिन कामाचा अहवाल
            <i class="right fas fa-angle-left"></i>
          </p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-daily-work-report.php" class="nav-link" id="workrepoert-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p> दैनंदिन अहवाल समाविष्ट करा </p>
            </a>
          </li>
         
        </ul>
      </li>

      <li class="nav-item" id="user-menu">
    <a href="#" class="nav-link">
    <i class="fa fa-user text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
      यूजर
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
    <li class="nav-item active">
    <a href="./list-user.php" class="nav-link" id="user-Register">
      <i class="far fa-circle nav-icon text-warning"></i>
      <p> यूजर प्रशासक यादी </p>
    </a>
  </li>
     
    </ul>
  </li>

      <li class="nav-item" id="attendance-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-users text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
        उपस्थिती
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
            <i class="far fa-circle nav-icon text-danger"></i>
            <p>उपस्थिती नोंदवा </p>
          </a>
        </li>
       
      </ul>
    </li>
    

    <li class="nav-item" id="attendance-menu">
    <a href="#" class="nav-link">
      <i class="fa fa-calendar text-blue-icon"></i>
      &nbsp;&nbsp;&nbsp;
      <p>
        मासिक अहवाल
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
      ${
        currentDay >= 25 && currentDay <= 30
          ? `
          <li class="nav-item active">
          <a href="./frm-bank-sakhi-evalutaion.php" class="nav-link" id="attendance-Register">
            <i class="far fa-circle nav-icon text-danger"></i>
            <p>बँक मासिक अहवाल जोडा </p>
          </a>
        </li>
        <li class="nav-item active">
        <a href="./frm-FICRP-evaluation.php" class="nav-link" id="attendance-Register">
          <i class="far fa-circle nav-icon text-danger"></i>
          <p>आर्थिक साक्षरता सखी मासिक अहवाल जोडा </p>
        </a>
      </li>
      `
          : ""
      }
      <li class="nav-item active">
      <a href="./list-bank-sakhi-evaluation.php" class="nav-link" id="attendance-list">
        <i class="far fa-circle nav-icon text-warning"></i>
        <p>बँक सखी मासिक अहवाल यादी</p>
      </a>
    </li>
    <li class="nav-item active">
      <a href="./list-FICRP-evaluation.php" class="nav-link" id="attendance-list">
        <i class="far fa-circle nav-icon text-warning"></i>
        <p>आर्थिक साक्षरता सखी मासिक अहवाल यादी</p>
      </a>
    </li>
    </ul>
  </li>

  
    <li class="nav-item" id="workReport-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-list-alt text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>
          मागील कामाचा अहवाल
            <i class="right fas fa-angle-left"></i>
          </p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-monthlyReport.php" class="nav-link" id="workreport-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>दैनंदिन मागील अहवाल यादी </p>
            </a>
          </li>

          <li class="nav-item active">
          <a href="./list-daily-report-monthwise.php" class="nav-link" id="workreport-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>मासिक मागील दैनंदिन अहवाल यादी </p>
          </a>
        </li>

          <li class="nav-item active">
          <a href="./list-last-month-evaluation.php" class="nav-link" id="workreport-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>मासिक मागील मूल्यांकन यादी </p>
          </a>
        </li>
        </ul>
      </li>
   
        <br>
      </ul>
    </nav>
    <hr>
    <div class="qr-code-wrapper">
    <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>

    <img src="./assets/img/qr_download.png" alt="" class="qr-code">
  </div>
    </div>
     `;
  } else if (role === "10") {
    listHtml = `<div class="user-panel mt-1 pb-1 mb-1 d-flex">
    <div class="image">
      <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
      <a href="./employeeDetailsDashboard.php?id=${id}" class="d-block" id="user_login_name"></a>
    </div>
  </div>
  
  <ul class="nav nav-pills nav-sidebar" data-widget="treeview" role="menu" data-accordion="false">
    <li class="nav-item">
      <a href="./index.php" class="nav-link" id="dashbord-Create">
        <i class="fa-regular fa-grid-horizontal"></i>
        <span> <i class="bi bi-speedometer2 text-blue-icon"></i></span>
        &nbsp;&nbsp;&nbsp;
        <p>डॅशबोर्ड</p>
      </a>
    </li>
  
    <li class="nav-item" id="workReport-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-list-alt text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
          दैनंदिन कामाचा अहवाल
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./frm-daily-work-report.php" class="nav-link" id="workrepoert-Register">
            <i class="far fa-circle nav-icon text-danger"></i>
            <p> दैनंदिन अहवाल समाविष्ट करा </p>
          </a>
        </li>
       
      </ul>
    </li>
  
    <li class="nav-item" id="user-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-user text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
          यूजर
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./list-user.php" class="nav-link" id="user-Register">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p> यूजर प्रशासक यादी </p>
          </a>
        </li>
      </ul>
    </li>
  
    <li class="nav-item" id="attendance-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-users text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
          उपस्थिती
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
            <i class="far fa-circle nav-icon text-danger"></i>
            <p>उपस्थिती नोंदवा </p>
          </a>
        </li>
      </ul>
    </li>
  
    <li class="nav-item" id="attendance-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-calendar text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
          मासिक अहवाल
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        ${
          currentDay >= 25 && currentDay <= 30
            ? `
        <li class="nav-item active">
          <a href="./frm-ICRP-evaluation.php" class="nav-link" id="attendance-Register">
            <i class="far fa-circle nav-icon text-danger"></i>
            <p>समुदाय संसाधन व्यक्ती मासिक अहवाल जोडा </p>
          </a>
        </li>
        `
            : ""
        }
        <li class="nav-item active">
          <a href="./list-icrp-evaluation.php" class="nav-link" id="attendance-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>समुदाय संसाधन व्यक्ती सखी मासिक अहवाल यादी</p>
          </a>
        </li>
      </ul>
    </li>
  
    <li class="nav-item" id="workReport-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-list-alt text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>
          मागील कामाचा अहवाल
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./frm-monthlyReport.php" class="nav-link" id="workreport-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>दैनंदिन मागील अहवाल यादी </p>
          </a>
        </li>
        <li class="nav-item active">
          <a href="./list-daily-report-monthwise.php" class="nav-link" id="workreport-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>मासिक मागील दैनंदिन अहवाल यादी </p>
          </a>
        </li>
        <li class="nav-item active">
          <a href="./list-last-month-evaluation.php" class="nav-link" id="workreport-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>मासिक मागील मूल्यांकन यादी </p>
          </a>
        </li>
      </ul>
    </li>
  
   
  </ul>
  
  <hr>
  <div class="qr-code-wrapper">
    <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>
    <img src="./assets/img/qr_download.png" alt="" class="qr-code">
  </div>
  `;
  } else if (role === "29") {
    listHtml = `
      <div class="user-panel mt-1    pb-1   mb-1  d-flex">
      <div class="image">
        <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
      </div>
      <div class="info">
        <a href="" class="d-block" id="user_login_name"></a>
      </div>
    </div>

    <div class="qr-code-wrapper">
    <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>
    <img src="./assets/img/qr_download.png" alt="" class="qr-code">
  </div>
    </div>
     `;
  } else if (
    role === "4" ||
    // role === "5" ||
    role === "6" ||
    role === "7" ||
    role === "8" ||
    role === "23"
  ) {
    listHtml = `
    <div class="user-panel mt-1 pb-1 mb-1 d-flex">
    <div class="image">
      <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
      <a href="./employeeDetailsDashboard.php?id=${id}" class="d-block" id="user_login_name"></a>
    </div>
  </div>
  
  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar" data-widget="treeview" role="menu" data-accordion="false">
      <li class="nav-item">
        <a href="./index.php" class="nav-link" id="dashbord-Create">
          <i class="fa-regular fa-grid-horizontal"></i>
          <span><i class="bi bi-speedometer2 text-blue-icon"></i></span>
          &nbsp;&nbsp;&nbsp;
          <p>डॅशबोर्ड</p>
        </a>
      </li>
  
      <li class="nav-item" id="workReport-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-list-alt text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>दैनंदिन कामाचा अहवाल <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-daily-work-report.php" class="nav-link" id="workrepoert-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>दैनंदिन अहवाल समाविष्ट करा</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="user-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-user text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>यूजर <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-register_user.php" class="nav-link" id="user-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>यूजर प्रशासक नोंदणी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-user.php" class="nav-link" id="user-Register">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>यूजर प्रशासक यादी</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="attendance-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-users text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>उपस्थिती <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>उपस्थिती नोंदवा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-attendance.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>उपस्थिती यादी</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="monthly-report-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-calendar text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>मासिक अहवाल <i class="right fas fa-angle-left"></i></p>
        </a>
        ${
          currentDay >= 25 && currentDay <= 30
            ? `
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-pashu-sakhi-evaluation.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>पशु सखी मासिक अहवाल जोडा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./frm-krushi-sakhi-evaluation.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>कृषी सखी मासिक अहवाल जोडा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./frm-bank-sakhi-evalutaion.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>बँक सखी मासिक अहवाल जोडा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./frm-FICRP-evaluation.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>आर्थिक साक्षरता सखी मासिक अहवाल जोडा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./frm-ICRP-evaluation.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>समुदाय संसाधन व्यक्ती मासिक अहवाल जोडा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./frm-CTC-evaluation.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>समुदाय स्थरीय प्रशिक्षण सल्लगार मासिक अहवाल जोडा</p>
            </a>
          </li>
        </ul>
        `
            : ""
        }
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./list-pashu-sakhi-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>पशु सखी मासिक अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-krushi-sakhi-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>कृषी सखी मासिक अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-bank-sakhi-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>बँक सखी मासिक अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-FICRP-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>आर्थिक साक्षरता सखी मासिक अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-icrp-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>समुदाय संसाधन व्यक्ती सखी मासिक अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-CTC-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>समुदाय स्थरीय प्रशिक्षण सल्लगार मासिक अहवाल यादी</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="evaluation-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-bars text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>मूल्यांकन <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./list-monthly-report.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>मूल्यांकन यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-montly-salary-report.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>मासिक पगार मूल्यांकन</p>
            </a>
          </li>
        </ul>
      </li>
  
      <br><br>
    </ul>
  </nav>
  <hr>
  <div class="qr-code-wrapper">
    <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>
    <img src="./assets/img/qr_download.png" alt="" class="qr-code">
  </div>
  
   `;
  } else if (role === "1" || role === "2") {
    listHtml = `
    <div class="user-panel mt-1 pb-1 mb-1 d-flex">
    <div class="image">
      <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
      <a href="./employeeDetailsDashboard.php?id=${id}" class="d-block" id="user_login_name"></a>
    </div>
  </div>
  
  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar" data-widget="treeview" role="menu" data-accordion="false">
      <li class="nav-item">
        <a href="./index.php" class="nav-link" id="dashbord-Create">
          <i class="fa-regular fa-grid-horizontal"></i>
          <span><i class="bi bi-speedometer2 text-blue-icon"></i></span>
          &nbsp;&nbsp;&nbsp;
          <p>डॅशबोर्ड</p>
        </a>
      </li>
  
      <li class="nav-item" id="workReport-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-list-alt text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>दैनंदिन कामाचा अहवाल <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-daily-work-report.php" class="nav-link" id="workrepoert-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>दैनंदिन अहवाल समाविष्ट करा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-daily-report.php" class="nav-link" id="workrepoert-Register">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>दैनंदिन अहवाल यादी</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="user-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-user text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>यूजर <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-register_user.php" class="nav-link" id="user-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>यूजर प्रशासक नोंदणी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-user.php" class="nav-link" id="user-Register">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>यूजर प्रशासक यादी</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="attendance-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-users text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>उपस्थिती <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>उपस्थिती नोंदवा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-attendance.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>उपस्थिती यादी</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="monthly-report-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-calendar text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>मासिक अहवाल <i class="right fas fa-angle-left"></i></p>
        </a>
        ${
          currentDay >= 25 && currentDay <= 30
            ? `
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-pashu-sakhi-evaluation.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>पशु सखी मासिक अहवाल जोडा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./frm-krushi-sakhi-evaluation.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>कृषी सखी मासिक अहवाल जोडा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./frm-bank-sakhi-evalutaion.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>बँक सखी मासिक अहवाल जोडा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./frm-FICRP-evaluation.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>आर्थिक साक्षरता सखी मासिक अहवाल जोडा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./frm-ICRP-evaluation.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>समुदाय संसाधन व्यक्ती मासिक अहवाल जोडा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./frm-CTC-evaluation.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>समुदाय स्थरीय प्रशिक्षण सल्लगार मासिक अहवाल जोडा</p>
            </a>
          </li>
        </ul>
        `
            : ""
        }
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./list-pashu-sakhi-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>पशु सखी मासिक अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-krushi-sakhi-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>कृषी सखी मासिक अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-bank-sakhi-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>बँक सखी मासिक अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-FICRP-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>आर्थिक साक्षरता सखी मासिक अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-icrp-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>समुदाय संसाधन व्यक्ती सखी मासिक अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-CTC-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>समुदाय स्थरीय प्रशिक्षण सल्लगार मासिक अहवाल यादी</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="evaluation-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-bars text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>मूल्यांकन <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./list-monthly-report.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>मूल्यांकन यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-montly-salary-report.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>मासिक पगार मूल्यांकन</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="workReport-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-list-alt text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>मागील कामाचा अहवाल <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-monthlyReport.php" class="nav-link" id="workreport-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>दैनंदिन मागील अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-daily-report-monthwise.php" class="nav-link" id="workreport-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>मासिक मागील दैनंदिन अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-last-month-evaluation.php" class="nav-link" id="workreport-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>मासिक मागील मूल्यांकन यादी</p>
            </a>
          </li>
        </ul>
      </li>
      <br><br>
    </ul>
  </nav>
  <hr>
  <div class="qr-code-wrapper">
    <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>
    <img src="./assets/img/qr_download.png" alt="" class="qr-code">
  </div>
  
   `;
  } else if (role === "3") {
    listHtml = `
    <div class="user-panel mt-1 pb-1 mb-1 d-flex">
    <div class="image">
      <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
      <a href="./employeeDetailsDashboard.php?id=${id}" class="d-block" id="user_login_name"></a>
    </div>
  </div>
  
  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar" data-widget="treeview" role="menu" data-accordion="false">
      <li class="nav-item">
        <a href="./index.php" class="nav-link" id="dashbord-Create">
          <i class="fa-regular fa-grid-horizontal"></i>
          <span><i class="bi bi-speedometer2 text-blue-icon"></i></span>
          &nbsp;&nbsp;&nbsp;
          <p>डॅशबोर्ड</p>
        </a>
      </li>
  
      <li class="nav-item" id="workReport-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-list-alt text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>दैनंदिन कामाचा अहवाल <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-daily-work-report.php" class="nav-link" id="workrepoert-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>दैनंदिन अहवाल समाविष्ट करा</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="user-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-user text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>यूजर <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-register_user.php" class="nav-link" id="user-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>यूजर प्रशासक नोंदणी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-user.php" class="nav-link" id="user-Register">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>यूजर प्रशासक यादी</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="attendance-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-users text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>उपस्थिती <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>उपस्थिती नोंदवा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-attendance.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>उपस्थिती यादी</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="monthly-report-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-calendar text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>मासिक अहवाल <i class="right fas fa-angle-left"></i></p>
        </a>
        ${
          currentDay >= 25 && currentDay <= 30
            ? `
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-pashu-sakhi-evaluation.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>पशु सखी मासिक अहवाल जोडा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./frm-krushi-sakhi-evaluation.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>कृषी सखी मासिक अहवाल जोडा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./frm-bank-sakhi-evalutaion.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>बँक सखी मासिक अहवाल जोडा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./frm-FICRP-evaluation.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>आर्थिक साक्षरता सखी मासिक अहवाल जोडा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./frm-ICRP-evaluation.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>समुदाय संसाधन व्यक्ती मासिक अहवाल जोडा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./frm-CTC-evaluation.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>समुदाय स्थरीय प्रशिक्षण सल्लगार मासिक अहवाल जोडा</p>
            </a>
          </li>
        </ul>
        `
            : ""
        }
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./list-pashu-sakhi-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>पशु सखी मासिक अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-krushi-sakhi-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>कृषी सखी मासिक अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-bank-sakhi-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>बँक सखी मासिक अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-FICRP-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>आर्थिक साक्षरता सखी मासिक अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-icrp-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>समुदाय संसाधन व्यक्ती सखी मासिक अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-CTC-evaluation.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>समुदाय स्थरीय प्रशिक्षण सल्लगार मासिक अहवाल यादी</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="evaluation-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-bars text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>मूल्यांकन <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./list-monthly-report.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>मूल्यांकन यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-montly-salary-report.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>मासिक पगार मूल्यांकन</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="workReport-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-list-alt text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>मागील कामाचा अहवाल <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-monthlyReport.php" class="nav-link" id="workreport-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>दैनंदिन मागील अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-daily-report-monthwise.php" class="nav-link" id="workreport-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>मासिक मागील दैनंदिन अहवाल यादी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-last-month-evaluation.php" class="nav-link" id="workreport-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>मासिक मागील मूल्यांकन यादी</p>
            </a>
          </li>
        </ul>
      </li>
      <br><br>
    </ul>
  </nav>
  <hr>
  <div class="qr-code-wrapper">
    <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>
    <img src="./assets/img/qr_download.png" alt="" class="qr-code">
  </div>
  
   `;
  } else if (role === "16") {
    listHtml = `
    <div class="user-panel mt-1 pb-1 mb-1 d-flex">
    <div class="image">
      <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
      <a href="./employeeDetailsDashboard.php?id=${id}" class="d-block" id="user_login_name"></a>
    </div>
  </div>
  
  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar" data-widget="treeview" role="menu" data-accordion="false">
      <li class="nav-item">
        <a href="./index.php" class="nav-link" id="dashbord-Create">
          <i class="fa-regular fa-grid-horizontal"></i>
          <span><i class="bi bi-speedometer2 text-blue-icon"></i></span>
          &nbsp;&nbsp;&nbsp;
          <p>डॅशबोर्ड</p>
        </a>
      </li>
  
      <li class="nav-item" id="workReport-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-list-alt text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>दैनंदिन कामाचा अहवाल <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-daily-work-report.php" class="nav-link" id="workrepoert-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>दैनंदिन अहवाल समाविष्ट करा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-daily-report.php" class="nav-link" id="workrepoert-Register">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>दैनंदिन अहवाल यादी</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="attendance-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-users text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>उपस्थिती <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>उपस्थिती नोंदवा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-attendance.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>उपस्थिती यादी</p>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item" id="monthly-report-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-calendar text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>मासिक अहवाल <i class="right fas fa-angle-left"></i></p>
      </a>
     
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./list-pashu-sakhi-evaluation.php" class="nav-link" id="attendance-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>पशु सखी मासिक अहवाल यादी</p>
          </a>
        </li>
        <li class="nav-item active">
          <a href="./list-krushi-sakhi-evaluation.php" class="nav-link" id="attendance-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>कृषी सखी मासिक अहवाल यादी</p>
          </a>
        </li>
        <li class="nav-item active">
          <a href="./list-bank-sakhi-evaluation.php" class="nav-link" id="attendance-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>बँक सखी मासिक अहवाल यादी</p>
          </a>
        </li>
        <li class="nav-item active">
          <a href="./list-FICRP-evaluation.php" class="nav-link" id="attendance-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>आर्थिक साक्षरता सखी मासिक अहवाल यादी</p>
          </a>
        </li>
        <li class="nav-item active">
          <a href="./list-icrp-evaluation.php" class="nav-link" id="attendance-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>समुदाय संसाधन व्यक्ती सखी मासिक अहवाल यादी</p>
          </a>
        </li>
        <li class="nav-item active">
          <a href="./list-CTC-evaluation.php" class="nav-link" id="attendance-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>समुदाय स्थरीय प्रशिक्षण सल्लगार मासिक अहवाल यादी</p>
          </a>
        </li>
      </ul>
    </li>
      <br><br>
    </ul>
  </nav>
  <hr>
  <div class="qr-code-wrapper">
    <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>
    <img src="./assets/img/qr_download.png" alt="" class="qr-code">
  </div>
  
   `;
  } else if (role === "5") {
    listHtml = `
    <div class="user-panel mt-1 pb-1 mb-1 d-flex">
    <div class="image">
      <img src="dist/img/admin.png" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
      <a href="./employeeDetailsDashboard.php?id=${id}" class="d-block" id="user_login_name"></a>
    </div>
  </div>
  
  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar" data-widget="treeview" role="menu" data-accordion="false">
      <li class="nav-item">
        <a href="./index.php" class="nav-link" id="dashbord-Create">
          <i class="fa-regular fa-grid-horizontal"></i>
          <span><i class="bi bi-speedometer2 text-blue-icon"></i></span>
          &nbsp;&nbsp;&nbsp;
          <p>डॅशबोर्ड</p>
        </a>
      </li>
  
      <li class="nav-item" id="workReport-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-list-alt text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>दैनंदिन कामाचा अहवाल <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-daily-work-report.php" class="nav-link" id="workrepoert-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>दैनंदिन अहवाल समाविष्ट करा</p>
            </a>
          </li>
         
        </ul>
      </li>
  
      <li class="nav-item" id="user-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-user text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>यूजर <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./frm-register_user.php" class="nav-link" id="user-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>यूजर प्रशासक नोंदणी</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-user.php" class="nav-link" id="user-Register">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>यूजर प्रशासक यादी</p>
            </a>
          </li>
        </ul>
      </li>
  
      <li class="nav-item" id="attendance-menu">
        <a href="#" class="nav-link">
          <i class="fa fa-users text-blue-icon"></i>
          &nbsp;&nbsp;&nbsp;
          <p>उपस्थिती <i class="right fas fa-angle-left"></i></p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item active">
            <a href="./register-attendance.php" class="nav-link" id="attendance-Register">
              <i class="far fa-circle nav-icon text-danger"></i>
              <p>उपस्थिती नोंदवा</p>
            </a>
          </li>
          <li class="nav-item active">
            <a href="./list-attendance.php" class="nav-link" id="attendance-list">
              <i class="far fa-circle nav-icon text-warning"></i>
              <p>उपस्थिती यादी</p>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item" id="monthly-report-menu">
      <a href="#" class="nav-link">
        <i class="fa fa-calendar text-blue-icon"></i>
        &nbsp;&nbsp;&nbsp;
        <p>मासिक अहवाल <i class="right fas fa-angle-left"></i></p>
      </a>
    
      <ul class="nav nav-treeview">
        <li class="nav-item active">
          <a href="./list-bank-sakhi-evaluation.php" class="nav-link" id="attendance-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>बँक सखी मासिक अहवाल यादी</p>
          </a>
        </li>
        <li class="nav-item active">
          <a href="./list-FICRP-evaluation.php" class="nav-link" id="attendance-list">
            <i class="far fa-circle nav-icon text-warning"></i>
            <p>आर्थिक साक्षरता सखी मासिक अहवाल यादी</p>
          </a>
        </li>
      </ul>
    </li>
      <br><br>
    </ul>
  </nav>
  <hr>
  <div class="qr-code-wrapper">
    <p class="text-center m-2" style="color:#396488; font-weight:600">ॲप डाउनलोड करण्यासाठी QR स्कॅन करा</p>
    <img src="./assets/img/qr_download.png" alt="" class="qr-code">
  </div>
  
   `;
  }
  sideBar.innerHTML = listHtml;
};
