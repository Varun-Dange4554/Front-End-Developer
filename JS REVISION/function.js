// 📌 What is a Function? -> A function is a reusable block of code that performs a specific task.

// syntax
// function functionName(parameters) {
//   // code
// }

// Function Declaration

// function greet() {
//   console.log("Hello");
// }

// greet(); // Calling the function

// Function with Parameters

/* 
function get(name) {
  console.log("hello" + " " + name);
}
get("varun");
*/
// Function with Return ->Return sends value back.

// function add(a, b) {
//   return a + b;
// }
// add(3, 5);

// Parameters → receive values
// Arguments → values passed

// Arrow Function (ES6) -> Short syntax.

const addnumber = (c, d) => {
  c + d;
};
console.log(addnumber(7, 8));

/*Normal Function vs Arrow Function
Normal Function	                                            Arrow Function
Has its own this                                          	No own this
Can use arguments                                        	Cannot use arguments
Used in objects	                                            Good for callbacks
 */

// Default Parameters

function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet(); // Hello Guest

// Rest Parameter

// Used to accept multiple values.

function sum(...number) {
  return number.reduce((a, b) => a + b);
}
console.log(sum(1, 22, 3, 45));

// Callback Function
// Function passed as argument

function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function bye() {
  console.log("Goodbye");
}

greet("John", bye);

// Anonymous Function

setTimeout(function () {
  console.log("Hello");
}, 1000);
