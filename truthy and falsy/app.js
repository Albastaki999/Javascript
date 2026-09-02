let isEligible = true;
let age = "123";

// truthy, falsy
// console.log(Boolean("abcd")); // true
// console.log(Boolean("")); // false
// console.log(Boolean(123)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false



let name = "";

// 0, null, undefined, empty string, empty array, empty object, false
if (!name) {
    console.log("Please enter name, because it is required"); 
}