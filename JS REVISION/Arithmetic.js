// Arithmethic means mathematical op[erations like addition , subtraction 
// In Java Script arithmetic  is done using opertors

/*
// ✅ 1. Basic Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b);  // 13 Additions 
console.log(a - b);  // 7 subtrction 
console.log(a * b);  // 30 Multiplaction
console.log(a / b);  // 3.3333 Divisin 
console.log(a % b);  // 1 Modulus (Remainder)
console.log(a ** b); // 1000 Exponemt(Power)

// ✅ 2. Increment & Decrement

let x = 5;
x++;  // 6
x--;  // 5

let c = 5;
console.log(c++); // 5 (first use, then increase)
console.log(c);   // 6

let d = 5;
console.log(++d); // 6 (first increase, then use)

// ✅ 3. Assignment Arithmetic Operators

let y = 10;
y += 5;  // 15
y *= 2;  // 30

// ✅ 4. Special Arithmetic Cases

// 🔹 1. String + Number

console.log("5" + 2);  // "52" (string concatenation)
console.log("5" - 2);  // 3

// + is special (string join karth hai)

// 🔹 2. NaN (Not a Number)


console.log("hello" - 2); // NaN 

// 🔹 3. Division by Zeroclg
console.log(10 / 0); // infinity
console.log(-10 / 0); // -infinity


// ✅ 5. Important Math Methods

Math.round(4.6)   // 5
Math.floor(4.9)   // 4
Math.ceil(4.1)    // 5
Math.trunc(4.9)   // 4
Math.random()     // random number (0–1)
Math.max(1,5,3)   // 5
Math.min(1,5,3)   // 1
Math.sqrt(16)     // 4
Math.pow(2,3)     // 8

*/
/*
// 5️ Write program to swap two numbers


let a = 5;
let b = 10;

[a,b] = [b,a]
console.log(a,b)



//Find square of a number

let c = 20;
console.log(Math.sqrt(c));
 
// Find cube of a number
console.log(Math.pow(4,3))

console.log(4 ** 3);  // 64

// Find area of circle

let r = 5;

let area = Math.PI * r * r;
console.log(area)

// Convert Celsius to Fahrenheit
 
let Celsius = 25;

let Fahrenheit = (Celsius * 9/5) + 32
console.log('🚀 ~ Fahrenheit:', Fahrenheit);




// Find remainder of two numbers


let a1 = 17;
let b1 = 5;

console.log(a1 % b1); // 2

*/


/* Check number even or odd

Find largest of 3 numbers

Reverse a number

Check palindrome number

Calculate compound interest
*/

// Check number even or odd


// let Num = Number(prompt("Enter the number"));

// if (Num % 2 === 0) {
//     console.log('number is even')
// } else {
//     console.log('odd number')
// }


// Find largest of 3 numbers


console.log(Math.max(3,7,1)) //7


let a2 = [3,8,1]

let mx = Math.max(...a2)
console.log('🚀 ~ max:', mx);


// Reverse a number

let num = 321;
let str = num.toString()
let res = str.split("").reverse()
console.log('🚀 ~ res:', res);


// Check palindrome number
 

let number = 122

let  ring = number.toString()
let reverse = ring.split("").reverse().join("")

if( ring === reverse) {
    console.log('number is palindrome')
} else {
    console.log('not a palindrome')
}

// Calculate compound interest

let p = 10000; // principle 
let R = 10;
let T = 2;

let amount = p * (1+ R/100) ** T
let ci = amount -p
console.log('🚀 ~ ci:', ci);



//   


let p1 = 20000;

let ans = p1*3/100
console.log('🚀 ~ ans:', ans);



let p2 = 1000;

let ans2 = p2*15/100
console.log('🚀 ~ ans2:', ans2);


