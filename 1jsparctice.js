function getGrade(score) {
  if (score >= 80 && score <= 100) {
    return 'A';
  } else if (score >= 70 && score <= 79) {
    return 'B';
  } else if (score >= 60 && score <= 69) {
    return 'C';
  } else if (score >= 50 && score <= 59) {
    return 'D';
  } else if (score >= 0 && score < 50) {
    return 'F';
  } else {
    return 'Invalid score';
  }
}

// Example usage:
let score = 75;
console.log(`The grade for score ${score} is: ${getGrade(score)}`);

function checkNumber(n) {
  if (n % 4 === 0 && n % 100 !== 0) {
    console.log(`${n} is divisible by 4 but not by 100.`);
  } else {
    console.log(`${n} does not meet the condition.`);
  }
}

// Example usage:
checkNumber(20);  // Output: 20 is divisible by 4 but not by 100.
checkNumber(100); // Output: 100 does not meet the condition.
checkNumber(8);   // Output: 8 is divisible by 4 but not by 100.


function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
}


isLeapYear(2024); 
isLeapYear(1900); 
isLeapYear(2000); 

let age = prompt(":");

if (age >= 18) {
  let hasLicense = prompt("Do you have a driving license? (yes/no)");
  
  if (hasLicense.toLowerCase() === "yes") {
    alert("You can drive");
  } else {
    alert("Get a license first");
  }

} else {
  alert("You are too young to drive");
}




