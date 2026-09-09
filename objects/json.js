// const student = {
//     firstName: "Rashid",
//     age: 18,
//     address: {
//         line1: "abc",
//         city: "HYD"
//     }
// }

// const json = JSON.stringify(student)

// console.log(json);

let json = '{"userId": 1,"id": 1,"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body": "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem suntremeveniet architecto"}'
let obj = JSON.parse(json)

console.log(obj.userId);
console.log(obj.title);

