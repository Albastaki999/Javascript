const student = {
    firstName: "Rashid",
    lastName: "Mahmood",
    age: 23,
    phone: "8271628171",
    courses: ["java", "MERN", "Cybersecurity"],
    paidFees: true,
    address: {
        line1: "abcd",
        line2: "ajhs",
        state: "TS",
        city: "Hyderabad",
        zip: "500019"
    }
}

// console.log(student);
// const firstName = Object.keys(student)[0]
// console.log(student[firstName]);
// console.log(Object.keys(student));
// console.log(Object.keys(student.address));


// console.log('firstName' in student);
// console.log(Object.keys(student).includes('firstName'));

// console.log(Object.values(student));
console.log(Object.entries(student));





