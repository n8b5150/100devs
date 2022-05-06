// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// to lower case
// for each to compare to keys in object

function duplicates(str){
    let count = 0
    let obj = {}
    let arr = str.toLowerCase().split('')
    arr.forEach(  e => {
        if ( !obj[e] ){
            obj[e] = 1
        }else if ( obj[e] == 1 ){
            obj[e]++
            count++
        }
    })
    return count
}



console.log(duplicates("abcde"),' -> 0') // no characters repeats more than once
console.log(duplicates("aabbcde"),' -> 2') // 'a' and 'b'
console.log(duplicates("aabBcde"),' -> 2') // 'a' occurs twice and 'b' twice (`b` and `B`)
console.log(duplicates("indivisibility"),' -> 1') // 'i' occurs six times
console.log(duplicates("Indivisibilities"),' -> 2') // 'i' occurs seven times and 's' occurs twice
console.log(duplicates("aA11"),' -> 2') // 'a' and '1'
console.log(duplicates("ABBA"),' -> 2') // 'A' and 'B' each occur twice

// best answer without regex

// function duplicateCount(text){
//     return text.toLowerCase().split('').filter(function(val, i, arr){
//       return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
// }