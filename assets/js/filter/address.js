class AddressOptionSet {
  stateSelector;
  districtSelector;
  blockSelector;
  villageSelector;
  grampanchayatSelector; // New field for grampanchayat
  stateFirstName = "राज्य निवड करा";
  districtFirstName = "जिल्हा निवड करा";
  blockFirstName = "तालुका निवड करा";
  villageFirstName = "गाव निवड करा";
  grampanchayatFirstName = "ग्रामपंचायत निवड करा";

  /**
   *@constructor(
   * @param {*} stateID  to the create selector
   * @param {*} districtID  to the create selector
   * @param {*} blockID  to the create selector
   * @param {*} villageID  to the create selector
   * )
   */
  constructor(stateID, districtID, blockID, villageID, grampanchayatID) {
    this.stateSelector = document.querySelector(`#${stateID}`);
    this.districtSelector = document.querySelector(`#${districtID}`);
    this.blockSelector = document.querySelector(`#${blockID}`);
    this.villageSelector = document.querySelector(`#${villageID}`);
    this.grampanchayatSelector = document.querySelector(`#${grampanchayatID}`); // Initialize grampanchayatSelector
  }

  /**
   *
   * @param {*} optionList
   * @param { idKey, titleKey } param1={}
   * @param {if existed value} selectedValue
   * @returns dropdown option list
   */
  createOptionList(optionList, { idKey, titleKey }, selectedValue) {
    return optionList.map((item) => {
      return ` <option value=${item[idKey]} ${
        item[idKey] == selectedValue ? "selected" : ""
      } >${item[titleKey]}</option>`;
    });
  }

  firstOption(firstOptionValue) {
    return ` <option value='' > ${firstOptionValue}</option>`;
  }
  onChangeSelectedValue(
    currentSelector,
    subSelectorArray = [],
    nextFunctionCall = undefined
  ) {
    currentSelector.addEventListener("change", (e) => {
      subSelectorArray.forEach(({ selector, title }) => {
        selector.innerHTML = this.firstOption(title);
      });
      console.log(e.target.value);
      nextFunctionCall && nextFunctionCall(e.target.value);
    });
  }
  setToTheFirstTitle(
    stateTitle,
    districtTitle,
    blockTitle,
    grampanchayatTitle,
    villageTitle
  ) {
    this.stateFirstName = stateTitle;
    this.districtFirstName = districtTitle;
    this.blockFirstName = blockTitle;
    this.grampanchayatFirstName = grampanchayatTitle;
    this.villageFirstName = villageTitle;
  }
  state(selectedStateValue) {
    const { data } = addressApi.state();
    const stateOptionList = this.createOptionList(
      data,
      { idKey: "state_code", titleKey: "state_title" },
      selectedStateValue
    );
    stateOptionList.unshift(this.firstOption(this.stateFirstName));
    this.stateSelector.innerHTML = stateOptionList.join("");

    /**
     * reset to the value of sub selector
     */
    const subSelectorArray = [
      { selector: this.districtSelector, title: this.districtFirstName },
      { selector: this.blockSelector, title: this.blockFirstName },
      {
        selector: this.grampanchayatSelector,
        title: this.grampanchayatFirstName,
      },
      { selector: this.villageSelector, title: this.villageFirstName },
    ];
    this.onChangeSelectedValue(
      this.stateSelector,
      subSelectorArray,
      this.district.bind(this)
    );
  }

  district(state_code, selectedDistrictCode) {
    let { data } = addressApi.district(state_code);
    data = data ? data : [];
    const districtOptionList = this.createOptionList(
      data,
      { idKey: "district_code", titleKey: "district_title" },
      selectedDistrictCode
    );
    districtOptionList.unshift(this.firstOption(this.districtFirstName));
    this.districtSelector.innerHTML = districtOptionList.join("");

    /**
     * reset to the value of sub selector
     */
    const subSelectorArray = [
      { selector: this.blockSelector, title: this.blockFirstName },
      {
        selector: this.grampanchayatSelector,
        title: this.grampanchayatFirstName,
      },
      { selector: this.villageSelector, title: this.villageFirstName },
    ];
    /**
     * @param pass by next dropdown function
     */
    this.onChangeSelectedValue(
      this.districtSelector,
      subSelectorArray,
      this.block.bind(this)
    );
  }
  block(district_code, selectedBlockCode) {
    let { data } = addressApi.block(district_code);
    data = data ? data : [];
    const blockOptionList = this.createOptionList(
      data,
      { idKey: "block_code", titleKey: "block_title" },
      selectedBlockCode
    );
    blockOptionList.unshift(this.firstOption(this.blockFirstName));
    this.blockSelector.innerHTML = blockOptionList.join("");

    /**
     * reset to the value of sub selector
     */
    const subSelectorArray = [
      {
        selector: this.grampanchayatSelector,
        title: this.grampanchayatFirstName,
      },
      { selector: this.villageSelector, title: this.villageFirstName },
    ];
    /**
     * @param pass by next dropdown function
     */
    this.onChangeSelectedValue(
      this.blockSelector,
      subSelectorArray,
      this.grampanchayat.bind(this)
    );
  }
  grampanchayat(block_code, selectedGrampanchayatCode) {
    let data = addressApi.grampanchayat(block_code);
    data = data ? data : [];

    if (!Array.isArray(data)) {
      console.error(
        "Data returned for grampanchayat is not in the expected format:",
        data
      );
      return;
    }

    const grampanchayatOptionList = this.createOptionList(
      data,
      { idKey: "local_body_code", titleKey: "local_body_name" },
      selectedGrampanchayatCode
    );
    grampanchayatOptionList.unshift(
      this.firstOption(this.grampanchayatFirstName)
    );
    this.grampanchayatSelector.innerHTML = grampanchayatOptionList.join("");
    /**
     * reset to the value of sub selector
     */
    const subSelectorArray = [
      { selector: this.villageSelector, title: this.villageFirstName },
    ];
    /**
     * @param pass by next dropdown function
     */
    this.onChangeSelectedValue(
      this.grampanchayatSelector,
      subSelectorArray,
      this.village.bind(this)
    );
  }

  village(talukaCode, selectedVillageCode, selectedGrampanchayatCode) {
    let data = addressApi.village(talukaCode, selectedGrampanchayatCode);
    data = data ? data : [];

    if (!Array.isArray(data)) {
      console.error(
        "Data returned for village is not in the expected format:",
        data
      );
      return;
    }

    const villageOptionList = this.createOptionList(
      data,
      { idKey: "village_code", titleKey: "village_name" },
      selectedVillageCode
    );
    villageOptionList.unshift(this.firstOption(this.villageFirstName));
    this.villageSelector.innerHTML = villageOptionList.join("");
    /**
     * @param pass by next dropdown function
     */
    this.onChangeSelectedValue(this.villageSelector);
  }

  // grampanchayat(block_code, selectedGrampanchayatCode) {
  //   let data = addressApi.grampanchayat(block_code);
  //   data = data ? data : [];
  //   const grampanchayatOptionList = this.createOptionList(
  //     data,
  //     { idKey: "local_body_code", titleKey: "local_body_name" },
  //     selectedGrampanchayatCode
  //   );
  //   grampanchayatOptionList.unshift(
  //     this.firstOption(this.grampanchayatFirstName)
  //   );
  //   this.grampanchayatSelector.innerHTML = grampanchayatOptionList.join("");
  //   /**
  //    * reset to the value of sub selector
  //    */
  //   const subSelectorArray = [
  //     { selector: this.villageSelector, title: this.villageFirstName },
  //   ];
  //   /**
  //    * @param pass by next dropdown function
  //    */
  //   this.onChangeSelectedValue(
  //     this.grampanchayatSelector,
  //     subSelectorArray,
  //     this.village.bind(this)
  //   );
  // }
  // /**
  //  *
  //  * @param {*} talukaCode
  //  * @param {if selected village code exist then pass value} selectedVillageCode
  //  */
  // village(talukaCode, selectedVillageCode, selectedGrampanchayatCode) {
  //   let data = addressApi.village(talukaCode, selectedGrampanchayatCode);
  //   data = data ? data : [];
  //   const villageOptionList = this.createOptionList(
  //     data,
  //     { idKey: "village_code", titleKey: "village_name" },
  //     selectedVillageCode
  //   );
  //   villageOptionList.unshift(this.firstOption(this.villageFirstName));
  //   this.villageSelector.innerHTML = villageOptionList.join("");
  //   /**
  //    * @param pass by next dropdown function
  //    */
  //   this.onChangeSelectedValue(this.villageSelector);
  // }
}
