let property1 = "age";
let property2 = "name";
let property3 = "address";
let subProperty1 = "city";

const student = {
    [property1]: 25,
    [property2]: "Rashid",
    [property3]: {
        [subProperty1]: "Hyderabad"
    }

}

console.log(student);
console.log(student[property3]?.[subProperty1]);
