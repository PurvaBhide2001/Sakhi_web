let payload = {};

document.addEventListener("DOMContentLoaded", () => {
  const locationVideo = document.getElementById("location_video");
  const meetingVideo = document.getElementById("meeting_video");
  const locationCanvas = document.getElementById("location_canvas");
  const meetingCanvas = document.getElementById("meeting_canvas");
  const locationSnapshotDiv = document.getElementById("location_snapshot");
  const meetingSnapshotDiv = document.getElementById("meeting_snapshot");
  const locationSnapshotImagesDiv = document.getElementById(
    "location_snapshot-images"
  );
  const meetingSnapshotImagesDiv = document.getElementById(
    "meeting_snapshot-images"
  );
  const locationCaptureButton = document.getElementById("location_capture");
  const meetingCaptureButton = document.getElementById("meeting_capture");
  const locationUploadButton = document.getElementById("location_upload");
  const meetingUploadButton = document.getElementById("meeting_upload");
  const locationCameraIcon = document.getElementById("location_camera_icon");
  const meetingCameraIcon = document.getElementById("meeting_camera_icon");

  let locationCapturedImages = [];
  let meetingCapturedImages = [];

  let locationStream;
  let meetingStream;

  function displayLocationCapturedImages() {
    locationSnapshotImagesDiv.innerHTML = "";
    locationCapturedImages.forEach((imageData, index) => {
      const img = document.createElement("img");
      img.src = imageData.path;
      img.alt = `Location Captured Image ${index + 1}`;
      locationSnapshotImagesDiv.appendChild(img);
    });
  }

  function displayMeetingCapturedImages() {
    meetingSnapshotImagesDiv.innerHTML = "";
    meetingCapturedImages.forEach((imageData, index) => {
      const img = document.createElement("img");
      img.src = imageData.path;
      img.alt = `Meeting Captured Image ${index + 1}`;
      meetingSnapshotImagesDiv.appendChild(img);
    });
  }

  function toggleSnapshotVisibility() {
    if (locationCapturedImages.length > 0) {
      locationSnapshotDiv.style.display = "block";
      locationUploadButton.style.display = "block";
    } else {
      locationSnapshotDiv.style.display = "none";
      locationUploadButton.style.display = "none";
    }

    if (meetingCapturedImages.length > 0) {
      meetingSnapshotDiv.style.display = "block";
      meetingUploadButton.style.display = "block";
    } else {
      meetingSnapshotDiv.style.display = "none";
      meetingUploadButton.style.display = "none";
    }
  }

  function dataURLToBlob(dataURL) {
    const byteString = atob(dataURL.split(",")[1]);
    const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

  locationCameraIcon.addEventListener("click", () => {
    if (window.AndroidWebView) {
      // Call the Android function to open the camera
      window.AndroidWebView.openCamera("location");
    } else {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          locationStream = stream;
          locationVideo.srcObject = stream;
          locationVideo.style.display = "block";
          locationCanvas.style.display = "block";
          locationCaptureButton.style.display = "block";
          locationVideo.play();
        })
        .catch(function (err) {
          console.error("Error accessing the camera for location: ", err);
        });
    }
  });

  meetingCameraIcon.addEventListener("click", () => {
    if (window.AndroidWebView) {
      // Call the Android function to open the camera
      window.AndroidWebView.openCamera("Camera open meeting");
    } else {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          meetingStream = stream;
          meetingVideo.srcObject = stream;
          meetingVideo.style.display = "block";
          meetingCanvas.style.display = "block";
          meetingCaptureButton.style.display = "block";
          meetingVideo.play();
        })
        .catch(function (err) {
          console.error("Error accessing the camera for meeting: ", err);
        });
    }
  });

  locationCaptureButton.addEventListener("click", (event) => {
    event.preventDefault();
    locationCanvas
      .getContext("2d")
      .drawImage(
        locationVideo,
        0,
        0,
        locationCanvas.width,
        locationCanvas.height
      );
    const timestamp = Date.now();
    const imageName = `${timestamp}.png`;
    console.log("Location Captured Image Name:", imageName);
    const imageData = locationCanvas.toDataURL("image/png");
    const imageObject = { path: imageData, name: imageName };
    locationCapturedImages.push(imageObject);
    displayLocationCapturedImages();
    toggleSnapshotVisibility();
  });

  meetingCaptureButton.addEventListener("click", (event) => {
    event.preventDefault();
    meetingCanvas
      .getContext("2d")
      .drawImage(meetingVideo, 0, 0, meetingCanvas.width, meetingCanvas.height);
    const timestamp = Date.now();
    const imageName = `${timestamp}.png`;
    console.log("Meeting Captured Image Name:", imageName);
    const imageData = meetingCanvas.toDataURL("image/png");
    const imageObject = { path: imageData, name: imageName };
    meetingCapturedImages.push(imageObject);
    displayMeetingCapturedImages();
    toggleSnapshotVisibility();
  });

  // Other code remains unchanged

  locationUploadButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const locationImageUrls = []; // Array to store uploaded location image URLs
    for (const imageObject of locationCapturedImages) {
      try {
        const blob = dataURLToBlob(imageObject.path);
        const file = new File([blob], imageObject.name, { type: blob.type });
        console.log("Uploading Location Image:", imageObject.name);
        const response = await uploadImageaApi(file);
        const imageUrl = JSON.parse(response).url; // Extract uploaded image URL
        locationImageUrls.push(imageUrl); // Add URL to the array
        console.log("Uploaded Location Image Path:", imageUrl);
      } catch (error) {
        console.error("Error uploading location image:", error);
      }
    }

    // Update payload with location image URL
    if (locationImageUrls.length > 0) {
      payload.image_of_location = locationImageUrls[0]; // Assuming only one location image is uploaded
    }
  });

  meetingUploadButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const meetingImageUrls = []; // Array to store uploaded meeting image URLs
    for (const imageObject of meetingCapturedImages) {
      try {
        const blob = dataURLToBlob(imageObject.path);
        const file = new File([blob], imageObject.name, { type: blob.type });
        console.log("Uploading Meeting Image:", imageObject.name);
        const response = await uploadImageaApi(file);
        const imageUrl = JSON.parse(response).url; // Extract uploaded image URL
        meetingImageUrls.push(imageUrl); // Add URL to the array
        console.log("Uploaded Meeting Image Path:", imageUrl);
      } catch (error) {
        console.error("Error uploading meeting image:", error);
      }
    }

    // Update payload with meeting image URLs
    payload.meeting_photos = meetingImageUrls;
  });

  window.addEventListener("beforeunload", () => {
    if (locationStream) {
      locationStream.getTracks().forEach((track) => track.stop());
    }
    if (meetingStream) {
      meetingStream.getTracks().forEach((track) => track.stop());
    }
  });
});

