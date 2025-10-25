const API_BASE_URL = "https://www.omdbapi.com/";

const dataFetch = () => {
  fetch(`${API_BASE_URL}?i=tt3896198&apikey=37f6b325`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.error("Fetch error:", err))
    .finally(() => {
      console.log("API fetch completed");
    });
};

dataFetch();
