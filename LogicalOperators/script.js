const userInput = document.getElementById("userInput");
const displayText = document.getElementById("displayText");
const submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function () {
    let temperature = Number(userInput.value);
    if (Number.isNaN(temperature)) {
        displayText.textContent = "Please enter a number value!";
    } else {
        if (temperature >= 40 && temperature <= 50) {
            displayText.textContent = "It's extremely hot today!";
        } else if (temperature < 40 && temperature >= 30) {
            displayText.textContent = "It's a hot day today!";
        } else if (temperature < 30 && temperature >= 20) {
            displayText.textContent = "It warm today!";
        } else if (temperature >= 6 && temperature < 20) {
            displayText.textContent = "It's cold today!";
        } else if (temperature < 6 || temperature > 50) {
            displayText.textContent = "Extreme temparatures. Please contact your nearest weather station for more information!";
        }
        console.log(temperature);
    }
}
