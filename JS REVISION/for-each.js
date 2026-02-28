// What id forEach()

// forEach() is an array method used to loop through array element

// It runs a function for each element
// It does NOT return a new array
//It is used only for iteration

/*
Basic Syntax
array.forEach(function(value, index, array) {
   // code
   });

// OR (Arrow Function)
   array.forEach((value, index) => {
   // code
});
 */

let arr = [10, 87, "varun", "KBP", 87];

arr.forEach(function (num, i) {
  console.log(num, i);
});
