// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function divisors(num){
    let count = 0
    for ( let i = 1; i <= Math.sqrt(num); i++){
        if ( num%i === 0 && i === Math.sqrt(num) ) count++
        else if ( num%i === 0) count+=2
    }
    return count
}

console.log(divisors(4)) // --> 3 (1, 2, 4)
console.log(divisors(5)) // --> 2 (1, 5)
console.log(divisors(12)) // --> 6 (1, 2, 3, 4, 6, 12)
console.log(divisors(30)) // --> 8 (1, 2, 3, 5, 6, 10, 15, 30)