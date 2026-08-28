let units = 300
let bill = 0;

if (units > 200) {
    bill += ((units - 200) * 10)
    units -= (units - 200);
}

if (units > 100) {
    bill += ((units - 100) * 7);
    units -= (units - 100);
}

bill += (units * 5)

console.log(bill);
