//operators 



//Arithmetic operators

//  let a = 5;
// let b = 3;

// console.log("a = ",a, "b = ",b);   

// console.log("a + b = ",a + b );       //Addition
// console.log("a - b = ",a - b );       //Subtraction
//  console.log("a * b = ",a * b );       //Multiplication
// console.log("a / b = ",a / b );       //Division
// console.log("a % b = ", a % b);       //modulus % 
// console.log( "a ** b = ", a ** b);    //Exponentiation
// console.log("++a",++a);
// a++;
// console.log('a++',a);
// a--;
// console.log('a--',a);



// Unary Operator
// let a = 4;
// let b = 3;

// console.log("a = ",a ,"b = ",b);


// console.log("--a = ", --a);      //Pre Increment

// console.log("b-- = " ,b--);       //post  Increment




//Assignment Operator


// let a = 4;
// let b = 3;

// b *= 15;                 //Addition(+=),Subtraction(-=),Multiplication(*=),Division(/=),Modulus(%=),Exponentiation(**=)
// console.log("b = ",b);


//Comparison Operators

// (Equal to ==) check the data value, 
//   (data value & type ===) check both value & same than it will give you the prope result.
//   (Not equal to !=)   data value   
//  (Not equal to & type !==)  value and type


// let a = '4';
// let b = 4;

// console.log("a == b",   a == b);
// console.log("a === b",   a === b);
// console.log(typeof a);
// console.log("a != b", a != b);
// console.log("a !== b " ,a !== b)
// console.log(a > b);
// console.log(a >= b);
// console.log(a < b);
// console.log(a <= b);


// Logical Operators   (&& AND),  (|| OR ), (! NOT)

// let a = 4;
// let b = 4;
// (&& And)
// condition1 = a==b;
// condition2 = a===b;
// condition3 = a==b && a===b; 
// console.log(condition1);
// console.log(condition2);
// console.log(condition3);

// (|| OR )
// console.log(a > b || a < b);  

// console.log(condition1);
// console.log(condition2);


//(! NOT )
// console.log("(! a == 9)" ,(! a > b) ); //true

//Bitwise operators

//conversion into number to binary and binary to number....
// let number = 50;
// let binaryConv = number.toString(2);
// console.log('binaryConv',binaryConv);


//binary to number

// let bin_To_num = parseInt(binaryconv,2);
// console.log('bin_to_num:', binaryconv);
/*
   & --> AND 
    | --> OR
    ~ -->NOT
    
    */
   /*
  
   let num66 = 15;
   let num77 = 10;

   let binaryConv1 = num66.toString(2);
   console.log("binaryCoven",binaryConv1);
   let binaryConv2 = num77.toString(2);
   console.log("binaryConve",binaryConv2);

   let and1 = ~num77;
   console.log('`NOT',and1);

  let and2 = num66 & num77;
  console.log("and2&",and2);

  let and3 = num66 | num77;
  console.log("and3| ",and3);  
  */




  // speard and rest operator


//speard operator
   /*let arr = [1,2,3,4];
   let newArr = [...arr,5,6,7,8];
   console.log('newArr',newArr);*/
 
  //rest operator

  /*function name (...args){
    console.log(args);
  }
name(1,2,3,4,5,6)
    */


/*
    + ==> concatination
    += ==> Append string
*/

// + ==> concatination
/*
let name8 = 'Varun';

let sur_Name = 'Dange';


let full_Name; name8 + ' ' + sur_Name;

let maried = true ;

let answer = `${name8} ${sur_Name} is not maried ${maried}`;

console.log('answer',answer);

*/

// append string
/*
let name1 = 'varun';
let name2 = 'Dange';
name1 +=' ' + name2;
console.log('name:-',name1);
*/

// Type operator
/*

let str = 'varun dange';
let  num = 12;
let bool = true ;


console.log('str',typeof str);
console.log('num:',typeof num);
console.log('bool',typeof bool);  
*/



// normal fuction call

function anualDay(){
    console.log("hello function")
}
let ans = anualDay();
console.log(ans);