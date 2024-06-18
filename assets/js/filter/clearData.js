const clearData = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (!document.querySelector(`#${key}`)) return;
    if (key === "pass_photo" || key == "join_photo") {
      return;
    }
    document.querySelector(`#${key}`).value = "";
  });
};
