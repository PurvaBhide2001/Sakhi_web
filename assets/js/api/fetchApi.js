const FetchApi = (data, path, method) => {
  let res;
  var settings = {
    url: `${"https://drdajalgaon.com/sakhi-api/public/"}${path}`,
    data: data,
    dataType: "json",
    method: method,
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    res = response;
  });
  return res;
};

const FetchApi2 = (data, path, method) => {
  let res;
  var settings = {
    url: `${"https://drdajalgaon.com/sakhi-api/public/"}${path}`,
    data: data,
    dataType: "json",
    method: method,
    timeout: 0,
    async: false,
    headers: {
      "Content-Type": "application/json",
    },
  };

  $.ajax(settings).done(function (response) {
    res = response;
  });
  return res;
};

const uploadImageaApi = (file) => {
  let res;
  var form = new FormData();
  form.append("file", file);
  var settings = {
    url: "https://kitintellect.tech/storage/public/api/upload/sakhi",
    method: "POST",
    timeout: 0,
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
    async: false,
  };
  $.ajax(settings).done(function (response) {
    res = response;
  });
  return res;
};
const uploadElectionImageApi = (file) => {
  let res;
  var form = new FormData();
  form.append("file", file);
  var settings = {
    url: "https://kitintellect.tech/storage/public/api/upload/election ",
    method: "POST",
    timeout: 0,
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
    data: form,
    async: false,
  };
  $.ajax(settings).done(function (response) {
    res = response;
  });
  return res;
};

const FetchApi3 = (data, path, method) => {
  let res;
  var settings = {
    url: `${"https://kitintellect.tech/"}${path}`,
    data: data,
    dataType: "json",
    method: method,
    timeout: 0,
    async: false,
  };

  $.ajax(settings).done(function (response) {
    res = response;
  });
  return res;
};
