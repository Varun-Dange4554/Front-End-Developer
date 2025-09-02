    let number_1 = undefined;
    let number_2 = 5;

    const anualDay = (a = 40, b = 60) => {
        
        if (a > b){
            return `this is the grater than b and the value of a is ${a}`;
        }
        else{
            return  `this is the greater than a and the value of b is ${b}`;
        }
    }

    let ans = anualDay (number_1, number_2);
    console.log(`ans`, ans);



    const mul = (a, b) => {
  // console.log(a*b);
  return a*b;
};



// print 
const printHello =()=>{
    console.log("hello");
};



//Q. Create a function using the "function" keyword that tasks a string as an argument & returns the number of vowel in the string.



const countvow = (str) => {
    let count = 0;
    for(const char of str){
        if(
            char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
        )
    {
        count++;
    }
}
 return count;    
};

console.log(countvow("sark corporation"));



//for each loop in Arrays 



let nums = [20, 33, 4, 5, 6];

nums.forEach((nums) => {
    console.log(nums * nums);
});



// map method
// creates a new arry with the result of some operation.The value its callback returns are used to from new array
  
let num = [1, 2, 3, 4];

let newArr = num.map((val)=>{
     return val * val
});

console.log(newArr);