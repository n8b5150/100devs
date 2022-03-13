//grab guess from input and store in array string.split('') will separate string into separate letters
document.querySelector('#checkButton').addEventListener('click', makeLetterArray)

// This little smurf papa looks at the reset button. If it's clicked it resets each cell to ""
document.querySelector('#resetButton').addEventListener('click', resetScreen)

//Add event listener for Enter key
document.addEventListener('keydown', e => {
  if (e.which === 13) {
    e.returnValue = false;
    makeLetterArray();
  }
})


// Word list - to implement later. Needs a function to randomize which one gets selected
let wordList = ['goget', 'leon!', 'boats', 'float', 'yaaah', 'yuuuh', 'learn', 'house', 'study', 'bezos', 'niche', 'first', 'value', 'slido', 'pizza']

// Tell Nosy Nellys that they have no business hacking
console.log("Hey! Inspect is illegal, ya Nosy Nelly")

// Initalize the variables
let guess = [];
let guessesLeft = true;
//let correctWord = ['g','o','g','e','t'];
let rand = Math.random();
let correctWord = wordList[Math.ceil(wordList.length * (Math.random()))].split('');

//console.log(correctWord);
let guessRow = 0;
let wrongGuesses = [];


function randomizeWord() {
  //pick a random word from wordList
  //set correctWord to an array of one of the selected random words
}

// Reset button to clear the DOM
function resetScreen() {
  let rows = document.querySelectorAll('.guessRow');
  for (let i=0; i <= 5; i++){
    let row = rows[i];
    for (let j=0; j <5; j++){
      let cell = row.children[j]
      cell.innerText ='';
      cell.style.background = 'lightgrey';
    }
  }
  //Reset the guessRow
  guessRow = 0;
  
  //Reset the correctWord to a new one in the list
  correctWord = wordList[Math.ceil(wordList.length * (Math.random()))].split('');
  
  //Reset input value 
document.querySelector('#guess').value = '';
}



// Function to pluck the word that the user inputs and split that word into an array (hydra will = ['h','y','d','r','a'])
function makeLetterArray (){
  let word = document.querySelector('#guess').value.toLowerCase();
  document.querySelector('#guess').value = '';
  // check that entered value is exactly 5 letters, otherwise prompt user.
  if (word.length != 5) {
    alert('Guess must have 5 letters.');
    return;
  }
  guess = word.split('');
  checkGuess();
}

// This function will check if your guess is correct
function checkGuess(){
guess.forEach((letter, index) => {
  let idSelector = `Row${guessRow}-Col${index}`;
  // console.log(letter, correctWord[index]);
  document.getElementById(idSelector).innerText = letter;            
  if (correctWord.includes(letter)){
     //change css color to yellow
    //console.log('yellow');
    document.getElementById(idSelector).style.background = 'rgb(253, 203, 88)';
  }
    
    if (guess[index] == correctWord[index]) {
    //change css color to green
      //#Row0-Col0
      //console.log('green');
      document.getElementById(idSelector).style.background = 'rgb(121, 177, 90)';
    }
   else {
     wrongGuesses.push(letter);
     //console.log('bad letters');
   } 
  //if guessRow >=
})
guessRow ++;   
}
