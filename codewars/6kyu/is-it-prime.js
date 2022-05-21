// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.
// Example

function isPrime(n){
    let divisors = []
    if ( n <= 1 ) return false
    for(let i = 2; i <= Math.sqrt(n); i++){
        if ( n%i === 0){
            divisors.push(i)
            divisors.push(n/i)
        }
    }
    return divisors.length < 2 ? true : false
}


console.log(isPrime(1) === false )  /* false */
console.log(isPrime(2) === true )  /* true  */
console.log(isPrime(7) === true ) /* true */
console.log(isPrime(9) === false ) /* false */
console.log(isPrime(13) === true ) /* true */


// best answers
// function isPrime(num) {
//     if (num < 2) return false;
//     const limit = Math.sqrt(num);
//     for (let i = 2; i <= limit; ++i) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   function isPrime(num) {
//     for(let i = 2; i <= Math.sqrt(num); i++) {
//       if(num % i === 0) {
//         return false;
//       }
//     }
//     return num > 1
//   }