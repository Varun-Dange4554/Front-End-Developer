// example
/*
let ice_creme = new Promise((res,rej) => {
   let got_ice_creme = true;  //false
   if (got_ice_creme) res(got_ice_creme);
   else rej(got_ice_creme);
}); //hear i created new promisee
console.log(ice_creme);

ice_creme.then(()=>{ console.log('got ice creme...')}).catch(()=>{console.log('not get !!!')}); //out put 'got ice creme' 
*/




// ! what if we get delay to get the response

console.log('A');


let ice_creme = new Promise((res,rej)=>{
    let got_ice_creme;
    console.log('B');


setTimeout(() => {
    got_ice_creme  = false;
    if(got_ice_creme){
        res(got_ice_creme);
    } else{
        rej(got_ice_creme);
    }
}, 3000);

console.log('c');

}); // here i created new promise

// we started the promise

console.log('D');

console.log(ice_creme);

 ice_creme.then( () => {
    console.log('eat the ice creme');
} )
.catch(()=>{
    console.log('mommy')
});
console.log('E');