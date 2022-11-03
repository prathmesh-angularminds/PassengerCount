// Global Variables
let cntValue = 0;
let savedValue = "";

// Accessing DOM elements for updation
var countDiv = document.getElementsByClassName('CardCount');
let savedDiv = document.getElementsByClassName('PreviousSaved');


// Is called when Increment Btn is clicked
function countIncrement() {

    cntValue++;
    countDiv[0].innerText = cntValue;
}


// Is called when Save Btn is clicked
function savedBtnClicked() {

    if(cntValue !==  0) {
        if(savedValue === "") {
            savedValue += cntValue;
        } else {
    
            savedValue += " - " + cntValue;
        }
        cntValue = 0;
        countDiv[0].innerText = cntValue;
        savedDiv[0].innerText = savedValue;
    }
}
    