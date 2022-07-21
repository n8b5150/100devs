// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(str){
    let strSplit = str.split(' ')
    for (let i = 0; i < strSplit.length; i++){
            strSplit[i] = changeCase(strSplit[i])
    }
    return strSplit.join(' ')
}

function changeCase(str) {
    let altStr = ''
    for (let i = 0; i < str.length; i++){
        if ( i%2 == 0 ) {
            altStr += str[i].toUpperCase()
        }
        if ( i%2 != 0 ) {
            altStr += str[i].toLowerCase()
        }
    }
    return altStr
}

console.log(toWeirdCase( "String" ));//=> returns "StRiNg"
console.log(toWeirdCase( "Weird string case" ));//=> returns "WeIrD StRiNg CaSe"
console.log(toWeirdCase('This'))//, 'ThIs');
console.log(toWeirdCase('is'))//, 'Is');
console.log(toWeirdCase('This is a test'))//, 'ThIs Is A TeSt');