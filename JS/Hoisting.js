// immutable primitive data type (call by value)  Immutable-->unchangeable
// number string and booleans

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





// mutable --> non-primitive data type (call by reference)   mutable --> changeable
//  // object  arrays and functions 
let arr=[1, 2, 3, 4];

arr[0]=4;
console.log('arr:',arr)

// console.log([]===[]);
// console.log({}=={});










// immutable [call by value ] [primitive]

let name3=`varun`; //a

let first=name3[0]; //b 
console.log(first);

first='k'; // b update 

console.log(first);

name3[0]=`k`

console.log(name3[0]);
console.log(name3);

// console.log(name3[0]);
// console.log(name3[1]);
// console.log(name3[2]);
// console.log(name3[3]);
// console.log(name3[4]);



/*
number
string 
boolean
*/





// mutable [call by reference] [non-primitive]

let arr=[1, 2, 3, 4,];
let newData=arr[0];

arr[0]=5

console.log(newData);
console.log(arr)


//object

let object={
    name:`varun`

}
object.name="Dange"
console.log(object);


//for loop 

for (var i=1; i<=2;i++){
    console.log(i);
}
console.log(i);

/*
OBJECT
ARRAY
FUNCTION
*/
