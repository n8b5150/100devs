// *Variables*
// Create a variable and console log the value

let ten = 10
console.log(ten)

// Create a variable, add 10 to it, and alert the value

alert(ten+10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFour(n1,n2,n3,n4){
    alert(n1-n2-n3-n4)
}

// Create a function that divides one number by another and returns the remainder

const modulo = (n1,n2) => n1%n2

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

const jumanji = (n1,n2) => n1 + n2 > 50 ? alert('Jumanji') : console.log('nuttin')

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

const zebra = (n1,n2,n3) => (n1 * n2 * n3)%3 === 0 ? alert('Zebra') : console.log('nuttin')

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function loopTest(num,word){
    for (num; num>=0; num-=1){
        console.log(word)
    }
}
