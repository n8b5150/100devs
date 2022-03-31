// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Parameters: string, lower and upper case letters
// Return: string with each letter repeated the number of times as it is in the initial string, first letter of each is upper case, hyphen between each
// Example: 'bob' => 'B-Oo-Bbbb'
// Pseudo-code:
    // take the first letter, to upper case and store it in a 'new string'
    // loop: take letter, add '-', add to upper case to 'new string'
        // repeat for string length, starting with position 1
        // loop: take letter, add to lower case to 'new string'
            //repeat for string position starting with 1

const mumbling = str => {
    let newStr = str[0].toUpperCase()
    for ( let i = 1; i < str.length; i++) {
        newStr+=`-${str[i].toUpperCase()}`
        for ( let j = i; j > 0; j-- ) {
            newStr+=`${str[i].toLowerCase()}`
        }
    }
    return newStr
} 

console.log(mumbling('tRlobqu'))

//best answer 
// function accum(s) {
//     return s.split('').map( (e, i) => (e.toUpperCase() + e.toLowerCase().repeat(i))).join('-');
//   }