/**
 * @constant t_Data tabulator required data
 */
const t_Data = {
  //   height: 200,
  data: [],
  layout: "fitColumns",
  paginationSize: 6,
  pagination: true,
  paginationSize: 10,
  paginationSizeSelector: [25, 50, 100, true], //select list with an "all" option at the end of the list
  resizableColumnFit: true,
  selectable: true,
  columns: [
    { title: "अं.क्रं.", field: "index", width: 25, resizable: true },
    {
      formatter: "rowSelection",
      titleFormatter: "rowSelection",
      headerSort: false,
      width: 10,
      cellClick: function (e, cell) {
        cell.getRow().toggleSelect();
      },
    },
    { title: "सेविका नाव", field: "fullName", resizable: true },
    { title: "अंगणवाडीचे नाव", field: "anganwadi_name", resizable: true },
    { title: "मोबाईल नंबर", field: "contact_no", resizable: true },
  ],
};

class TabulatorTable {
  #tableObj;
  constructor(tableContainer, tabulatorObject) {
    this.#tableObj = new Tabulator(`#${tableContainer}`, tabulatorObject);
  }
  getTableObj() {
    return this.#tableObj;
  }
  setTableData(tableData) {
    this.#tableObj.setData(tableData);
  }

  /**
     manual
     * table checkbox data can be select multiple{([1,2,3,4])} or single{(id)}
     * passing id of row
     * @param {,1,2,3,[]} values of ids
     */
  selectCheckBoxs(values = []) {
    this.#tableObj.selectRow(values);
  }

  /**
   * table checkbox data can be select multiple{([1,2,3,4])} or single{(id)}
   * passing id of row
   *  @param {,1,2,3,[]} values of ids
   */
  deselectCheckBoxs(values = []) {
    return this.#tableObj.deselectRow(values);
  }
  getSetectedRow() {
    return this.#tableObj.getSelectedData();
  }

  onSelectionRowEvent(callBack) {
    this.#tableObj.on("rowSelected", callBack);
  }
  offSelectionRowEvent(callBack) {
    this.#tableObj.off("rowSelected", callBack);
  }
  offDeselectionRowEvent(callBack) {
    this.#tableObj.off("rowDeselected", callBack);
  }
  onDeselectionRowEvent(callBack) {
    this.#tableObj.on("rowDeselected", callBack);
  }
  onRowSelectionChange() {
    this.#tableObj.on(
      "rowSelectionChanged",
      function (data, rows, selected, deselected) {
        //rows - array of row components for the currently selected rows in order of selection
        //data - array of data objects for the currently selected rows in order of selection
        //selected - array of row components that were selected in the last action
        //deselected - array of row components that were deselected in the last action
      }
    );
  }
}
