// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.


function alphabetPosition(str){
    let alphabet = [0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    return str.toLowerCase()
        .split('')
        .map( e => alphabet.indexOf(e))
        .filter( e => e != -1 )
        .join(' ')
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")

// best answer
// function alphabetPosition(text) {
//     return text
//       .toUpperCase()
//       .match(/[a-z]/gi)
//       .map( (c) => c.charCodeAt() - 64)
//       .join(' ');
//   }