//  What is an Array?-> An array is a special object used to store multiple values in one variable.

// array is just a list of values
// index start at 0
// Array are used for storing multiple values in a single variable

// create arrry
let arr = [10, 200, 30];
console.log("🚀 ~ arr:", arr);
// or
let arr2 = new Array(10, 20, 302);
console.log("🚀 ~ arr1:", arr2);

// access values
console.log(arr[0]); // 10
console.log(arr[1]); // 200

// change value

arr[0] = 50;
console.log("🚀 ~ arr:", arr);

// 1.length

console.log(arr.length);

let arr1 = [10, 20, 30];

console.log("Original:", arr1);

// 🔹 ADD METHODS

arr1.push(40);
console.log("push (add end):", arr1);

arr1.unshift(5);
console.log("unshift (add start):", arr1);

arr1.splice(2, 0, 15);
console.log("splice (add middle):", arr1);

arr1 = arr.concat([50, 60]);
console.log("concat (add multiple):", arr1);

// 🔹 REMOVE METHODS

arr1.pop();
console.log("pop (remove end):", arr1);

arr1.shift();
console.log("shift (remove start):", arr1);

arr1.splice(2, 1);
console.log("splice (remove middle):", arr1);

arr1 = arr.slice(0, 3);
console.log("slice (copy part):", arr1);

delete arr1[1];
console.log("delete (not recommended):", arr1);

/*
Method	                                                            Work
push()	                                                            Add element at end
pop()                                                              	Remove from end
unshift()                                                        	Add at start
shift()	                                                           Remove from start
splice()                                                         	Add/Remove anywhere
concat()	                                                      Merge arrays
slice()	                                                            Copy part of array
delete                                                            	Removes value but keeps empty index ❌
 */

let arr3 = [10, 87, "varun", { name: "ram", age: 51 }, "KBP"];

for (let i = 0; i <= arr3.length; i++) {
  console.log(arr3[i]);
}

console.log(arr3[3].age);
