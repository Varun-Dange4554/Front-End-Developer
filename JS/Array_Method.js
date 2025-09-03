
// push method  
let array1 = [1, 2, 6, 4, 5, 3];
console.log(array1)
array1.push(9);
console.log(array1);

//pop method
let array2 = [1, 2, 6, 4, 5, 3];
array2.pop();
console.log(array2);

// shift and unshift

array2.shift();
console.log(array2);

array2.unshift(9);
console.log(array2);

// delete

let array3 = [1, 2, 6, 4, 5, 3];
delete array3[3];
console.log(array3);

//splice 
array3.splice(2,1,"varun");
console.log(array3);

//slice
let array4 = [9, 3, 0, 7, 4, 8 ];

let newarr = array4.slice(3);
console.log(newarr);

