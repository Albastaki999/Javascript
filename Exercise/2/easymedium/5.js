let a = [1, 2, 3, 4, 5, 6, 7, -1]
let l = 0
let r = a.length - 1;

while (l < r) {
    let temp = a[l]
    a[l] = a[r]
    a[r] = temp
    l++;
    r--;
}

console.log(a);
