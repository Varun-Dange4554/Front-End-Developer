# Intoduction of `java-script`

1. event handling on web-page.
1. **_JavaScript_** is object base _programming language_.{ }
1. this prefer `class-base` & `function-base`

```js
function names(){
    console.log('hello function java script...')
}

class{
    console.log('hello class java script ')
}
```
**What is a java script**

java script is a programming language we use it to give instriction to the computer.
- javaScript is programming language of the web page.
- It can update and change both HTML and CSS.
- It can calculate, manipulate and validate data.

### Internal & External `JS`

- Internal `JS`

```js
<!DOCTYPE html>
<html>
<head></head>
<body></body>
<script>
    console.log('hello java script...');
</script>
</html>
```
- External `js`

```js
<!DOCTYPE html>
<html>
<head></head>
<body>
<script src="./fileName">
</script>
</body>
</html>
```
### Variable Rule
  - variables name are case sensitive;"a" & "A" is different.
 -  only letters,digits,underscore( _ )and $ is allowed.(not even space)  
 - Only a latter, undescore( _ ) or $ should be 1st character.
 - Reserved words cannot be variables name.
 ```js  
 isFollow =camel case;
```
## Variable declaerd keyword (let,var & const )
 - `var: varible can be re-declaerd & update .A global scope variable.`
 -  `let: variable cannot be re-declared but can be update.A block scope variable.`
 - `const:Variable cannot be re-declared or update.A block scope variable.`
 
 var 
 ```js
 var age = 20;
 var age = 22;
 var age = 21;
 console.log(age)
```
 let
 ```js
 let age = 20;
 age = 22;
 age = 21;
 console.log(age)
 ```
 const 
 ```js
 const PI = 3.14;
 console.log(PI);
 ```
## Data - Type in `js`
1. String

```js
var str = 'string'; // single qoute
var str = "string"; // double qoute
var str = `string`; // back-tick -> ternary operator `${name}`
````
`1.Primitive data type`

1. Number:-All numbers (integers and floats)

```js
let num = 19;
```
2. Boolean:-Logical true/false

```js
let bool = true;
```
3. string:-A sequence of characters
```js
let str = "Varun";
```
4.BigInt:-For very large integers

```js
let bigNumber = 12345678901234567890n; // BigInt
```
5.Undefined:-A variable that has been declared but not assigned a value

```js
let notDefined;               // Undefined
```
6.Null:-Represents intentional "no value"

```js
let empty = null;             // Null
```
7.Symbol:-Unique identifiers (used in advanced use cases)

```js
let id = Symbol("uniqueId");  // Symbol

```

`2. Non-Primitive (Reference) Data Types`

1. Array:-Ordered list of values

- Array dataType was `Object` it's store value in index format..

```js
var arr = [1, 2, 3, 4]; // array of number [];
```

2. Object:-Collection of key-value pairs

- will Store the value as a **_key value pair_**
- data-type of this will give you a object only..

```js
var obj = {
  name: 'varun',
  age:20;
};
```

3.Function:-A block of code
```js
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!
```
## Operater's in `js`

1. **Arithmetic operators**

- this will contain the math's operation like eg.. 
**`[add,sub,mul,div,expo,module]`**

2. **comparison operators**

- `==` -->In this **_js_** use to convert the number if they have string **type** and the perfrom the operation,and this will return alway's _boolean_ value.

- `===`-->In this **js** use to compire **data-type** & **data-value** show be alway's same then perform operation,and this will return alway's__boolean__ value.

- `!==`--> The != operator checks if two values are not equal, allowing type coercion (just like == does with equality).

  - If the values are of different types, JavaScript will try to convert them to the same type before comparing.   

   - It returns a Boolean: true if the values are not equal after conversion, false if they are.

 - `!==` The !== operator checks whether two values are not equal in value or type.

   - It does not perform type coercion.

   - Returns true only if the values are not equal or not the same type.


3.  **Logical Operators**

- AND `[&&]`
  - left and right both value/condition are true then this will return the boolean value.
  - eg:- `true && true`
- OR `[||]`
  - left or right both the value have single true/positive value then it's return the boolean value.
  - eg:- `true && false`
- NOT `[!]`
  - this will toggle/convert the value into opposite of the current value.
  - eg:- `!true -> false`
  

## notes `20/08/2025`

```js
let num1 = '3';
let num2 = 3;

let flag = true;

let andCondition = num1 === num2 || num2 != num1 + 1;
console.log('🚀 ~ andCondition:', andCondition);

console.log(!flag);

let number = 30; // decimal number

let binaryConv = number.toString(16); // octa val
console.log('🚀 ~ binaryConv:', binaryConv);

let octa_To_num = parseInt(binaryConv, 2);
console.log('🚀 ~ octa_To_num:', octa_To_num);

let name = 'nilesh';
let surname = 'yadav';

let full_name = name + ' ' + surname;

