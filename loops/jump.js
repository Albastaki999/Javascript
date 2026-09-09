// if (10 < 20) {
//     console.log("Hello");
//     return; // Jump out of current program
// }

// if (20 < 30) {
//     console.log("Hello");  
// }

let i = 0;
// while (i < 15) {
//     i++;
//     if (i == 10) {
//         continue;
//     }
//     console.log(i);
// }

while (i <= 10) {
    if (i % 2 == 1) {
        i++;
        continue;
    }
    else {
        console.log(i);
    }
    i++
}