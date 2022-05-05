// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str){
    let arr = str.split(' ').map( e => {
        if ( e.length >= 5 ){
            return e.split('').reverse().join('')
        }else return e
    })
    return arr.join(' ')
}

console.log(spinWords( "Hey fellow warriors" ))

// best answers

// function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }

// function spinWords(str){
//     return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
//   }