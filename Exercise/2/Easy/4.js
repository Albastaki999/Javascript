let n = 20;
let count = 0;

for (let i = 1; i <= 20; i++) {

    // Check whether it's divisible by 3 using % for remainder
    if (i % 3 == 0) {
        count++;
    }
}

console.log(count);