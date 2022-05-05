// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) -> output (explanation)
function sumOfNumbers(n1, n2){
    let sum = 0
    if (n1 == n2) {
        return n1
    }else if (n1 < n2){
        for ( n1; n1 <= n2; n1++) {
            sum += n1
        }
        return sum
    }else if (n1 > n2) {
        for ( n2; n2 <= n1; n2++) {
            sum += n2
        }
        return sum
    }
}

console.log(sumOfNumbers(1, 0), 1)    //(1 + 0 = 1)
console.log(sumOfNumbers(1, 2), 3)    //(1 + 2 = 3)
console.log(sumOfNumbers(0, 1), 1)    //(0 + 1 = 1)
console.log(sumOfNumbers(1, 1), 1)    //(1 since both are same)
console.log(sumOfNumbers(-1, 0), -1)  //(-1 + 0 = -1)
console.log(sumOfNumbers(-1, 2), 2)   //(-1 + 0 + 1 + 2 = 2)