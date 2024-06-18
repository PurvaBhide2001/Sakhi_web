/**
 * @class
 */
class TagifyWithCheckBox extends CommanUsefulComponent {
  #tagify;

  /**
   *
   * @param {"name tagify id"} tagifyId
   */
  constructor(tagifyId) {
    super();
    this.#tagify = new Tagify(this.createSelector(tagifyId));
  }

  /**
   * @returns{()=> this.#tagify}
   */
  getTagify() {
    return this.#tagify;
  }

  /**
   * @description remove event when remove in tag list what can do ...
   * @param {(e)=>{}} callBackEventFunction
   */
  onRemove(callBackEventFunction) {
    this.#tagify.on("remove", callBackEventFunction);
  }

  /**
   * remove event
   * @param {*} callBackEventFunction
   */
  offRemove(callBackEventFunction) {
    this.#tagify.off("remove", callBackEventFunction);
  }

  /**
   * @description multiple value or single value can be put
   * @param {[{value:"",id:""}]} selectArrayList
   */
  addTags(selectArrayList, requiredExtractedValue) {
    this.#tagify.addTags(
      this.createTagTypeList(selectArrayList, requiredExtractedValue),
      "",
      true
    );
  }

  /**
   * @description multiple tag will be remove
   * @param {["name"]} removeList
   */
  removeTags(removeList) {
    this.#tagify.removeTags(removeList);
  }

  /**
   *@description particular single tag will be remove
   * @param {"tag value"} removeTagName
   */
  removeTag(removeTagName) {
    this.#tagify.removeTag(removeTagName);
  }
}
