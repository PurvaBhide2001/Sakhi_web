const studentGetList = () => {
  const { data } = studentApi.GetList();
  
  const studentList = document.querySelector("#studentList");
  const student = data?.map((element, i) => {
    let varDistrict="";
    const district = null;
    if(district)
    {
      let districtData=district.data[0];
      console.log(districtData)
      varDistrict=districtData.district_title;
     
    };
    let varBlock="";
    const block = null;
    if(block)
    {
      let blockData=block.data[0];
      varBlock=blockData.block_title;
     
    };

    let varvillage="";
    const village = null;

    if(village)
    {
      let villageData=village.data[0];
      
      varvillage=villageData.village_name;
     
    }
    return `
            <tr>
            <td>${i + 1}</td>
           
            <td><a href="profile.php?id=${element.id}" class="text-capitalize" target=""> ${element?.f_name} ${element?.m_name} ${element?.l_name}</a></td>

            <td>20</td>
            <td>30</td>
            <td>8.5</td>
            <td>222</td>
            <td>9</td>
            <td></td>
            
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
