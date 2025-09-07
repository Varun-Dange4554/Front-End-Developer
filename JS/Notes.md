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

**`What is a java script`**

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
```

1. Number.

```js
var num = 19;
```

2. Boolean.

```js
var bool = true;
```

3. Array.

- Array dataType was `Object` it's store value in index format..

```js
var arr = [1, 2, 3, 4]; // array of number [];
```

4. Object.

- will Store the value as a **_key value pair_**
- data-type of this will give you a object only..

```js
var obj = {
  name: 'mehfooz',
};
```

4. arrayObject.

```js
var arrObj = [
  {
    id: 8899009202920,
    name: 'mehfooz khan',
    age: 26,
    DOB: 23 - 04 - 200,
  },
  {
    id: 8899009202920,
    name: 'abhishek',
  },
];
```
## Operater's in `js`

1. **Arithmetic operators**

- this will contain the math's operation like eg.. 
**[add,sub,mul,div,expo,module]**

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

