// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log("Loop finished");

let arr = [1, 2, 3, 4, -1, 5, 6, 7]

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
// }

// console.log();

// for (let index = arr.length - 1; index >= 0; index--) {
//     console.log(arr[index]);
// }

// Calculating sum
let sum = 0;
let product = 1;
let max = arr[0]
let min = arr[0]

for (let index = 0; index < arr.length; index++) {
    // sum += arr[index];
    // product *= arr[index];

    if (max < arr[index]) {
        max = arr[index];
    }

    if (min > arr[index]) {
        min = arr[index];
    }
}

// console.log(sum);
// console.log(sum/arr.length);
// console.log(product);

console.log(max);
console.log(min);

