//Non-Primitive 

// What are the non-primitive types -> non-primitive types are the reference types 
// They stored collection of values or complex-data 


// They are mutable (can be changed)
// stored in haapn memory
// copied by reference, not by value

// main non-primitive
// 1.object
// 2.array
// 3.Function

//Object -> Stored data key-value pairs

let user = {
  name: "John",
  age: 25
};

console.log(user.name);

// object are mutable

user.age = 30
console.log(user.age)


// Array -> Store multiple value in order

let arr = [1,2,3,4,5]
console.log(arr[0])

// Arry are mutable

arr.push(6)
console.log(arr[5])


//  Function -> function are also object in java script

function greet(){
    return 'hello'
}
console.log(greet())

greet.language = "English";
console.log(greet.language);


/*
Feature         	          Primitive	                      Non-Primitive
Stored in	                  Stack	                           Heap
Copy type	                  Value copy                                         	Reference copy
Mutable                   	  ❌ No                                                   	✅ Yes
Example                       number, string	                                          object, array 
*/