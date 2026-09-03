let name = "Rashid";

let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
let count = 0;

let nameCharacters = [...name];

if (vowels.includes(name[0])) {
    count++;
}
if (vowels.includes(name[1])) {
    count++;
}
if (vowels.includes(name[2])) {
    count++;
}
if (vowels.includes(name[3])) {
    count++;
}
if (vowels.includes(name[4])) {
    count++;
}
if (vowels.includes(name[5])) {
    count++;
}

console.log(count);

