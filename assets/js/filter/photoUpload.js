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
  });

  meetingCameraIcon.addEventListener("click", () => {
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

  locationUploadButton.addEventListener("click", async (event) => {
    event.preventDefault();
    for (const imageObject of locationCapturedImages) {
      try {
        const blob = dataURLToBlob(imageObject.path);
        const file = new File([blob], imageObject.name, { type: blob.type });
        console.log("Uploading Location Image:", imageObject.name);
        const response = await uploadImageaApi(file);
        console.log("Uploaded Location Image Path:", response);
      } catch (error) {
        console.error("Error uploading location image:", error);
      }
    }
  });

  meetingUploadButton.addEventListener("click", async (event) => {
    event.preventDefault();
    for (const imageObject of meetingCapturedImages) {
      try {
        const blob = dataURLToBlob(imageObject.path);
        const file = new File([blob], imageObject.name, { type: blob.type });
        console.log("Uploading Meeting Image:", imageObject.name);
        const response = await uploadImageaApi(file);
        console.log("Uploaded Meeting Image Path:", response);
      } catch (error) {
        console.error("Error uploading meeting image:", error);
      }
    }
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

// document.addEventListener("DOMContentLoaded", () => {
//   const locationVideo = document.getElementById("location_video");
//   const meetingVideo = document.getElementById("meeting_video");
//   const locationCanvas = document.getElementById("location_canvas");
//   const meetingCanvas = document.getElementById("meeting_canvas");
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
//   });

//   locationUploadButton.addEventListener("click", async (event) => {
//     event.preventDefault();
//     for (const imageObject of locationCapturedImages) {
//       try {
//         const blob = dataURLToBlob(imageObject.path);
//         const file = new File([blob], imageObject.name, { type: blob.type });
//         console.log("Uploading Location Image:", imageObject.name);
//         const response = await uploadImageaApi(file);
//         console.log("Uploaded Location Image Path:", response);
//       } catch (error) {
//         console.error("Error uploading location image:", error);
//       }
//     }
//   });

//   meetingUploadButton.addEventListener("click", async (event) => {
//     event.preventDefault();
//     for (const imageObject of meetingCapturedImages) {
//       try {
//         const blob = dataURLToBlob(imageObject.path);
//         const file = new File([blob], imageObject.name, { type: blob.type });
//         console.log("Uploading Meeting Image:", imageObject.name);
//         const response = await uploadImageaApi(file);
//         console.log("Uploaded Meeting Image Path:", response);
//       } catch (error) {
//         console.error("Error uploading meeting image:", error);
//       }
//     }
//   });

//   navigator.mediaDevices
//     .getUserMedia({ video: true })
//     .then(function (stream) {
//       locationStream = stream;
//       locationVideo.srcObject = stream;
//       locationVideo.play();
//     })
//     .catch(function (err) {
//       console.error("Error accessing the camera for location: ", err);
//     });

//   navigator.mediaDevices
//     .getUserMedia({ video: true })
//     .then(function (stream) {
//       meetingStream = stream;
//       meetingVideo.srcObject = stream;
//       meetingVideo.play();
//     })
//     .catch(function (err) {
//       console.error("Error accessing the camera for meeting: ", err);
//     });

//   window.addEventListener("beforeunload", () => {
//     if (locationStream) {
//       locationStream.getTracks().forEach((track) => track.stop());
//     }
//     if (meetingStream) {
//       meetingStream.getTracks().forEach((track) => track.stop());
//     }
//   });
// });
