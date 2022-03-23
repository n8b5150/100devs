//Get a dog photo from the dog.ceo api and place the photo in the DOM
// {
//     "message": "https://images.dog.ceo/breeds/bulldog-boston/n02096585_11776.jpg",
//     "status": "success"
// }
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

fetch('https://dog.ceo/api/breeds/image/random')
    .then (response => response.json()) //parse response as json
    .then (data => {
        document.querySelector('img').src = data.message
        console.log(data)
    })
    .catch (error => console.log(`error: ${error}`))
    