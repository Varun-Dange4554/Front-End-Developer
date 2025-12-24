const apiKey = `c6cca825c592ff59dedcb4a6bd202ae7`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();
    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =
        data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =
        data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "./Utils/cloud.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "./Utils/clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "./Utils/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./Utils/drizzle.png";
    } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "./Utils/snow.png";
    }else {
    weatherIcon.src = "./Utils/cloud.png"; 
}

   document.querySelector(".weather").style.display = "block"
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
