// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function sumBin(n1, n2){
    let sum = n1 + n2
    let arr = []
    while ( sum >= 1 ){
        arr.unshift(parseInt(sum%2))
        sum = sum/2
    }
    return arr.join('')
}
// function convertBin(num){
//     while ( num > 1 ){

//     }
// }

console.log(sumBin(1,1), '10')
console.log(sumBin(5,9), '1110')
console.log(sumBin(9,17), '11010')

function sumBin1(n1,n2){
    return (n1+n2).toString(2)
}
console.log(sumBin1(1,1), '10')
console.log(sumBin1(5,9), '1110')
console.log(sumBin1(9,17), '11010')