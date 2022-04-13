//Create a button that adds 1 to a botScore stored in localStorage

// localStorage.setItem('myCat', 'Tom');
// const cat = localStorage.getItem('myCat');
// localStorage.removeItem('myCat');
// localStorage.clear();

document.querySelector('button').addEventListener('click',getBotScore)

function getBotScore(){
    localStorage.setItem('botScore', 5)
    let botScore = localStorage.getItem('botScore')
    document.querySelector('h2').innerText = botScore
    console.log(botScore)
}