const createObjectKey = (data) => {
  return Object.keys(data);
};

const setValuesForm = (data) => {
  Object.keys(data).forEach((key) => {
    const selector = document.querySelector(`#${key}`);
    if (!selector) return;

    //   if (key == "state") {
    //     stateOptionsSet(document, data[key]);
    //     return;
    //   }
    //   if (key == "district" && data["district"]) {
    //     districtOptionsSet(data["state"], document, data[key]);
    //     return;
    //   }

    //   if (key == "block" && data["block"]) {
    //     blocksOptionsSet(data["district"], document, data[key]);
    //     return;
    //   }
    //   if (key === "grampanchayat" && data["grampanchayat"]) {
    //     grampanchayatOptionsSet(data["block"], document, data[key]);
    //     return;
    //   }
    //   if (key == "village" && data["village"]) {
    //     villageOptionsSet(data["grampanchayat"], document, data[key]);
    //     return;
    //   } else {
    //     selector.value = data[key];
    //     return;
    //   }
    // });
    if (key == "state") {
      addressOptionSet.state(data[key]);
      return;
    }
    if (key == "district") {
      addressOptionSet.district(data["state"], data[key]);
      return;
    }

    if (key == "block") {
      addressOptionSet.block(data["district"], data[key]);
      return;
    }
    if (key == "grampanchayat" && data["grampanchayat"]) {
      addressOptionSet.grampanchayat(data["block"], data[key]);
      return;
    }
    if (key == "village") {
      addressOptionSet.village(data["grampanchayat"], data[key]);
      return;
    }
  });
};

const setDataForStudent = (data) => {
  const addressOptionSet = new AddressOptionSet(
    "state",
    "district",
    "block",
    "grampanchayat",
    "village",
    "cluster_id" // Add cluster_id as the new parameter
  );

  createObjectKey(data).forEach((key) => {
    const selector = document.querySelector(`#${key}`);
    if (!selector) return;

    const clusters = (blockCode) => {
      const { data } = addressApi.getCluster(blockCode);
      const optionsSet = [];
      optionsSet.push(`<option value="" selected>क्लस्टर निवडा</option>`);

      data?.forEach((element) => {
        const html = `<option value="${element.id}">${element.cluster_name}</option>`;
        optionsSet.push(html);
      });
      document.getElementById("cluster_id").innerHTML = optionsSet.join("");
    };
    // Call the clusters function to populate the cluster dropdown
    clusters(data["block"]); // Assuming block data is available in the user object

    if (key == "state") {
      addressOptionSet.state(data[key]);
      return;
    }
    if (key == "district") {
      addressOptionSet.district(data["state"], data[key]);
      return;
    }

    if (key == "block") {
      addressOptionSet.block(data["district"], data[key]);
      return;
    }
    if (key == "cluster_id") {
      clusters(data["block"], data[key]);
      return;
    }
    if (key == "grampanchayat") {
      addressOptionSet.village(data["village"], data[key]);
      return;
    }
    if (key == "village" && data["village"]) {
      addressOptionSet.grampanchayat(data["block"], data[key]);
      return;
    }
    // if (key == "cluster_id") {
    //   selector.value = data[key];
    //   return;
    // }
    // if (key == "join_photo") {
    //   const span = document.createElement("span");
    //   span.innerHTML = data[key].split("/").slice(-1);
    //   selector.closest("div").append(span);
    //   return;
    // }
    // if (key == "pass_photo") {
    //   const span = document.createElement("span");
    //   span.innerHTML = data[key].split("/").slice(-1);
    //   selector.closest("div").append(span);
    //   return;
    // }
    else {
      selector.value = data[key];
      return;
    }
  });
};

// const setDataForStudent = (data) => {
//   const addressOptionSet = new AddressOptionSet(
//     "state",
//     "district",
//     "block",
//     "grampanchayat",
//     "village",
//     "cluster_id" // Add cluster_id as the new parameter
//   );

//   createObjectKey(data).forEach((key) => {
//     const selector = document.querySelector(`#${key}`);
//     if (!selector) return;

//     if (key == "state") {
//       addressOptionSet.state(data[key]);
//       return;
//     }
//     if (key == "district") {
//       addressOptionSet.district(data["state"], data[key]);
//       return;
//     }

//     if (key == "block") {
//       addressOptionSet.block(data["district"], data[key]);
//       return;
//     }
//     if (key == "cluster_id") {
//       clusters(data["block"], data[key]);
//       return;
//     }
//     if (key == "grampanchayat") {
//       addressOptionSet.village(data["village"], data[key]);
//       return;
//     }
//     if (key == "village" && data["village"]) {
//       addressOptionSet.grampanchayat(data["block"], data[key]);
//       return;
//     }
//     // if (key == "cluster_id") {
//     //   selector.value = data[key];
//     //   return;
//     // }
//     if (key == "join_photo") {
//       const span = document.createElement("span");
//       span.innerHTML = data[key].split("/").slice(-1);
//       selector.closest("div").append(span);
//       return;
//     }
//     if (key == "pass_photo") {
//       const span = document.createElement("span");
//       span.innerHTML = data[key].split("/").slice(-1);
//       selector.closest("div").append(span);
//       return;
//     } else {
//       selector.value = data[key];
//       return;
//     }
//   });
//   const clusters = (blockCode) => {
//     const { data } = addressApi.getCluster(blockCode);
//     const optionsSet = [];
//     optionsSet.push(`<option value="" selected>क्लस्टर निवडा</option>`);

//     data?.forEach((element) => {
//       const html = `<option value="${element.id}">${element.cluster_name}</option>`;
//       optionsSet.push(html);
//     });
//     document.getElementById("cluster_id").innerHTML = optionsSet.join("");
//   };
//   // Call the clusters function to populate the cluster dropdown
//   clusters(data["block"]); // Assuming block data is available in the user object
// };

const roleWiseSetdData = () => {
  const userdata = JSON.parse(localStorage.getItem(user));

  if (userdata?.role_id == 2) {
    prakalpDropDown({ anganwadiID: "anganwadi_id" });
    document.querySelector("#anganwadi_id").disabled = true;
  }
};
