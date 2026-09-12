let n = 20;

// Even Numbers
for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) 
        continue;
    console.log(i);
}

// Odd Numbers
for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) 
        continue;
    console.log(i);
}