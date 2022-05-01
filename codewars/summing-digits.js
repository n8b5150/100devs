// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// original
// split, if arr[0] === '-' multiply arr[1] by -1 and shift 
// function sumDigits(num){
//     let arrNum = num.toString().split('')
//     if ( arrNum[0] === '-') {
//         arrNum.shift()
//     }
//     return arrNum.reduce( (a,c) => +a + +c, 0)
// }

const sumDigits = number => Math.abs(number).
    toString()
    .split('')
    .map(Number)
    .reduce( (acc,num) => acc + num, 0)

console.log(sumDigits(10), ' --> 1')
console.log(sumDigits(99), ' --> 18')
console.log(sumDigits(-32), ' --> 5')

// a little prettier, mapping Numbers instead of using unary
// const sumDigits = numberToSum => Math.abs(numberToSum)
//   .toString()
//   .split('')
//   .map(Number)
//   .reduce((acc, num) => acc + num, 0)

// using modulus
// function sumDigits(number) {
//     var i = 0;
//     var sum = 0;
//     number = Math.abs(number)
//     while(number != 0)
//     {
//         sum += number % 10
//         number = Math.floor(number/10)
//     }
//     return sum
// }

// Explanation
// it slices off one number at a time from right to left, 1234 for example, 1234%10 would be a remainder of 4, which is the rightmost number, then the number would be updated by using Math.floor to eliminate any decimals by dividing by 10, 1234/10 would be 123 with floor instead of 123.4. then 123%10 = 3, 123/10 = 12 etc etc.