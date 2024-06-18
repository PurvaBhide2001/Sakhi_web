class CommanUsefulComponent {
  constructor() {}
  createElement(elementName) {
    return document.createElement(elementName);
  }
  addToTheClass(element, className) {
    element.classList.add(...className.split(" "));
  }
  parseData(data) {
    return JSON.parse(data);
  }
  removeDuplicateArrayOfObject(arrayOfObject = []) {
    return arrayOfObject.filter(
      (item1, idx, array) =>
        array.findIndex((item2) => item1.id == item2.id) === idx
    );
  }
  removeDuplicateForSingleValue(arrayData = []) {
    return [...new Set(arrayData)];
  }
  getParseLocalStorage(name) {
    const data = this.parseData(localStorage.getItem(name));
    if (!data) {
      tosterDisplay(` your data is not found !!!`, "error").show();
      return;
    }
    return data;
  }
  /**
   *
   * @param {keyName} keyName
   * @param {data as object,array} data
   */
  dataStoreInLocalStorage(keyName, data) {
    localStorage.setItem(keyName, data);
  }
  /**
   *
   * @param {{} or [] or any other thing will be converted into string format} data
   * @returns as converted  stringify data return
   */
  createStringfyData(data) {
    return JSON.stringify(data);
  }
  createSelector(selectorName) {
    return document.querySelector(`#${selectorName}`);
  }
  createMapForSelectOptionList(dataArray, titleAndIDObj, existingSelectedID,firstSeletcor="सर्व") {
    const selectList = dataArray.map((item) => {
      
      return `<option value="${item[titleAndIDObj.id]}" ${
        item[titleAndIDObj.id] == existingSelectedID ? "selected" : ""
      }>${item[titleAndIDObj.title]}</option>`;
    });
    firstSeletcor!=""&& selectList.unshift(`<option value='0'>${firstSeletcor}</option>`);
    return selectList.join("");
  }
  
  createInputCheckBox(className, id) {
    const checkbox = this.createElement("input");
  }

  createTable(dataArray, callBack) {
    const trCollection = dataArray.map(callBack).join("");
    return trCollection;
  }

  /**
   * pending
   * @param {*} columnsArrayList
   * @param {*} dataArray
   * @param {*} requiredInputType
   */
  createTableStructure(columnsArrayList, dataArray, requiredInputType) {
    dataArray.map((item) => {
      const tr = this.createElement("tr");
      return columnsArrayList.map((name) => {
        const td = this.createElement("td");
        if (name == "checkbox") {
          td.insertAdjacentElement;
        }
        tr.insertAdjacentElement("beforeEnd");
        return;
      });
    });
  }
  /**
   *
   * @param {fetch data} dataList
   * @param {fullName,id} requireExtractedValue
   * @returns
   */
  createTagTypeList(dataList, requireExtractedValue) {
    return dataList.map((item) => ({
      value: item[requireExtractedValue.value],
      id: item[requireExtractedValue.id],
    }));
  }
  setClasses(id, className) {
    this.addToTheClass(this.createSelector(id), className);
  }

  requiredValueArray(dataArray, keyName) {
    return dataArray.map((item) => item[keyName]);
  }

  getFormDataObject(formSelector) {
    const formData = new FormData(formSelector);
    return Object.fromEntries(formData);
  }
  removeLastLetterRecreateObj(obj) {
    let newObj = {};
    Object.keys(obj).forEach((key) => {
      newObj[key.slice(0, key.length - 1)] = obj[key];
    });
    return newObj;
  }
}
