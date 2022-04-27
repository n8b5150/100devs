// Variables
//You are getting ready to face Brock for the Boulder Badge. 

//You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. 

//Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). 

let bulbasaurRareCandies = 16 - 5
let caterpieRareCandies = 7-1
let weedleRareCandies = 7-1

//Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 

let totalCandies = bulbasaurRareCandies+caterpieRareCandies+weedleRareCandies
console.log(totalCandies)

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

const fahrToCels = (temp) => 5/9 * (temp - 32)
const charmanderBattle = (temp) => fahrToCels(temp) > 0 ? 'Battle!' : 'Too cold'

console.log(charmanderBattle(-20))
console.log(charmanderBattle(40))

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

const choosePikachu = (x) => {
    for (x ; x > 0; x--) {
        console.log('Pikachu I choose you')
    }
}

choosePikachu(5)