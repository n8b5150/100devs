//shuffle
//https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
// {
//   "success": true,
//   "deck_id": "3p40paa87x90",
//   "shuffled": true,
//   "remaining": 52
// }

//newdeck
//https://deckofcardsapi.com/api/deck/new/
// {
//   "success": true,
//   "deck_id": "3p40paa87x90",
//   "shuffled": false,
//   "remaining": 52
// }

//draw
//https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2
// {
//   "success": true,
//   "cards": [
//       {
//           "image": "https://deckofcardsapi.com/static/img/KH.png",
//           "value": "KING",
//           "suit": "HEARTS",
//           "code": "KH"
//       },
//       {
//           "image": "https://deckofcardsapi.com/static/img/8C.png",
//           "value": "8",
//           "suit": "CLUBS",
//           "code": "8C"
//       }
//   ],
//   "deck_id":"3p40paa87x90",
//   "remaining": 50
// }

document.getElementById('shuffle').addEventListener('click', newDeck)
let deckID = ''
let warbit = 0
let playerOneScore = 0
let playerTwoScore = 0

function newDeck(){
  const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
  fetch(url)
    .then(res => res.json())
    .then(data => {
      deckID = data.deck_id
    })
}

document.getElementById('drawTwo').addEventListener('click', drawTwo)

function drawTwo(){
  const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        result(data.cards)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function result(obj){
  document.getElementById('playerOneCard').src = obj[0].image
  document.getElementById('playerTwoCard').src = obj[1].image
  let playerOneCard = convertToNum(obj[0].value)
  let playerTwoCard = convertToNum(obj[1].value)
  
  if ( playerOneCard > playerTwoCard ) {
    if( warbit > 0 ) {
      playerOneScore += warbit 
      warbit = 0
    }else playerOneScore++
    document.getElementById('resultP1').innerText = `Win - Score ${playerOneScore}`
    document.getElementById('resultP2').innerText = `Lose - Score ${playerTwoScore}`
  }else if ( playerOneCard < playerTwoCard ){
    if( warbit > 0 ) {
      playerTwoScore += warbit 
      warbit = 0
    }else playerTwoScore++
    document.getElementById('resultP1').innerText = `Lose - Score ${playerOneScore}`
    document.getElementById('resultP2').innerText = `Win - Score ${playerTwoScore}`
  }else if ( playerOneCard = playerTwoCard ){
    document.getElementById('resultP1').innerText = `War - Score ${playerOneScore}`
    document.getElementById('resultP2').innerText = `War - Score ${playerTwoScore}`
    warbit++
  }

}

function convertToNum(str){
  switch(str){
    case 'JACK':
      return 11
    case 'QUEEN':
      return 12
    case 'KING':
      return 13
    case 'ACE':
      return 14
    default:
      return Number(str)
  }
}
