let number = prompt("Enter a number");

if (number % 2 == 1) {
console.log('Odd number...');
} else {
console.log('Even number...');
}



let age = 20;
if (18 > age){
    console.log('vote');
}else {
    console.log('not vote');
}




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
   
