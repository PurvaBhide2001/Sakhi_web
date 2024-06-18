// Login Api
const loginApi = (data) => {
  const stringifyData = JSON.stringify(data);
  return FetchApi2(stringifyData, "login", "POST");
};
const forgetPassApi = (data) => {
  const stringifyData = JSON.stringify(data);
  return FetchApi2(stringifyData, `user/updatePassword`, "POST");
};

const DashboardApi = {
  GetUserStats: function () {
    return FetchApi("", `user/stats`, "GET");
  },
  countbycurrentdate: function (currentdate) {
    return FetchApi("", `login/countbycurrentdate/${currentdate}`, "GET");
  },
  dailyReportByCurrentDate: function (currentdate) {
    return FetchApi(
      "",
      `/dailyworkreport/countbycurrentdate/${currentdate}`,
      "GET"
    );
  },
  monthlyReportByCurrentDate: function (currentdate) {
    return FetchApi(
      "",
      `monthlyReport/countbycurrentmonth/${currentdate}`,
      "GET"
    );
  },
};

// const login = {
//   forget: function (json) {
//     const stringifyObj = JSON.stringify(json);
//     return FetchApi2(
//       stringifyObj,
//       `/api_anganwadi/public/ForgotPassword/forgotPass`,
//       "POST"
//     );
//   },

//   OTPsubmit: function (json) {
//     const stringifyObj = JSON.stringify(json);
//     return FetchApi2(
//       stringifyObj,
//       `/api_anganwadi/public/ForgotPassword/resetPass`,
//       "POST"
//     );
//   },

//   chengepass: function (json) {
//     const stringifyObj = JSON.stringify(json);
//     return FetchApi2(
//       stringifyObj,
//       `/api_anganwadi/public/ForgotPassword/updatePass`,
//       "POST"
//     );
//   },
// };

const stringifyData = (data) => {
  return JSON.stringify(data);
};
// User Api
const userApi = {
  register: function (json) {
    const stringifyObj = JSON.stringify(json);
    return FetchApi2(stringifyObj, `user/createUser`, "POST");
  },
  registerWithoutLogin: function (json) {
    const stringifyObj = JSON.stringify(json);
    return FetchApi2(
      stringifyObj,
      `user/createUser/withoutdemographic`,
      "POST"
    );
  },
  GetList: function () {
    return FetchApi(
      "",
      `user/userlistingfromfilteronlystateanddistrict/27/478`,
      "GET"
    );
  },
  get: function (id) {
    return FetchApi("", `showById/${id}`, "GET");
  },
  update: function (id, json) {
    return FetchApi2(stringifyData(json), `update/user/${id}`, "PATCH");
  },
  delete: function (Id) {
    return FetchApi("", `delete/user/${Id}`, "DELETE");
  },
  GetByClusterRolefilter: function (
    state_code,
    district_code,
    block_code,
    cluster_id,
    role
  ) {
    return FetchApi(
      "",
      `user/listwithfilterandroal/${state_code}/${district_code}/${block_code}/${cluster_id}/${role}`,
      "GET"
    );
  },
  GetByStateAndDistrictFilter: function (state_code, district_code) {
    return FetchApi(
      "",
      `user/userlistingfromfilteronlystateanddistrict/${state_code}/${district_code}`,
      "GET"
    );
  },
  GetByStateDistrictRoleFilter: function (state_code, district_code, role) {
    return FetchApi(
      "",
      `user/userlistingfromfilteronlystateanddistrict/${state_code}/${district_code}/${role}`,
      "GET"
    );
  },
  GetByStateDistrictCluster: function (
    state_code,
    district_code,
    block_code,
    cluster_id
  ) {
    return FetchApi(
      "",
      `user/userlistingfromfilterclusterwise/${state_code}/${district_code}/${block_code}/${cluster_id}`,
      "GET"
    );
    // getRoles: () => FetchApi2(/api_anganwadi/public/user, "GET"),
  },
  GetByStateDistrictBlockRoleFilter: function (
    state_code,
    district_code,
    block_code,
    role
  ) {
    return FetchApi(
      "",
      `user/userlistingfromfilteronlystatedistrictandblock/${state_code}/${district_code}/${block_code}/${role}`,
      "GET"
    );
  },
  GetByStateDistrictBlockFilter: function (
    state_code,
    district_code,
    block_code
  ) {
    return FetchApi(
      "",
      `user/userlistingfromfilteronlystatedistrictandblock/${state_code}/${district_code}/${block_code}`,
      "GET"
    );
  },
};

