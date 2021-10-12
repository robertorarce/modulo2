const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let querySelector = '';

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  fetchAPI();
});

async function fetchAPI (){
  const baseURL = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.results);
  console.log(data);
}

function generateHTML(results){
  container.classList.remove('initial');
  let generatedHTML = '';
  results.map(result => {
    generatedHTML +=
    `
    <div class="item">
      <img src="${result.image}">
      <div class="flex-container">
        <h1 class="item-title">${result.name}</h1>
      </div>
      <p class="item-data">Especie: ${result.species}</p>
      <p class="item-data">Genero: ${result.gender}</p>
      <p class="item-data">Status: ${result.status}</p>
      <p class="item-data">Locación: ${result.location.name}</p>
      </div>
    `
  })

  searchResultDiv.innerHTML = generatedHTML;
}