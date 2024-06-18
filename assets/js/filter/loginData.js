const loginData = (data) => {
  
    const response = loginApi(data);
  
    if (!response) {
      alert("please valid password add!!!!");
      return;
    }
    console.log("sssssssj",response);
    sessionStorage.setItem("loginData", JSON.stringify(response));
    redirectPage("./index.php");
  };





  