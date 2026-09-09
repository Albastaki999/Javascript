const student = {
    firstName: "Rashid",
    age: 18,
    address: {
        line1: "abc",
        city: "HYD"
    }
}

Object.freeze(student) // Cannot add or remove properties or modify

// Add property
student.paidFees = true
console.log(student);

// Delete property
delete student.age
console.log(student);

// Modify existing property
student.firstName = "Hello"
console.log(student);

student.address.state = "TS"
console.log(student);
