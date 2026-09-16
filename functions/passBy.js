// Pass by value
// let a = 10;

// function f1(a) {
//   a = 20;
// }

// console.log(a);
// f1(a);
// console.log(a);

// Pass by reference

const obj = {
  age: 25,
};

function f2(obj) {
  obj.name = "Hello";
}

console.log(obj);
f2(obj);
console.log(obj);
