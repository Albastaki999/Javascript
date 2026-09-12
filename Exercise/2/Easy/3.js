let n = 20;
let oddSum = 0;

// Calculate sum of odd numbers
for (let i = 1; i <= n; i++) {
  if (i % 2 == 1) {
    oddSum += i;
  }
}

// Sum of all numbers between 1 to N
let total = (n * (n + 1)) / 2;

// Sum of odd numbers
console.log(oddSum);

// Total sum - sum of odd numbers = Sum of Even numbers
console.log(total - oddSum);