const roleApi = {
  getList: function () {
    return FetchApi("", `rolelist`, "GET");
  },
  get: function () {
    return FetchApi("", `/showbyid/role/${role}`, "GET");
  },
};
const dailyWorkApi = {
  // register: function (json) {
  //   const stringifyObj = JSON.stringify(json);
  //   return FetchApi2(stringifyObj, `user/createUser`, "POST");
  // },
  GetList: function () {
    return FetchApi("", `dailyworkreport`, "GET");
  },
  get: function (id) {
    return FetchApi("", `dailyworkreport/showById/${id}`, "GET");
  },
  DailybySDMY: function (state_code, district_code, month, year) {
    return FetchApi(
      "",
      `dailyworkreport/listingbymonthwisefilter/${state_code}/${district_code}/${month}/${year}`,
      "GET"
    );
  },
  DailybySDRMY: function (state_code, district_code, role, month, year) {
    return FetchApi(
      "",
      `dailyworkreport/listingbymonthwisefilter/${state_code}/${district_code}/${role}/${month}/${year}`,
      "GET"
    );
  },
  DailybySDBMY: function (state_code, district_code, block_code, month, year) {
    return FetchApi(
      "",
      `dailyworkreport/listingbymonthwisefilterbyblock/${state_code}/${district_code}/${block_code}/${month}/${year}`,
      "GET"
    );
  },
  DailybySDBRMY: function (
    state_code,
    district_code,
    block_code,
    role,
    month,
    year
  ) {
    return FetchApi(
      "",
      `dailyworkreport/listingbymonthwisefilterbyblock/${state_code}/${district_code}/${block_code}/${role}/${month}/${year}`,
      "GET"
    );
  },
  DailybySDBCMY: function (
    state_code,
    district_code,
    block_code,
    clusterId,
    month,
    year
  ) {
    return FetchApi(
      "",
      `dailyworkreport/listingbymonthwisefilterbycluster/${state_code}/${district_code}/${block_code}/${clusterId}/${month}/${year}`,
      "GET"
    );
  },
  DailybySDBCRMY: function (
    state_code,
    district_code,
    block_code,
    clusterId,
    role,
    month,
    year
  ) {
    return FetchApi(
      "",
      `dailyworkreport/listingbymonthwisefilter/${state_code}/${district_code}/${block_code}/${clusterId}/${role}/${month}/${year}`,
      "GET"
    );
  },
  GetByClusterRole: function (
    state_code,
    district_code,
    block_code,
    cluster_id,
    role
  ) {
    return FetchApi(
      "",
      `dailyworkreport/DailyWorkRepotlistingfromfilter/${state_code}/${district_code}/${block_code}/${cluster_id}/${role}`,
      "GET"
    );
  },
  GetByStateDistrict: function (state_code, district_code) {
    return FetchApi(
      "",
      `dailyworkreport/DailyWorkRepotlistingfromfilter/${state_code}/${district_code}`,
      "GET"
    );
  },

  GetByStateDistrictRole: function (state_code, district_code, role) {
    return FetchApi(
      "",
      `dailyworkreport/DailyWorkRepotlistingfromfilter/${state_code}/${district_code}/${role}`,
      "GET"
    );
  },

  GetByStateDistrictBlock: function (state_code, district_code, block_code) {
    return FetchApi(
      "",
      `dailyworkreport/DailyWorkRepotlistingfromfilterstateanddistandblock/${state_code}/${district_code}/${block_code}`,
      "GET"
    );
  },

  GetByStateDistrictBlockRole: function (
    state_code,
    district_code,
    block_code,
    role
  ) {
    return FetchApi(
      "",
      `dailyworkreport/DailyWorkRepotlistingfromfilterstateanddistandblock/${state_code}/${district_code}/${block_code}/${role}`,
      "GET"
    );
  },

  GetByClusterRole: function (
    state_code,
    district_code,
    block_code,
    cluster_id,
    role
  ) {
    return FetchApi(
      "",
      `dailyworkreport/DailyWorkRepotlistingfromfilter/${state_code}/${district_code}/${block_code}/${cluster_id}/${role}`,
      "GET"
    );
  },
  DailyWorkRepotlistingfromfilteeclusterwise: function (
    state_code,
    district_code,
    block_code,
    cluster_id
  ) {
    return FetchApi(
      "",
      `dailyworkreport/DailyWorkRepotlistingfromfilteeclusterwise/${state_code}/${district_code}/${block_code}/${cluster_id}`,
      "GET"
    );
  },

  delete: function (Id) {
    return FetchApi("", `delete/dailyworkreport/${Id}`, "DELETE");
  },
  update: function (id, json) {
    return FetchApi2(
      stringifyData(json),
      `update/dailyworkreport/${id}`,
      "PATCH"
    );
  },
};
// Election
const ElectionApi = {
  register: function (json) {
    const stringifyObj = JSON.stringify(json);
    return FetchApi2(stringifyObj, `create/election/record`, "POST");
  },
  Get: function () {
    return FetchApi("", `listAll/election/record`, "GET");
  },
  GetByCluster: function (state_code, district_code, block_code, cluster_id) {
    return FetchApi(
      "",
      `/filterwise/election/record/${state_code}/${district_code}/${block_code}/${cluster_id}`,
      "GET"
    );
  },
};
// Monthly Report Api
const monthlyReportApi = {
  GetList: function (state_code, district_code, block_code, cluster_id, date) {
    return FetchApi(
      "",
      `dailyworkreport/listingbydatewisefilter/${state_code}/${district_code}/${block_code}/${cluster_id}/${date}`,
      "GET"
    );
  },
  DailyReportByBlockAndDate: function (
    state_code,
    district_code,
    block_code,
    date
  ) {
    return FetchApi(
      "",
      `dailyworkreport/listingbydatewisefilters/${state_code}/${district_code}/${block_code}/${date}`,
      "GET"
    );
  },
  DailyReportByDistrictAndDate: function (state_code, district_code, date) {
    return FetchApi(
      "",
      `dailyworkreport/listingbydatewisefilter/${state_code}/${district_code}/${date}`,
      "GET"
    );
  },
  GetListByMonth: function (
    state_code,
    district_code,
    block_code,
    cluster_id,
    month,
    year
  ) {
    return FetchApi(
      "",
      `dailyworkreport/listingbymonthwisefilter/${state_code}/${district_code}/${block_code}/${cluster_id}/${month}/${year}`,
      "GET"
    );
  },
  GetListByMonth: function (
    state_code,
    district_code,
    block_code,
    cluster_id,
    role,
    month,
    year
  ) {
    return FetchApi(
      "",
      ` dailyworkreport/listingbymonthwisefilter/${state_code}/${district_code}/${block_code}/${cluster_id}/${role}/${month}/${year}`,
      "GET"
    );
  },
};

