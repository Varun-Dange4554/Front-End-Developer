// # what is arrow function -> arrow function is a short syntax to write function in javascript
// #Introduced in ES6 (2015)
// # Uses => symbol
// # Short & clean syntax

// function sum(a, b) {
//   return a + b;
// }

// let sum = function (a, b) {
//   return a + b;
// };

let sum = (a, b) => a + b;

let squre = (a, b) => {
  return a * b;
};

console.log(sum(4, 6));
console.log(squre(2, 2));
