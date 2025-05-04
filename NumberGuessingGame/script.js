const min = 1;
const max = 100;
const luckyNumber = Math.floor(Math.random() * (max - min  + 1)) + min;
const userGuess = document.getElementById("userGuess");
const displayNumber = document.getElementById("displayNumber");
const displayAttempts = document.getElementById("displayAttempts");
const displayGameOutcome = document.getElementById("displayGameOutcome");


document.body.textContent = `${luckyNumber}`;

let attempts = 3;
let running = true;

while (running) {
    if (Number(userGuess.value) === luckyNumber) {
        displayNumber.textContent = `${luckyNumber}`;
        displayGameOutcome.textContent = "You win. Congratulations!";

    } else {
        attempts--;
        if (attempts === 0) {
            displayGameOutcome.textContent = "You lose. Start game over!";
        }
    }
}