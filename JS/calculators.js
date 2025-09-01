let num_1=10;
let num_2=10;
let operator="-";

function calc(...arr){
    let n1=arr[0];
    // console.log(`n1`,n1);
    let n2=arr[1];
    // console.log(`n2`,n2);
    let s=arr[2];
    // console.log(`s`,s);

switch(s){
    case '+':
        return n1+n2;
       case '*':
        return n1*n2;
    case '/':
        return n1/n2;
    //  case '-':
    //     return n1-n2;
    


        default:
            return `please enter the valid & operator's`

}
}
let ans=calc(num_1,num_2,operator);
console.log(`ans`,ans);