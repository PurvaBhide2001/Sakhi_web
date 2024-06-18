const printTable = () => {



    const print_name = document.querySelector("#print_name").textContent;
    var month_year = document.getElementById("month_year").value;
    var prakalpa_id = document.getElementById("prakalpa_id");
    prakalpa_id = prakalpa_id.options[prakalpa_id.selectedIndex].textContent;
    var bit_id = document.getElementById("bit_id");
    bit_id = bit_id.options[bit_id.selectedIndex].textContent;
    var anganwadi_id = document.getElementById("anganwadi_id");
    anganwadi_id = anganwadi_id.options[anganwadi_id.selectedIndex].textContent;


    var tableContent = document.getElementById("example1").outerHTML;


    var printContents = '<html><head><title>Print Table</title><style>@media print {table {border-collapse: collapse;}}table, th, td {border: 1px solid black;}</style></head><body>';
    printContents += '<h4>' + print_name + '</h4> <h5><sapn> महिना : ' + month_year + '</sapn>,&nbsp &nbsp<sapn>प्रकल्पाचे नाव : ' + prakalpa_id + '</sapn>,&nbsp &nbsp<sapn>बिट नाव : ' + bit_id + '</sapn>,&nbsp &nbsp<sapn>अंगणवाडी केंद्र : ' + anganwadi_id + '</sapn></h5> ';
    printContents += tableContent;
    printContents += '</body></html>';

    // Open a new window to print the content
    var originalContents = document.body.innerHTML;
    var printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write(printContents);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();


    document.body.innerHTML = originalContents;


    // var printContents = document.getElementById("printAll").outerHTML;
    // var originalContents = document.body.innerHTML;
    // document.body.innerHTML = printContents;
    // var table = document.getElementById("example1");
    // var ths = table.getElementsByTagName("th");
    // for (var i = 0; i < ths.length; i++) {
    //   ths[i].style.border = "1px solid black";
    // }
    // var trs = table.getElementsByTagName("tr");
    // for (var i = 0; i < trs.length; i++) {
    //   var tds = trs[i].getElementsByTagName("td");
    //   for (var j = 0; j < tds.length; j++) {
    //     tds[j].style.border = "1px solid black";
    //   }
    // }
    // window.print();
    // document.body.innerHTML = originalContents;

    // var originalContents = document.body.innerHTML;
    // document.body.innerHTML = printContents;
    // window.print();
    // document.body.innerHTML = originalContents;
}




const disabledMonth = () => {

    var date = new Date();
    var maxDate = date.toISOString().slice(0, 7);
    document.getElementById("month_year").setAttribute("max", maxDate);
}
const disablePreviousDateTime = () => {
    var today = new Date();
    var year = today.getFullYear();
    var month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    var day = today.getDate().toString().padStart(2, '0');
    var hours = today.getHours().toString().padStart(2, '0');
    var minutes = today.getMinutes().toString().padStart(2, '0');

    var currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

    document.getElementById("date_time").setAttribute("min", currentDateTime);
};

const filterDataRoleWise = (data) => {
    let filterData = []
    const { role_id, prakalpa_id, bit_id } = JSON.parse(localStorage.getItem("user"));
    if (role_id == 1) {
        filterData = data
    } else if (role_id == 2) {
        filterData = data.filter(item => item.prakalpa_id == prakalpa_id)
    } else {
        filterData = data.filter(item => item.bit_id == bit_id)
    }

    return filterData
}