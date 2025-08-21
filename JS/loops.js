// for loop

const arr = [1,2,3,4,5,6,7,8,9,10];
console.log("arr:",arr.length);

for (let i=0; i < arr.length; i++) {
    console.log("i:",arr[i]);
}


//while loop

let num = 9;
let i = 0;
let sum = null ;
while (i < num){
    sum += i;
    i++;
}
console.log('sum', sum);


//do while loop 


let numbers = 6;
do {
    console.log(numbers);
    numbers++;

}while (numbers < 10);