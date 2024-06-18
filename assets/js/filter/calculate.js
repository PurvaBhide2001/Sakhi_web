const calculateAge = (dob,evalDate) => {
    const ageData = new Date(dob);
    var ageDate = ageData.getDate();
    var ageMonth = ageData.getMonth();
    var ageYear = ageData.getFullYear();
    var date = new Date(evalDate);
    var currentDate = date.getDate();
    var currentMonth = 1 + date.getMonth();
    var currentYear = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (ageDate > currentDate) {
      currentDate = currentDate + month[currentMonth - 1];
      currentMonth = currentMonth - 1;
    }
    if (ageMonth > currentMonth) {
      currentMonth = currentMonth + 12;
      currentYear = currentYear - 1;
    }
    var d = currentDate - ageDate;
    var m = currentMonth - ageMonth;
    var y = currentYear - ageYear;
  
    return `${y}`;
  };