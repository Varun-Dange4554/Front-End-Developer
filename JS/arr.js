
let arr=[10, 30, 50, 80, 80, 10, 30, 60, 40, 10, 100];

let n=2;
// i have to remove the duplicates's
arr = [...new Set(arr)];
// console.log(arr);

arr = arr.sort((a, b)=> b-a);
console.log(arr);

if(n-1 > arr.length ){
  console.log(`please enter the valid value & the value you put is not exist in arry lengths...`);
}
else{
  
    arr[n-1];
    console.log(`arr`,arr[n-1]);
}
console.log(`arr:`,arr);



//Q check if a number is divisibale by both 3 & 5.

let number = parseInt(prompt('Enter the number'));

    if (number % 3 == 0   || number % 5 == 0){
      console.log(`the ${number} is divisible`);

    }
    else{
      console.log(`The ${number} is not divisible`);
    }