let imgUrl;
document.querySelector(`#image_of_location`).addEventListener("change", (e) => {
  console.log("Photo Photo", e.target.files[0]);
  imgUrl = uploadImageaApi(e.target.files[0]);
  imgUrl = JSON.parse(imgUrl).url;
  console.log("imgUrl", imgUrl);
});
document.getElementById("remark1_div").style.display = "none";
document.getElementById("remark2_div").style.display = "none";
document.getElementById("statusbmm").style.display = "none";
document.getElementById("statuscc").style.display = "none";
document.getElementById("statusDmm").style.display = "none";
document.getElementById("statusPd").style.display = "none";
document.getElementById("remarkPd_div").style.display = "none";
document.getElementById("remarkDmm_div").style.display = "none";
// document.getElementById("status").style.display = "none";
let imgUrl1;
document.querySelector(`#meeting_photos`).addEventListener("change", (e) => {
  console.log("Meeting Photos", e.target.files);
  const files = e.target.files;
  imgUrl1 = []; // Reset imgUrl1 array

  for (const file of files) {
    const url = uploadImageaApi(file);
    imgUrl1.push(JSON.parse(url).url);
    console.log("Meeting photo URL:", JSON.parse(url).url);
  }
});

const registerWorkReport = async () => {
  try {
    document.querySelector("#submit").addEventListener("click", async (e) => {
      e.preventDefault();

      const formData = new FormData(
        document.getElementById("WorkReportFormData")
      );

      const typeOfWork = formData.get("type_of_work").trim();
      const completedWork = formData.get("completed_work").trim();

      if (!typeOfWork || !completedWork) {
        alert("Please fill in all the required fields.");
        return;
      }

      // Update payload with other form data
      payload = {
        ...payload,
        user_id: formData.get("user_id"),
        date: formData.get("date"),
        location: formData.get("location"),
        completed_work: completedWork,
        type_of_work: typeOfWork,
        remark1: formData.get("remark1"),
        remark2: formData.get("remark2"),
        role: formData.get("role"),
      };

      console.log("Payload:", payload);

      const { data: res, status } = await workReportApi.register(payload);
      console.log(res);
      if (status === 200) {
        alert("Work report registered successfully!");
        window.location.href = "index.php";
      } else if (status === 409) {
        alert("This user has already filed a report for today!!!!");
      } else {
        alert("Work report registration failed. Please try again.");
      }
    });
  } catch (error) {
    console.error("Error occurred:", error);
    alert("An error occurred. Please try again later.");
  }
};
// let payload = {};

