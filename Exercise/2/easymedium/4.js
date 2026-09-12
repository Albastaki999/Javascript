let arr = ["a", "e", "i", "o", "u"];
let str = "adysuhdbcsksoiqon";
let count = 0;

for (let char of str) {
  if (arr.includes(char.toLowerCase())) {
    count++;
  }
}

console.log(count);
