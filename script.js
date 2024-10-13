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
}