// Attendance Api
const AttendanceApi = {
  createLogin: function (json) {
    const stringifyObj = JSON.stringify(json);
    return FetchApi2(stringifyObj, `attendance/createLogin`, "POST");
  },

  createLogout: function (json) {
    const stringifyObj = JSON.stringify(json);
    return FetchApi2(stringifyObj, `attendance/createLogout`, "POST");
  },
  ListByCurrentDate: function (todayDate) {
    return FetchApi("", `/attendance/listAllbydate/${todayDate}`, "GET");
  },
  ListAll: function (todayDate) {
    return FetchApi("", `listall/attendance/login`, "GET");
  },
  ListAttendaceByFilter: function (
    state_code,
    district_code,
    block_code,
    cluster_id,
    date
  ) {
    return FetchApi(
      "",
      `attendance/listAllByfilterandDatewise/${state_code}/${district_code}/${block_code}/${cluster_id}/${date}`,
      "GET"
    );
  },
  ListAttendaceByDistrict: function (state_code, district_code) {
    return FetchApi(
      "",
      `attendance/listAllByfilterandDatewisedist/${state_code}/${district_code}`,
      "GET"
    );
  },
  ListAttendaceByDistrictByDate: function (state_code, district_code, date) {
    return FetchApi(
      "",
      `attendance/listAllByfilterandDatewise/${state_code}/${district_code}/${date}`,
      "GET"
    );
  },
  ListAttendaceByBlock: function (state_code, district_code, block_code) {
    return FetchApi(
      "",
      `attendance/listAllByfilterandblockwise/${state_code}/${district_code}/${block_code}`,
      "GET"
    );
  },
  ListAttendaceByBlockByDate: function (
    state_code,
    district_code,
    block_code,
    date
  ) {
    return FetchApi(
      "",
      `attendance/listAllByfilterandblockwise/${state_code}/${district_code}/${block_code}/${date}`,
      "GET"
    );
  },
  ListAttendaceByCluster: function (
    state_code,
    district_code,
    block_code,
    cluster_id
  ) {
    return FetchApi(
      "",
      `attendance/listAllByfiltercluserwise/${state_code}/${district_code}/${block_code}/${cluster_id}`,
      "GET"
    );
  },
  ListByUser: function (id) {
    return FetchApi("", `attendance/login/listAllbyuserId/${id}`, "GET");
  },
};

