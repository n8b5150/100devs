// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
// Note for Go
// For Go: Empty string slice is expected when there are no anagrams found.

// my code from 8kyu
// const anagram = (str1,str2) => {
//     return str1.toLowerCase().split('').sort().join('') == str2.toLowerCase().split('').sort().join('')
// }

function anagrams(str,arr){
    str = str.trim().toLowerCase().split('').sort().join('')
    let anagram = []
    return arr.filter( e => str === e.trim().toLowerCase().split('').sort().join(''))
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) //=> ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) //=> ['carer', 'racer']