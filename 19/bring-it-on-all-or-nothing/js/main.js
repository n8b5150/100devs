// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let bu = true
console.log(bu)

// Declare a variable, reassign it to your favorite color, and console log the value
let color = 'blue'
console.log(color)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
const sumThreeDivFourth = (n1, n2, n3, n4) => {
    let sum = (n1+n2+n3)/n4
    return sum
}

console.log(sumThreeDivFourth(5,5,5,5))

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
const powerOf = (num,pow) => {
    console.log(Math.pow(num,pow))
}
powerOf(2,8)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
const strAlert = (boo, str) => boo ? console.log(str) : console.log('false')
strAlert(true,'Hello. t')
strAlert(false,'Hello. f')

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

const fizzBuzz = (num = 10) => {
    for (let i = 1; i <= num; i++) {
        let output = ''
        if (i % 3 === 0) output += 'Fizz'
        if (i % 5 === 0) output += 'Buzz'
        console.log(output || i)
    }
}
fizzBuzz()
fizzBuzz(15)