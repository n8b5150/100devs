// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    return str.split(' ')
        .map( e => {
            if ( /[a-z]/i.test(e) ){
               return e.substring(1) + e.substring(0,1) +'ay' 
            }else return e
            
        })
        .join(' ')
}


console.log(pigIt('Pig latin is cool')) // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'))     // elloHay orldway !

// best answer, regex galore

// function pigIt(str){
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
//   }