//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

// const multArr = (arr) => {
//     let prod = 1
//     for ( i = 0; i < arr.length; i++){
//         prod *= arr[i]
//     }
//     return prod
// }

const multArr = (arr) => {
    let prod = 1
    arr.forEach( e => prod *= e)
    return prod
}

console.log(multArr([10,10,10]))
console.log(multArr([2,3,4,5,6]))