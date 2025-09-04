
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
array1.splice(2,1,"varun");
console.log(array1);

//slice

let newarr = array1.slice(3);
console.log(newarr);

