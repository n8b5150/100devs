// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)     4th = 10
// *          **        ***         5th = 15
//            *         **          6th = 21
//                      *           7th = 28
// You need to return the nth triangular number. You should return 0 for out of range values:

// For example: (Input --> Output)

// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0

function triangularNumbers(n){
    return n <= 0 ?  0 : n*(n+1)/2
}

console.log(triangularNumbers(0))
console.log(triangularNumbers(2))
console.log(triangularNumbers(3))
console.log(triangularNumbers(-10))
console.log(triangularNumbers(663791033), 220309268077499070)
console.log(triangularNumbers(626648489), 196344164696315800)
console.log(triangularNumbers(4530807381), 10264107764127443000)
console.log(triangularNumbers(3582094796), 6415701565556188000)
