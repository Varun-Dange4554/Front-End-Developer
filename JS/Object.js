// object [key value pair]

let object ={
    name:'varun',
    age:21,
    marrid:`single`,
    hobbies :["bgmi","cs","cc"],
    exp:{
        coName:`sark corporation...`,
        design:"sde1",
        salary:"1lakh/monthly"
    },
    myFunc:()=>{
        return this.name;
    }

}
let nnn=object.myFunc();
console.log(nnn);
console.log(object.name);
console.log(object.age);
console.log(object.marrid);


for (let key in object){
    console.log(`${key}: ${object[key]}`);
}



// array [indexing]

let arr=[[1, 2],3, 4, 5];
let arr1=["varun","dange"];
let arr2=[{name:"varun", surname:"dange"}];

for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log(arr1);
console.log(arr2);
