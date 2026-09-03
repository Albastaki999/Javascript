let a = [[1, 2, 3], 2, 3]
// let b = [...a] // shallow copy
let b = structuredClone(a); // Deep copy
b[0][0] = 10;
console.log(a);
