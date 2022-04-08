//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


document.getElementById('getCocktail').addEventListener('click',getFetch)
document.getElementById('nextCocktail').addEventListener('click',nextCocktail)

const name = document.getElementById('name')
const image = document.getElementById('image')
const instr = document.getElementById('instr')
const input = document.getElementById('input')
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
let dataObj = {}
let i = 0

function getFetch(){
    fetch(url + input.value)
        .then(res => res.json())
        .then(data => {
            dataObj = data
            console.log(data)
            name.innerText = data.drinks[0].strDrink
            image.src = data.drinks[0].strDrinkThumb
            instr.innerText = data.drinks[0].strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
        })   
}

function nextCocktail(){
    //loop through array indexes, waiting for a click between each
    if ( i == dataObj.drinks.length - 1 ) i = 0
    i++
    name.innerText = dataObj.drinks[i].strDrink
    image.src = dataObj.drinks[i].strDrinkThumb
    instr.innerText = dataObj.drinks[i].strInstructions
}