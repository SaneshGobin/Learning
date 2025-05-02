
let username = window.prompt("Please enter your name: ");
// ------ NO METHOD CHAINING ------
/*
username = username.trim();
let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();
let balance = username.slice(1);
balance = balance.toLowerCase();
let formattedName = firstLetter + balance;
console.log(formattedName);
*/

//------ NO METHOD CHAINING ------
username = username.trim().charAt(0).toLocaleUpperCase() + username.trim().slice(1).toLowerCase();

document.getElementById("textDisplay").innerHTML = username;
