let n = 3

for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
        str += "*"
    }
    console.log(str);
}