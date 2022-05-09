// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function camelCase(str) {
    let arr = str.split(/-|_/)
    for (let i = 1; i < arr.length; i++){
        arr[i] = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1).toLowerCase()
    }
    return arr.join('')
}

console.log(camelCase('the-stealth-warrior'))
console.log(camelCase('The_Stealth_Warrior'))