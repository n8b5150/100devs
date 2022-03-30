//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

const arrNums = (num) => {
    let arr = []
    let sum = 0
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random()*100))
        sum+=arr[i]
    }
    console.table(arr)
    console.log('Sum = ' + sum) //arr.reduce( (acc,c) => acc + c, 0)
    return arr
}

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const sqArr = (arr) => {            // one line: let newArr = nums => nums.map( e => e**2)
    let newArr = arr.map( e => e**2 )
    return newArr
}

console.table(sqArr(arrNums(5)))

//Create a function that takes string
//Print the reverse of that string to the console
const revStr = (str) => {
    return str.split('').reverse().join('')
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindrome = (str) => {
   return revStr(str).toLowerCase() == str.toLowerCase() ? 'palindrome' : 'not palindrome'
}

console.log(palindrome('red'))
console.log(palindrome('racecar'))
console.log(palindrome('leon'))
console.log(palindrome('yolo'))
console.log(palindrome('BoB'))
console.log(palindrome('Bob'))