// https://www.codewars.com/kata/54d512e62a5e54c96200019e
// 5 kyu
// Primes in numbers
// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"

// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

// need to put these variables in a function to hide them

//let factors = []
//let i = 3
function primeFactors(n,i = 3,factors = []){
    // Recursively divide by 2 if even
    let thisNum = n
    if (n%2 === 0){
        factors.push(2)
        return primeFactors(n/2,i,factors)
    // Recursively divide by odds if evenly divisible
    }else if (n%1 === 0) {
            if (n%i === 0){
                factors.push(i)
                n = n/i
                return primeFactors(n,i,factors)    
            }
            let startNum = n
            while (i < Math.sqrt(n)){
                if (n%i != 0){
                    i+=2
                    return primeFactors(n,i,factors)
                }
            }
            if (startNum > 1) factors.push(startNum)
    }
    if (!factors.length) factors.push(thisNum)
    // Send for formatting
    return formatFactors(factors)
}

function formatFactors(arr){
    // Reduce array to 'factors' object
    let factorObj = arr.reduce((factorObj,factor) => {
        if (!factorObj[factor]){
            factorObj[factor] = 1
        }else {
            factorObj[factor]++
        }
        return factorObj
    },{})
    // Create string from 'factors' object
    let str = ''
    for (factor in factorObj){
        if (factorObj[factor] > 1){
            str += `(${factor}**${factorObj[factor]})`
        }else str+= `(${factor})`
    }
    return str
}

console.table(primeFactors(86240)) //(2**5)(5)(7**2)(11)
console.table(primeFactors(7919)) //(7919)
console.table(primeFactors(26877)) //(3)(17**2)(31)(677)
console.table(primeFactors(918877))
console.table(primeFactors(8056114))
console.table(primeFactors(4995001))
console.table(primeFactors(699285))
console.table(primeFactors(7775460))
console.table(primeFactors(933555431))
console.table(primeFactors(481064))
console.table(primeFactors(6181068))

//console.log(formatFactors(primeFactors(86240)))