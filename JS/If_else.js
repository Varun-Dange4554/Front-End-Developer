let number = prompt("Enter a number");

if (number % 2 == 1) {
console.log('Odd number...');
} else {
console.log('Even number...');
}



// let age = 20;
// if (18 > age){
//     console.log('vote');
// }else {
//     console.log('not vote');
// }




let mode = "blue";
let color;

if (mode === "dark")   {
      color = "black";
         } else if (mode === "blue"){
            color = "blue";
         } else if (mode === "pink"){
            color = "pink";
         }else {
            color = white;
         }
         
         console.log(color);


  //Q. get user to input a number using prompt ("Enter a number:").Check if the number is a multiple of 5 or not.

// let num = prompt("Enter a number");
  

//   if(num % 5 === 0) {
//    console.log(num ,' is multiple of 5');

//   }else {
//    console.log(num ,'is not multiple of 5');
//   }
  


  //Q. Write a code whitch can give grades to student according to theri scores.


//   let score = prompt("enter a scores");

//   if(score  > 80){
//    console.log('grades is A');
//   }
//    else if(score > 89){
//       console.log('grades is B');
//    }
//   else if(score > 69){
//       console.log('grades is C');
//    }
//    else if(score > 59){
//       console.log('grades is D');
//    }
//   else {
//       console.log('student is faill');
//    }
  

   // using && 

  
 let score = parseInt(prompt("Enter a score"));

  if(score >= 90 && score <= 100){
    console.log('student grades is A')
  }
  else if(score >= 70 && score <= 89){
    console.log('student grades is B')
  }
   else if(score >= 60 && score <= 69){
    console.log('student grades is C')
  }
   else if(score >= 50 && score <= 59){
    console.log('student grades is D')
  }
  else if(score >= 0 && score <= 49){
    console.log('student faill')
  }
   



   
//Q check if a number is divisibale by both 3 & 5.

let number1 = parseInt(prompt('Enter the number'));

    if (number1 % 3 == 0   || number1 % 5 == 0){
      console.log(`the ${number1} is divisible`);

    }
    else{
      console.log(`The ${number1} is not divisible`);
    }



    //Q  Find the greater between two number.
    
    
    let y = prompt(`enter the 1st  number`);
    let z =prompt(`enter the 2nd number`);
    
    if( y > z){
      console.log(` ${y} is greater than ${z} ` );
    }else  {
      console.log(` ${y}  less than ${z}`);
    }




    //Q  find the largest among three number 


let a = Number(prompt(`Enter the 1st number`)) ;
let b = Number(prompt(`Enter the 2nd number`)) ;
let c = Number(prompt(`Enter the 3 number`)) ;

console.log(`${a} ${b} ${c}`);


if (a >= b && a >= c){
console.log(`number 1st largest`);
}
else if (b >= a && b >= c){
  console.log(`number 2nd lagest`);
}
else{
    console.log(`number 3 is lagest`);
}


//Q  check if a given year is a leap year or nut 


let leap = prompt(`enter the year`);

if(leap  % 4 == 0){
console.log(`${leap} is the leap year`);
}
else {
  console.log(`${leap} is not  leap year`);
}



//Q  check if number is positive, negative or zero.

let num = prompt(`ente the number`);

if (num > 0){
  console.log(`${num}number is positive`);
}
else if (num < 0){
  console.log(`${num}number is negative`)
}
else {
  console.log(`${num}number is zero`)
}



//Q categorize a person by age 

let age = prompt(`Enter the age `);

if ( age <= 12){
  console.log('child')
}else if (age <= 19){
  console.log(`teen`);
}else if (age <= 59){
  console.log(`Adult`);

}else{
   console.log(`Senior`);
}



//Q Check if a given character is a vowel or consonant.


let char = prompt(`enter the character` );
char = char.toUpperCase();
if (char == `A` || char == `E` || char==`I`|| char==`O` || char==`U`){
  console.log(`is vowel`);
} else{
  console.log(`is a consoonant`);
}
