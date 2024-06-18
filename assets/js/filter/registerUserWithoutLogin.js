const registerUserWithoutLogin = async () => {
    document.querySelector("#submit").addEventListener("click", async (e) => {
        e.preventDefault(); // Prevent default form submission
  
        // Validate form fields
        const form = document.getElementById("userFormData");
        const formData = new FormData(form);
        
        let isValid = true;
  
        // If all fields are valid, proceed with registration
        const payload = {};
        formData.forEach((value, key) => {
            payload[key] = value;
            
        });
        payload["role"] = 29;
          
        console.log("Payload:", payload);
        const { data: res, status } = await userApi.registerWithoutLogin(payload);
  
        console.log(res);
        if (status === 200) {
            alert("User registered successfully!");
            window.location.href = "frm-login.php"; 
        } else if (status === 400) {
            alert("Username already exists!");
        } else {
            alert("User registration failed. Please try again.");
        }
    });
  };
  
  