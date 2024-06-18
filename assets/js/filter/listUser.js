const listUser = () => {
  const { data } = userApi.GetList();

  const listUserData = document.querySelector("#UserList");

  if (data && data.length > 0) {
    const trList = data.map((user, i) => {
      let stateTitle = "";
      let districtTitle = "";
      let blockTitle = "";

      try {
        // Handle state
        if (user.state_obj) {
          const parsedStateObj = JSON.parse(user.state_obj);
          const stateObj =
            typeof parsedStateObj === "string"
              ? JSON.parse(parsedStateObj)
              : parsedStateObj;
          stateTitle = stateObj?.state_title || "";
        }

        // Handle district
        if (user.district_obj) {
          const parsedDistrictObj = JSON.parse(user.district_obj);
          const districtObj =
            typeof parsedDistrictObj === "string"
              ? JSON.parse(parsedDistrictObj)
              : parsedDistrictObj;
          districtTitle = districtObj?.district_title || "";
        }

        // Handle block
        if (user.block_obj) {
          const parsedBlockObj = JSON.parse(user.block_obj);
          const blockObj =
            typeof parsedBlockObj === "string"
              ? JSON.parse(parsedBlockObj)
              : parsedBlockObj;
          blockTitle = blockObj?.block_title || "";
        }
      } catch (error) {
        console.error("Error parsing user objects:", error);
      }
      return `
        <tr>
          <td>${i + 1}</td>
          <td>${user?.f_name} ${user?.m_name} ${user?.l_name}</td>
          <td>${user?.username}</td>
          <td>${user?.role_name}</td>
          <td>${user?.cluster_name}</td>
          <td>${stateTitle}</td>
          <td>${districtTitle}</td>
          <td>${blockTitle}</td>
          <td class="text-center">
            <span><a href="frm-register_user.php?id=${
              user?.id
            }"><i class="fas fa-edit mr-3 text-primary"></i></a></span>
            <a id="deleteUser-${
              user.id
            }"><i class="fas fa-trash text-danger mr-1"></i></a>
          </td>
        </tr>`;
    });

    listUserData.innerHTML = trList.join("");
  } else {
    listUserData.innerHTML =
      "<tr><td colspan='9' class='text-center'>No data available</td></tr>";
  }

  data?.forEach((user) => {
    if (!document.querySelector(`#deleteUser-${user.id}`)) return;

    document
      .querySelector(`#deleteUser-${user.id}`)
      .addEventListener("click", (e) => {
        e.preventDefault();

        const isConfirmed = confirm(
          "Are you sure you want to delete this user?"
        );
        if (!isConfirmed) {
          return;
        }

        userApi
          .delete(user.id)
          .then((response) => {
            if (response.status === 200) {
              console.log("User deleted:", response);
              document
                .querySelector(`#deleteUser-${user.id}`)
                .closest("tr")
                .remove();
              alert("User deleted successfully!");
            } else {
              console.error("Failed to delete user:", response.error);
              alert("Failed to delete user. Please try again later.");
            }
          })
          .catch((error) => {});
      });
  });
};

