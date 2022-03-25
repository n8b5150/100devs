//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrNums = []
function createArrNumsAndSum(length) {
    let sum = 0
    for(let i = 0; i < length; i++) {
        arrNums.push(Number((100 * Math.random()).toFixed(0)))
    }
    console.log(arrNums)
    return arrNums.reduce( (a,b) => a+b, 0 )
}

console.log(createArrNumsAndSum(10))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function sqArr(arr) {
    return arr.map(e => e*e)
}

console.table(sqArr(arrNums))


//Create a function that takes string
//Print the reverse of that string to the console

let string = 'apple'
let stringTwo = 'racecar'
let stringThree = ' racecar'
let stringFour = 'd d d'

function revString(str) {
    str = str.trim().toLowerCase()
    return str.split('').reverse().join('')
}

console.log(revString(string))

//Create a function that takes in a string
//Alert if the string is a palindrome or not


function palindrome(str){
    str = str.trim().toLowerCase()
    return str == str.split('').reverse().join('')
}

console.log(palindrome(string))
console.log(palindrome(stringTwo))
console.log(palindrome(stringThree))
console.log(palindrome(stringFour))