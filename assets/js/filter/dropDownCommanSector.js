const createMapForSelectOptionList = (
  dataArray,
  titleAndIDObj,
  existingSelectedID
) => {
  const selectList = dataArray.map((item) => {
    return `<option value="${item[titleAndIDObj.id]}" ${
      item[titleAndIDObj.id] == existingSelectedID ? "selected" : ""
    }>${item[titleAndIDObj.title]}</option>`;
  });
  selectList.unshift("<option value='0'>सर्व</option>");
  return selectList.join("");
};

const anganwadDropdown = (
  idObj,
  selectedObj,
  isSingObj,
  exsitingAnganwadiID
) => {
  const { anganwadiID } = idObj;
  if (selectedObj) {
    const anganwadiSelector = document.querySelector(`#${anganwadiID}`);
    const { data } = bitApi.getanganwadilist(selectedObj);
    const arrayList = data ? data : [];
    const titleAndIDObj = {
      id: "id",
      title: "name",
    };
    anganwadiSelector.innerHTML = createMapForSelectOptionList(
      arrayList,
      titleAndIDObj,
      exsitingAnganwadiID
    );

    anganwadiSelector.addEventListener("change", (e) => {});
  }
};

const bitDropdown = (idObj, selectedObj, isSingObj, exsitingBitID) => {
  const { bitID } = idObj;
  if (selectedObj) {
    const bitSelector = document.querySelector(`#${bitID}`);
    const { data } = bitApi.getListBit(selectedObj);

    const arrayList = data ? data : [];
    /**
     * as per depend on object key
     */
    const titleAndIDObj = {
      id: "id",
      title: "title",
    };
    bitSelector.innerHTML = createMapForSelectOptionList(
      arrayList,
      titleAndIDObj,
      exsitingBitID
    );
    bitSelector.addEventListener("change", (e) => {
      const selectedBitID = e.target.value;
      if (!isSingObj.isAnganwadi) {
        const selectedBitObj = {
          ...selectedObj,
          bit: selectedBitID,
        };
        anganwadDropdown(idObj, selectedBitObj, isSingObj);
      }
    });
  } else {
    alert("please select sector and prakalp dropdown!!!");
  }
};

const prakalpDropDown = (idObj, isSingObj, exsitingPrakalpID) => {
  const { prakalID } = idObj;

  const prakalpSelector = document.querySelector(`#${prakalID}`);
  const { data = [], status = 204 } = bitApi.praklpaList();
  const arrayList = data ? data : [];
  /**
   * as per depend on object key
   */
  const titleAndIDObj = {
    id: "id",
    title: "title",
  };
  prakalpSelector.innerHTML = createMapForSelectOptionList(
    arrayList,
    titleAndIDObj,
    exsitingPrakalpID
  );
  prakalpSelector.addEventListener("change", (e) => {
    const selectedPrakalpID = e.target.value;
    console.log(selectedPrakalpID);
    if (!isSingObj.isBit) {
      const selectedObj = {
        prakalpa: selectedPrakalpID,
      };

      bitDropdown(idObj, selectedObj, isSingObj);
    }
  });
};

/**
 * sector function
 * if already exist then we can pass sector_id (suppose update data that time pass)
 */
isSingObj = {
  isPrakalp: true,
  isBit: true,
  isAnganwadi: true,
};

const seAsPerRoleValue = (idObj, isSingleObj, isUse = true) => {
  const userdata = JSON.parse(localStorage.getItem("user"));
  const anganwadiPostPayload = {
    prakalpa: userdata?.prakalpa_id,
    bit: userdata?.bit_id,
  };
  const bitPayload = {
    prakalpa: userdata?.prakalpa_id,
  };
  (() => {
    if (userdata?.role_id == 1) {
      prakalpDropDown(idObj, isSingleObj, userdata?.prakalpa_id);
      bitDropdown(idObj, bitPayload, isSingleObj, userdata?.bit_id);
      // anganwadDropdown(idObj,isSingleObj)
      isUse && anganwadDropdown(idObj, anganwadiPostPayload, isSingleObj);
    } else if (userdata?.role_id == 2) {
      prakalpDropDown(idObj, isSingleObj, userdata?.prakalpa_id);
      // document.querySelector(`#${idObj.prakalID}`).disabled=true
      document
        .querySelector(`#${idObj.prakalID}`)
        .querySelectorAll("option")
        .forEach((element) => {
          element.value != userdata?.prakalpa_id ? element.remove() : "";
        });
      bitDropdown(idObj, bitPayload, isSingleObj, userdata?.bit_id);
      isUse &&
        anganwadDropdown(
          idObj,
          {
            prakalpa: userdata?.prakalpa_id,
            bit: userdata?.bit_id,
          },
          isSingleObj
        );
    } else if (userdata?.role_id == 3) {
      console.log("role id 3");
      prakalpDropDown(idObj, isSingleObj, userdata?.prakalpa_id);

      document
        .querySelector(`#${idObj.prakalID}`)
        .querySelectorAll("option")
        .forEach((element) => {
          element.value != userdata?.prakalpa_id ? element.remove() : "";
        });
      bitDropdown(idObj, bitPayload, isSingleObj, userdata?.bit_id);

      document
        .querySelector(`#${idObj.bitID}`)
        .querySelectorAll("option")
        .forEach((element) => {
          element.value != userdata?.bit_id ? element.remove() : "";
        });
      isUse && anganwadDropdown(idObj, anganwadiPostPayload, isSingleObj);
    }
  })();
};

