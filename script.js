// Getting form element from HTML file using ID
// And storing it in a variable
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
// isError used later to check if user provides ivalid input
let isError = false;

// Using regex to prevent the use of + or -
// HTML input are receive as strings
function cleanInputString(str) {
    // Need to use '\' to escape symbols and whitespace with '\s'
    // use brackets to turn it into a character class to match regex individually
    // const regex = /\+-\s/;
    const regex =  /[+-\s]/g;
    // 1st arg is character sequence to be replaced, 2nd arg is the string that replace
    // since strings are immutable, replace returns a new string
    return str.replace(regex, "");
}

function isInvalidInput(str) {
    //  i flag for insensitive matchs e & E
    // Number inputs only allow the to occur between 2 digtis
    // [0-9] will match any digit between 0 & 9
    // + in regex allows the pattern match one or more times
    // const regex = /[0-9]+e[0-9]+/i;
    // \d is a shorthand to match any digit
    const regex = /\d+e\d+/i;
    // string have a .match() method that return an array of match results
    return str.match(regex);
  }

//   console.log(isInvalidInput("1e3"));
// "1e3" is the matched value against the /\d+e\d+/i regex.
// index: 0 is the index of the matched value in the string.
// input: '1e3' is the original string that was matched.
// groups: undefined are the matched groups, which are not used in this case. 

function addEntry() {
    //get the value of the selected option from dropdown
    // const targetId = '#' + entryDropdown.value
    // targets the '.input-container' element within the element that has 'targetId'
    // const targetInputContainer = document.querySelector(targetId + ' .input-container');
    // const targetInputContainer = document.querySelector(`${targetId} .input-container`);
    //  // With template literals targetId wasn't necessary
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    // get the number of all user entries
    // querySelectAll returns a nodelist (array like object)
    // const entryNumber = targetInputContainer.querySelectorAll();
    //query by text input, can't request by number because of the extra input for calorie budget
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
    // build your dynamic HTML string to add to the webpage
    const HTMLString = `
        <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
        <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"/>
        <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
        <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories" />
    `;
    // To see targetInputContainer content need to use innerHTML
    // innerHTML sets & or returns HTML content in an element
    targetInputContainer.innerHTML += HTMLString;
}