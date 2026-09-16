let student = {
  firstName: "Rashid",
  age: 20,
};

// Side effect
function f1() {
    student.age = 25
}

console.log(student);
f1()
console.log(student);
