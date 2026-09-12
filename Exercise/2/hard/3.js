const arr = [1, 2, 3, 4, 4, 10];
const target = 8;

/*
The goal is find those 2 indices where the sum of elements at those indices results to target, given that there will always be such a pair of indices, and only one pair
In the above example we can clearly see that 4 + 4 = 8 which is the target
we can see that 4, 4 occur at the indices 3, 4 respectively
*/

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] == target) {
      console.log([i, j]);
      break;
    }
  }
}
