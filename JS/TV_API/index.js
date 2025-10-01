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
    console.log('error',error);
    }
}



const Render_UI = (infoData) =>{
    // console.log('🚀 ~ infoData:', infoData);
    const mainDiv = document.querySelector(".mainContainer");
    mainDiv.innerHTML = "";
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
        const toggleBtn = document.createElement("button");

        

        id.innerText = `Id: ${element.id}`;
        img.src = element.image.original;
        name.innerText = `Name: ${element.name}`;
        language.innerText = `Language: ${element.language}`;
        genres.innerText = `Genres: ${element.genres}`;
        runtime.innerText = `Runtime: ${element.runtime}`;
        rating.innerText = `Rating: ${element.rating.average}`;
        // summary.innerHTML = `summary ${element.summary}`;
        
         // summary handling
         const fullSummary = element.summary || "no summary available.";
         const tempDiv = document.createElement("div");
         tempDiv.innerHTML = fullSummary;
         const plainTextSummary = tempDiv.innerText;

         const truncated = plainTextSummary.slice(0, 150) + (plainTextSummary.length>150?"...":"");
         summary.innerText = truncated;
         
         toggleBtn.innerText="More";

         toggleBtn.addEventListener("click", ()=>{
            if(toggleBtn.innerText === "More"){
                summary.innerText = plainTextSummary;
                toggleBtn.innerText = "Less";
            } else {
                summary.innerText = truncated;
                toggleBtn.innerText = "More"
            }
         });

        //class name
        card_div.className="card_div";

        card_div.append(img,id,name,language,genres,runtime,rating,summary,toggleBtn);

        mainDiv.append(card_div);

    });
};

const loginFunc=()=>{
    window.location="pages/login.html";
    

}



let path =window.location.pathname;
console.log('🚀 ~ path:', path);
