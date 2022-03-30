// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sent = "How are you?"
sent.endsWith("?") ? console.log(sent) : console.log("not a question")

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let words = "software lol qbert jr. dev hello goodbye jr. dev"
console.log(words.replaceAll('jr. dev', 'software engineer'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const randomRPS = () => {
    let num = Math.random()
    return num < 0.33 ? 'rock' :
    num < 0.66 ? 'paper' : 'scissors'
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const rockPaperScissors = (choice, botChoice) => {
    if ( choice == botChoice ) return "Tied!"
    else if (( choice == 'rock' && botChoice == 'scissors') ||
        ( choice == 'scissors' && botChoice == 'paper') ||
        ( choice == 'paper' && botChoice == 'rock')) { 
            return "Win!"
        } else return "Lose!"
}

const arrRPS = (num) => {
    let arr = []
    for (let i = 0; i < num; i++){
        arr.push(randomRPS())
    }
    console.log(arr)
    return arr
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

const playRPS = (choice, botChoice) => {
    for (let i = 0; i < choice.length; i++) {
        console.log(rockPaperScissors(choice[i], botChoice[i]))
    }
}
playRPS(arrRPS(50), arrRPS(50))