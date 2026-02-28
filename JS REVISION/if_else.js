// what is if statement -> if used to execute code only when a condition is true
// syntax
/*
if (condition) {
  // code runs if condition is true
}


// What is if-else -> if-else used when we want to run one block if conditions is true and block if false
// syntax
if (condition) {
  // true block
} else {
  // false block
}

// What is if-else if-else -> used when checking multiple conditions
// syntax
if (condition1) {
  // block 1
} else if (condition2) {
  // block 2
} else {
  // default block
}
*/

// Yes, using ternary operator:

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// JavaScript converts it to Boolean automatically.
if ("hello") {
  console.log("Runs"); // Runs (truthy)
}


/*
1️⃣ Check if a number is positive or negative.

2️⃣ Check if a number is even or odd.

3️⃣ Check if a person is eligible to vote (age ≥ 18).

4️⃣ Find largest of two numbers.

5️⃣ Check if a number is divisible by 5.

6️⃣ Check if a year is a leap year.

7️⃣ Check if a number is multiple of both 3 and 5.

8️⃣ Check if a character is a vowel or consonant.

9️⃣ Find absolute value of a number using if–else.

🔟 Check if a number is zero, positive, or negative.*/


//Check if a number is positive or negative.

let num = -22;
if(num>0 ){
    console.log("number is positive")
} else if (num<0) {
    console.log("number is negative")
}


// 2️⃣ Check if a number is even or odd.

let n = 3;

if(n %2 === 0){
    console.log( 'even number')
    
} else {
    console.log('odd number')
}
