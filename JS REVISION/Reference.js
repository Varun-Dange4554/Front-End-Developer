let student = {
  name: "varun",
  age: 21,
  course: "computer science",
};

let num = 10;
let number = num;
let student2 = student;
console.log("🚀 ~ number:", number);
console.log("🚀 ~ student2:", student2);

num = 15;
delete student.age;

console.log("🚀 ~ number:", number);
console.log("🚀 ~ student2:", student2);
