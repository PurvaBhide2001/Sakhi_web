const studentGetList = (data) => {
  // const { data } = studentApi.GetList();
  const studentList = document.querySelector("#studentList");
  let student = filterDataRoleWise(data)?.map((element, i) => {
    let district=block=village="";
    if (element.district_obj && element.block_obj && element.village_obj) {
      district = JSON.parse(element.district_obj);
      district = JSON.parse(district);
      block = JSON.parse(element.block_obj);
      block = JSON.parse(block);
      village = JSON.parse(element.village_obj);
      village = JSON.parse(village);
    } else {
      block = district = village = "";
    }

    return `
            <tr>
            <td>${i + 1}</td>
            <td>${element?.anganwadi_name}</td>

            <td id="details-List "><a href="profile.php?id=${element?.Id}">  ${element?.f_name} ${element?.m_name} ${element?.l_name}</a></td>
            <td>${element?.mother_name}</td>
            <td>${element?.m_name}</td>
            <td>${element?.dob}</td>
            <td>${element?.gender.toLowerCase()=="male"?"मुलगा":"मुलगी"}</td>
            <td>${element?.join_date}</td>
            <td>${village?.village_name}, ${block?.block_title}, ${
      district?.district_title
    }.</td>
  <td class="text-center"><span><a href="frm-register_students.php?id=${
    element.Id
  }"><i class="fas fa-edit mr-3 text-primary"></i></a></span>
                            <span><a id="deleteRow-${
                              element.Id
                            }" ><i class="fas fa-trash text-danger mr-1"></i></a></span></td> </tr>

        `;
  });
  studentList.innerHTML = student.join("");


  data?.forEach((data) => {
    if (!document.querySelector(`#deleteRow-${data.Id}`)) return;
    document
      .querySelector(`#deleteRow-${data.Id}`)
      .addEventListener("click", (e) => {
        e.preventDefault();

        if (confirm("तुमची खात्री आहे की तुम्ही हा डेटा हटवू इच्छिता?")) {
          document
            .querySelector(`#deleteRow-${data.Id}`)
            .closest("tr")
            .remove();
          const response = studentApi.delete(data.Id);
        }
      });
  });

};

const studentLitshow = (json) => {
  const studentList = document.querySelector("#studentList");
  const prakalpa_id = document.querySelector("#prakalpa_id");
  const bit_id = document.querySelector("#bit_id");
  const anganwadi_id = document.querySelector("#anganwadi_id");
  const formData = new FormData(prakalpData1);
  let studentList1 = Object.fromEntries(formData);
  const user = {
    prakalpa_id: prakalpa_id.value,
    bit_id: bit_id.value,
    anganwadi_id: anganwadi_id.value,
  };
  let { data, status } = studentApi.GetList1(user);
  status = parseInt(status);
  if (status != 200) {
    alert("माहिती उपलबद्ध नाही ");
    studentList.innerHTML = "";
    return;
  }
  studentGetList(data);
};
