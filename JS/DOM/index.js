
const infofunc = ()=>{
    let information = document.getElementsByTagName("p")[0].innerText;
    console.log("information",information);
}



const generator = async () =>{
    const API = `https://official-joke-api.appspot.com/random_joke`;
    // const jokeDiv = document.getElementById("joke");
    const jokeDiv = document.querySelectorAll("#joke");
    console.log("jokeDiv",jokeDiv);

    try {
        let res = await fetch(API);
        let data = await res.json();
        console.log('data',data);

        let id = document.createElement("h3");
        let punchline = document.createElement("h4");
        let setup = document.createElement("h5");
        let type = document.createElement("p");

        id.innerText = `jokeID: ${data.id}`;
        punchline.innerText = `punchline: ${data.punchline}`;
        setup.innerText = `setup: ${data.setup}`;
        type.innerText = `type: ${data.type}`;

        
        // # this is the first way...
        // jokeDiv.append(id, punchline, setup, type)



        // # this is the second way...
        // Array.from(jokeDiv).map((el,i)=>{
        //     el.innerHTML = `
        //     <strong> joke ${i + 1}</strong> <br>
        //     ${id.innerText}<br>
        //     ${setup.innerText}<br>
        //     ${punchline.innerText}<br>
        //     ${type.innerText}<br>

            
        //     `;
        // });
        


        //  & this is the third way...

        jokeDiv.forEach((div, i)=>{
            div.innerHTML = "";
            div.append(`joke ${i + 1}`,id.cloneNode(true), setup.cloneNode(true),
            punchline.cloneNode(true),type.cloneNode(true));
        });


    }catch (error){
        console.log("error",error);
    }
} 



