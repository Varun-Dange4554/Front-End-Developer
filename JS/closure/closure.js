// this is the parent function 
const justFunction = () =>{
    let n = 'varun';  // this goig to garbage


    return ()=>{
        let n = "hello" // because this is running and prev n is destroyed after end exicutional stack...
        // this is the child function of the parent function
        return n;
    };

};
console.log(justFunction());

// this is the one way to invoke the fuction


// const ans = justFuction();



/*

notes:- it's closes the variable that are depedens it's like frezzes them it's dosent allow them to destroyed only there is some depedens and what that means of dependens was -> A child fuction need a variable form a parent function even those parent function has been called or after the fuction called the variable destroyrd but the parent func share the variable to the child fuction...


clouser happend to nested fuction or there has to any depedens to parent func to child func.....
*/






const justFunction1 = () =>{
    let n = "varun"; // this goig to garbage

    return()=>{
        return () =>{
            let n = "hello";
            return n;
        };

    };
};

console.log(justFunction1()()());
