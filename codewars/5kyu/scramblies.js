// DESCRIPTION:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


//this function times out on long strings
//sort is resource intensive
// function scramble(str1, str2) {
//     let testStr1 = str1.split('').sort().join('')
//     let str2Array = str2.split('').sort()
//     for (i = 0; i < str2Array.length; i++){
//         if (testStr1.includes(str2Array[i])){
//             testStr1 = testStr1.replace(str2Array[i], '')
//         } else return false
//     }
//     return true
// }

//better to reduce to an object with the count of each character and compare

// function scramble(str1, str2) {
//     const str1Obj = strToObj(str1)
//     const str2Obj = strToObj(str2)
//     const charStr2 = Object.keys(str2Obj)
//     console.log(charStr2)
//     for (let char of charStr2) {
//         console.log("1" + char, str1Obj[char])
//         console.log("2" + char, str2Obj[char])
//         if (str2Obj[char] > str1Obj[char] || str1Obj[char] == undefined) {
//           return false;
//         }
//       }
//       return true;
//     }

// function strToObj(str){
//     return str.split('').reduce((container, char) => {
//         (container[char] += 1) || (container[char] = 1)
//         return container
//     }, {})
// }
function scramble(str1, str2) {
    const str1Obj = strToObj(str1)
    const str2Obj = strToObj(str2)
    const charStr2 = Object.keys(str2Obj)
    for (let char of charStr2) {
        if (str2Obj[char] > str1Obj[char] || str1Obj[char] == undefined) {
          return false;
        }
      }
      return true;
    }

function strToObj(str){
    return str.split('').reduce((container, char) => {
        (container[char] += 1) || (container[char] = 1)
        return container
    }, {})
}

console.log(scramble('rkqodlw', 'world')) //==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars')) //==> True
console.log(scramble('cedewaraaossoqqyt', 'ccodewars')) //==> False
console.log(scramble('katas', 'steak')) //==> False


// A bunch of different solutions
//https://www.codewars.com/kata/55c04b4cc56a697bb0000048/solutions/javascript