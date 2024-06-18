const submitElectionImages = async (images) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user.id, "userIDDDDD");
    const payload = {
      user_id: user.id,
      election_images: images,
    };

    console.log("Payload:", payload);

    const { data: res, status } = await ElectionApi.register(payload);

    if (status === 200) {
      alert(
        "लोकसभा निवडणूक २०२४ मध्ये लोकांना मतदान करण्यास प्रवृत्त केल्याबद्दल आपले धन्यवाद "
      );
      window.location.href = "./thank-you.php";
    } else {
      alert("कृपया पुन्हा प्रयत्न करा.");
    }
  } catch (error) {
    console.error("Error occurred:", error);
    alert("कृपया पुन्हा प्रयत्न करा.");
  }
};

// const submitElectionImages = async (images) => {
//   try {
//     // Disable the button to prevent multiple clicks
//     $("#submit-btn").prop("disabled", true).addClass("secondary-button");
//     document.getElementById("submit").disabled = true;
//     const user = JSON.parse(localStorage.getItem("user"));
//     console.log(user.id, "userIDDDDD");
//     const payload = {
//       user_id: user.id,
//       election_images: images,
//     };

//     console.log("Payload:", payload);

//     const { data: res, status } = await ElectionApi.register(payload);

//     if (status === 200) {
//       alert(
//         "लोकसभा निवडणूक २०२४ मध्ये लोकांना मतदान करण्यास प्रवृत्त केल्याबद्दल आपले धन्यवाद "
//       );
//       window.location.href = "thank-you.php";
//     } else {
//       alert("कृपया पुन्हा प्रयत्न करा.");
//     }
//   } catch (error) {
//     console.error("Error occurred:", error);
//     alert("कृपया पुन्हा प्रयत्न करा.");
//   } finally {
//     // Enable the button after API call completes (whether successful or not)
//     $("#submit-btn").prop("disabled", false).removeClass("secondary-button");
//   }
// };
