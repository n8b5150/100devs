// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// function breakCamelCase(str){
//     let strToArray = []
//     //let nextIndex = 0
//     let capLetter = ''
//     for (let i = 0; i < str.length; i++){
//         console.log(str.charCodeAt(i))
//         if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 97){
//             capLetter = str[i]
//             console.log(capLetter)
//             str = str.replace(str[i],` ${capLetter}`)
//             //console.log(str)
//             i++
//             //strToArray.push(str.substring(nextIndex,i))
//             //nextIndex = i
//         }
//     }
//     //strToArray.push(str.substring(nextIndex,str.length))
//     return str
// }

function breakCamelCase(str){
        let strToArray = []
        let nextIndex = 0
        for (let i = 0; i < str.length; i++){
            if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 97){
                str = str.substring(0,i) + " " + str.substring(i,str.length)
                i++
            }
        }
        return str
}

console.log(breakCamelCase("camelCasing"))//  =>  "camel Casing"
console.log(breakCamelCase("identifier"))//  =>  "identifier"
console.log(breakCamelCase(""))//  =>  ""
console.log(breakCamelCase("testTestTest"))//  =>  ""
console.log(breakCamelCase("testTestWest"))//  =>  ""

// best answers
// // complete the function
// function solution(string) {
//     return(string.replace(/([A-Z])/g, ' $1'));
  
// }

// function solution(string) {
//     string = string.split('').map(function (el) {
//       if (el === el.toUpperCase()) {
//         el = ' ' + el
//       }
//       return el
//     })
//     return string.join('')
// }