// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeating(str){
    let result = ''
    let strObj = str.split('').reduce((acc,curr)=>{
        if (acc[curr.toLowerCase()]){
            acc[curr.toLowerCase()]++
        }else{
            acc[curr.toLowerCase()] = 1
        }
        return acc
    },{})
    for (char in strObj){
        if (strObj[char] === 1 ){
            result = str[str.toLowerCase().indexOf(char)]
            return result
        }
    }
    return result
}

console.log(firstNonRepeating('stress'))
console.log(firstNonRepeating('sTreSS'))
console.log(firstNonRepeating('sstttrrreessss'))

// best non regex answer
// function firstNonRepeatingLetter(s) {
//     var t=s.toLowerCase();
//     for (var x=0;x<t.length;x++)
//       if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
//         return s[x];
//     return "";
//   }