
// normal fuction call

function anualDay(){
    console.log("hello function");
};
 anualDay();


 

let number_1=10;
let number_2=5

function anualDay1(a,b){
    console.log(a)
    if(a>b){
        return `this is the grater than b and the value of a is ${a}`;
    }
    else{
        return ` thi is the greater than a and the value of b is ${b}`;
    }
}

let ans = anualDay1 (number_1,number_2);
console.log(`ans`,ans);



/*
()parinthesis
{} braces
[] braket
*/

  

// call function

function addTwoNumber(number1, number2){   //parameters
console.log(number1 + number2);

}
addTwoNumber(2, 5)                         //arguments






function addTwoNumber(number1, number2){   //parameters
   
  // let result = number1 * number2;
  // return result;
  return number1 + number2;

}
 const result = addTwoNumber(2, 5);
 console.log(`result`,result);           





 
// function loginUserMassege(username){
//      return `${username} just logged in`     
// }
// console.log(loginUserMassege("varun"));




function loginUserMassege(username){
if(username === undefined){
  console.log(`please enter the user name`);
  return;
}

     return `${username} just logged in`     
}
// console.log(loginUserMassege("varun"));
console.log(loginUserMassege());









// function ==> two number, sum

function sum(a, b){
    console.log(a+b);

}
sum(2, 5);






// return value


function mul(x, y){
  // local variable
    result = x * y;
    return result;
    
}
let val =mul(2,5);
console.log(val);