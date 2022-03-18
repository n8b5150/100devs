// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = 'pizza'
alert(food)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = 'yolo'
alert(str.charAt(1))
alert(str[1])
alert(str.slice(1,2))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
const divTwo = (n1, n2, n3) => {
    alert((n1/n2)*n3)
}
divTwo(2,3,4)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const cubeRoot = (n) => {
    console.log(Math.cbrt(n).toFixed(4))
}
cubeRoot(8)
cubeRoot(27)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const monthSeason = (month) => {
    month = month.toLowerCase()
    if ( month === 'december' ||
         month === 'january' ||
         month === 'february') {
            alert('Winter, boo')
        } else if ( month === 'march' ||
            month === 'april' ||
            month === 'may') {
            alert('Spring, meh?')
        } else if ( month === 'june' ||
            month === 'july' ||
            month === 'august') {
            alert('Summer, YAY')
        } else if ( month === 'september' ||
            month === 'october' ||
            month === 'november') {
            alert('Autumn, cool')
        } else alert('Did you enter a month? Check your spelling.')
}

monthSeason('december')
monthSeason('November')
monthSeason('julie')
monthSeason('June')
monthSeason('may')

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

const skipFive = (num) => {
    for ( i = 1; i <= num; i++ ){
        if ( i % 5 !== 0){
            console.log(i)
        }
    }
}
skipFive(100)
skipFive(47)