const filterwiseuserListing = async (
  stateCode,
  districtCode,
  blockCode,
  clusterId,
  roleId
) => {
  let data;

  if (stateCode && districtCode && blockCode && clusterId && roleId) {
    // Call the API when all parameters are present
    const response = await userApi.GetByClusterRolefilter(
      stateCode,
      districtCode,
      blockCode,
      clusterId,
      roleId
    );
    data = response.data;
  } else if (stateCode && districtCode && blockCode && roleId) {
    // Call the API when state, district, block, and role codes are provided
    const response = await userApi.GetByStateDistrictBlockRoleFilter(
      stateCode,
      districtCode,
      blockCode,
      roleId
    );
    data = response.data;
  } else if (stateCode && districtCode && blockCode && clusterId) {
    // Call the API when state, district, block, and role codes are provided
    const response = await userApi.GetByStateDistrictCluster(
      stateCode,
      districtCode,
      blockCode,
      clusterId
    );
    data = response.data;
  } else if (stateCode && districtCode && blockCode) {
    // Call the API when state, district, and block codes are provided
    const response = await userApi.GetByStateDistrictBlockFilter(
      stateCode,
      districtCode,
      blockCode
    );
    data = response.data;
  } else if (stateCode && districtCode && roleId) {
    // Call the API when state, district, and role codes are provided
    const response = await userApi.GetByStateDistrictRoleFilter(
      stateCode,
      districtCode,
      roleId
    );
    data = response.data;
  } else if (stateCode && districtCode) {
    // Call the API when only state and district codes are provided
    const response = await userApi.GetByStateAndDistrictFilter(
      stateCode,
      districtCode
    );
    data = response.data;
  } else {
    // Handle cases where not enough parameters are provided
    alert("Please provide at least the state and district codes.");
    return;
  }

  const listUserData = document.querySelector("#UserList");

  // Destroy existing DataTable instance if exists
  if ($.fn.DataTable.isDataTable("#example1")) {
    $("#example1").DataTable().clear().destroy();
  }

  // Clear the existing table data
  listUserData.innerHTML = "";

  if (data && data.length > 0) {
    const trList = data.map((user, i) => {
      let stateTitle = "";
      let districtTitle = "";
      let blockTitle = "";

      if (user.state_obj) {
        try {
          const stateObj = JSON.parse(JSON.parse(user.state_obj));
          stateTitle = stateObj.state_title;
          // district
          const distObj = JSON.parse(JSON.parse(user.district_obj));
          districtTitle = distObj.district_title;
          // block
          const blockObj = JSON.parse(JSON.parse(user.block_obj));
          blockTitle = blockObj.block_title;
        } catch (error) {
          console.error("Error parsing state object:", error);
        }
      }

      return `
          <tr>
            <td>${i + 1}</td>
            <td>${user?.f_name} ${user?.m_name} ${user?.l_name}</td>
            <td>${user?.username}</td>
            <td>${user?.role_name}</td>
            <td>${user?.cluster_name}</td>
            <td>${stateTitle}</td>
            <td>${districtTitle}</td>
            <td>${blockTitle}</td>
            <td class="text-center">
              <span><a href="frm-register_user.php?id=${
                user?.id
              }" ><i class="fas fa-edit mr-3 text-primary"></i></a></span>
              <a id="deleteUser-${
                user.id
              }"><i class="fas fa-trash text-danger mr-1"></i></a>
            </td>
          </tr>`;
    });

    listUserData.innerHTML = trList.join("");
  } else {
    listUserData.innerHTML =
      "<tr><td colspan='9' class='text-center'>No data available</td></tr>";
  }

  // Reinitialize DataTable
  const table = $("#example1")
    .DataTable({
      responsive: true,
      lengthChange: true,
      autoWidth: true,
      searching: true,
      ordering: true,
      buttons: ["excel", "print"],
    })
    .buttons()
    .container()
    .appendTo("#example1_wrapper .col-md-6:eq(0)");

  data?.forEach((user) => {
    const deleteUserButton = document.querySelector(`#deleteUser-${user.id}`);
    if (deleteUserButton) {
      deleteUserButton.addEventListener("click", async (e) => {
        e.preventDefault();

        const isConfirmed = confirm(
          "Are you sure you want to delete this user?"
        );
        if (!isConfirmed) {
          return;
        }

        try {
          const response = await userApi.delete(user.id);
          if (response.status === 200) {
            console.log("User deleted:", response);
            deleteUserButton.closest("tr").remove();
            alert("User deleted successfully!");
          } else {
            console.error("Failed to delete user:", response.error);
            alert("Failed to delete user. Please try again later.");
          }
        } catch (error) {
          console.error("Error occurred while deleting user:", error);
          alert(
            "An error occurred while deleting user. Please try again later."
          );
        }
      });
    }
  });
};
