// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(str){
    let filteredStr = str.split('()').join('').split('[]').join('').split('{}').join('')
    if (filteredStr.length < 1){
        return true
    }else if (filteredStr === str && filteredStr.length > 0){
        return false
    }else if (filteredStr != str){
        return validBraces(filteredStr)
    }
}

console.log(validBraces("(){}[]")) //=>  True
console.log(validBraces("([{}])"))//   =>  True
console.log(validBraces("(}"))//       =>  False
console.log(validBraces("[(])"))//     =>  False
console.log(validBraces("[({})](]"))// =>  False

// best answers
// function validBraces(braces){
//     var matches = { '(':')', '{':'}', '[':']' };
//     var stack = [];
//     var currentChar;
  
//     for (var i=0; i<braces.length; i++) {
//       currentChar = braces[i];
  
//       if (matches[currentChar]) { // opening braces
//         stack.push(currentChar);
//       } else { // closing braces
//         if (currentChar !== matches[stack.pop()]) {
//           return false;
//         }
//       }
//     }
  
//     return stack.length === 0; // any unclosed braces left?
//   }

// function validBraces(braces){
//     while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
//       braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
//     }
//     return braces.length == 0;
//   }