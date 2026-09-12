let arr = [1, 2, -3, -4, 0, 0, 5, -10, -283, -131, 0];
let positiveCount = 0;
let zeroCount = 0;
let negativeCount = 0;

for (let element of arr) {
  if (element == 0) {
    zeroCount++;
  } else if (element < 0) {
    negativeCount++;
  } else {
    positiveCount++;
  }
}

console.log("Positive Count: ", positiveCount);
console.log("Negative Count: ", negativeCount);
console.log("Zero Count: ", zeroCount);
