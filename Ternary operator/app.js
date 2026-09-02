let age = 17;

let isEligible = age >= 18 ? true : false;

// if (age >= 18) {
//     isEligible = true;
// }
// else {
//     isEligible = false;
// }

// console.log("Is Eligible: ", isEligible);

let marks = 100;

let grade = marks >= 90 && marks <= 100 ? 'A' : marks >= 70 && marks < 90 ? 'B' : marks >= 50 && marks < 70 ? 'C' : marks >= 30 && marks < 50 ? 'D' : 'F'

// if (marks >= 90 && marks <= 100) {
//     grade = 'A';
// }
// else if (marks >= 70 && marks < 90) {
//     grade = 'B';
// }
// else if (marks >= 50 && marks < 70) {
//     grade = 'C'
// }
// else if (marks >= 30 && marks < 50) {
//     grade = 'D'
// }
// else {
//     grade = 'F'
// }

console.log("Grade: ", grade);


// (90 - 100) - A
// (70 - 90) - B
// (50 - 70) - C
// (30 - 50) - D
// Fail

isEligible ? console.log("Can vote") : console.log("Cannot vote");


