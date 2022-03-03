// import the data from data.js
const tableData = data;

// reference the html table using D3
var tbody = d3.select("tbody")

function buildTable(data) {
    tbody.html("");
}

data.forEach((dataRow) => {
    let row = tBody.append("tr");
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
});

// adding filters
function handleClick() {
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredDate = tableData;
    
    // check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // apply filter to the table data to only keep the 
        // rows where the datetime value matches the filter value.
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild the table using the filtered data
    // @NOTE: if no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

// attach an event to listen for the form button
d3.selectAll("filter-btn").on("click", handleClick);

// build the table when the page loads
buildData(tableData);




// pseudocode practice
// if (a date is enetered) {
// Filter the default data to show onlyt the date entered
// };

