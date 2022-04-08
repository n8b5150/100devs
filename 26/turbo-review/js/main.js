// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let sent = "There's nothing stopping you."
console.log(sent, sent, sent)

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 
let arr = ['a','l','l',' ','g','o','o','d']
console.log(arr.join(''))

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function randRPSLS(){
    let num = Math.random()
    return num < .2 ? 'rock' :
            num < .4 ? 'paper' :
            num < .6 ? 'lizard' :
            num < .8 ? 'spock' : 'scissors'
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
function gameRPSLS(choice){
    let botChoice = randRPSLS()
    choice = choice.toLowerCase()
    if ( choice == botChoice ){
        return `You: ${choice}, Bot: ${botChoice} -- Tied`
    } else if ( (choice == 'rock' && botChoice == 'scissors') ||
                (choice == 'rock' && botChoice == 'lizard') ||
                (choice == 'rock' && botChoice == 'spock') ||
                (choice == 'scissors' && botChoice == 'paper') ||
                (choice == 'scissors' && botChoice == 'lizard') ||
                (choice == 'scissors' && botChoice == 'spock') ||
                (choice == 'paper' && botChoice == 'rock') ||
                (choice == 'paper' && botChoice == 'lizard') ||
                (choice == 'paper' && botChoice == 'spock') ||
                (choice == 'lizard' && botChoice == 'spock') 
                // ||
                // (choice == 'lizard' && botChoice == 'spock') ||
                // (choice == 'lizard' && botChoice == 'scissors')
                ){
        return `You: ${choice}, Bot: ${botChoice} -- You Win`
    } else return `You: ${choice}, Bot: ${botChoice} -- You Lose` 
}

console.log(gameRPSLS(randRPSLS()))
console.log(gameRPSLS(randRPSLS()))
console.log(gameRPSLS(randRPSLS()))
console.log(gameRPSLS(randRPSLS()))
console.log(gameRPSLS(randRPSLS()))
console.log(gameRPSLS(randRPSLS()))
console.log(gameRPSLS(randRPSLS()))
console.log(gameRPSLS(randRPSLS()))
console.log(gameRPSLS(randRPSLS()))
console.log(gameRPSLS(randRPSLS()))
console.log(gameRPSLS(randRPSLS()))
console.log(gameRPSLS(randRPSLS()))
console.log(gameRPSLS(randRPSLS()))