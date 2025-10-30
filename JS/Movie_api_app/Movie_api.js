const searchMovie = () => {
  let query = document.getElementById("searchInput").value;

  if(query === ""){
    alert("Please enter movie name");
    return;
  }

  fetch(`http://www.omdbapi.com/?s=${query}&apikey=37f6b325`)
  .then((res) => res.json())
  .then((data) => {
    if(data.Response === "False"){
      document.getElementById("movie").innerHTML = "<h2>No movie found</h2>";
      return;
    }
    Render_UI(data.Search);
  })
  .catch((err) => console.log(err));
};


const Render_UI = (movies) => {
    let mainDiv = document.getElementById("movie");
    mainDiv.innerHTML = "";

    movies.map((Element) => {
        let cardDiv = document.createElement('div');

        let img = document.createElement('img');
        let title = document.createElement('h3');
        let type = document.createElement('p');
        let year = document.createElement('p');
        let imdbId = document.createElement('p'); 

        img.src = Element.Poster;
        title.innerText = Element.Title;
        type.innerText = "Type: " + Element.Type;
        year.innerText = "Year: " + Element.Year;
        imdbId.innerText = "IMDB ID: " + Element.imdbID; 

        cardDiv.className = "card-div";

        cardDiv.append(img, title, type, year, imdbId);
        mainDiv.append(cardDiv);
    });
    
};