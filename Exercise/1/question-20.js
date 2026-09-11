let balance = 1500;
let withdraw = 1100;

if (withdraw <= 0) {
  console.log("Please Enter amount in positive numbers");
} else if (withdraw % 100 != 0) {
  console.log("Please enter amount in multiples of 100");
} else if (withdraw > balance) {
  console.log("Insufficient funds");
} else if (balance - withdraw < 500) {
  console.log("Minimum balance after withdrawal should be ₹500");
} else {
  console.log("Withdrawal successful");
  console.log("Remaining Balance: ", balance - withdraw);
}
