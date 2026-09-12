let arr = [1, 2, 3, 4, 5, 6, 7];

// If there's only one element then it's already sorted
if (arr.length <= 1) {
  console.log("Sorted");
  return; // this line exits the program and the code below it is skipped
}

for (let i = 1; i < arr.length; i++) {
  // Compare current element with previous element
  if (arr[i] < arr[i - 1]) {
    console.log("Not Sorted");
    return;
  }
}

console.log("Sorted");

