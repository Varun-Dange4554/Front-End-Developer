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
/*
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
 
 */



// promise
// let promise = new Promise((res, rej)=>{
    //    console.log(`I am a promise`);
    //    res("result");
    // rej("error");
// });

/*

const getPromise = ()=>{
    return new Promise((resolve, reject)=>{
     console.log(`I am a promise`);
     resolve("success");
    // reject("not a fill filed")
    });
};

let promise = getPromise();
promise.then((res)=>{
    console.log("promise if fullfils",res);
});

promise.catch((err)=>{
    console.log("rejected",err);
})

*/
/*
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
console.log("data 1");
resolve(`success`);

    },3000);
    }); 
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
console.log("data 2");
resolve(`success`);

    },3000);
    }); 
}

console.log("fatching data1.............")
let p1 = asyncFunc1();
p1.then((res)=>{
//    console.log(res);
console.log("fatching data2.............")
let p2 = asyncFunc2();
p2.then((res)=>{
    // console.log(res);
})
})
*/








/*
// async await

function getdata (dataId){
    // console.log("data",dataId);
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    console.log("data",dataId);
    resolve("success");
    },2000)
});
}

async function getAlldata(){
console.log("getting data1...................");

   await getdata(1);
console.log("getting data2...................");

   await getdata(2);
console.log("getting data3...................");

   await getdata(3);
console.log("getting data4...................");

   await getdata(4);
console.log("getting data5...................");

   await getdata(5);

}

getAlldata();


*/







/*
function getdata (dataId){
    // console.log("data",dataId);
    return new Promise((resolve, reject)=>{
        
    setTimeout(()=>{
    console.log("data",dataId);
    resolve("success");
    },2000)
});
}
// promise chain
    console.log(`getting data 1`);

getdata(1)
.then((res)=>{
    console.log(`getting data 2`);
return getdata(2);
})
.then((res)=>{
    console.log(`getting data 3`);
    return getdata(3);
})
.then((res)=>{
    console.log(res);
})
*/








/*
 // callback hell

function getdata (dataId,getNextData){
    // console.log("data",dataId);
    setTimeout(()=>{
    console.log("data",dataId);
    if(getNextData){
        getNextData();
    }
    
    },2000)

}
getdata(1,()=>{
    console.log(`getting data 2`);
    getdata(2,()=>{
        console.log(`getting data 3`);
        getdata(3,()=>{
        console.log(`getting data 4`);


            getdata(4);
        });
    });
});
*/

