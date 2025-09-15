/*
//code 1

function appends(s){
    // hello()
    let script = document.createElement('script');

    script.src = s;

    document.head.append(script);
   // frist explain this code and after this go line of 10
   // hello(); // depended on script to get completely load.

   setTimeout(() => {
    hello(); //  depended on script to get completely load.

   },3000);
   console.log('this is document... ',document);
}
appends('./myscript.js');

*/

/*
// & code 2

function appends (s) {
    return new Promise ((res, rej) => {
    let script = document.createElement('script');

    script.src = s;
    
    document.head.append(script);

    script.onload = function () {
        res('script loading done');
    };
    script.onerror = function () {
        rej('script not loaded');
    };
    });
}
// console.log(appends('./myscript.js'));// explain this while perforing the promise code 

// ? basically .than and .catch give use to handle the value of promise

appends('./myscript.js')
.then((res)=>{
    console.log(res);
    hello(); // function from myScript.js 
})
.catch((err)=>{
    console.log(err,'-> this is error');
});

*/


// code 3

function appends(s){
    return new Promise((res, rej) => {
        let script = document.createElement('script');

        script.src = s; 

        document.head.append(script);

        script.onload = function () {
            res('script loading done');
        };
        script.onerror = function () {
            rej('Not loaded');
        };
    });
}
 async function handle() {
    try {
        let res = await appends('./myscript.js');
        console.log(res);
         hello(); // function from script.js
        
    }
    catch (err){
        console.log(err);
    }
 }
 handle();
 // here we use useing js for understanding the concept
 
 
