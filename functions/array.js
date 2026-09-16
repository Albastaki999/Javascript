let arr = {
  length: 0,
  push: function (element) {
    this[this.length] = element;
    this.length++;
  },
};

console.log(arr.length);
arr.push(100);
arr.push(200);
arr.push(300);
arr.push(400);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[arr.length - 1]);
