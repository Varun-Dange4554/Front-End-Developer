// 1. Print numbers from 1 to 10 using a loop.  


for ( let i = 1; i <= 10; i++ ){
console.log( i);
}

//2. Print all even numbers between 1 and 50.  

for (let num=0; num<= 50;num++){
    if(num%2==0) {
        console.log('even number',num);
    }else{

    }
}


//3.  Print all odd numbers between 1 and 50.  

for (let number=0;  number <= 50; number++){
    if(number%2!==0){
       console.log('odd number',number)
    }else{
        
    }
}
  

//4. Print the multiplication table of 5.  

let=1;
  for(let i =1; i<=10;i++) {
    console.log('table in 5=',i*5);
  }

  //5. Print numbers from 100 down to 1 (reverse order).  

  for(let i =100; i>0; i--) {
    console.log(i);
  }

  //6. Print the sum of numbers from 1 to 100.  

  
    let sum = 0;
  for(let i=1; i<=100;i++){
    sum = sum + i;
  }
  console.log("sum", sum);
  console.log("end of loop");

  //7. Print the square of the first 10 natural numbers.  
   

 
  for(let i = 1; i<= 10;i++){
    console.log('squre of',i, 'is',  i * i);
  } 
    
