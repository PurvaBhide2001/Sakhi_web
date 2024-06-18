const studentDetailsGetList = () => {
  const { data } = studentApi.GetList();
  const studentList = document.querySelector("#studentList");
  const student = data?.map((element, i) => {
    return `
         <tr>
              <td>${i + 1}</td>
              <td id="details-List "><a href="profile.php?id=${element?.Id}">  ${element?.f_name} ${element?.m_name} ${element?.l_name}</a></td>
              <td>${element?.anganwadi_name}</td>
              <td>${element?.dob}</td>
              <td>${element?.gender=="Male"?"मुलगा":"मुलगी"}</td>
              <td>${element?.join_date}</td>
              <td>${element?.pass_date}</td>
           </tr>
          `;
  });

  studentList.innerHTML = student.join("");
  data?.forEach((data) => {
    if (!document.querySelector(`#deleteRow-${data.id}`)) return;
    document
      .querySelector(`#deleteRow-${data.id}`)
      .addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(`#deleteRow-${data.id}`).closest("tr").remove();
        const response = DeleteStudentAPI(data.id);
      });
  });
};
