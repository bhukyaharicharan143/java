let day = 4;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6 :
    console.log("Saturday");
    break;
    case 7 :
    console.log("sunday");

    default:
    console.log("Invalid day number");

}




let monthNumber = 5;

switch (monthNumber) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid month number");
}

let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}


let message = "Welcome";

for (let char of message) {
  console.log(char);
}


let arr = [25, 26, 35, 38, 50, 60];

for (let num of arr) {
  console.log(num);
}



let student ={
  name : "hari",
  age : 25,
  city : "chennai",
  branch: "IT",
  rollno : 1234,
  mobile : 9876345610,
  email : "hari@gmail.com",
  address : "chennai",
  state : "Tamilnadu",
  country : "India",
  zipcode : 600001,
  bankaccount : 1234567890,
  bankname : "SBI",
  ifsc : "SBI0000001",
  pan : "ABCDE1234F",
  aadhar : 123456789012,
  voterid : 123456789012,
  drivinglicense : 123456789012,
  country : "India"
};
for (let details in student)
{
    console.log(details + " : " + student[details]);    
         
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let numbers = [10, 20, 30, 40, 50];

for (let num of numbers) {
  console.log(num);
}



for (let num of numbers) {
  console.log(num * num);
}




let total = 0;

for (let num of numbers) {
  total += num; 
}

console.log("Total:", total);



let text = "welcome";

for (let char of text) {
  console.log(char);
}

let str = "hello";
let reversed = "";

for (let char of str) {
  reversed = char + reversed;  
}

console.log("Original:", str);
console.log("Reversed:", reversed);



let marks = {
  Math: 85,
  English: 78,
  Science: 92,
  History: 74
};

for (let subject in marks) {
  total += marks[subject];
}

console.log("Total Marks:", total);



let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log("Factorial of", num, "is", factorial);

for (let num = 2; num <= 50; num++) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = fals
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    .e;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}

console.log("Multiplication Table of 5:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\nMultiplication Table of 12:");
for (let i = 1; i <= 10; i++) {
  console.log(`12 x ${i} = ${12 * i}`);
}


let rows = 5;

for (let i = 1; i <= rows; i++) {
  let spaces = " ".repeat((rows - i) * 2);
  let stars = "* ".repeat(2 * i - 1);      
  console.log(spaces + stars);
}    




  







