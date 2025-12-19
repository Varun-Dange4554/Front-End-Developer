const firstBasket = document.querySelector('.basket-1 span')
const secondBasket = document.querySelector('.basket-2 span')

 const rightArrow = document.querySelector('.right_arrow')
 const leftarrow = document.querySelector('.left_arrow')


const totalApple = 10
let secondBasketAppleCount = 0
let firstBasketAppleCount = totalApple - secondBasketAppleCount



firstBasket.innerText= firstBasketAppleCount
secondBasket.innerText =  secondBasketAppleCount


rightArrow.addEventListener('click',()=>{
    if(firstBasketAppleCount > 0 ){

    
     firstBasketAppleCount -- 
firstBasket.innerText= firstBasketAppleCount

     secondBasketAppleCount ++ 
secondBasket.innerText =  secondBasketAppleCount
}
})


leftarrow.addEventListener('click',()=>{
    if(secondBasketAppleCount > 0 ){

    
     firstBasketAppleCount ++
firstBasket.innerText= firstBasketAppleCount

     secondBasketAppleCount --
secondBasket.innerText =  secondBasketAppleCount
}
})


