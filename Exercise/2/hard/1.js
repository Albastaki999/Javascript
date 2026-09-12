let arr = [1, 1, 2, 3, 3, 4, 5, 3, 4, 5, 5, 5, 5, 0, 1];
const count = {}; // Will store the number and it's count, example: 1:3 (In the above array 1 has occurred 3 times)

for (const element of arr) {
  count[element] = count[element] ? count[element] + 1 : 1;
}

console.log(count);