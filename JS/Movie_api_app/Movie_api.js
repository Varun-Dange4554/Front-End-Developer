
const API_BASE_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=37f6b325`;

const dataFetch = () => {
  fetch(API_BASE_URL)
    .then((res) => res.json())
    .then((res) => console.log(res)) 
    .catch((err) => console.log(err))
    .finally(() => {
      console.log('API fetch completed');
    });
};

dataFetch();