let full_name1 = `${name} ${surname}`;
console.log('🚀 ~ full_name1:', full_name1);
console.log('🚀 ~ full_name:', full_name);

let number1 = 1;

// number1 =+ 2

// number1+=2;

++number1;
number1++;

console.log('🚀 ~ number1:', number1);

let nums = 2;
let nums1 = '2';

// typeOf

let typeCheck = typeof nums;
console.log('🚀 ~ typeCheck:', typeCheck);
let typeCheck1 = typeof nums1;
console.log('🚀 ~ typeCheck1:', typeCheck1);

let arr = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10, 11, 12]]];
console.log('🚀 ~ arr:', typeof arr);
// 1 2 3 4 5 6 7 8 9 10 11 12

let arr1 = [1, 2, 3, 4];

let arr2 = [5, 6, 7, 8, 9];
let newArr = [...arr1, ...arr2];
console.log('🚀 ~ newArr:', newArr);

const functions = (...args) => {
  console.log('🚀 ~ args:', args);
};
functions(1, 2, 4);

let age = 56;

if (age >= 66) {
  console.log('too late for vote!!');
} else if (age >= 18) {
  console.log('eligible for vote!!');
} else {
  console.log('not eligible for vote!!');
}

let number = 238;

if (number % 2 == 1) {
  console.log('Odd number...');
} else {
  console.log('Even number...');
}
```

## switch case

- kind of `if-else` conditional rendering.
- but in this we have two reserve- keyWord `break` or `default/case` and `continue`.

```js

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

```
**_how to work_**

 - The value of the expression is compared with the values of each case
 - If there is no match, no code is executed.

 **_The break Keyword_**
  
   - This will stop the execution inside the switch block.
   - No more statements in the switch block will be executed.

**_The default Keyword_**   

 - The default keyword specifies a block of code to run if there is no case match.
 - The default keyword is optional.
 
   4.Spread Operator

    ✅ Used in:

  - Function calls

  - Array literals

   - Object literals

   ```js
    🔸 Example: Spread in Function Call
       let nums = [1, 2, 3];
       Math.max(...nums); // same as Math.max(1, 2, 3)
    🔸 Example: Spread in Arrays
         let a = [1, 2];
         let b = [3, 4];
         let combined = [...a, ...b]; // [1, 2, 3, 4]
    🔸 Example: Spread in Objects
        let obj1 = { x: 1, y: 2 };
        let obj2 = { z: 3 };
        let merged = { ...obj1, ...obj2 }; // { x: 1, y: 2, z: 3 }

```
  5.Rest Operator

  Use: To collect multiple elements into a single array (or object).

✅ Used in:

- Function parameters

- Destructuring assignment
```js
    🔸 Example: Rest in Function Parameters

        function sum(...numbers) {
         return numbers.reduce((a, b) => a + b);
           }

           sum(1, 2, 3, 4); // returns 10

    🔸 Example: Rest in Array Destructuring

       let [first, ...rest] = [10, 20, 30, 40];
       // first = 10
       // rest = [20, 30, 40]
 
    🔸 Example: Rest in Object Destructuring
       let { a, ...others } = { a: 1, b: 2, c: 3 };
       // a = 1
      // others = { b: 2, c: 3 }

```
# Loop in js
- Loos are used to excted a pices of code again and again.

for loop
```js
for (let i=0;i<=5;i++){
console.log("varu")
}

```
while loop 
```js
while(condition){
  // do some work
}



let i = 1;
while(i<=5>){
  console.log("varun");
  i++
}

```
do while loop
```js
do{
  //do some work
}while (condition);

let i = 0;
do{
console.log("varun");
i++
}
while(i<=5);


```

# Function :- 
Functions are defined using the `function` keyword, followed by a function name, a list of parameters in parentheses (optional), and a block of code enclosed in curly braces

 - block of code that perfrom a specific task, can be `invoked`(call) whenever needed

```js
function anualDay(){
    console.log("hello function");
};
 anualDay();

```
   - Parameters and Arguments:- Functions can accept input values through parameters defined in their declaration. When the function is called, specific values (arguments) are passed, which are then used within the function's scope.
   ```js
       function add(a, b) {
      return a + b;
    }
    let sum = add(5, 3); // sum will be 8
   ```
   - Return Values:- Functions can return a value using the return keyword. This value can then be used by the code that called the function. If no return statement is present, the function implicitly returns undefined.

 ```js
    function add(a, b) {
  return a + b;
}
let result = add(5, 3);  // result is 8
console.log(result);     // Output: 8
 ```  
  - Arrow Functions:- A more concise syntax for defining functions, particularly useful for short, single-expression functions.
 
 Argument not working with arrow function and use to val keyword
 
 no prototype for arrow function

 new keyword not working with arrow function 

 arrow function dont have own this
```js
    const square = num => num * num;
    console.log(square(7)); // Output: 49
