let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log("Grade:", grade);
console.log("Score:", score);

let age = 20;
let name = prompt("Enter the name:");
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log("Name:", name);
console.log(message + ". Age:", age);
