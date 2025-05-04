const min = 1;
const max = 100;
const luckyNumber = Math.floor(Math.random() * (max - min + 1)) + min;
const userGuess = document.getElementById("userGuess");
const displayNumber = document.getElementById("displayText");
const checkBtn = document.getElementById("checkBtn");
const displayAttempts = document.getElementById("displayAttempts");
const displayGameOutcome = document.getElementById("displayGameOutcome");


let attempts = 10;
let gameRunning = true;
adjustDisplayAttempts();
console.log(luckyNumber);


checkBtn.onclick = function () {
    if (isNaN(Number(userGuess.value))) {
        console.log(Number(userGuess.value))
        checkBtn.disabled = true;
        displayGameOutcome.textContent = `Invalid charater. Pleaes refresh and start again!`;
    } else {
        if (Number(userGuess.value) === luckyNumber) {
            attempts = 0;
            adjustDisplayAttempts();
            displayNumber.textContent = `The magic number is:\t ${luckyNumber}`;
            displayGameOutcome.textContent = "You win. Congratulations!";


        } else {
            attempts--;
            adjustDisplayAttempts();
            if (attempts === 0) {
                checkBtn.disabled = true;
                displayGameOutcome.textContent = "You lose!!";
            }
        }
    }

}

function adjustDisplayAttempts() {
    displayAttempts.textContent = `Attempts left:\t${attempts}`;
}


