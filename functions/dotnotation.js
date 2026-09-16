let student = {
  initializeStudent: function (firstName, age) {
    this.firstName = firstName;
    this.age = age;
  },
};

let arr = [1, 2, 3, 4];
console.log(arr.length);

// console.log(student.firstName);
// console.log(student.isEligibleToVote());
console.log(student);
student.initializeStudent("Rashid", 25);
console.log(student);
