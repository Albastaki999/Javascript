let arr = [1, 2, 3, 4, 5];
// const doubled = [];

// for (let e of arr) {
//     doubled.push(e * 2);
// }

// const result = arr.map((e) => e * 2);
const result = arr.map((e) => {
    if (e % 2 == 0) {
        return e * 2;
    }
    return e * 3
})

console.log(result);
