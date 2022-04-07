function noBoringZeros1(n) {
    let makeNeg = 1
    if ( n < 0 ){
        makeNeg = -1
        n = n * -1
    }
    n = Number(n.toString().split('').reverse().join(''))
    return makeNeg * Number(n.toString().split('').reverse().join('')) 
}

//best answer 
function noBoringZeros(n) {
    while(n%10==0 && n!=0){ //divide by ten until there is a remainder
        n/=10
    }
    return n;
}

console.log(noBoringZeros(1450), 145)
console.log(noBoringZeros(960000), 96)
console.log(noBoringZeros(1050), 105)
console.log(noBoringZeros(-1050), -105)
console.log(noBoringZeros(-105), -105)
console.log(noBoringZeros(0), 0)

