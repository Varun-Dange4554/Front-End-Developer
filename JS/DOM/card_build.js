const API_BASE_URL = 'https://fakestoreapi.com/products/1';

const product_Fetch=()=>{
    fetch(API_BASE_URL)
    .then((res)=>res.json())
    // .then((res)=>console.log(res)) 
    .then((res)=>Render_UI(res))
    .catch((err)=>console.log(err))
    .finally(()=>{console.log(`api fetch finally`)})
}



const Render_UI = (value)=>{
    let mainDiv = document.getElementById("mainContainer");
    value.map((Element, index)=>{
        let cardDiv = document.createElement('div');

        let img = document.createElement('img')
        let id = document.createElement('h5')
        let title = document.createElement('h3')
        let price = document.createElement('h4')
        let description = document.createElement('p')
        let category = document.createElement('p')

        img.src = element.image;
        id.innerText = element.id;
        title.innerText = element.title;
        price.innerText = element.price;
        description.innerText = element.description;
        category.innerText = element.category;

        // class name assign

        cardDiv.className="card_Div";

        cardDiv.append(img, id, title, description, category);

        mainDiv.append(cardDiv);



    });
}