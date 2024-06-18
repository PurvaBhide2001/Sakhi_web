const evalTypesList = () => {
    const age_category = document.querySelector("#title");
    const block = document.querySelector("#block");
    const village = document.querySelector("#village");
    const anganwadi_id = document.querySelector("#anganwadi_id");
    const eval_type = document.querySelector("#anganwadi_id");
    
    const listObj = {
      age_category: age_category.value,
      
    };
    console.log(listObj, "listObj------------listObj");
    const{ data }= anganwadiApi.evalTypes(listObj);
   
    console.log(data, "dataataat");
    const optionset = [];
    optionset.push(`<option value="">निवडा</option>`);
    if (data == null) {
      return;
    }
    data.forEach((element) => {
      const html = `<option value="${element.id}">${element.title}</option>`;
      optionset.push(html);
    });
  console.log("sarve-repsarve-repsarve-rep",optionset);
    document.querySelector("#sarve-rep").innerHTML = optionset.join("");
  };
  