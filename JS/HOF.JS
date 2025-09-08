// HOF ==> Higher Order Function

// map

let arr =  [1,7,7,3,2,7,8,4,7,0];
let newArr =[];
arr.map((elements,index,self)=>{
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