// HOF ==> Higher Order Function

// map

let arr2 =  [1,7,7,3,2,7,8,4,7,0];
let newArr =[];
arr2.map((elements,index,self)=>{
    if(elements!== 7){
        newArr.push(elements);
        return elements
    };
})
console.log(`newArr:`,newArr);  //out put [`newArr:`,Array(6)[1, 3, 2, 8, 4, 0] ]




// filter method

let filterData=arr.filter((elements)=>{
  if (elements!==7) return elements
})

console.log(`filterData`,filterData); //out put [`filterData`,[1, 3, 2, 8, 4 ] ]


// for each 

let newData=arr.forEach((elements,index,self)=>{
   console.log(elements);
   console.log(index);
   console.log(self);
   if (elements!==7) console.log(elements);  //otu put  1, 3, 2, 8, 4, 0 
})
console.log(newData); // out put undefined



// reduse
// arrray
 
let arr=[1,2,3,4,5,6,7,8,9,10];

let val = arr.reduce((acc,cur)=>{
      return acc+=cur
},0);
console.log(`val:`,val);


// HOF : creates aa reducer for swmming a proprty 

const items = [
    { name:`Book`,Price:300},
    { name:`pen`,Price:50},
    { name:`Notebook`,Price:150},
];

const createsSumReduce = (prop)=>{
    return (acc,obj)=> acc + obj[prop];
};

const totalPrice = items.reduce(createsSumReduce(`Price`),0);

console.log(totalPrice); // out put 500


// object 
const fruits = [`apple`,`banana`,`apple`,`orange`,`banana`,`apple`];

const constFruits = fruits.reduce((acc,fruits)=>{
    acc[fruits]= (acc[fruits] || 0) + 1;
    return acc;
}, {});
console.log(constFruits);  
// out put {apple: 3, banana: 2, orange: 1}


// string
 let str = `masai`;

 let funcStr = str.split(''); // array and with single string value
 console.log(`-->funcStr`,funcStr);

 const countString = funcStr.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;

    return acc;
 },{});
 console.log(countString);  












let arr1 = [1,12,3,41,5,61,7,8,9,];

arr1.forEach((num)=>{
        console.log(num * num);
 });


 let newArr1 = arr.map((val)=>{
 return val * 2
 });
 console.log(newArr1);



 evenArr = arr1.filter((val)=>{
    return val   >= 3
 })
 console.log(evenArr);