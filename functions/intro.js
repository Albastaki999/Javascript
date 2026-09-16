// let name1 = "Rashid";
// console.log("Hello", name1);

// let name2 = "Amar"
// console.log("Hello", name2);

// let l = 20;
// let b = 40;
// console.log("Perimeter", 2 * (l + b));

// l = 40;
// b = 127;
// console.log("Perimeter", 2 * (l + b));

// function calculatePerimeter() {

// }

// function greet() {
//     console.log("Hello world");
// }

// // Invoke, execute, call
// greet()

// parameters
// function isEligibleToVote(age) {
//   if (age >= 18) {
//     console.log("Eligible to vote");
//   } else {
//     console.log("Cannot vote");
//   }
// }

// Arguments
// isEligibleToVote(18);

// function greet() {
//     console.log("Hello 1");
//     return "Hello world";
// }

// console.log(greet());

function isEligibleToVote(age) {
  return age >= 18;
}

let age = 18;
// if (isEligibleToVote(age)) {
//   console.log("Can vote");
// } else {
//   console.log("Cannot vote");
// }

if (!isEligibleToVote(age)) {
  console.log("Cannot vote");
  return;
}

console.log("Can vote");

let rectangle = {
  //   length: 18,
  //   breadth: 20,
};

function calculatePerimeter(rectangle = { length: 0, breadth: 0 }) {
  let perimeter = 2 * (rectangle.length + rectangle.breadth);
  return perimeter;
}

console.log(calculatePerimeter());
