//--- Easy
//create a variable and assign it a number
let num = 12

//minus 10 from that number
num-=10

//print that number to the console
console.log(num)

//--- Medium
//create a variable that holds a value from the input
let numIn = Number(document.querySelector('input').value)

//add 25 to that number
numIn+=25

//alert that number
alert(numIn)


//--- Hard
//create a variable that holds the h1
let echOne = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
// echOne.addEventListener('click', addTwo) 

// function addTwo(){
//     console.log(num+numIn)
// }
   
echOne.addEventListener('click', ()=>console.log(num+numIn)) 
