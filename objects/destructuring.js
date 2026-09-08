const student = {
  firstName: "Rashid",
  lastName: "Mahmood",
  age: 25,
  paidFees: true,
  address: {
    city: "Hyderabad",
    state: "TS",
  },
};

// let firstName = student.firstName
// let lastName = student.lastName
// let age = student.age
// let paidFees = student.paidFees

// Destructuring
let { firstName, lastName, age, address: {city} } = student;


// console.log(firstName);
// console.log(lastName);
// console.log(age);
console.log(city);
