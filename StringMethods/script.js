let username = "Sanesh Gobin";

console.log(username.charAt(0))

let indexNum = username.indexOf("s"); // there is also a lastIndexOf
console.log(`IndexNum is : ${indexNum}`);

console.log(username.length);

let trimmed = username.trim(); // trims any whitespace
console.log(`Trimmed is : ${trimmed}`);

console.log(username.toUpperCase());

console.log(`Does username start with 'e'? ${username.startsWith('e')}`);


let phoneNumber = "234-212-5543";

phoneNumber = phoneNumber.replaceAll("-","");
console.log(phoneNumber);

console.log(phoneNumber.padStart(33, "0")); // adds padding to the front. theres also pasEnd to pad the end
