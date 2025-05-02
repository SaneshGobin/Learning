let username = "";

while(username === "" || username === null) {
   username = window.prompt("Please enter name: ");
} 

let message = `Hello there ${username}`;

document.body.textContent = `Hello there ${username}.`;



// DO WHILE LOOP

let newUser;

do {
    newUser = window.prompt("Please enter name: ");
} while (newUser === "" || newUser === null)

message  = message + ` Another user is ${newUser}`;
document.body.textContent = message;
