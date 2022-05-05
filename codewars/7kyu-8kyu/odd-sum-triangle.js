// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8
// 3 --> 7 + 9 + 11 = 27
// 4 --> 13 + 15 + 17 + 19 = 64

function oddSum(num){
    //this sums all of the rows
    // let sum = 0
    // for ( let i = 1; i <= num; i++){
    //     sum = sum + (i*i*i)
    // }
    // return sum
    return num*num*num
}

console.log(oddSum(1))
console.log(oddSum(2))
console.log(oddSum(3))
console.log(oddSum(4))
console.log(oddSum(17))

// best answer

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
  }