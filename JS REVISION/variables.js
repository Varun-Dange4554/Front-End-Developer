//  VARIABALE

// what is  Variable:- A Variable is a container used to store data.

let age = 21 ; // age -> variable ,21-> vlaue stored in the variable 

//  what is scope -> scope means where a variable can be accessed
// global scope
// block scope
// function scope


let a = 10; // Global

function test() {
  let b = 20; // Function scope
}


// what is Hoisting -> hoisting means variable and function declarations are moved to the top of their scope before execution

console.log(H)  // undefined
var H = 1

// Are let and const hoisted -> yes but they are in Temporal Dead Zone (TDZ) and cannot be accessed before declaration

//console.log(a1); // ❌ Error
//let a1 = 10;

//  What is Temproral Dead Zone -> The time  between variable hoisting and initialization wherer the variable cannot be accessed

// 🔥 9. Can we modify const object? -> yes we can modify properyies

const user = { name: "John" };
const Up = user.name = "Mike"; // ✅ Allowed
console.log('🚀 ~ Up:', Up);


//  What happens if we declare variable without var/let/const? -> It becomes a global variable (not recommended)
x = 10
console.log('🚀 ~ x:', x);

//  What is Global Scope? ->A variable declred outside any function or block
let a1 = 10;


// What is Block scope -> variable declared inside {} using let or const

if (true) {
  let x = 10;
}


// What is Shadowing  -> When a variable inside block oute variabled

let a3 = 10;

if (true) {
  let a4 = 20;
  console.log(a4); // 20
}

console.log(a3); // 10


// What is Variable Initialization? -> Assigning value to variable

let a6 = 10;

// What is Undefined -> A Variable declared but not assigned value

let a7;
console.log(a7); // undefined