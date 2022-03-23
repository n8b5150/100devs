// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'Easter'
console.log(favHoliday.toUpperCase())


//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
console.log(favHoliday.slice(-3)) //ter


// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
const subFive = (n1,n2,n3,n4,n5) => console.log(Math.abs(100-n1-n2-n3-n4-n5))
subFive(1,2,3,8,7) //79
subFive(1000,2000,3000,8000,7000) 


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
const hiLow = (n1,n2,n3) => console.log(`max = ${Math.max(n1,n2,n3)} min = ${Math.min(n1,n2,n3)}`)

hiLow(4,7,10)
hiLow(5,1,99)


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
const headTails = () => {
    let random = Math.random()
    console.log(`random = ${random}`)
    let rounded = Math.round(random)
    console.log(`rounded = ${rounded}`)
    return rounded ? 'Tails' : 'Heads'
 }
// console.log(headTails())
// console.log(headTails())
// console.log(headTails())
// console.log(headTails())
// console.log(headTails())
// console.log(headTails())
// console.log(headTails())
// console.log(headTails())
// console.log(headTails())
// console.log(headTails())


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

const chance = (num) => {
    for ( num; num >= 0; num--) {
        console.log(headTails())
    }
}

chance(10)