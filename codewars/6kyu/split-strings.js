// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function splitString(str){
    if ( str.length%2 != 0 ) str+='_'
    let arr = []
    for ( let i = 0; i < str.length; i+=2 ){
        arr.push(str.substring(i,i+2))
    }
    return arr
}

console.log(splitString('abc'), " =>  ['ab', 'c_']")
console.log(splitString('abcdef'), " => ['ab', 'cd', 'ef']")

// best answer
// function solution(s){
//     return (s+"_").match(/.{2}/g)||[]
// }