// document.addEventListener("DOMContentLoaded", () => {
//   const locationVideo = document.getElementById("location_video");
//   const meetingVideo = document.getElementById("meeting_video");
//   const locationCanvas = document.getElementById("location_canvas");
//   const meetingCanvas = document.getElementById("meeting_canvas");
//   const locationSnapshotDiv = document.getElementById("location_snapshot");
//   const meetingSnapshotDiv = document.getElementById("meeting_snapshot");
//   const locationSnapshotImagesDiv = document.getElementById(
//     "location_snapshot-images"
//   );
//   const meetingSnapshotImagesDiv = document.getElementById(
//     "meeting_snapshot-images"
//   );
//   const locationCaptureButton = document.getElementById("location_capture");
//   const meetingCaptureButton = document.getElementById("meeting_capture");
//   const locationUploadButton = document.getElementById("location_upload");
//   const meetingUploadButton = document.getElementById("meeting_upload");
//   const locationCameraIcon = document.getElementById("location_camera_icon");
//   const meetingCameraIcon = document.getElementById("meeting_camera_icon");

//   let locationCapturedImages = [];
//   let meetingCapturedImages = [];

//   let locationStream;
//   let meetingStream;

//   function displayLocationCapturedImages() {
//     locationSnapshotImagesDiv.innerHTML = "";
//     locationCapturedImages.forEach((imageData, index) => {
//       const img = document.createElement("img");
//       img.src = imageData.path;
//       img.alt = `Location Captured Image ${index + 1}`;
//       locationSnapshotImagesDiv.appendChild(img);
//     });
//   }

//   function displayMeetingCapturedImages() {
//     meetingSnapshotImagesDiv.innerHTML = "";
//     meetingCapturedImages.forEach((imageData, index) => {
//       const img = document.createElement("img");
//       img.src = imageData.path;
//       img.alt = `Meeting Captured Image ${index + 1}`;
//       meetingSnapshotImagesDiv.appendChild(img);
//     });
//   }

//   function toggleSnapshotVisibility() {
//     if (locationCapturedImages.length > 0) {
//       locationSnapshotDiv.style.display = "block";
//       locationUploadButton.style.display = "block";
//     } else {
//       locationSnapshotDiv.style.display = "none";
//       locationUploadButton.style.display = "none";
//     }

//     if (meetingCapturedImages.length > 0) {
//       meetingSnapshotDiv.style.display = "block";
//       meetingUploadButton.style.display = "block";
//     } else {
//       meetingSnapshotDiv.style.display = "none";
//       meetingUploadButton.style.display = "none";
//     }
//   }

//   function dataURLToBlob(dataURL) {
//     const byteString = atob(dataURL.split(",")[1]);
//     const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
//     const ab = new ArrayBuffer(byteString.length);
//     const ia = new Uint8Array(ab);
//     for (let i = 0; i < byteString.length; i++) {
//       ia[i] = byteString.charCodeAt(i);
//     }
//     return new Blob([ab], { type: mimeString });
//   }

//   locationCameraIcon.addEventListener("click", () => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then(function (stream) {
//         locationStream = stream;
//         locationVideo.srcObject = stream;
//         locationVideo.style.display = "block";
//         locationCanvas.style.display = "block";
//         locationCaptureButton.style.display = "block";
//         locationVideo.play();
//       })
//       .catch(function (err) {
//         console.error("Error accessing the camera for location: ", err);
//       });
//   });

//   meetingCameraIcon.addEventListener("click", () => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then(function (stream) {
//         meetingStream = stream;
//         meetingVideo.srcObject = stream;
//         meetingVideo.style.display = "block";
//         meetingCanvas.style.display = "block";
//         meetingCaptureButton.style.display = "block";
//         meetingVideo.play();
//       })
//       .catch(function (err) {
//         console.error("Error accessing the camera for meeting: ", err);
//       });
//   });

//   locationCaptureButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     locationCanvas
//       .getContext("2d")
//       .drawImage(
//         locationVideo,
//         0,
//         0,
//         locationCanvas.width,
//         locationCanvas.height
//       );
//     const timestamp = Date.now();
//     const imageName = `${timestamp}.png`;
//     console.log("Location Captured Image Name:", imageName);
//     const imageData = locationCanvas.toDataURL("image/png");
//     const imageObject = { path: imageData, name: imageName };
//     locationCapturedImages.push(imageObject);
//     displayLocationCapturedImages();
//     toggleSnapshotVisibility();
//   });

//   meetingCaptureButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     meetingCanvas
//       .getContext("2d")
//       .drawImage(meetingVideo, 0, 0, meetingCanvas.width, meetingCanvas.height);
//     const timestamp = Date.now();
//     const imageName = `${timestamp}.png`;
//     console.log("Meeting Captured Image Name:", imageName);
//     const imageData = meetingCanvas.toDataURL("image/png");
//     const imageObject = { path: imageData, name: imageName };
//     meetingCapturedImages.push(imageObject);
//     displayMeetingCapturedImages();
//     toggleSnapshotVisibility();
//   });

