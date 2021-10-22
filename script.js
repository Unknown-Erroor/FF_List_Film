function filmContainer() {
    return document.getElementById("filmContainer")
}
console.log(filmContainer());


async function getData(){
    const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent('Fast & Furious')}&apikey=649eb1b6`);
    const film = await response.json();
    return film;
}
console.log(getData());

function renderFilms() {
    getData().then( data => {
        const films = data.Search
        let container = filmContainer();
        
        if (container) {
            for (film of films) {
              let yearBlueClass = "";
              if (film.Year < 2015) {
                yearBlueClass = "blue-text";
              }
              
              let row = document.createElement("tr");
              row.innerHTML = `
                <td><img src="${film.Poster}"></td>
                <td>${film.Title}</td>
                <td class="${yearBlueClass}">${film.Year}</td>`;
          
              container.appendChild(row);
            }
          }
    })
  }

  renderFilms();
  