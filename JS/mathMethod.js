let number = 25 ;
let ans = Math.pow(number,3); // cubic value // 15625
console.log(ans);


// sqrt method
let number1 = Math.sqrt(number);
console.log(number1);  // root value //5

// without methods 

// sqrt method related 
// "**" exponent operator

let number2 = 25;
console.log(`without inbuild`,number2 ** ( 1 / 2));

// ceil
// 7.99 -->8

// -4.55 -->5

// 7.1 -->8

let num1 = 7.5;
console.log(`num1`,Math.ceil(num1));

// floor
// 7.1 --> 7
// -4.55 --> 4
// 7.6 -->7
let num2 = 7.6;
console.log(`num3`,Math.floor(num2));

let num3 = 125;
console.log(Math.ceil(Math.pow(num3, 1/ 3))); //5
console.log(Math.floor(Math.pow(num3, 1 / 3))); //4



// abs()

let num5 = 3.33;
let result = Math.abs(num5);
console.log(num5);  //3.33


// fround
let num6 =3.33;
console.log(`-->num6`,Math.fround(num6));  // out put 3.3299999237060547


// max
let7 = 35;
let8 = 45;



// Q1. Find the ceiling value of `4.2`.

let num11 = 4.2;
console.log(Math.ceil(num11));// out put 5


// Q2. Find the floor value of `9.99`.

let num12= 9.99;
console.log(Math.floor(num12));// out put 9

// Q3. Generate a random number between `1` and `10`.

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

// Q4 . Find the maximum value among `25, 78, 13, 56`.

let maxnumber = Math.max(25, 78, 13, 56);

console.log(maxnumber); // out put 78

// Q5 . Calculate 2 raised to the power of 8.

let base = 2;
let exponent = 8;
let result1 = Math.pow(base,exponent);
console.log(result1);


// Q6 . Find the minimum value among -12, -5, 0, 8, 3.

let arr = [-12,-5,0,8,3];
let min = Math.min(...arr);
console.log(min)

// Q7. Find the maximum value among 25, 78, 13, 56.
  let a = 25;
  let b = 78;
  let c = 13;
  let d = 56;

  let max = Math.max(a,b,c,d);
  console.log("Maximum value is",max); // 78

  // Q8. Generate a random number between 1 and 10.
  let randomnumber = Math.floor(Math.random()*10)+1;
  console.log(randomnumber);

// Q9. Find the floor value of 9.99.
  let floo = Math.floor(9.99);
  console.log(floo);  //  out put 9






    