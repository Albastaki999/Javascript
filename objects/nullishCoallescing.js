// Nullish Coallescing

const student = {
    name: "Rashid",
    age: 18
}

let studentName = student.name;
let studentage = student.age

let a = "hello";

console.log("Student name: ", studentName);
console.log("Student age: ", studentage ?? "N/A");
console.log("variable A: ", a ?? "N/A");
// console.log("Student age: ", studentage != undefined && studentage != null ? studentage : "N/A");
