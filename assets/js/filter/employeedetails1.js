const employeedetails1 = () => {

    // const userData = localStorage.getItem("user");
  const userData = JSON.parse(localStorage.getItem("user"));
  const loginData = JSON.parse(localStorage.getItem("loginInfo"));


    console.log(userData, "local storage user");
  console.log(loginData,"loginData");
    if (userData) {
        console.log("UserData",userData.f_name); 
      
      const data = JSON.parse(userData);

      const user = data[0]; 
  

      const {f_name, m_name, l_name, dob, role_name, state_obj, district_obj, block_obj} = userData;
   
      const stateObj = JSON.parse(state_obj);
      const districtObj = JSON.parse(district_obj);
      const blockObj = JSON.parse(block_obj);
  
      // Create a div element to hold user information
      const userInfoDiv = document.createElement("div");
      userInfoDiv.innerHTML = `
        <p><i class="fas fa-user icon"></i><strong>स्वतःचे नाव :</strong> ${f_name}</p>
        <hr>
        <p><i class="fas fa-user icon"></i><strong>वडिलांचे नाव:</strong> ${m_name}</p>
        <hr>
        <p><i class="fas fa-user icon"></i><strong>आडनाव :</strong> ${l_name}</p>
        <hr>
        <p><i class="far fa-calendar-alt icon"></i><strong>जन्मतारीख :</strong> ${dob}</p>
        <hr>
        <p><i class="fas fa-user-tie icon"></i><strong>कर्मचारी पद :</strong> ${role_name}</p>
        <hr>
        <p><i class="fas fa-map-marker-alt icon"></i><strong>पत्ता :</strong> ${
          stateObj?.state_title ?? ""
        }, ${districtObj?.district_title ?? ""}, ${blockObj?.block_title ?? ""}</p>
      `;
  
   
      const userContainer = document.getElementById("userContainer");
      userContainer.innerHTML = "";
      userContainer.appendChild(userInfoDiv);
    } else {
      
      console.log("No user data available in local storage");
    }
  };
  

  employeedetails1();
  