// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = '   coffee with cream   '
console.log(drink.trim())

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let string = "This is an apple pie."
console.log(string.includes('apple'))
console.log(string.search('apple'))
string = "This is a blueberry pie"
console.log(string.includes('apple'))
console.log(string.search('apple'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    let randomNum = 0
    randomNum = Math.floor(3 * Math.random()) + 1
    switch (randomNum) {
        case 1:
        return 'rock'
        break
        case 2:
        return 'paper'
        break
        case 3:
        return 'scissors'
        break
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function gameRPS(choice,botChoice) {
    choice = choice.toLowerCase()
    console.log(`${choice} : ${botChoice}`)
    if ( choice == 'rock' && botChoice == 'scissors') return 'You win'
    else if ( choice == 'paper' && botChoice == 'rock') return 'You win'
    else if ( choice == 'scissors' && botChoice == 'paper') return 'You win'
    else if ( choice == botChoice) return 'You tied'
    else return 'You lose'
}

function roundsRPS(num) {
    for (let i = 0; i < num; i++){
        console.log(gameRPS(rockPaperScissors(),rockPaperScissors()))
    }
}

roundsRPS(15)


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

let choiceArr = ['paper','scissors','rock','paper','scissors','rock','paper']
let botChoiceArr = ['scissors','paper','scissors','rock','paper','scissors','paper']

function gameRPSArray(choice,botChoice) {
    for (let i = 0; i < choice.length; i++) {
        console.log(`Round ${i+1}`)
        choice[i] = choice[i].toLowerCase()
        console.log(`${choice[i]} : ${botChoice[i]}`)
        if ( choice[i] == 'rock' && botChoice[i] == 'scissors') {
            console.log('You win') 
        }
        else if ( choice[i] == 'paper' && botChoice[i] == 'rock') {
            console.log('You win') 
        }
        else if ( choice[i] == 'scissors' && botChoice[i] == 'paper') {
            console.log('You win') 
        }
        else if ( choice[i] == botChoice[i]) {
            console.log('You tied') 
        }
        else {
            console.log('You lose') 
        }
    }
}
gameRPSArray(choiceArr,botChoiceArr)

function makeRPSArrayAndPlay(length) {
    choiceArr = []
    botChoiceArr = []
    for (let i = 0; i < length; i++){
        choiceArr.push(rockPaperScissors())
        botChoiceArr.push(rockPaperScissors())
    }
    gameRPSArray(choiceArr,botChoiceArr)
}

makeRPSArrayAndPlay(10)
