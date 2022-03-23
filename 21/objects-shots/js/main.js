//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

document.querySelector('button').addEventListener('click',getFetch)

function getFetch() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    const name = document.querySelector('input').value
    getCocktail(url,name)
}

function getCocktail(url,name){
    fetch(`${url}${name}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[0].strInstructions
            console.log(data)
        })
        .catch(error => console.log(`error: ${error}`))
}

