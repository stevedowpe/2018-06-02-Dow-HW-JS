// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");

var $datetimeInput = document.querySelector("#datetime");
// -- var $stateInput = document.querySelector("#state");

var $searchBtn = document.querySelector("#search");
// -- var $searchBtnstate = document.querySelector("state");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
// -- $searchBtnstate.addEventListener("click", handleSearchButtonClickstate);

// Set filteredData to Data initially
var filteredData = dataSet;

// renderTable renders the filteredData to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current data object and its fields
    var data_instance = filteredData[i];
    var fields = Object.keys(data_instance);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the data_instance object, create a new cell at set its inner text to be the current value at the current data's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data_instance[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDateTime = $datetimeInput.value.trim().toLowerCase();

  // Set filteredData to an array of all data_instances whose "datetime" matches the filter
  filteredData = dataSet.filter(function(data_instance) {
    var data_datetime = data_instance.datetime.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return data_datetime === filterDateTime;
  });

  // -- function handleSearchButtonClickstate() {
  // --   // Format the user's search by removing leading and trailing whitespace, lowercase the string
  // --   var filterState = $stateInput.value.trim().toLowerCase();
  
  // --   // Set filteredData to an array of all data_instances whose "datetime" matches the filter
  // --   filteredData = dataSet.filter(function(data_instance) {
  // --     var data_state = data_instance.state.toLowerCase();
  
  // --   // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
  // --     return data_state === filterState;
  // --   });



  renderTable();
}

// Render the table for the first time on page load
renderTable();
