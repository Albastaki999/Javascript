// console.log("1");

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Data");
//     resolve("Data fetched");
//     // reject("Some error")
//   }, 3000);
// });

// console.log("3");

function getData(id) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", id);
      resolve("Data Fetched");
      // reject("Some error")
    }, 3000);
  });

  return promise;
}

console.log("Hello 1");

// getData(1).then((res) => {
//   console.log(res);
// });

// getData(2).then((res) => {
//   console.log(res);
// });

// getData(3).then((res) => {
//   console.log(res);
// });

getData(1)
  .then(() => {
    return getData(2);
  })
  .then(() => {
    return getData(3);
  });

// getData(1).catch((err) => {
//   console.log(err);
// });

console.log("Hello 2");
