let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 0;

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// i = arr.length - 1;

// while (i >= 0) {
//   console.log(arr[i]);
//   i--;
// }

// let sum = 0;
// while (i < arr.length) {
//     sum += arr[i];
//     i++;
// }

// console.log(sum);


const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

let i = 0;

while (i < mat.length) {
    let row = mat[i];
    let j = 0;
    while (j < row.length) {
        console.log(row[j]); 
        j++;
    }
    i++;
}
