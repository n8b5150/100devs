// DESCRIPTION:
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase = function () {
    if (this.length < 1) return ""
    let strArr = this.trim().split(' ')
    console.log(strArr)
    strArr = strArr.map( e => e[0].toUpperCase() + e.slice(1).toLowerCase())
    return strArr.join('')
}

console.log("hello case".camelCase())
console.log("camel case word".camelCase())
console.log(" camel case word".camelCase())
console.log("".camelCase())