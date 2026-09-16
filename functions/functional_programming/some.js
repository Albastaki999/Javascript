// Check whether at least one element is even
const arr = [1, 3, 5, 2];
// let containsEven = false;

// for (let e of arr) {
//   if (e % 2 == 0) {
//     containsEven = true;
//     break;
//   }
// }

const containsEven = arr.some((e) => e % 2 == 0)

console.log(containsEven);
