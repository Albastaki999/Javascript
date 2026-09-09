const student = {
    firstName: "Rashid",
    age: 18,
    address: {
        line1: "abc",
        city: "HYD"
    }
}
Object.seal(student) // Cannot add or remove properties, but can modify existing ones

// Add property
student.paidFees = true
console.log(student);

// Delete property
delete student.age
console.log(student);

// Modify existing property
student.firstName = "Hello"
console.log(student);

Object.seal(student.address)

// Try on nested
student.address.state = "TS"
console.log(student);

