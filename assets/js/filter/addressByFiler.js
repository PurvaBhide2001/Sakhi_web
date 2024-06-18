class AddressOptionSet {
  stateSelector;
  districtSelector;
  blockSelector;
  villageSelector;
  grampanchayatSelector;
  stateFirstName = "राज्य निवड करा";
  districtFirstName = "जिल्हा निवड करा";
  blockFirstName = "तालुका निवड करा";

  /**
   *@constructor(
   * @param {*} stateID  to the create selector
   * @param {*} districtID  to the create selector
   * @param {*} blockID  to the create selector
   * @param {*} villageID  to the create selector
   * )
   */
  constructor(stateID, districtID, blockID) {
    this.stateSelector = document.querySelector(`#${stateID}`);
    this.districtSelector = document.querySelector(`#${districtID}`);
    this.blockSelector = document.querySelector(`#${blockID}`);
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
  setToTheFirstTitle(stateTitle, districtTitle, blockTitle) {
    this.stateFirstName = stateTitle;
    this.districtFirstName = districtTitle;
    this.blockFirstName = blockTitle;
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
    ];
    this.onChangeSelectedValue(
      this.stateSelector,
      subSelectorArray,
      this.district.bind(this)
    );
  }

  district(state_code, selectedDistrictCode) {
    let { data } = addressApi.district(state_code);
    console.log(data, "district");
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
    console.log(data, "block");
    data = data ? data : [];
    const blockOptionList = this.createOptionList(
      data,
      { idKey: "block_code", titleKey: "block_title" },
      selectedBlockCode
    );
    blockOptionList.unshift(this.firstOption(this.blockFirstName));
    this.blockSelector.innerHTML = blockOptionList.join("");
    /**
     * @param pass by next dropdown function
     */
    this.onChangeSelectedValue(this.blockSelector);
  }
  /**
   *
   * @param {*} talukaCode
   * @param {if selected village code exist then pass value} selectedVillageCode
   */
}
