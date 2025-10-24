 const statusDiv = document.getElementById("status");
    const container = document.getElementById("container");

     async function fetchData()  {
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");

        if (!response.ok) {
          throw new Error("Failed to fetch data!");
        }

        const data = await response.json();
        renderUsers(data.results);
      } 
      catch (error) {
        statusDiv.textContent = " Error: " + error.message;
        statusDiv.className = "error";
      }
      finally {
        statusDiv.style.display = "none";
      }
    }

    function renderUsers(users) {
      users.forEach(user => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${user.picture.medium}" alt="User Image">
          <h3>${user.name.first} ${user.name.last}</h3>
          <p>${user.email}</p>
          <p>${user.location.country}</p>
        `;
        container.appendChild(card);
      });
    }

    fetchData();