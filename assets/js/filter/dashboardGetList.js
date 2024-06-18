const dashboardGetList = (data) => {
  const dashboardObject = {
    anganwadi_count: {
      title: "एकूण अंगणवाड्यांची संख्या",
      bg: "bg-info",
      icon: "fa-university"
    },
    smart_anganwadi_count: {
      title: "स्मार्ट अंगणवाड्यांची संख्या",
      bg: "bg-danger",
      icon: "fa-arrow-circle-right"
    },
    student_count: {
      title: "एकूण लाभार्थ्यांची संख्या",
      bg: "bg-success",
      icon: "ion ion-person-add"
    },
    sevika_count: {
      title: "अंगणवाडी सेविकांची एकूण संख्या",
      bg: "bg-yellow",
      icon: "ion ion-person-add",
      color: "text-white"
    },



  }

  // if (typeof Chart.instances[0] !== 'undefined') {
  //   // Destroy the existing chart
  //   Chart.instances[0].destroy();
  // }
  // if (typeof Chart.instances[1] !== 'undefined') {
  //   // Destroy the existing chart
  //   Chart.instances[1].destroy();
  // }
  // if (typeof Chart.instances[3] !== 'undefined') {
  //   // Destroy the existing chart
  //   Chart.instances[3].destroy();
  // }



  const keyValueArray = ["anganwadi_count", "smart_anganwadi_count", "student_count", "sevika_count"];


  const studentInf = document.querySelector("#studentInf");

  const dashboreddata = keyValueArray?.map((key, i) => {
    return `<div class="col-lg-3 col-6"  >
   
    <div class="small-box ${dashboardObject[key].bg}">
      <div class="inner text-white">
        <h3>${data[key]}</h3>
        <p>${dashboardObject[key].title}</p>
      </div>
      <div class="icon ">
        <i class="fa ${dashboardObject[key].icon}"></i>
      </div>
      <a href="#" class="small-box-footer ${dashboardObject[key].color}"><i class="fas fa-arrow-circle-right"></i></a>
    </div>
  </div>
  `}).join("")
  studentInf.innerHTML = dashboreddata;

}


const dashboardReportShow = () => {
  const anganwadi_id = document.querySelector("#anganwadi_id");
  const prakalpa_id = document.querySelector("#prakalpa_id");
  const bit_id = document.querySelector("#bit_id");
  const user = {
    anganwadi_id: anganwadi_id.value,
    prakalpa_id: prakalpa_id.value,
    bit_id: bit_id.value,

  };

let  {data, status}  = dashboard.dashboardShow(user);

  dashboardGetList(data.anganwadidata)
  showCharts(data);
 
};