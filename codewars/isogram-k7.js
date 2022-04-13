// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

function isogram(str){
    let strArr = str.toLowerCase().split('')
    let result = true
    let temp = strArr.reduce((allChar, char) => {
        if (char in allChar) {
            allChar[char]++
            result = false
        }else {
            allChar[char] = 1
        }
        return allChar
    }, {})
    return result
}

//best answer without regex
// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
//   }

console.log(isogram("Dermatoglyphics"), true)
console.log(isogram("aba"), false)
console.log(isogram("moOse"), false) //(ignore letter case)

// let countedNames = names.reduce(function (allNames, name) {
//     if (name in allNames) {
//       allNames[name]++
//     }
//     else {
//       allNames[name] = 1
//     }
//     return allNames
//   }, {})