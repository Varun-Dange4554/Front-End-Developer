// var let const
// declararions and initializations

// var a; declararions
// var a =  12; declararions and initializations


// var a = 12; // window mein add hota hai // function scoped hota hai // app firse declear kr skte  
// var a = 13;
// console.log(a)


// function abd() {
//     if (true) {
//         var a = 2;
//     }
//     console.log(a); // this will work → prints 2
// }
// abd();

// var a = 3;


// Reassignment, redeclarations

// var a = 12;
// a= 33;


// var a = 5;



// let b = 34;
// b = 45;

// Temporal Dead Zone 

// console.log(a);

// let a = 12;


// Hoisting impact per type
// hoisting -> ek varivle ko jab js mein banaate hai to wo variable do hisso mein toot jaete hai and uska declear part uper chala jata hai and uska initializatio part neeche reh jata hai


// var a = 23;
// var a = undefined; //1 part
// a = 23 // 2 part


// console.log(a)
// var a = 23; // out put undefined


// console.log(a)
// let a = 23; // out put :-Cannot access 'a' before initialization

// console.log(a)
// const a = 23; // out put :-Cannot access 'a' before initialization





// data type 
// data ka type

// primitive -> aisi sarri value jisko copy jarne par tumko ek real copy mil jaaye
// string, number, boolean, null, undefined, symbol, bigint


// let a = 12;//a=12
// let b = a;//a=12
// a = a+2;//a=14

// '',"",`` string
// 3727 - number
// true false - boolean

// null - null ka mataleb hai aapne jaan booj kar ke koi value nahi di
// let x = null;
// console.log(x); // null

// undefined - ka mataleb ki aapne ek varible banaya aur usey value nahi di to jo by default mill wo hai undefined
//let x;
// console.log(x); // undefined

// Symbol-> unique immutable value

//bigint
// let a = 9007199254740991n;
//  a= a+4n;//9007199254740995n


// reference -> inko copy karne per real copy nahi miegi but aapko reference milega parent ka 
// arrays, objects, functions
//  [],{},()

// let a = [1,2,3]; //1,2,3
// let b = a; //1,2,3

// b.pop();//1,2

// let a = {
//     name:"varun"
// };

// let b = a; //dange
// b.name = "dange"  // dange


// Dynamic typing -> js mein static typing nahi hai and yaha par hai dynmic typing jiska matlab hai aap data ko change kar sket ho kyuki yah per dynamic types hai

// let a= 12;
// a = true;
// a = 'varun';
// a = null;
// a = undefined;
