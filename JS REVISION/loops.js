//  What is a Loop? -> A loop is used to repeat a block of code multiple times

// for loop

//  Used when you know how many times you want to run the loop.

// syntax
// for (initialization; condition; increment/decrement) {
//   // code
// }

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while loop
// Runs while conditions is true

// syntax

// while (condition) {
//   // code
// }

let i = 5;

while (i <= 5) {
  console.log(i);
  i++;
}
// 3️⃣ do...while Loop
// Runs at least one time (even if conditions if false)
// syntax

// do {
//   // code
// } while (condition);

let l = 1;

do {
  console.log(l);
  l++;
} while (l <= 5);

// 🔥 Difference: while vs do...while
// while                                 	do...while
// Checks condition first               	Runs once then checks
// May run 0 times	                        Runs at least 1 time

// for...in loop
//used to iterate over object propertie

let user = { name: "John", age: 25 };

for (let key in user) {
  console.log(key, user[key]);
  console.log("🚀 ~ key:", key);
}

// 5 for...of Loop
// used to iterate over arrays or string

let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}

let counter = 0;

while (counter < 10) {
  console.log(`${counter + 1}`);
  counter = counter + 1;
}
console.log("out of the loop");

// callback

function geting(name) {
  console.log("hello" + `${name}`);
}

function getuser(callback) {
  let name = prompt("please enter name");
  callback(name);
}
getuser(geting);
