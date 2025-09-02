// 1. Write a function that takes two numbers as input and returns their sum.


function addTwoNumber(a, b){
    return a + b;
}
let result = addTwoNumber(7,2);
console.log(result); 

// 2. Create a function that checks if a number is even or odd.

function evenodd(number){
    if (number % 2 === 0 ){
        return "even";
    }
    else{
        return "odd";
    }
}

console.log(evenodd(8));
console.log(evenodd(3));


//3. Write a function that returns the square of a number.


function printsqure(){
    for(let i = 1; i<=10; i++){
        console.log(i*i);
    }
}
printsqure();




//4.  Create a function that takes a string and returns its length.

function getstring(input){
    return input.length;
   
}
console.log(getstring('varun'));
console.log(getstring('Dange'));


//5. Write a function to find the maximum of two numbers.
function maximumNumber(a,b){
    if( a > b ){
        return a;
    }
    else{
        return b;
    }
}
let result1 = maximumNumber(80,20);
console.log(result1);

//5. Write a function that prints your name 5 times.



function myName(){
   for (let i =1; i<=5;i++){
    console.log("varun");
   }
}
myName();


//6. Write a function to calculate the area of a circle given its radius.

function areaCircle(){

}





//7. Create a function using the "function" keyword that tasks a string as an argument & returns the number of vowel in the string.

function countvowel (str){
    let count=0;
    for (const char of str){
        if(
            char === "a" ||  char === "e" ||  char === "i" ||  char === "o" ||  char === "u" 
        )
        {
            count ++;
        }
    }
    console.log(count);
}

console.log(countvowel("sark"));


//8. Write a function that reverses a string.


//8. Write a function that reverses a string.
   


function reverseStr (str){
  return str.split('').reverse('').join('');
}
console.log(reverseStr('hello'));



