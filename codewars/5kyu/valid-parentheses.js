// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Constraints
// 0 <= input.length <= 100


function validParens(str){
    if ( str.length > 1 && str.includes("()")){
        str = str.split('()').join('')
        console.log(str)
        if ( str === '' ) return true
        else return validParens(str)
    }else if ( str.length > 0 ) return false
}

console.log(validParens("()")," =>  true")
console.log(validParens(")(()))")," =>  false")
console.log(validParens("(")," =>  false")
console.log(validParens("(())((()())())")," =>  true")
