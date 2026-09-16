// Check whether every single element is even
let arr = [2, 4, 6, 8]
// let allAreEven = true;

// for (let e of arr) {
//     if (e % 2 != 0) {
//         allAreEven = false;
//         break;
//     }
// }

const allAreEven = arr.every((e) => e % 2 == 0)

console.log(allAreEven);
