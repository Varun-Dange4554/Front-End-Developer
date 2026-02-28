// what is sobject -> An object is a collection of key–value pairs.\

let student = {
  name: "varun",
  age: 21,
  course: "computer science",
};
// 1️⃣ Dot Notation
console.log(student);
console.log(student.name);
console.log(student.age);

//2️⃣ Bracket Notation
console.log(student["course"]);

// How to Add Property

student.city = "mumbai";

console.log(student);

//How to Update Property

student.age = 20;
console.log(student.age);

// How to Update Property

delete student.age;
console.log(student);

let person = {
  name1: "varun",
  greet: function () {
    console.log("hello", this.name1);
  },
};
person.greet();

// 🔥 What is this in Object?

// this refers to the current object
// console.log(this.name);

// Nested Object
