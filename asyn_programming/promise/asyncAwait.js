let getDataById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", id, "fetched");
      resolve("Data " + id);
    }, 3000);
  });
};

// getDataById(1)
//   .then(() => {
//     return getDataById(2);
//   })
//   .then(() => {
//     return getDataById(3);
//   })
//   .then(() => {
//     getDataById(4);
//   });

let fetchData = async () => {
    await getDataById(1);
    await getDataById(2);
    await getDataById(3);
    await getDataById(4);
};

console.log("Hello 1");
// fetchData();
console.log("Hello 2");
