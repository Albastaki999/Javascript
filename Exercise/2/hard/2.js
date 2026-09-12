const n = 10;
const nums = [1, 3, 2, 5, 4, 9, 7, 8, 6];
/*
We can observe in the above array that there are numbers from 1 to 9, but 10 is missing
*/

const totalSum = (n * (n + 1)) / 2;
let incorrectSum = 0;

for (const num of nums) {
  incorrectSum += num;
}
const missingNumber = totalSum - incorrectSum;

console.log("Missing number is", missingNumber);
