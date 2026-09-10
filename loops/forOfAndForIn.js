// let arr = [101, 2921,28171, 281972, 18235, 38721] // Iterable
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// for (let row of arr) {
//     for (let element of row) {
//         console.log(element);
//     }
// }

// let str = "ahdghaksjha"

// for (let char of str) {
//     console.log(char);
// }

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

for (let property in student) {
    console.log(property);
    console.log(student[property]);
    
}