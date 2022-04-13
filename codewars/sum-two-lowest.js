// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
 
function sumLowestTwo(arr){
    arr.sort( (a, b) => a - b )
    return arr[0] + arr[1]
}

console.log(sumLowestTwo([19, 5, 42, 2, 77]), 7)
console.log(sumLowestTwo([10, 343445353, 3453445, 3453545353453]), 3453455)