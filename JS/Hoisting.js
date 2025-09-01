// immutable primitive data type (call by value)

let name1='varun';
let number=22;

let ans1=number[0];
console.log('ans1',ans1);

let ans=name1[0];
console.log('ans:',ans);

ans="s";
console.log('ans',ans);

console.log('name1',name1);

let name= "Dange";
console.log('name',name);


// mutable --> non-primitive data type (call by reference)

let arr=[1, 2, 3, 4];

arr[0]=4;
console.log('arr:',arr)

// console.log([]===[]);
// console.log({}=={});