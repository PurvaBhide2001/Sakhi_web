function getUniqueListBy(arr, key) {
  return arr
    .filter((a, i) => arr.findIndex((s) => a[key] === s[key]) === i)
    .sort((a, b) =>
      a.evaluation_title > b.evaluation_title
        ? 1
        : a.evaluation_title < b.evaluation_title
        ? -1
        : 0
    );
}

const aboutCard = document.querySelector("#aboutCard");

const id = getQueryParamValue("id");
const { status, data } = surveyApi.getSurvey(id);

const uniqueData = getUniqueListBy(data.surveys, "evaluation_title");

const firstData = data.profile;
const res = uniqueData[0];
console.log(firstData, res);

const studentCard = (item) => {
  console.log("student", item);

  const studentInfo = `
 <div class="card-body box-profile">
 <div class="text-center img">
 <img class="profile-user-img img-fluid img-circle " src="${firstData?.join_photo}" alt="User profile picture">
</div>
 <h3 class="profile-username text-center">${firstData?.f_name} ${firstData?.m_name} ${firstData?.l_name}</h3>
 <ul class="list-group list-group-unbordered mb-3">
    <li class="list-group-item">
    <b>वयोगट</b> <a class="float-right">${item?.age_category}</a>
    </li>
    <li class="list-group-item">
        <b>वजन</b> <a class="float-right">${item?.weight }(किलो)</a>
    </li>
     
    <li class="list-group-item">
    <b>उंची</b> <a class="float-right">${item?.height}(सेमी)</a>
 </li>
    <li class="list-group-item">
    <b>लिंग</b> <a class="float-right">${firstData?.gender=="Male"?"मुलगा":"मुलगी"}</a>
  </li>
    <li class="list-group-item">
        <b>बीएमआय</b> <a class="float-right">${item?.bmi}</a>
    </li>
  </ul>
 </div>
 `;

  if (!res) {
    document.querySelector("#studentDataAll").innerHTML =
      "<h1 class='text-center'>माहिती उपलब्ध नाही....!</h1>";
    return;
  }
  document.querySelector("#studentInfo").innerHTML = studentInfo;
};

const studentAboutCard = () => {

  let district = JSON.parse(firstData.district_obj);
    district = JSON.parse(district);
    let block = JSON.parse(firstData.block_obj);
    block = JSON.parse(block);
    let village = JSON.parse(firstData.village_obj);
    village = JSON.parse(village);


  const aboutCardData = `<div class="card-header">
 <h3 class="card-title"> इतर माहिती</h3>
 </div>
 <div class="card-body">
 <strong><i class="fa fa-user" aria-hidden="true"> </i> वडिलांचे नाव</strong>
 <p class="text-muted">${firstData?.m_name}</p>
 <hr>
 <strong><i class="fa fa-user" aria-hidden="true"> </i></i>आईचे नाव</strong>
 <p class="text-muted">${firstData?.mother_name}</p>
 <hr>
 <strong><i class="fas fa-book mr-1"></i> अंगणवाडीचे नाव</strong>

 <p class="text-muted">
 ${firstData?.anganwadi_name}
 </p>
 <hr>
 <strong><i class="fas fa-map-marker-alt mr-1"></i>पत्ता</strong>


 <p class="text-muted">   ${village?.village_name}, ${block?.block_title}, ${
  district?.district_title
}.</p>
 <hr>
 </div>`;
  aboutCard.innerHTML = aboutCardData;
};

const createSurveyNavigator = () => {
  const lists = document.querySelector("#lists");

  const liArray = uniqueData.map((item, i) => {
    return `<li class="nav-item" id="li${i}"><a class="nav-link ${
      i === 0 ? "active" : ""
    }" href="#survey${i}"
      data-toggle="tab">${item?.evaluation_title}</a></li>`;
  });

  lists.innerHTML = liArray.join("");
  uniqueData.forEach((item, i) => {
    document.querySelector(`#li${i}`).addEventListener("click", () => {
      studentCard(item);
    });
  });
};

const surveyData = () => {
  const surveyTabs = document.querySelector("#surveyTabs");
  const data = uniqueData.map((survey, i) => {
    const { answers } = survey;
    document
      .querySelector("#lists")
      .querySelectorAll("li")
      [i].setAttribute("id", `sur-${survey.id}`);

    return `
<div class="${i === 0 ? "active" : ""} tab-pane" id="survey${i}">
<div class="post">
    <div class="col-md-12">
        <div class="">
            <div class="card-header">
                <h3 class="card-title">${survey?.evaluation_title}</h3>
                <div class="card-tools">
                </div>
                <div class="float-right">${survey?.created_at}</div>
            </div>
            <div class="card-body p-0" id="some${i}">
                <table class="table">
                    <thead>
                        <tr>
                            <th style="width:10px">प्रश्न क्र.</th>
                            <th>विकासाचे निर्देशक</th>
                            <th>उत्तर</th>

                        </tr>
                    </thead>
                    <tbody>
                        ${answers.map(
                          (ans, i) => `<tr>
                            <td>${i + 1}</td>
                            <td>${ans?.question}</td>
                            <td>
                            ${ans?.answer == 1 ? "चांगले जमते" : "मदत लागते"}
                            </td>
                           
                        </tr>`
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</div>

</div>

`;
  });

  surveyTabs.innerHTML = data.join("");
  uniqueData.forEach((_, i) => {
    document.querySelector(`#some${i}`).firstChild.remove();
  });
};
