// array 

let arr = [1, 2, 3, 4, 5,];

arr.push(6, 7, 8,);
  
arr

Array.prototype.pushpa=function(...value){
    let index=this.length;
    for(let i=0;i<value.length;i++){
        this[index]=value[i];
        index+=1;
    }
    
}
arr.pushpa(9, 10, 11);
arr



let arr1 = [1, 2, 3, 4, 5];
let ans = arr1.pop();
console.log(ans);
arr1

Array.prototype.pops=function(){
    let index=this.length -1 ;
    delete this[index];
    this.length = index;
};
arr1.pops();
console.log(arr1);


// map
// shift
// unshit
// splice
// slice







// string


// object