// workreport
const workReportApi = {
  register: function (json) {
    const stringifyObj = JSON.stringify(json);
    return FetchApi2(stringifyObj, `create/dailyworkreport`, "POST");
  },
};

// All Address1
// const addressApi = {
//   state: function () {
//     return FetchApi3("", `demographic-info/public/states/all`, "GET");
//   },
//   district: function (state_code) {
//     return FetchApi3(
//       "",
//       `demographic-info/public/districts/${state_code}`,
//       "GET"
//     );
//   },
//   block: function (district_code) {
//     return FetchApi3(
//       "",
//       `demographic-info/public/blocks/${district_code}`,
//       "GET"
//     );
//   },
//   grampanchayat: function (block_code) {
//     return FetchApi3(
//       "",
//       `demographic-info/public/grampanchayat/${block_code}  `,
//       "GET"
//     );
//   },
//   village: function (grampanchayat_code) {
//     return FetchApi3(
//       "",
//       `demographic-info/public/block/get/villages/${grampanchayat_code}`,
//       "GET"
//     );
//   },
// };
const addressApi = {
  state: function () {
    return FetchApi3("", `demographic-info/public/states/all`, "GET");
  },
  district: function (state_code) {
    return FetchApi3(
      "",
      `demographic-info/public/districts/${state_code}`,
      "GET"
    );
  },
  block: function (district_code) {
    return FetchApi3(
      "",
      `demographic-info/public/blocks/${district_code}`,
      "GET"
    );
  },
  grampanchayat: function (block_code) {
    return FetchApi3(
      "",
      `demographic-info/public/grampanchayat/${block_code}`,
      "GET"
    );
  },
  village: function (local_body_code) {
    return FetchApi3(
      "",
      `demographic-info/public/villages/${local_body_code}`,
      "GET"
    );
  },
  getCluster: function (block_code) {
    return FetchApi("", `clusterList/byDistrictId/${block_code}`, "GET");
  },
};

