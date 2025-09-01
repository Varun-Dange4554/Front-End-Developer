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