// class CommanUsefulComponent {
//   createElement(elementName) {
//     return document.createElement(elementName);
//   }
//   addToTheClass(element, className) {
//     console.log("className", className);
//     element.classList.add(...className.split(" "));
//   }
//   createSelector(selectorName) {
//     return document.querySelector(`#${selectorName}`);
//   }
//   createMapForSelectOptionList(dataArray, titleAndIDObj, existingSelectedID) {
//     const selectList = dataArray.map((item) => {
//       return `<option value="${item[titleAndIDObj.id]}" ${
//         item[titleAndIDObj.id] == existingSelectedID ? "selected" : ""
//       }>${item[titleAndIDObj.title]}</option>`;
//     });
//     selectList.unshift("<option value='0'>सर्व</option>");
//     return selectList.join("");
//   }
//   createInputCheckBox(className, id) {
//     const checkbox = this.createElement("input");
//   }

//   createTable(dataArray, callBack) {
//     const trCollection = dataArray.map(callBack).join("");
//     return trCollection;
//   }

//   /**
//    * pending
//    * @param {*} columnsArrayList
//    * @param {*} dataArray
//    * @param {*} requiredInputType
//    */
//   createTableStructure(columnsArrayList, dataArray, requiredInputType) {
//     dataArray.map((item) => {
//       const tr = this.createElement("tr");
//       return columnsArrayList.map((name) => {
//         const td = this.createElement("td");
//         if (name == "checkbox") {
//           td.insertAdjacentElement;
//         }
//         tr.insertAdjacentElement("beforeEnd");
//         return;
//       });
//     });
//   }
//   /**
//    *
//    * @param {fetch data} dataList
//    * @param {object for } requireExtractedValue
//    * @returns
//    */
//   createTagTypeList(dataList, requireExtractedValue) {
//     return dataList.map((item) => ({
//       value: item[requireExtractedValue.value],
//       id: item[requireExtractedValue.id],
//     }));
//   }
//   setClasses(id, className) {
//     this.addToTheClass(this.createSelector(id), className);
//   }

//   requiredValueArray(dataArray, keyName) {
//     return dataArray.map((item) => item[keyName]);
//   }
// }

// class DropdownPrakalpaAndBit extends CommanUsefulComponent {
//   prakalapaSelector;
//   roleSelector;
//   roleId;
//   searchSelector;
//   yojanaList;
//   selectSibling;
//   bitListing;
//   bitId;
//   #tableRowSelector;
//   checkBoxAllSelector;
//   isCheckAll = false;
//   fetchData = [];
//   constructor(roleId, searchId, tableRowId, checkBoxAllId) {
//     super();
//     this.roleSelector = this.createSelector(roleId);
//     this.searchSelector = this.createSelector(searchId);
//     this.tableRowSelector = this.createSelector(tableRowId);
//     this.checkBoxAllSelector = this.createSelector(checkBoxAllId);
//     this.selectSibling = this.roleSelector.parentElement.nextElementSibling;
//   }

//   setFetchData(fetchData) {
//     this.fetchData = fetchData;
//   }
//   getFetchData() {
//     return this.fetchData;
//   }
//   setRoleId(roleId) {
//     this.roleId = roleId;
//   }

//   getRoleId() {
//     return this.roleId;
//   }

//   setBitListing(list) {
//     this.bitListing = list;
//   }
//   getBitList() {
//     return this.bitListing;
//   }
//   setPrakalpaID(bitId) {
//     this.bitId = bitId;
//   }
//   getPrakalpaID() {
//     return this.bitId;
//   }
//   setIsCheckAllCheckBox(isCheckAll) {
//     this.isCheckAll = isCheckAll;
//   }

