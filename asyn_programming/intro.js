function getData(id, getNextData) {
  setTimeout(() => {
    console.log("Data: ", id);
    if (getNextData) {
      getNextData();
    }
  }, 3000);
}

console.log("Hello 1");

// getData(1);
// getData(2);
// getData(3);

// Callback hell
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4, () => {
        getData(5, () => {
          getData(6);
        });
      });
    });
  });
});

console.log("Hello 2");
