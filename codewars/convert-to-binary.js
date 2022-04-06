function toBin(num){
    //recursive 
    if ( num > 0 ){
        //divide by two and get quotient
        //modulo two, store remainder to string
        return toBin( parseInt(num/2) ) + (num%2)
    }
    return ''
}

console.log(toBin(25))
console.log(toBin(2))
console.log(toBin(4))
console.log(toBin(9))
console.log(toBin(7))
console.log(toBin(128))
console.log(toBin(127))


function convertToBinary (number, bin) {
    if (number > 0) {
        return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };
    return '';
}

    console.log(convertToBinary(25));
    console.log(convertToBinary(8));

    function convertToBinary1 (number) {
        let num = number;
        let binary = (num % 2).toString();
        for (; num > 1; ) {
            num = parseInt(num / 2);
            binary =  (num % 2) + (binary);
        }
        console.log(binary);
    }
    
convertToBinary1(25)
convertToBinary1(8)
    