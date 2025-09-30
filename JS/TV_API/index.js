const apiFunc= (param)=>{
    return API_BASE_URL = `https://api.tvmaze.com/search/shows?q=${param}`;
}

const api_fetch = async () =>{
    const dataSerach = document.querySelector("#search-input").value;
    // console.log('🚀 ~ dataSerach:', dataSerach);
    
    let value = apiFunc(dataSerach);
    try{
        let res = await fetch(value);
        let data = await res.json();
        Render_UI(data);
    }
    catch (error){
    // console.log('error',error);
    }
}

const Render_UI = (infoData) =>{
    // console.log('🚀 ~ infoData:', infoData);
    
    const mainDiv = document.querySelector(".mainContainer");
    infoData.forEach((element)=>{
        element = element.show;
        
        const card_div = document.createElement("div");
        const id = document.createElement("h4");
        const img = document.createElement("img");
        const name = document.createElement("h4");
        const language = document.createElement("h3");
        const genres = document.createElement("h3");
        const runtime = document.createElement("h3");
        const rating = document.createElement("h5");
        const summary = document.createElement("p");

        id.innerText = `id ${element.id}`;
        img.src = element.image.original;
        name.innerText = `name ${element.name}`;
        language.innerText = `language ${element.language}`;
        genres.innerText = `genres ${element.genres}`;
        runtime.innerText = `runtime ${element.runtime}`;
        rating.innerText = `rating ${element.rating.average}`;
        summary.innerHTML = `summary ${element.summary}`;

        //class name
        card_div.className="card_div";

        card_div.append(img,id,name,language,genres,runtime,rating,summary);

        mainDiv.append(card_div);

    });
};



