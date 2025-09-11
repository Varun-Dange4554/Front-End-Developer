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







const jsuser = {
    name:"varun",
    age:21,
    "full name" : "varun dange",
    lacation:"Mumbai",
    email:"varundange7@gmail.com",
    isLoggedIn: false,
}
console.log(jsuser.name);   // 'varun'
console.log(jsuser.email);  //  varundange7@gmail.com
console.log(jsuser['age']);  //21
// console.log(jsuser.full name);  // undefined
console.log(jsuser["full name"]); //'varun dange'
Object.freeze(jsuser)   // cannot be change the value
jsuser.email = "varun@gmail.com"
console.log(jsuser)
