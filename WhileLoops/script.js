// let username = "";

// while(username === "" || username === null) {
//    username = window.prompt("Please enter name: ");
// } 

// let message = `Hello there ${username}`;

// document.body.textContent = `Hello there ${username}.`;



// DO WHILE LOOP

// let newUser;

// do {
//     newUser = window.prompt("Please enter name: ");
// } while (newUser === "" || newUser === null)

// message  = message + ` Another user is ${newUser}`;
// document.body.textContent = message;



// Example

let isLoggedIn = false;
let username;
let password;

while(!isLoggedIn) {
    username = window.prompt("Enter your username:" );
    password = window.prompt("Enter your password: ");

    if (username === "Sanesh" && password === "abcd1234") {
        document.body.textContent = `Welcome ${username}`;
        console.log("Logged in")
        isLoggedIn = true;
    } else {
        document.body.textContent = `Invalid credentials!`;
        console.log("Invalid credentials");
    }
}