// Evaluation
const evaluationApi = {
  getAllAnswersByClusterApi: function (
    stateCode,
    districtCode,
    blockCode,
    clusterId
  ) {
    return FetchApi(
      "",
      `getAllSubmittedAnswersListByfilter/${stateCode}/${districtCode}/${blockCode}/${clusterId}`,
      "GET"
    );
  },
  GetKrushiQuestion: function () {
    return FetchApi("", `krushiMandhanQuestion/list`, "GET");
  },
  GetPashuQuestion: function () {
    return FetchApi("", `pashuSakhiMandhanQuestion/list`, "GET");
  },
  GetPashuSakhiList: function () {
    return FetchApi(
      "",
      `pashuSakhiMandhanQuestion/getAllSubmittedAnswers`,
      "GET"
    );
  },
  GetBankQuestion: function () {
    return FetchApi("", `bankSakhiQuestions/listall`, "GET");
  },
  GetBankSakhiList: function () {
    return FetchApi(
      "",
      `bankSakhiQuestions/listAllBankSakhiSubmitedData`,
      "GET"
    );
  },
  GetFICRPQuestion: function () {
    return FetchApi("", `FICRPQuestions/listall`, "GET");
  },
  GetFICRPList: function () {
    return FetchApi("", `FICRPQuestions/listAllFICRPSubmitedData`, "GET");
  },
  GetCTCQuestion: function () {
    return FetchApi("", `CTCAhwalQuestions/listall`, "GET");
  },
  GetICRPQuestion: function () {
    return FetchApi("", `ICRPMANQuestions/listall`, "GET");
  },
  GetCTCList: function () {
    return FetchApi("", `CTCAhwalQuestions/listAllCTCSubmitedData`, "GET");
  },
  GetICRPList: function () {
    return FetchApi("", `ICRPMandhanQuestions/listAllsubmitedAnswers`, "GET");
  },
  update: function (id, json) {
    return FetchApi2(stringifyData(json), `update/mulyanapan/${id}`, "PATCH");
  },
  ShowKrushiSakhiById: function (id) {
    return FetchApi(
      "",
      `krushiMandhanQuestion/getAllSubmittedAnswersListByUserID/${id}`,
      "GET"
    );
  },
  KrushiSakhiAhwalupdate: function (id, json) {
    return FetchApi2(
      stringifyData(json),
      `krushiMandhanQuestion/update/${id}`,
      "PATCH"
    );
  },
  PashuSakhiAhwalupdate: function (id, json) {
    return FetchApi2(
      stringifyData(json),
      `pashuSakhiMandhanQuestion/update/${id}`,
      "PATCH"
    );
  },
  BankSakhiAhwalupdate: function (id, json) {
    return FetchApi2(
      stringifyData(json),
      `bankSakhiQuestions/update/${id}`,
      "PATCH"
    );
  },
  CTCSakhiAhwalupdate: function (id, json) {
    return FetchApi2(
      stringifyData(json),
      `CTCAhwalQuestions/update/${id}`,
      "PATCH"
    );
  },
  ICRPAhwalupdate: function (id, json) {
    return FetchApi2(
      stringifyData(json),
      `ICRPMandhanQuestions/update/${id}`,
      "PATCH"
    );
  },
  FICRPsakhiAhwalupdate: function (id, json) {
    return FetchApi2(
      stringifyData(json),
      `FICRPQuestions/update/${id}`,
      "PATCH"
    );
  },
  ShowEvaluationByIdDate: function (id, date) {
    return FetchApi(
      "",
      `monthlyreportdata/byuseridanddate/${id}/${date}`,
      "GET"
    );
  },
  ShowBankSakhiById: function (id) {
    return FetchApi(
      "",
      `bankSakhiQuestions/listBankSakhiSubmitedDataByUserId/${id}`,
      "GET"
    );
  },
  ShowPashuSakhiById: function (id) {
    return FetchApi(
      "",
      `/pashuSakhiMandhanQuestion/getAllSubmittedAnswersListByUserid/${id}`,
      "GET"
    );
  },
  ShowPashuSakhiByClusterId: function (state, district, block, cluster) {
    return FetchApi(
      "",
      `pashuSakhiMandhanQuestion/getAllSubmittedAnswersbyfilter/${state}/${district}/${block}/${cluster}`,
      "GET"
    );
  },
  ShowPashuSakhiByDistrict: function (state, district) {
    return FetchApi(
      "",
      `pashuSakhiMandhanQuestion/getAllSubmittedAnswersbyfilter/${state}/${district}`,
      "GET"
    );
  },
  ShowPashuSakhiByBlock: function (state, district, block) {
    return FetchApi(
      "",
      `pashuSakhiMandhanQuestion/getAllSubmittedAnswersbyfilter/${state}/${district}/${block}`,
      "GET"
    );
  },
  ShowKrushiSakhiByClusterId: function (state, district, block, cluster) {
    return FetchApi(
      "",
      `krushiMandhanQuestion/getAllSubmittedAnswersbyfilter/${state}/${district}/${block}/${cluster}`,
      "GET"
    );
  },
  ShowKrushiSakhiByDistrict: function (state, district) {
    return FetchApi(
      "",
      `krushiMandhanQuestion/getAllSubmittedAnswersbyfilter/${state}/${district}`,
      "GET"
    );
  },
  ShowKrushiSakhiByBlock: function (state, district, block) {
    return FetchApi(
      "",
      `krushiMandhanQuestion/getAllSubmittedAnswersbyfilter/${state}/${district}/${block}`,
      "GET"
    );
  },
  ShowBankSakhiByClusterId: function (state, district, block, cluster) {
    return FetchApi(
      "",
      `bankSakhiQuestions/listAllBankSakhiSubmitedDatabyfilter/${state}/${district}/${block}/${cluster}`,
      "GET"
    );
  },
  ShowBankSakhiByDistrict: function (state, district) {
    return FetchApi(
      "",
      `bankSakhiQuestions/listAllBankSakhiSubmitedDatabyfilter/${state}/${district}`,
      "GET"
    );
  },
  ShowBankSakhiByBlock: function (state, district, block) {
    return FetchApi(
      "",
      `bankSakhiQuestions/listAllBankSakhiSubmitedDatabyfilter/${state}/${district}/${block}`,
      "GET"
    );
  },
  ShowFICRPByClusterId: function (state, district, block, cluster) {
    return FetchApi(
      "",
      `FICRPQuestions/listAllFICRPSubmitedDatabyfilter/${state}/${district}/${block}/${cluster}`,
      "GET"
    );
  },
  ShowFICRPByBlock: function (state, district, block) {
    return FetchApi(
      "",
      `FICRPQuestions/listAllFICRPSubmitedDatabyfilter/${state}/${district}/${block}`,
      "GET"
    );
  },
  ShowFICRPByDistrict: function (state, district) {
    return FetchApi(
      "",
      `FICRPQuestions/listAllFICRPSubmitedDatabyfilter/${state}/${district}`,
      "GET"
    );
  },
  ShowCTCByClusterId: function (state, district, block, cluster) {
    return FetchApi(
      "",
      `CTCAhwalQuestions/listAllctcSakhiSubmitedDatabyfilter/${state}/${district}/${block}/${cluster}`,
      "GET"
    );
  },
  ShowCTCByBlockId: function (state, district, block) {
    return FetchApi(
      "",
      `CTCAhwalQuestions/listAllctcSakhiSubmitedDatabyfilter/${state}/${district}/${block}`,
      "GET"
    );
  },
  ShowCTCByDistrictId: function (state, district) {
    return FetchApi(
      "",
      `CTCAhwalQuestions/listAllctcSakhiSubmitedDatabyfilter/${state}/${district}`,
      "GET"
    );
  },
  ShowICRPByClusterId: function (state, district, block, cluster) {
    return FetchApi(
      "",
      `ICRPMandhanQuestions/listAllICRPsubmitedAnswersbyfilter/${state}/${district}/${block}/${cluster}`,
      "GET"
    );
  },

  ShowICRPByDistrict: function (state, district) {
    return FetchApi(
      "",
      `ICRPMandhanQuestions/listAllICRPsubmitedAnswersbyfilter/${state}/${district}`,
      "GET"
    );
  },
  ShowICRPByBlock: function (state, district, block) {
    return FetchApi(
      "",
      `ICRPMandhanQuestions/listAllICRPsubmitedAnswersbyfilter/${state}/${district}/${block}`,
      "GET"
    );
  },
  //
  ShowFICRPById: function (id) {
    return FetchApi(
      "",
      `FICRPQuestions/listAllFICRPSubmitedDataByUserID/${id}`,
      "GET"
    );
  },
  ShowCTCById: function (id) {
    return FetchApi(
      "",
      `CTCAhwalQuestions/listAllCTCSubmitedDataByUserID/${id}`,
      "GET"
    );
  },
  ShowICRPById: function (id) {
    return FetchApi(
      "",
      `ICRPMandhanQuestions/listAllsubmitedAnswersbyUserId/${id}`,
      "GET"
    );
  },
  SubmitBankAnswer: function (json) {
    const stringifyObj = JSON.stringify(json);
    return FetchApi2(stringifyObj, `bankSakhiQuestions/submitAnswers`, "POST");
  },

  SubmitFICRPAnswers: function (json) {
    const stringifyObj = JSON.stringify(json);
    return FetchApi2(stringifyObj, `FICRPQuestions/submitAnswers`, "POST");
  },
  SubmitCTCPAnswers: function (json) {
    const stringifyObj = JSON.stringify(json);
    return FetchApi2(stringifyObj, `CTCAhwalQuestions/submitAnswers`, "POST");
  },
  SubmitICRPAnswers: function (json) {
    const stringifyObj = JSON.stringify(json);
    return FetchApi2(
      stringifyObj,
      `ICRPMandhanQuestions/submitAnswers`,
      "POST"
    );
  },
  GetKrushiAnswers: function () {
    return FetchApi("", `/krushiMandhanQuestion/getAllSubmittedAnswers`, "GET");
  },

  GetLastMonthEvaluation: function (
    state_code,
    district_code,
    block_code,
    cluster_id,
    month,
    year
  ) {
    return FetchApi(
      "",
      `monthlyreportdata/listByAndmonth/${state_code}/${district_code}/${block_code}/${cluster_id}/${month}/${year}`,
      "GET"
    );
  },
  GetLastMonthEvaluationSDBMY: function (
    state_code,
    district_code,
    block_code,
    month,
    year
  ) {
    return FetchApi(
      "",
      `monthlyreportdata/listByAndmonth/${state_code}/${district_code}/${block_code}/${month}/${year}`,
      "GET"
    );
  },
  GetLastMonthEvaluationSDMY: function (
    state_code,
    district_code,
    month,
    year
  ) {
    return FetchApi(
      "",
      `monthlyreportdata/listByAndmonth/${state_code}/${district_code}/${month}/${year}`,
      "GET"
    );
  },
  register: function (json) {
    const stringifyObj = JSON.stringify(json);
    return FetchApi2(
      stringifyObj,
      `krushiMandhanQuestion/submitanswer`,
      "POST"
    );
  },
  registerPashu: function (json) {
    const stringifyObj = JSON.stringify(json);
    return FetchApi2(
      stringifyObj,
      `pashuSakhiMandhanQuestion/submitanswer`,
      "POST"
    );
  },
};

const dashboard = {
  dashboardList: function () {
    return FetchApi(
      "",
      `/api_anganwadi/public/Dashboard/getlistAllCount`,
      "GET"
    );
  },
  dashboardShow: function (json) {
    const stringifyObj = JSON.stringify(json);
    return FetchApi2(
      stringifyObj,
      `/api_anganwadi/public/Dashboard/getCount`,
      "POST"
    );
  },
};

const listMonthlyReportApi = {
  get: function () {
    return FetchApi("", `listall/monthlyReport`, "GET");
  },
  getAllMulyamapan: function () {
    return FetchApi("", `/listall/monthlyReport/mulyamapn`, "GET");
  },
  getById: function (id) {
    return FetchApi("", `monthlyReport/showById/${id}`, "GET");
  },
  delete: function (Id) {
    return FetchApi("", `delete/monthlyReport/${Id}`, "DELETE");
  },
  register: function (json) {
    const stringifyObj = JSON.stringify(json);
    return FetchApi2(stringifyObj, `create/monthlyReport`, "POST");
  },
};
