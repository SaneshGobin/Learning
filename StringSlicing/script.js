const fullName = "Sanesh Gobin";
// let firstName = fullName.slice(0, 7);
// console.log(firstName);

// let lastName = fullName.slice(7);
// console.log(lastName);

let fistname = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(fistname);
console.log(lastName);

// Excersice

const email = "saneshgobin2@webdev.co.za";
const username = email.slice(0, email.indexOf("@"));
const extension = email.slice(email.indexOf("@") + 1);
console.log(`Email username is ${username}`);
console.log(`Email extension is ${extension}`);

