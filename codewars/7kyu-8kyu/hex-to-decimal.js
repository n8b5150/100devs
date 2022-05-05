function hexDec(str){
    //if str[0] == '-', make substring
    let makeNeg = 1
    if ( str[0] == '-' ){
        makeNeg = -1
        str = str.substring(1)
        console.log(str)
    }
    // string to array and reverse
    let arr = str.toLowerCase().split('').reverse().map(e => {
        switch (e){
            case 'a':
                return 10
                break
            case 'b':
                return 11
                break
            case 'c':
                return 12
                break
            case 'd':
                return 13
                break
            case 'e':
                return 14
                break
            case 'f':
                return 15
                break
            default:
                return +e
                break
        }
    })
    //console.log(arr.forEach(e => ))
    return makeNeg * arr.reduce( (prev, curr, index) => prev + (curr * Math.pow(16, index)), 0)
    // array forEach > x 16 to power by index > reduce

}

console.log(hexDec('abc123'))
console.log(hexDec('1'))
console.log(hexDec('a2'))
console.log(hexDec('a'))
console.log(hexDec('f'))
console.log(hexDec('10'))
console.log(hexDec('00'))
console.log(hexDec('11'))
console.log(hexDec('100'))
console.log(hexDec('-C'))


//lmao, best answer
// function hexToDec(hexString){
//     return  parseInt(hexString, 16);
//    }