//   // Other code remains unchanged

//   locationUploadButton.addEventListener("click", async (event) => {
//     event.preventDefault();
//     const locationImageUrls = []; // Array to store uploaded location image URLs
//     for (const imageObject of locationCapturedImages) {
//       try {
//         const blob = dataURLToBlob(imageObject.path);
//         const file = new File([blob], imageObject.name, { type: blob.type });
//         console.log("Uploading Location Image:", imageObject.name);
//         const response = await uploadImageaApi(file);
//         const imageUrl = JSON.parse(response).url; // Extract uploaded image URL
//         locationImageUrls.push(imageUrl); // Add URL to the array
//         console.log("Uploaded Location Image Path:", imageUrl);
//       } catch (error) {
//         console.error("Error uploading location image:", error);
//       }
//     }

//     // Update payload with location image URL
//     if (locationImageUrls.length > 0) {
//       payload.image_of_location = locationImageUrls[0]; // Assuming only one location image is uploaded
//     }
//   });

//   meetingUploadButton.addEventListener("click", async (event) => {
//     event.preventDefault();
//     const meetingImageUrls = []; // Array to store uploaded meeting image URLs
//     for (const imageObject of meetingCapturedImages) {
//       try {
//         const blob = dataURLToBlob(imageObject.path);
//         const file = new File([blob], imageObject.name, { type: blob.type });
//         console.log("Uploading Meeting Image:", imageObject.name);
//         const response = await uploadImageaApi(file);
//         const imageUrl = JSON.parse(response).url; // Extract uploaded image URL
//         meetingImageUrls.push(imageUrl); // Add URL to the array
//         console.log("Uploaded Meeting Image Path:", imageUrl);
//       } catch (error) {
//         console.error("Error uploading meeting image:", error);
//       }
//     }

//     // Update payload with meeting image URLs
//     payload.meeting_photos = meetingImageUrls;
//   });

//   window.addEventListener("beforeunload", () => {
//     if (locationStream) {
//       locationStream.getTracks().forEach((track) => track.stop());
//     }
//     if (meetingStream) {
//       meetingStream.getTracks().forEach((track) => track.stop());
//     }
//   });
// });

// let imgUrl;
// document.querySelector(`#image_of_location`).addEventListener("change", (e) => {
//   console.log("Photo Photo", e.target.files[0]);
//   imgUrl = uploadImageaApi(e.target.files[0]);
//   imgUrl = JSON.parse(imgUrl).url;
//   console.log("imgUrl", imgUrl);
// });
// document.getElementById("remark1_div").style.display = "none";
// document.getElementById("remark2_div").style.display = "none";
// document.getElementById("statusbmm").style.display = "none";
// document.getElementById("statuscc").style.display = "none";
// // document.getElementById("status").style.display = "none";
// let imgUrl1;
// document.querySelector(`#meeting_photos`).addEventListener("change", (e) => {
//   console.log("Meeting Photos", e.target.files);
//   const files = e.target.files;
//   imgUrl1 = []; // Reset imgUrl1 array

//   for (const file of files) {
//     const url = uploadImageaApi(file);
//     imgUrl1.push(JSON.parse(url).url);
//     console.log("Meeting photo URL:", JSON.parse(url).url);
//   }
// });

// const registerWorkReport = async () => {
//   try {
//     document.querySelector("#submit").addEventListener("click", async (e) => {
//       e.preventDefault();

//       const formData = new FormData(
//         document.getElementById("WorkReportFormData")
//       );

//       const typeOfWork = formData.get("type_of_work").trim();
//       const completedWork = formData.get("completed_work").trim();

//       if (!typeOfWork || !completedWork) {
//         alert("Please fill in all the required fields.");
//         return;
//       }

//       // Update payload with other form data
//       payload = {
//         ...payload,
//         user_id: formData.get("user_id"),
//         date: formData.get("date"),
//         location: formData.get("location"),
//         completed_work: completedWork,
//         type_of_work: typeOfWork,
//         remark1: formData.get("remark1"),
//         remark2: formData.get("remark2"),
//         role: formData.get("role"),
//       };

//       console.log("Payload:", payload);

//       const { data: res, status } = await workReportApi.register(payload);
//       console.log(res);
//       if (status === 200) {
//         alert("Work report registered successfully!");
//         window.location.href = "list-daily-report.php";
//       } else if (status === 409) {
//         alert("This user has already filed a report for today!!!!");
//       } else {
//         alert("Work report registration failed. Please try again.");
//       }
//     });
//   } catch (error) {
//     console.error("Error occurred:", error);
//     alert("An error occurred. Please try again later.");
//   }
// };
