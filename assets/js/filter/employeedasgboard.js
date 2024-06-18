const ListUserById = (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userrole = user?.role;

  const {
    data,
    loginInfo,
    dailyWorkReport,
    KrushisakhiMandhanSubmitedAnswers,
    PashuSakhiMandhanSubmitedAnswers,
    CTCAhwalSubmitedAnswers,
    FICRPSubmitedAnswers,
    BanksakhiSubmitedAnswers,
    ICRPSubmitedAnswers,
  } = userApi.get(id);

  const loginDetails = document.getElementById("loginDetails");
  const userCountContainer = document.getElementById("userCountContainer");
  const userIDforupdate = data?.id;
  if (data) {
    if (data.state === "0") {
      const userInfoDiv = document.createElement("div");

      userInfoDiv.innerHTML = `
        <p><i class="fas fa-user icon"></i><strong>स्वतःचे नाव :</strong> ${data?.f_name}</p>
        <hr>
        <p><i class="fas fa-user icon"></i><strong>वडिलांचे नाव:</strong> ${data?.m_name}</p>
        <hr>
        <p><i class="fas fa-user icon"></i><strong>आडनाव :</strong> ${data?.l_name}</p>
        <hr>
        <p><i class="far fa-calendar-alt icon"></i><strong>जन्मतारीख :</strong> ${data?.dob}</p>
        <hr>
        <p><i class="fas fa-user-tie icon"></i><strong>कर्मचारी पद :</strong> ${data?.role_name}</p>
        <hr>
        <p><i class="fas fa-map-marker-alt icon"></i><strong>पत्ता :</strong>
        <span style="color:#D10000">प्रोफाइलमध्ये तुमचा पत्ता प्रविष्ट केलेला नाही. कृपया तुमचे प्रोफाइल अपलोड करा.</span>
       </p>
      <div class="col-md-12 d-flex justify-content-center" id="">
                                  <button type="button" class="btn btn-success mt-2" id="ToUpdate">कर्मचारी तपशील अपडेट करा</button>
                              </div>
      `;
      document.addEventListener("DOMContentLoaded", function () {
        // Get the button element
        const submitButton = document.getElementById("ToUpdate");

        // Add event listener to the button
        submitButton.addEventListener("click", function () {
          // Get the user ID from localStorage
          const user = JSON.parse(localStorage.getItem("user"));

          const userId = user ? user.id : null;
                   if (userId) {
            window.location.href = `frm-register_user.php?id=${userId}`;
          } else {
            console.error("User ID not found in localStorage.");
          }
        });
      });

      userCountContainer.appendChild(userInfoDiv);
    } else {
      console.log("state_obj:", data.state_obj);
      console.log("district_obj:", data.district_obj);
      console.log("block_obj:", data.block_obj);

      let stateObj, distTitle, blockTitle;

      try {
        if (data.state_obj.startsWith("{") && data.state_obj.endsWith("}")) {
          // Directly parse the new format
          stateObj = JSON.parse(data.state_obj);
          distTitle = JSON.parse(data.district_obj).district_title;
          blockTitle = JSON.parse(data.block_obj).block_title;
        } else {
          // Parse the old format
          stateObj = JSON.parse(JSON.parse(data.state_obj));

          // district data
          const district = JSON.stringify(data.district_obj);
          const parseDist = JSON.parse(district);
          const unescapedString = parseDist.replace(/\\/g, "");
          const jsonString = unescapedString.substring(
            unescapedString.indexOf("{"),
            unescapedString.lastIndexOf("}") + 1
          );
          const district_obj_json = JSON.parse(jsonString);
          distTitle = district_obj_json.district_title;

          // block data
          const block = JSON.stringify(data.block_obj);
          const parseblock = JSON.parse(block);
          const blockString = parseblock.replace(/\\/g, "");
          const jsonBlockString = blockString.substring(
            blockString.indexOf("{"),
            blockString.lastIndexOf("}") + 1
          );
          const block_obj_json = JSON.parse(jsonBlockString);
          blockTitle = block_obj_json.block_title;
        }
      } catch (error) {
        console.error("Error parsing JSON data:", error);
        console.error("state_obj:", data.state_obj);
        console.error("district_obj:", data.district_obj);
        console.error("block_obj:", data.block_obj);
      }

      const userInfoDiv = document.createElement("div");

      userInfoDiv.innerHTML = `
        <p><i class="fas fa-user icon"></i><strong>स्वतःचे नाव :</strong> ${
          data?.f_name
        }</p>
        <hr>
        <p><i class="fas fa-user icon"></i><strong>वडिलांचे नाव:</strong> ${
          data?.m_name
        }</p>
        <hr>
        <p><i class="fas fa-user icon"></i><strong>आडनाव :</strong> ${
          data?.l_name
        }</p>
        <hr>
        <p><i class="far fa-calendar-alt icon"></i><strong>जन्मतारीख :</strong> ${
          data?.dob
        }</p>
        <hr>
        <p><i class="fas fa-user-tie icon"></i><strong>कर्मचारी पद :</strong> ${
          data?.role_name
        }</p>
        <hr>
        <p><i class="fas fa-map-marker-alt icon"></i><strong>पत्ता :</strong> ${
          stateObj?.state_title ?? ""
        },${distTitle ?? ""},${blockTitle ?? ""}</p>
      <div class="col-md-12 d-flex justify-content-center" id="">
                                  <button type="button" class="btn btn-success mt-2" id="ToUpdate">कर्मचारी तपशील अपडेट करा</button>
                              </div>
      `;
      document.addEventListener("DOMContentLoaded", function () {
        // Get the button element
        const submitButton = document.getElementById("ToUpdate");

        // Add event listener to the button
        submitButton.addEventListener("click", function () {
          // Get the user ID from localStorage
          const user = JSON.parse(localStorage.getItem("user"));
          const userId = userIDforupdate ? userIDforupdate : user?.id;
          if (userId) {
            window.location.href = `frm-register_user.php?id=${userId}`;
          } else {
            console.error("User ID not found in localStorage.");
          }
        });
      });
      userCountContainer.appendChild(userInfoDiv);
    }

    //     const StatusDiv = document.querySelector("#StatusRemark");
    //     const StatusDivBmm = document.querySelector("#StatusRemarkbmm");

    //     if (dailyWorkReport?.status_by_cc === "मंजूर") {
    //       StatusDiv.innerHTML = `
    //       <div class="col-md-6">
    //       <p><i class="fa fa-bars "></i><strong> प्रभाग समन्वयक शेरा :</strong> <span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
    //         dailyWorkReport?.status_by_cc
    //       }</span></p>
    //   </div>
    //   <div class="col-md-6 form-group">
    //       <p><i class="fa fa-list-alt"></i><strong> प्रभाग समन्वयक टिप्पणी :</strong> <ul type="disc" style="position: relative;top: -10px;">
    //       <li><span>${
    //         dailyWorkReport?.remark1
    //           ? dailyWorkReport?.remark1
    //           : "data is not available"
    //       }</span></li>
    //       </ul></p>
    //   </div>
    //   <hr>`;
    //     } else if (dailyWorkReport?.status_by_cc === "नामंजूर") {
    //       StatusDiv.innerHTML = `
    //       <div class="col-md-6">
    //       <p><i class="fa fa-bars "></i><strong> प्रभाग समन्वयक शेरा :</strong> <span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
    //         dailyWorkReport?.status_by_cc
    //       }</span></p>
    //   </div>
    //   <div class="col-md-6 form-group">
    //       <p><i class="fa fa-list-alt"></i><strong> प्रभाग समन्वयक टिप्पणी :</strong>  <ul type="disc" style="position: relative;top: -10px;">
    //       <li><span>${
    //         dailyWorkReport?.remark1
    //           ? dailyWorkReport?.remark1
    //           : "data is not available"
    //       }</span></li>
    //       </ul></p>
    //   </div>
    //   <hr>`;
    //     } else if (dailyWorkReport?.status_by_cc === "पेंडिंग") {
    //       StatusDiv.innerHTML = `
    //       <div class="col-md-6">
    //       <p><i class="fa fa-bars "></i><strong> प्रभाग समन्वयक शेरा :</strong>  <span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
    //         dailyWorkReport?.status_by_cc ? dailyWorkReport?.status_by_cc : " "
    //       }</span></p>
    //   </div>
    //   <div class="col-md-6 form-group">
    //       <p><i class="fa fa-list-alt"></i><strong> प्रभाग समन्वयक टिप्पणी :</strong>
    //       <ul type="disc" style="position: relative;top: -10px;">
    //       <li><span>${
    //         dailyWorkReport?.remark1
    //           ? dailyWorkReport?.remark1
    //           : "data is not available"
    //       }</span></li>
    //       </ul>
    //       </p>
    //   </div>
    //   <hr>`;
    //     } else {
    //       StatusDiv.innerHTML = `
    //       <div class="col-md-6">
    //       <p><i class="fa fa-bars "></i><strong> प्रभाग समन्वयक शेरा :</strong>  <span style="color:#D2042D"> प्रभाग समन्वयकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span></p>
    //   </div>
    //   <div class="col-md-6 form-group">
    //       <p><i class="fa fa-list-alt"></i><strong> प्रभाग समन्वयक टिप्पणी :</strong>

    //       <span style="color:#D2042D"> प्रभाग समन्वयकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>
    //       </ul>
    //       </p>
    //   </div>
    //   <hr>`;
    //     }

    //     if (dailyWorkReport?.status_by_bmm === "मंजूर") {
    //       StatusDivBmm.innerHTML = `
    //       <div class="col-md-6">
    //       <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong> <span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
    //         dailyWorkReport?.status_by_bmm
    //       }</span></p>
    //   </div>
    //   <div class="col-md-6 form-group">
    //   <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong> <ul type="disc" style="position: relative;top: -10px;">
    //   <li><span>${
    //     dailyWorkReport?.remark2
    //       ? dailyWorkReport?.remark2
    //       : "data is not available"
    //   }</span></li>
    //   </ul></p>
    // </div>
    //   <hr>`;
    //     } else if (dailyWorkReport?.status_by_bmm === "नामंजूर") {
    //       StatusDivBmm.innerHTML = `
    //       <div class="col-md-6">
    //       <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong> <span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
    //         dailyWorkReport?.status_by_bmm
    //       }</span></p>
    //   </div>
    //   <div class="col-md-6 form-group">
    //   <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong> <ul type="disc" style="position: relative;top: -10px;">
    //   <li><span>${
    //     dailyWorkReport?.remark2
    //       ? dailyWorkReport?.remark2
    //       : "data is not available"
    //   }</span></li>
    //   </ul></p>
    // </div>
    //   <hr>`;
    //     } else if (dailyWorkReport?.status_by_bmm === "पेंडिंग") {
    //       StatusDivBmm.innerHTML = `
    //       <div class="col-md-6">
    //       <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong>  <span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
    //         dailyWorkReport?.status_by_bmm ? dailyWorkReport?.status_by_bmm : " "
    //       }</span></p>
    //   </div>
    //   <div class="col-md-6 form-group">
    //   <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong> <ul type="disc" style="position: relative;top: -10px;">
    //   <li><span>${
    //     dailyWorkReport?.remark2
    //       ? dailyWorkReport?.remark2
    //       : "data is not available"
    //   }</span></li>
    //   </ul></p>
    // </div>
    //   <hr>`;
    //     } else {
    //       StatusDivBmm.innerHTML = `
    //       <div class="col-md-6">
    //       <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong>   <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span></p>
    //   </div>
    //   <div class="col-md-6 form-group">
    //   <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong>
    //   <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>
    //   </p>
    // </div>
    //   <hr>`;
    //     }

    const loginInfoDiv = document.createElement("div");
    loginInfoDiv.innerHTML = `
      <p><i class="fas fa-clock icon"></i><strong>लॉगिन वेळ :</strong> ${
        data?.login_info?.login_time
          ? data?.login_info?.login_time
          : "data is not available"
      }</p>
      <hr>
      <p><i class="fas fa-map-marked-alt icon"></i><strong>लॉगिन जागा :</strong> ${
        data?.login_info?.login_location
          ? data?.login_info?.login_location
          : "data is not available"
      }</p>
      <hr>
      <p><i class="fas fa-clock icon"></i><strong>लॉगआउट वेळ :</strong> 
      ${
        data?.logout_info?.logout_time
          ? data?.logout_info?.logout_time
          : "data is not available"
      }</p>
      <hr>
      <p><i class="fas fa-map-marked-alt icon"></i><strong>लॉगआउट जागा :</strong> ${
        data?.logout_info?.logout_location
          ? data?.logout_info?.logout_location
          : "data is not available"
      }</p>
      <hr>
      `;

    // if daily work report is empty

    if (dailyWorkReport === "आजचा दैनंदिन कामाचा अहवाल सापडला नाही") {
      const locationImageDiv = document.createElement("div");
      locationImageDiv.innerHTML = `
    <p>आजचा दैनंदिन कामाचा अहवाल सापडला नाही</p>`;
      meetingImages.appendChild(locationImageDiv);
    } else {
      // Location image
      const locationImageDiv = document.createElement("div");
      if (dailyWorkReport.image_of_location) {
        console.log(dailyWorkReport.image_of_location);
        const locationImageDiv = document.createElement("div");
        locationImageDiv.innerHTML = `
      <img src="${dailyWorkReport.image_of_location}" alt="Meeting Image 1" class="img-fluid" style="max-height: 200px;">`;
        locationImage.appendChild(locationImageDiv);
      }

      if (dailyWorkReport.meeting_photos === '["undefined"]') {
        const div = document.createElement("div");
        div.textContent = "Meeting photos are not available.";
        meetingImages.appendChild(div);
      } else if (dailyWorkReport.meeting_photos) {
        const meetingImage = JSON.parse(dailyWorkReport.meeting_photos);

        try {
          const meetingData = JSON.parse(meetingImage);

          meetingData.forEach((item, index) => {
            const div = document.createElement("div");
            div.innerHTML = `
                <div class="col-md-12">
                  <img src="${item}" alt="Meeting Image ${
              index + 1
            }" class="img-fluid" style="max-height: 200px;"> 
                </div>
              `;
            console.log(`Meeting Image ${index + 1}: ${item}`);
            meetingImages.appendChild(div);
          });
        } catch (error) {
          console.error("Error parsing meeting_photos:", error);
        }
      } else {
        console.error("dailyWorkReport.meeting_photos is not defined");
      }
    }
    const StatusDivPD = document.querySelector("#statusByPD");
    const StatusDivDMM = document.querySelector("#statusByDMM");
    const StatusDivBMM = document.querySelector("#StatusByBMM");
    const StatusDivCC = document.querySelector("#statusBycc");
    const userroledata = data?.role ? data?.role : userrole;

    if (userroledata == 1) {
      document.getElementById("StatusRemarkPD").style.display = "none";
      document.getElementById("StatusRemarkDMM").style.display = "none";
      document.getElementById("dailyimage").style.display = "none";
      document.getElementById("dailyimages").style.display = "none";
      document.getElementById("mulyamapan").style.display = "none";
      document.getElementById("dateWiseEvaluation").style.display = "none";
      document.getElementById("StatusRemark").style.display = "none";
      document.getElementById("StatusRemarkbmm").style.display = "none";
    } else if (userroledata == 2) {
      document.getElementById("StatusRemarkPD").style.display = "block";
      document.getElementById("StatusRemarkDMM").style.display = "none";
      document.getElementById("StatusRemark").style.display = "none";
      document.getElementById("StatusRemarkbmm").style.display = "none";
      document.getElementById("mulyamapan").style.display = "none";
      document.getElementById("dateWiseEvaluation").style.display = "none";
      if (dailyWorkReport?.status_by_PD === "मंजूर") {
        StatusDivPD.innerHTML = `
        <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> प्रकल्प संचालक शेरा :</strong> <span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
          dailyWorkReport?.status_by_PD
        }</span></p>
    </div>
    <div class="col-md-6 ">
    <p><i class="fa fa-list-alt"></i><strong> प्रकल्प संचालक टिप्पणी :</strong> 
  
    <span>${
      dailyWorkReport?.remark_by_PD
        ? dailyWorkReport?.remark_by_PD
        : "प्रकल्प संचालकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही."
    }</span>
    </p>
  </div></div>
    <hr>`;
      } else if (dailyWorkReport?.status_by_PD === "नामंजूर") {
        StatusDivPD.innerHTML = `
        <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> प्रकल्प संचालक शेरा  :</strong> <span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
          dailyWorkReport?.status_by_PD
        }</span></p>
    </div>
    <div class="col-md-6 form-group">
    <p><i class="fa fa-list-alt"></i><strong> प्रकल्प संचालक टिप्पणी :</strong> <span>${
      dailyWorkReport?.remark_by_PD
        ? dailyWorkReport?.remark_by_PD
        : "प्रकल्प संचालकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही."
    }</span></p>
  </div>
  </div>
    <hr>`;
      } else if (dailyWorkReport?.status_by_PD === "पेंडिंग") {
        StatusDivPD.innerHTML = `
        <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> प्रकल्प संचालक शेरा :</strong>  <span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
          dailyWorkReport?.status_by_PD ? dailyWorkReport?.status_by_PD : " "
        }</span></p>
    </div>
    <div class="col-md-6 form-group">
    <p><i class="fa fa-list-alt"></i><strong> प्रकल्प संचालक टिप्पणी :</strong><span>${
      dailyWorkReport?.remark_by_PD
        ? dailyWorkReport?.remark_by_PD
        : "प्रकल्प संचालकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही."
    }</span></p>
  </div>
  </div>
    <hr>`;
      } else {
        StatusDivPD.innerHTML = `
        <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> प्रकल्प संचालक शेरा :</strong>   <span style="color:#D2042D">प्रकल्प संचालकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span></p>
    </div>
    <div class="col-md-6 form-group">
    <p><i class="fa fa-list-alt"></i><strong> प्रकल्प संचालक टिप्पणी :</strong> 
    <span style="color:#D2042D">प्रकल्प संचालकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>
    </p>
  </div>
  </div>
    `;
      }
    } else if (userroledata >= 3 && userroledata <= 14) {
      document.getElementById("StatusRemarkPD").style.display = "none";
      document.getElementById("StatusRemarkDMM").style.display = "block";
      document.getElementById("StatusRemark").style.display = "none";
      document.getElementById("StatusRemarkbmm").style.display = "none";
      document.getElementById("mulyamapan").style.display = "none";
      document.getElementById("dateWiseEvaluation").style.display = "none";
      if (dailyWorkReport?.status_by_DMM === "मंजूर") {
        StatusDivDMM.innerHTML = `
            <div class="row">
            <div class="col-md-6">
            <p><i class="fa fa-bars "></i><strong>जिल्हा अभियान व्यवस्थापक शेरा :</strong> <span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
              dailyWorkReport?.status_by_DMM
            }</span></p>
        </div>
        <div class="col-md-6 ">
        <p><i class="fa fa-list-alt"></i><strong> जिल्हा अभियान व्यवस्थापक टिप्पणी :</strong> 
      
        <span>${
          dailyWorkReport?.remark_by_DMM
            ? dailyWorkReport?.remark_by_DMM
            : "जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही."
        }</span>
        </p>
      </div></div>
        <hr>`;
      } else if (dailyWorkReport?.status_by_DMM === "नामंजूर") {
        StatusDivDMM.innerHTML = `
            <div class="row">
            <div class="col-md-6">
            <p><i class="fa fa-bars "></i><strong> जिल्हा अभियान व्यवस्थापक शेरा  :</strong> <span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
              dailyWorkReport?.status_by_DMM
            }</span></p>
        </div>
        <div class="col-md-6 form-group">
        <p><i class="fa fa-list-alt"></i><strong> जिल्हा अभियान व्यवस्थापक टिप्पणी :</strong> <span>${
          dailyWorkReport?.remark_by_DMM
            ? dailyWorkReport?.remark_by_DMM
            : "जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही."
        }</span></p>
      </div>
      </div>
        <hr>`;
      } else if (dailyWorkReport?.status_by_DMM === "पेंडिंग") {
        StatusDivDMM.innerHTML = `
            <div class="row">
            <div class="col-md-6">
            <p><i class="fa fa-bars "></i><strong> जिल्हा अभियान व्यवस्थापक शेरा :</strong>  <span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
              dailyWorkReport?.status_by_DMM
                ? dailyWorkReport?.status_by_DMM
                : " "
            }</span></p>
        </div>
        <div class="col-md-6 form-group">
        <p><i class="fa fa-list-alt"></i><strong> जिल्हा अभियान व्यवस्थापक टिप्पणी :</strong><span>${
          dailyWorkReport?.remark_by_DMM
            ? dailyWorkReport?.remark_by_DMM
            : "जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही."
        }</span></p>
      </div>
      </div>
        <hr>`;
      } else {
        StatusDivDMM.innerHTML = `
            <div class="row">
            <div class="col-md-6">
            <p><i class="fa fa-bars "></i><strong> जिल्हा अभियान व्यवस्थापक शेरा :</strong>   <span style="color:#D2042D">जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span></p>
        </div>
        <div class="col-md-6 form-group">
        <p><i class="fa fa-list-alt"></i><strong> जिल्हा अभियान व्यवस्थापक टिप्पणी :</strong> 
        <span style="color:#D2042D">जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>
        </p>
      </div>
      </div>
        <hr>`;
      }
    } else if (userroledata >= 17 && userroledata <= 22) {
      document.getElementById("StatusRemarkPD").style.display = "none";
      document.getElementById("StatusRemarkDMM").style.display = "none";
      document.getElementById("StatusRemark").style.display = "none";
      document.getElementById("StatusRemarkbmm").style.display = "none";
      if (dailyWorkReport?.status_by_cc === "मंजूर") {
        StatusDivCC.innerHTML = `
        <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> प्रभाग समन्वयक शेरा :</strong> <span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
          dailyWorkReport?.status_by_cc
        }</span></p>
    </div>
    <div class="col-md-6 form-group">
        <p><i class="fa fa-list-alt"></i><strong> प्रभाग समन्वयक टिप्पणी :</strong> <ul type="disc" style="position: relative;top: -10px;">
        <li><span>${
          dailyWorkReport?.remark1
            ? dailyWorkReport?.remark1
            : "data is not available"
        }</span></li>
        </ul></p>
    </div>
    </div>
    <hr>`;
      } else if (dailyWorkReport?.status_by_cc === "नामंजूर") {
        StatusDivCC.innerHTML = `
        <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> प्रभाग समन्वयक शेरा :</strong> <span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
          dailyWorkReport?.status_by_cc
        }</span></p>
    </div>
    <div class="col-md-6 form-group">
        <p><i class="fa fa-list-alt"></i><strong> प्रभाग समन्वयक टिप्पणी :</strong>  <ul type="disc" style="position: relative;top: -10px;">
        <li><span>${
          dailyWorkReport?.remark1
            ? dailyWorkReport?.remark1
            : "data is not available"
        }</span></li>
        </ul></p>
    </div>
    </div>
    <hr>`;
      } else if (dailyWorkReport?.status_by_cc === "पेंडिंग") {
        StatusDivCC.innerHTML = `
        <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> प्रभाग समन्वयक शेरा :</strong>  <span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
          dailyWorkReport?.status_by_cc ? dailyWorkReport?.status_by_cc : " "
        }</span></p>
    </div>
    <div class="col-md-6 form-group">
        <p><i class="fa fa-list-alt"></i><strong> प्रभाग समन्वयक टिप्पणी :</strong> 
        <ul type="disc" style="position: relative;top: -10px;">
        <li><span>${
          dailyWorkReport?.remark1
            ? dailyWorkReport?.remark1
            : "data is not available"
        }</span></li>
        </ul>
        </p>
    </div>
    </div>
    <hr>`;
      } else {
        StatusDivCC.innerHTML = `
        <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> प्रभाग समन्वयक शेरा :</strong>  <span style="color:#D2042D"> प्रभाग समन्वयकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span></p>
    </div>
    <div class="col-md-6 form-group">
        <p><i class="fa fa-list-alt"></i><strong> प्रभाग समन्वयक टिप्पणी :</strong> 
        
        <span style="color:#D2042D"> प्रभाग समन्वयकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>
        </ul>
        </p>
    </div>
    </div>
    <hr>`;
      }

      if (dailyWorkReport?.status_by_bmm === "मंजूर") {
        StatusDivBMM.innerHTML = `
        <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong> <span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
          dailyWorkReport?.status_by_bmm
        }</span></p>
    </div>
    <div class="col-md-6 form-group">
    <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong> <ul type="disc" style="position: relative;top: -10px;">
    <li><span>${
      dailyWorkReport?.remark2
        ? dailyWorkReport?.remark2
        : "data is not available"
    }</span></li>
    </ul></p>
  </div>
  </div>
    <hr>`;
      } else if (dailyWorkReport?.status_by_bmm === "नामंजूर") {
        StatusDivBMM.innerHTML = `
        <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong> <span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
          dailyWorkReport?.status_by_bmm
        }</span></p>
    </div>
    <div class="col-md-6 form-group">
    <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong> <ul type="disc" style="position: relative;top: -10px;">
    <li><span>${
      dailyWorkReport?.remark2
        ? dailyWorkReport?.remark2
        : "data is not available"
    }</span></li>
    </ul></p>
  </div>
  </div>
      <hr>`;
      } else if (dailyWorkReport?.status_by_bmm === "पेंडिंग") {
        StatusDivBMM.innerHTML = `
        <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong>  <span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
          dailyWorkReport?.status_by_bmm ? dailyWorkReport?.status_by_bmm : " "
        }</span></p>
    </div>
    <div class="col-md-6 form-group">
    <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong> <ul type="disc" style="position: relative;top: -10px;">
    <li><span>${
      dailyWorkReport?.remark2
        ? dailyWorkReport?.remark2
        : "data is not available"
    }</span></li>
    </ul></p>
  </div>
  <div>
    <hr>`;
      } else {
        StatusDivBMM.innerHTML = `
        <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong>   <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span></p>
    </div>
    <div class="col-md-6 form-group">
    <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong> 
    <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>
    </p>
  </div>
  </div>
    <hr>`;
      }
    } else if (userroledata >= 26 && userroledata <= 28) {
      document.getElementById("StatusRemarkPD").style.display = "none";
      document.getElementById("StatusRemarkDMM").style.display = "block";
      document.getElementById("StatusRemark").style.display = "none";
      document.getElementById("StatusRemarkbmm").style.display = "none";
      document.getElementById("mulyamapan").style.display = "none";
      document.getElementById("dateWiseEvaluation").style.display = "none";
      if (dailyWorkReport?.status_by_DMM === "मंजूर") {
        StatusDivDMM.innerHTML = `
    <div class="row">
    <div class="col-md-6">
    <p><i class="fa fa-bars "></i><strong>जिल्हा अभियान व्यवस्थापक शेरा :</strong> <span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
      dailyWorkReport?.status_by_DMM
    }</span></p>
</div>
<div class="col-md-6 ">
<p><i class="fa fa-list-alt"></i><strong> जिल्हा अभियान व्यवस्थापक टिप्पणी :</strong> 

<span>${
          dailyWorkReport?.remark_by_DMM
            ? dailyWorkReport?.remark_by_DMM
            : "जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही."
        }</span>
</p>
</div></div>
<hr>`;
      } else if (dailyWorkReport?.status_by_DMM === "नामंजूर") {
        StatusDivDMM.innerHTML = `
    <div class="row">
    <div class="col-md-6">
    <p><i class="fa fa-bars "></i><strong> जिल्हा अभियान व्यवस्थापक शेरा  :</strong> <span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
      dailyWorkReport?.status_by_DMM
    }</span></p>
</div>
<div class="col-md-6 form-group">
<p><i class="fa fa-list-alt"></i><strong> जिल्हा अभियान व्यवस्थापक टिप्पणी :</strong> <span>${
          dailyWorkReport?.remark_by_DMM
            ? dailyWorkReport?.remark_by_DMM
            : "जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही."
        }</span></p>
</div>
</div>
<hr>`;
      } else if (dailyWorkReport?.status_by_DMM === "पेंडिंग") {
        StatusDivDMM.innerHTML = `
    <div class="row">
    <div class="col-md-6">
    <p><i class="fa fa-bars "></i><strong> जिल्हा अभियान व्यवस्थापक शेरा :</strong>  <span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
      dailyWorkReport?.status_by_DMM ? dailyWorkReport?.status_by_DMM : " "
    }</span></p>
</div>
<div class="col-md-6 form-group">
<p><i class="fa fa-list-alt"></i><strong> जिल्हा अभियान व्यवस्थापक टिप्पणी :</strong><span>${
          dailyWorkReport?.remark_by_DMM
            ? dailyWorkReport?.remark_by_DMM
            : "जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही."
        }</span></p>
</div>
</div>
<hr>`;
      } else {
        StatusDivDMM.innerHTML = `
    <div class="row">
    <div class="col-md-6">
    <p><i class="fa fa-bars "></i><strong> जिल्हा अभियान व्यवस्थापक शेरा :</strong>   <span style="color:#D2042D">जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span></p>
</div>
<div class="col-md-6 form-group">
<p><i class="fa fa-list-alt"></i><strong> जिल्हा अभियान व्यवस्थापक टिप्पणी :</strong> 
<span style="color:#D2042D">जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>
</p>
</div>
</div>
<hr>`;
      }
    } else if (userroledata == 24) {
      document.getElementById("StatusRemarkPD").style.display = "none";
      document.getElementById("StatusRemarkDMM").style.display = "block";
      document.getElementById("StatusRemark").style.display = "none";
      document.getElementById("StatusRemarkbmm").style.display = "none";
      document.getElementById("mulyamapan").style.display = "none";
      document.getElementById("dateWiseEvaluation").style.display = "none";
      if (dailyWorkReport?.status_by_DMM === "मंजूर") {
        StatusDivDMM.innerHTML = `
<div class="row">
<div class="col-md-6">
<p><i class="fa fa-bars "></i><strong>जिल्हा अभियान व्यवस्थापक शेरा :</strong> <span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
          dailyWorkReport?.status_by_DMM
        }</span></p>
</div>
<div class="col-md-6 ">
<p><i class="fa fa-list-alt"></i><strong> जिल्हा अभियान व्यवस्थापक टिप्पणी :</strong> 

<span>${
          dailyWorkReport?.remark_by_DMM
            ? dailyWorkReport?.remark_by_DMM
            : "जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही."
        }</span>
</p>
</div></div>
<hr>`;
      } else if (dailyWorkReport?.status_by_DMM === "नामंजूर") {
        StatusDivDMM.innerHTML = `
<div class="row">
<div class="col-md-6">
<p><i class="fa fa-bars "></i><strong> जिल्हा अभियान व्यवस्थापक शेरा  :</strong> <span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
          dailyWorkReport?.status_by_DMM
        }</span></p>
</div>
<div class="col-md-6 form-group">
<p><i class="fa fa-list-alt"></i><strong> जिल्हा अभियान व्यवस्थापक टिप्पणी :</strong> <span>${
          dailyWorkReport?.remark_by_DMM
            ? dailyWorkReport?.remark_by_DMM
            : "जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही."
        }</span></p>
</div>
</div>
<hr>`;
      } else if (dailyWorkReport?.status_by_DMM === "पेंडिंग") {
        StatusDivDMM.innerHTML = `
<div class="row">
<div class="col-md-6">
<p><i class="fa fa-bars "></i><strong> जिल्हा अभियान व्यवस्थापक शेरा :</strong>  <span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
          dailyWorkReport?.status_by_DMM ? dailyWorkReport?.status_by_DMM : " "
        }</span></p>
</div>
<div class="col-md-6 form-group">
<p><i class="fa fa-list-alt"></i><strong> जिल्हा अभियान व्यवस्थापक टिप्पणी :</strong><span>${
          dailyWorkReport?.remark_by_DMM
            ? dailyWorkReport?.remark_by_DMM
            : "जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही."
        }</span></p>
</div>
</div>
<hr>`;
      } else {
        StatusDivDMM.innerHTML = `
<div class="row">
<div class="col-md-6">
<p><i class="fa fa-bars "></i><strong> जिल्हा अभियान व्यवस्थापक शेरा :</strong>   <span style="color:#D2042D">जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span></p>
</div>
<div class="col-md-6 form-group">
<p><i class="fa fa-list-alt"></i><strong> जिल्हा अभियान व्यवस्थापक टिप्पणी :</strong> 
<span style="color:#D2042D">जिल्हा अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>
</p>
</div>
</div>
<hr>`;
      }
    } else if (userroledata == 16) {
      document.getElementById("StatusRemarkPD").style.display = "none";
      document.getElementById("StatusRemarkDMM").style.display = "block";
      document.getElementById("StatusRemark").style.display = "none";
      document.getElementById("StatusRemarkbmm").style.display = "none";
      document.getElementById("mulyamapan").style.display = "none";
      document.getElementById("dateWiseEvaluation").style.display = "none";
      if (dailyWorkReport?.status_by_bmm === "मंजूर") {
        StatusDivBMM.innerHTML = `
          <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong> <span style="background-color:#008000;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
          dailyWorkReport?.status_by_bmm
        }</span></p>
    </div>
    <div class="col-md-6 form-group">
    <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong> <ul type="disc" style="position: relative;top: -10px;">
    <li><span>${
      dailyWorkReport?.remark2
        ? dailyWorkReport?.remark2
        : "data is not available"
    }</span></li>
    </ul></p>
  </div>
  </div>
    <hr>`;
      } else if (dailyWorkReport?.status_by_bmm === "नामंजूर") {
        StatusDivBMM.innerHTML = `
          <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong> <span style="background-color:#D2042D;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
          dailyWorkReport?.status_by_bmm
        }</span></p>
    </div>
    <div class="col-md-6 form-group">
    <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong> <ul type="disc" style="position: relative;top: -10px;">
    <li><span>${
      dailyWorkReport?.remark2
        ? dailyWorkReport?.remark2
        : "data is not available"
    }</span></li>
    </ul></p>
  </div>
  </div>
    <hr>`;
      } else if (dailyWorkReport?.status_by_bmm === "पेंडिंग") {
        StatusDivBMM.innerHTML = `
          <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong>  <span style="background-color:#F4BB44;color:#fff;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;border-radius:5px"> ${
          dailyWorkReport?.status_by_bmm ? dailyWorkReport?.status_by_bmm : " "
        }</span></p>
    </div>
    <div class="col-md-6 form-group">
    <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong> <ul type="disc" style="position: relative;top: -10px;">
    <li><span>${
      dailyWorkReport?.remark2
        ? dailyWorkReport?.remark2
        : "data is not available"
    }</span></li>
    </ul></p>
  </div>
  </div>
    <hr>`;
      } else {
        StatusDivBMM.innerHTML = `
        <div class="row">
        <div class="col-md-6">
        <p><i class="fa fa-bars "></i><strong> तालुका अभियान व्यवस्थापक शेरा :</strong>   <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही शेरा प्राप्त झालेला नाही . </span></p>
    </div>
    <div class="col-md-6 form-group">
    <p><i class="fa fa-list-alt"></i><strong> तालुका अभियान व्यवस्थापक टिप्पणी :</strong>
    <span style="color:#D2042D">तालुका अभियान व्यवस्थापकाकडून अद्याप कोणतीही प्रतिक्रिया प्राप्त झालेली नाही. </span>
    </p>
  </div>
  </div>
    <hr>`;
      }
    }

    // questions
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("card-body");
    const table = document.createElement("table");
    table.classList.add("table", "table-bordered");
    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
          <th>प्रश्न क्र.</th>
          <th>प्रश्न</th>
          <th>उत्तर</th>
        </tr>
      `;

    console.log("Before if condition");

    const tbody = document.createElement("tbody");
    KrushisakhiMandhanSubmitedAnswers.forEach((data) => {
      data.questionAndAnswerData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.krushi_questions}</td>
            <td>${item.selected_option === 1 ? "होय" : "नाही  "}</td>
          `;
        tbody.appendChild(tr);
      });
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    questionDiv.appendChild(table);

    PashuSakhiMandhanSubmitedAnswers.forEach((data) => {
      data.questionAndAnswerData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
              <td>${index + 1}</td> 
              <td>${item.pashuSakhi_questions}</td>
              <td>${item.selected_options === 1 ? "होय" : "नाही"}</td>
            `;
        tbody.appendChild(tr);
      });
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    questionDiv.appendChild(table);

    CTCAhwalSubmitedAnswers.forEach((data) => {
      data.questionAndAnswerData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
              <td>${index + 1}</td>
              <td>${item.CTC_questions}</td>
              <td>${item.answers}</td>
            `;
        tbody.appendChild(tr);
      });
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    questionDiv.appendChild(table);

    FICRPSubmitedAnswers.forEach((data) => {
      data.questionAndAnswerData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
              <td>${index + 1}</td>
              <td>${item.FICRP_questions}</td>
              <td>${item.answers}</td>
            `;
        tbody.appendChild(tr);
      });
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    questionDiv.appendChild(table);

    BanksakhiSubmitedAnswers.forEach((data) => {
      data.questionAndAnswerData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
              <td>${index + 1}</td>
              <td>${item.bank_Sakhi_questions}</td>
              <td>${item.answers}</td>
            `;
        tbody.appendChild(tr);
      });
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    questionDiv.appendChild(table);

    ICRPSubmitedAnswers.forEach((data) => {
      data.questionAndAnswerData.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${item.icrp_questions}</td>
          <td>${item.submited_answers_rate}</td>
        `;
        tbody.appendChild(tr);
      });
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    questionDiv.appendChild(table);

    loginDetails.appendChild(loginInfoDiv);

    // userCountContainer.appendChild(userInfoDiv);
    questionAnswerDiv.appendChild(questionDiv);
  } else {
    userCountContainer.innerHTML = `<p>No data available</p>`;
  }
};
