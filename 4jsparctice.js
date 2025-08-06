let fullName = prompt("Enter your full name:");
let userName = prompt("Enter your username:");

console.log("----- User Details -----");
console.log("Full Name     :", fullName.trim());
console.log("Username      :", userName.trim());
console.log("Uppercase Name:", fullName.toUpperCase());
console.log("Lowercase User:", userName.toLowerCase());
console.log("Welcome Message: Hello " + fullName + " (@" + userName + ")");