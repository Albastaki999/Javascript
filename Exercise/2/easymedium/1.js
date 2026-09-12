let arr = [1, 2, 3, 10, 21, 35, 65, 66, 78, 77, 73]

let evenCount = 0;
let oddCount = 0;

for (let element of arr) {
    if (element % 2 == 0) {
        evenCount++;
    }
    else {
        oddCount++;
    }
}

console.log("Even Count: ", evenCount);
console.log("Odd Count: ", oddCount);
