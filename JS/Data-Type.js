/*Data type*/
var str ='string' //single qoute 
var str ="string" //double qoute 
var str =`string` //back-tick -->teary operation '${name}

var num = 20;

var bool = true;

var arr = [1,2,3,4,"varun","afan"];  //array  of number
var arrOfObject = [{ str: 'name' }, { number: 2 }]; // array of object with mix data type
var obj = { name: 'mehfooz', age: 26, address: 'Andheri' };

var und = undefined;

var nul = null;

var sym = Symbol();


// object declear

const student ={
    name : 'varun',
    age : 20,
    add : "jogeshweri"

}


student["age"] =  student ["age"] + 3
console.log(student['age']);




const product = {
    title: "Ball pen",
    rating: 4,
    offer:5,
    price:270,

};
product["rating"] = 5;   // object const key variable update
// product['title'] = 'pen';
console.log(product);








const profile =  {
    userName : "varun dange",
    isFollow: false,
    followers:126,
    following:355, 
};
// console.log(profile);
console.log(typeof profile ["followers"]);
console.log(typeof profile["userName"]);
console.log(typeof profile["isFollow"]);
