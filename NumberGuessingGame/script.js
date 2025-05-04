const min                   = 1;
const max                   = 100;
const luckyNumber           = Math.floor(Math.random() * (max - min  + 1)) + min;
const userGuess             = document.getElementById("userGuess");
const displayNumber         = document.getElementById("displayText");
const checkBtn              = document.getElementById("checkBtn");
const displayAttempts       = document.getElementById("displayAttempts");
const displayGameOutcome    = document.getElementById("displayGameOutcome");


let attempts = 10;
let gameRunning = true;


    checkBtn.onclick = function() {
        if (Number(userGuess.value) === luckyNumber) {
            attempts--;
            displayAttempts.textContent = `Attempts Left: ${attempts}`;
            displayNumber.textContent = `The magic number is:\t ${luckyNumber}`;
            displayGameOutcome.textContent = "You win. Congratulations!";
            
    
        } else {
            attempts--;
            displayAttempts.textContent = `Attempts Left: ${attempts}`;
            if (attempts === 0) {
                checkBtn.disabled = true;
                displayGameOutcome.textContent = "You lose!!";
            }
        }
    }

        
       
