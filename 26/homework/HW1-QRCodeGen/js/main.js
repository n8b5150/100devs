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

// QR tag
// https://www.qrtag.net/api/

// QR code generator
// https://goqr.me/api/
// https://goqr.me/api/doc/create-qr-code/
//https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=TextGoesHere 

document.querySelector('button').addEventListener('click',getFetch)
const qrImage = document.querySelector('img')

function getFetch(){
    const url = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data='
    let qrInfo = document.querySelector('input').value

    fetch(url+qrInfo)
        .then(res => {  //response is an object, not json
            console.log(res)
            qrImage.src = res.url
            document.querySelector('h2').innerText = qrInfo
        })
        .catch(err => console.log(`error = ${err}`))
}