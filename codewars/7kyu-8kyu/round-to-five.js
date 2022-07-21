// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.


function roundToNext5(n){
    if (n%5 == 0) return n
    if (n > 0) return n + (5 - n%5)
    if (n < 0) return n - n%5
  }


console.log(roundToNext5(-1) == 0)
console.log(roundToNext5(-7) == -5)
console.log(roundToNext5(-22) == -20)
console.log(roundToNext5(-23) == -20)
// console.log(roundToNext5(1) == 5)
// console.log(roundToNext5(3) == 5)
// console.log(roundToNext5(7) == 10)
// console.log(roundToNext5(39) == 40)
// console.log(roundToNext5(121) == 125)
// console.log(roundToNext5(-5) == -5)
// console.log(roundToNext5(5) == 5)
// console.log(roundToNext5(20) == 20)
// console.log(roundToNext5(0) == 0)
// console.log(roundToNext5(990) == 990)
// console.log(roundToNext5(555) == 555)

//top answer

// function roundToNext5(n){
//     return Math.ceil(n/5)*5;
//   }