// Spread Operator (...) and Rest Operator (...) in JavaScript

// Both use the same symbol ...
// But work differently depending on where they are used.

// # Spread Operato -> Spread means expand / unpack values

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log("🚀 ~ arr1:", arr1);
console.log("🚀 ~ arr2:", arr2);
console.log("🚀 ~ arr2:", arr2.length);

const obj = { a: 1, b: 2 };
const obj2 = { ...obj, c: 3 };
console.log("🚀 ~ obj2:", obj2);

function sum(a, b, c, d) {
  return a + b + c + d;
}
let num = [1, 3, 6, 4];
console.log(sum(...num));

// # Rest -> Rest means collect remaining values
// Function parameters

// Destructuring

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// # Rest in Array Destructuring

let arr = [1, 2, 3, 4];

let [first, ...rest] = arr;

console.log(first); // 1
console.log(rest); // [2,3,4]

// # Rest in Object Destructuring

let user = { name: "Varun", age: 25, city: "Mumbai" };

let { name, ...others } = user;

console.log(name); // Varun
console.log(others); // { age: 25, city: "Mumbai" }

// $ Spread                                	Rest
//$ Expands values	                        Collects values
// $ Used in function call	               Used in function parameter
// $ Used on right side	                   Used on left side
// $Example: ...arr                     	Example: function(...args)
