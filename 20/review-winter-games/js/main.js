//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
// const toNewArray = (arr) => {
//     let newArr = []
//     for ( i = 0; i < arr.length; i++)
//     newArr[i] = arr[i]
//     return newArr
// }

const toNewArray = (arr) => {
    let newArr = []
    arr.forEach( e => newArr.push(e))
    return newArr
}

const arrEx = [5,4,3,2,1]

let newArray = toNewArray(arrEx)
console.log(newArray)