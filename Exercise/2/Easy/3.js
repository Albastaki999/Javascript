let n = 20;
let oddSum = 0

for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) {
        oddSum += i;
    }
}
let total = n * (n + 1) / 2
console.log(oddSum);
console.log(total - oddSum);
