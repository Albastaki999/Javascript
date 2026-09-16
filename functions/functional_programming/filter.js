const arr = [1, 2, 3, 4, 5, 6]
// const evens = [];

// for (let e of arr) {
//     if (e % 2 == 0) {
//         evens.push(e);
//     }
// }

const evens = arr.filter((e) => e % 2 == 0)

console.log(evens);
