const a = [1, 2, 3, 4, 5, 6];
const b = [0, 100, 2, 5, 9, 10, 21];
const commonElements = [];

for (let element of a) {
  if (b.includes(element)) {
    commonElements.push(element);
  }
}

console.log(commonElements);