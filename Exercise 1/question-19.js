let age = 3;
let isWeekend = true;
let price = 0;

if (age >= 5 && age <= 12) {
    price += 100;
}
else if (age >= 13 && age <= 59) {
    price += 200;
}
else if (age >= 60) {
    price += 120;
}


if (isWeekend) {
    price += 50
}

console.log(price);
