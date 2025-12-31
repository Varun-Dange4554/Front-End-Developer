let btn = document.querySelector("button")
let headingElememt=document.querySelector("h1")
let paraElememt= document.querySelector("p")

// btn.addEventListener("click",()=>{
//    let  headingElememtData=headingElememt.innerHTML
//     let paraElememtData=paraElememt.innerHTML

//     headingElememt.innerHTML=paraElememtData
//     paraElememt.innerHTML=headingElememtData
// })


btn.addEventListener("click",()=>{
    
    paraElememt.style.color="red"
    paraElememt.style.fontSize="20px"
    headingElememt.style.color="blue"

})