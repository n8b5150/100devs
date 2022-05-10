// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function pangram(str){
    str = str.toLowerCase()
        .split('')
        .filter( e => /[a-z]/.test(e) )
        .reduce( (previous, current) => {
            if (previous.indexOf(current) === -1) {
              previous.push(current)
            }
            return previous
          }, [])
        .join('')
    return str.length === 26
}

console.log(pangram("The quick brown fox jumps over the lazy dog"))
console.log(pangram("The quick brown fox jumps over the lay dog"))
console.log(pangram("aa.jbqwedsrtytuoiunbm!3@ouakljhlkjhfgmmnmmxbcv.,/.lkjsiodufhwpqpoiweioirutyhjhasdfzxcvb  "))

// best answers
// function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//       return string.indexOf(x) !== -1;
//     });
//   }

//   function isPangram(string){
//     return 'abcdefghijklmnopqrstuvwxyz'
//       .split('')
//       .every((x) => string.toLowerCase().includes(x));
//   }