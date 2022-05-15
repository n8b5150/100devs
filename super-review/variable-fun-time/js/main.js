//--- Easy
//create a variable and assign it a number

let num = 21

//minus 10 from that number

num-=10

//print that number to the console

console.log(num)

//--- Medium
//create a variable that holds a value from the input

let userInput = document.querySelector('input').value

//add 25 to that number

userInput = Number(userInput) + 25

//alert that number

alert(userInput)

//--- Hard
//create a variable that holds the h1

let headingOne = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
const logToConsole = _ => console.log(num+userInput)
headingOne.addEventListener('click', logToConsole)