//   getCheckBoxAllSelector() {
//     return this.checkBoxAllSelector;
//   }
//   getIsCheckAllCheckBox() {
//     return this.isCheckAll;
//   }
//   onChangeRole(prakalpa_id) {
//     this.roleSelector.addEventListener("change", (e) => {
//       if (e.target.value == "1") {
//         this.selectSibling.innerHTML = "";

//         this.setRoleId(e.target.value);
//       } else {
//         this.setRoleId(e.target.value);
//         this.createPrakalpaDropdown.call(this, prakalpa_id);
//       }
//     });
//   }

//   insertAdjacentElementForPrakalapa(selectSibling, prakalpa_id) {
//     /**
//      * create element for select and label
//      */
//     const selectElement = this.createElement.call(this, "select");
//     const labelElement = this.createElement.call(this, "label");
//     /**
//      *  added to class Name
//      */
//     this.addToTheClass.call(this, selectElement, "form-control");
//     this.addToTheClass.call(this, labelElement, "form-label");
//     selectElement.setAttribute("id", prakalpa_id);

//     /**
//      * set inner HTML
//      */
//     labelElement.innerHTML = "प्रकल्प";
//     selectSibling.insertAdjacentElement("beforeEnd", labelElement);
//     selectSibling.insertAdjacentElement("beforeEnd", selectElement);
//     this.prakalapaSelector = this.createSelector.call(this, prakalpa_id);

//     /**
//      * fetch prakalpas bit name
//      */
//     const { data } = bitApi.praklpaList();
//     /**
//      * select option dropdown selector
//      */

//     this.prakalapaSelector.innerHTML = this.createMapForSelectOptionList.call(
//       this,
//       data,
//       {
//         id: "id",
//         title: "title",
//       }
//     );
//   }
//   createPrakalpaDropdown(prakalpa_id) {
//     /**
//      * create select dropdown dynamically and and prakalpa id is user defined
//      */
//     this.insertAdjacentElementForPrakalapa(this.selectSibling, prakalpa_id);

//     /**
//      * perform prakalpa on change event
//      */
//     this.prakalapaSelector.addEventListener("change", (e) => {
//       this.setPrakalpaID(e.target.value);
//     });
//   }

//   createSelector(selectorName) {
//     return document.querySelector(`#${selectorName}`);
//   }

//   tableTemplate(item, i) {
//     return `
//     <tr>
//     <td >${i + 1}</td>
//     <td style="text-align: center;"><input class="form-check-input" type="checkbox" id="checkbox-${
//       item?.id
//     }"></td>
//     <td>${item?.title}</td>
//     </tr>
//     `;
//   }
//   selectAllCheckBox() {
//     this.getFetchData().forEach((item) => {
//       const checkBox = this.createSelector.call(this, `checkbox-${item.id}`);
//       if (!checkBox) return;
//       checkBox.checked = this.getIsCheckAllCheckBox.call(this);
//     });
//   }
//   onChangeCheckboxAllSelector() {
//     this.checkBoxAllSelector.addEventListener("change", (e) => {
//       this.setIsCheckAllCheckBox.call(this, e.target.checked);
//       this.selectAllCheckBox.call(this);
//     });
//   }

//   onClickToShowPrakalapaBit() {
//     this.searchSelector.addEventListener("click", () => {
//       if (this.getRoleId() == "1") {
//         const { data } = bitApi.praklpaList();
//         this.setFetchData.call(this, data);
//         this.tableRowSelector.innerHTML = this.createTable(
//           data,
//           this.tableTemplate.bind(this)
//         );
//       } else {
//         if (!this.getPrakalpaID()) {
//           alert("please select prakalpa");
//           return;
//         }
//         const { data } = bitApi.getListBit({
//           prakalpa: this.getPrakalpaID(),
//         });
//         this.setFetchData.call(this, data);
//         this.tableRowSelector.innerHTML = this.createTable(
//           data,
//           this.tableTemplate.bind(this)
//         );
//       }
//     });
//   }
// }

// class TagifyWithCheckBox extends CommanUsefulComponent {
//   #tagify;
//   /**
//    *
//    * @param {*} tagifyId
//    */
//   constructor(tagifyId) {
//     super();
//     this.#tagify = new Tagify(this.createSelector(tagifyId));
//   }
//   getTagify() {
//     return this.#tagify;
//   }

//   onRemove() {
//     this.#tagify.on("remove", (e) => {
//       console.log("remove ", e.detail.data.value);
//     });
//   }
//   addTags(selectArrayList) {
//     this.#tagify.addTags(
//       this.createTagTypeList.call(selectArrayList),
//       "",
//       true
//     );
//   }
//   removeTags(removeTagArrayList) {
//     this.#tagify.removeTags();
//   }
// }
