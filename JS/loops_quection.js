// // 1. Print numbers from 1 to 10 using a loop.  


// for ( let i = 1; i <= 10; i++ ){
// console.log( i);
// }

// //2. Print all even numbers between 1 and 50.  

// for (let num=0; num<= 50;num++){
//     if(num%2==0) {
//         console.log('even number',num);
//     }else{

//     }
// }


// //3.  Print all odd numbers between 1 and 50.  

// for (let number=0;  number <= 50; number++){
//     if(number%2!==0){
//        console.log('odd number',number)
//     }else{
        
//     }
// }
  

// //4. Print the multiplication table of 5.  

// let=1;
//   for(let i =1; i<=10;i++) {
//     console.log('table in 5=',i*5);
//   }

//   //5. Print numbers from 100 down to 1 (reverse order).  

//   for(let i =100; i>0; i--) {
//     console.log(i);
//   }

//   //6. Print the sum of numbers from 1 to 100.  

  
//     let sum = 0;
//   for(let i=1; i<=100;i++){
//     sum = sum + i;
//   }
//   console.log("sum", sum);
//   console.log("end of loop");

//   //7. Print the square of the first 10 natural numbers.  
   

 
//   for(let i = 1; i<= 10;i++){
//     console.log('squre of',i, 'is',  i * i);
//   } 
  




// //8. Print the cube of the first 10 natural numbers.  

// for (let i = 1; i<=10; i++){
//   console.log(`cube of ${i} is ${i ** 3}`)
// }


// //9. print the fibonacci series up to 10 term using a loop.


// let a = 0, b = 1;
// console.log(a);
// console.log(b);
// for (let i=0; i<=10; i++) {
//   let temp = a + b;
//   // console.log(temp);
//   a = b;
//   b = temp;
//   console.log(temp);
// }

// // 10.print this pattern with nested loops.

// for (let i=0; i<=15;i++){
//   let row =' ';
//   for (let j = 1;j<=i;j++) {
//     row += j;
//   }
//   console.log(row);
// }

// //🟡 Intermediate Practice quection

// // Q11.Print the reverse of a given number (e.g., 123 → 321).



// loop for

// for (let i = 0;i<=5;i++){
//   console.log(i)
// }


// while loop

// let s=1
// while(s<=10){
//   console.log(s,"welcome")
//   s++
// }
// console.log(s)


// do...while

// s=1
// do{
//   console.log(s);
//   s++

// }
// while(s<=10)



// for(i=1;i<=10;i++){
//   if(i==5){
//     break
//   }
//   console.log(i,"welcome")

// }

for (i=1;i<=10;i++){
  if(i==3 || i==9){
    continue
  }
    console.log(i,"welcome")

}