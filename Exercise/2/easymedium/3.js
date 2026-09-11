let a = [1, 2, 3, 4, 5, 6, 7]
let target = 100;
let found = false;

for (let i = 0; i < a.length; i++) {
    if (a[i] == target) {
        console.log("Element found at ", i, "index");
        found = true;
        break;
    }
}

if (!found) {
    console.log("Not found");
}