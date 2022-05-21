// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function missingLetter(arr){
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let testArr = letters.slice(letters.indexOf(arr[0]))
    let missing = ''
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != testArr[i]){
           return missing = testArr[i]
        }
    }
    return missing
}

console.log(missingLetter(["a","b","c","d","f"]))
console.log(missingLetter(["O","Q","R","S"]))

// best answers
// function findMissingLetter(array) {
//     let first = array[0].charCodeAt(0)
//     for (let i = 1; i < array.length; i++) {
//       if (first + i !== array[i].charCodeAt(0)) {
//         return String.fromCharCode(first + i)
//       }
//     }
//     throw new Error("Invalid input")
//   }

// function findMissingLetter(array)
// {
//    var i=array[0].charCodeAt();
//    array.map(x=>  x.charCodeAt()==i?i++:i);
//    return String.fromCharCode(i);
// }

// const findMissingLetter = (array) => {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//     const start = alphabet.indexOf(array[0]);
//     return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
//   };