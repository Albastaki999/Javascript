const PIN = "1234";
let userEnteredPin = "1234";

const fingerPrint = "abcde";
const userFingerPrint = "abcde";

// if (PIN == userEnteredPin) {
//   console.log("You can now access the machine through PIN");
// } else if (fingerPrint == userFingerPrint) {
//   console.log("You can now access the machine through fingerprint");
// } else {
//   console.log("Cannot authenticate");
// }

if (PIN == userEnteredPin || fingerPrint == userFingerPrint) {
  console.log("You can now access the machine through");
} else {
  console.log("Cannot authenticate");
}

// Exercise

// let a = 30;
// let b = 30;

// if (a > b) {
//     console.log(a, " is bigger");
// }
// else {
//     console.log(b, " is bigger");

// }
