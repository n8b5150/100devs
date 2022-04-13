//Create a button that adds 1 to a botScore stored in localStorage

// localStorage.setItem('myCat', 'Tom');
// const cat = localStorage.getItem('myCat');
// localStorage.removeItem('myCat');
// localStorage.clear();

document.querySelector('button').addEventListener('click',getBotScore)
if ( !localStorage.getItem('botScore') ) localStorage.setItem('botScore', 0)
document.querySelector('h2').innerText = localStorage.getItem('botScore')

function getBotScore(){
    let botScore = Number(localStorage.getItem('botScore')) //wrap in number, localStorage can be stringy
    botScore++
    localStorage.setItem('botScore',botScore)
    document.querySelector('h2').innerText = botScore
    console.log(botScore)
}