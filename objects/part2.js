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

// if (student) {
//     if (student.address) {
//         console.log(student.address.city);
        
//     }
//     else {
//         console.log("address undefined");
        
//     }
// }
// else {

//     console.log("student undefined");
// }

console.log(student?.address?.city);
