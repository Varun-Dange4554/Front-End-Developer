
// push() method
// Adds one or more elements to the end of an array.  
let array1 = [1, 2, 6, 4, 5, 3];
console.log(array1)
array1.push(9);
console.log(array1);

//pop() method
// Remove the last element from an array.
// let array1 = [1, 2, 6, 4, 5, 3];
array1.pop();
console.log(array1);

// shift()
// Remove the first element from the array.

array1.shift();
console.log(array1);

//unshift()
// Adds one or more elements to the beginning of an array.
array1.unshift(9);
console.log(array1);

// delete
//The delete operator does not update the array length and does not reindex the array. 
// It just removes the value at a specific index and leaves an empty slot (called a hole).

delete array1[3];
console.log(array1);
console.log(array1.length);

//splice 
// The splice() method is used to add, remove, or replace elements in an array in place.


array1.splice(0, 2, "varun");
console.log(array1);

//slice()
// The slice() method slices out a piece of an array into a new arra

let newarr = array1.slice(2);
console.log(newarr);



// array length
// .length returns the number of elements in the arra
// let array1 = [1, 2, 6, 4, 5, 3];
let size = array1.length;
console.log(array1);

// arrar toString()
//The toString() method returns the elements of an array as a comma separated string.
let names = ["varun","vipul","sanket","sanskar"];
let myList = names.toString();
console.log(myList);

let size1 = myList.length;
console.log(size1);

// array at() 

let name1 = names.at(1);
console.log(name1);

// array at[]
let name3 = names.at(3);
console.log(name3);

// Array join()

let join = names.join();
console.log(join);

//Array copyWithin()
//  The copyWithin() method copies a sequence of array elements to another position within the same array, without changing its length.

let array2 = [1, 2, 6, 4, 5, 3];
let copy = array2.copyWithin(0,1);
console.log(array2);



