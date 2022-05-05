const desOrder = num => Number(num.toString().split('').sort( (a,b) => b - a).join(''))

console.log(desOrder(36827659927465))