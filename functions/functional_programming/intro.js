let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log("Index:", i, "Value:", arr[i]);
// }

const result = arr.forEach((element, index) => {
  console.log(element, index);
});

console.log(result);