```  

### Immutable & Mutable :-
In java script Mutable can be changed or modified after creation & Immutable cannot be changed directly

#### Immutable :-
Primitive data type like string & Number are Immutable. Once you create tham , you can't change their value directly.

#### Mutable :-
Reference data type like, arrays & object are mutable.Once you create them, can be changed or modified.

# object 

In JavaScript, an object is a non-primitive data type used to store collections of related data and more complex entities. Unlike primitive data types (like strings, numbers, booleans), which hold a single value, objects can store multiple values, organized as key-value pairs, also known as properties.

 - Objects hold data in key-value pairs.

 - Values can be any type: strings, numbers, arrays, even functions.

 - Objects are mutable and passed by reference.

 - Use dot or bracket notation to access values. 

 - Use for...in or Object.keys() to loop through them.

# Array

## 🔹 Definition of Array in JavaScript

An **array** in JavaScript is a special type of object used to **store multiple values in a single variable**.  
It is a **collection of elements**, where each element has an **index** (starting from 0).

Arrays can hold values of **any data type**, including numbers, strings, booleans, objects, functions, and even other arrays.

### ✅ Example:

```js
let colors = ["red", "green", "blue"];
```

### ✅ Key Characteristics:

- Arrays are mutable (can be changed).

- Arrays are zero-indexed.
 
- Arrays are objects, but behave like lists.

- Can store mixed data types.          

# syncs in Js

### Synchronous
Synchoronous means the code runs in a particular sequence of instruction given in the program Each instruction for waits for the previous instruction to complete its exections.

### Asynchronous
Due to synchronous programming sometimes imp instructions get blocked due to some previous instruction, which case delay intel UI Ascynchronous code excution allows to execut next instruction immediately and dosent block the flow



### callback Hell

 - callback hell:-Nested callback stacked below one other forming a pyramid structure.
 - This style of programming becomes difficult to understand & manage 
 syntax
 ```js
function doTask(callback) {
  setTimeout(() => {
    console.log('Task done');
    callback(); // call the next thing
  }, 1000);
}

doTask(() => {
  console.log('Next step');
});

 ```

 ### Promise 
 Promise is for `"eventual"` completion of task it is an object in js. It is a solution to callback

 `A java script promise object can be`

 - panding:- The result is undifined 
 - Resolved:-The result is a value (full filed)
 - Rejected:-The result is an error object 

 ```js
 promise
 .then() & .catch()
 promise.then((res)=>{----})
 promise.catch((err)=>{----})

 ```

 ex
 ```js
 // Create a promise
let myPromise = new Promise((resolve, reject) => {
  // async operation
  let success = true;

  if (success) {
    resolve("✅ Success!");
  } else {
    reject("❌ Error!");
  }
});

// Use the promise
myPromise
  .then(result => {
    console.log(result); // "✅ Success!"
  })
  .catch(error => {
    console.log(error); // "❌ Error!"
  });

 ```
### Async-Await

- async function always returns a promise 
```js
async function myFunc(){---}
```
await pauses the execution of it's surrounding async function untilthe promise is settled.

# Fetch API

API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other, acting as a messenger or intermediary between them to exchange data and perform tasks.

- The Fetch API provides an interface for fetching (sending/receiving) resourse

- It uses Request and Response objects.

- The fetch()method os used tto fetch a resourse(data)

### Understanding Terms

- AJAX is Asynchronous JS & XML
- JSON is javascript object Notation
- json()method: returns a second promise that resolves with the result with the result of parsing the response body text as JSON.(Input is JSON,output is JS object)




### DOM (Document Object Modle)

The Document Object Model (DOM) in JavaScript serves as a programming interface for HTML and XML documents. It represents the structure of a web page as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text. This tree-like structure allows JavaScript to interact with and dynamically modify the content, structure, and style of a web page.

## What is DOM
When a wed page is loaded the browser creates a Document Object Model(DOM) of the page


## DOM Manipulation 

`Selecting with id`

  document.getElementById("myId")

  
`Selecting with class`

  document.getElementByClassName("myClass")

  
`Selecting with tag`

  document.getElementByTagName("p")

  `Query Selector`

  document.querySelector("myId/myClass/tag")
// returns first element

  document.querySelector("myId/myClass/tag")
// return a NodeList


`Propertis`

-  tagName: returns tag for element nodes
- innertext:returns the text content of the element and all its children
- innerHTML:returns the plain text or HTML content in the element
- textContent:returns textual content even for hidden elements



##DOM Manipulation

`Attributes`
- getAttribute(attr) // to get the attribute value
- setAttribute(attr,value)// to set the attribute val th

`Style`
- node.style

`Insert Elements` 
   
     let el = document.createElement("div")  

- node.append(el) // add at the end node (inside)
- node.prepend(el) // adds at the start of node (inside)
- node.before(el) // adds before the node (outside)
- node.affter(el) // adds after the node (outside)

`Delete Element`

- node.remove()// removes the node
