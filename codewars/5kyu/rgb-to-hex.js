// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

const rgb = (r,g,b) => convertToHex(r) + convertToHex(g) + convertToHex(b)

const convertToHex = (n) => {
    if (n > 255) n = 255
    if (n < 0) n = 0
    let hex = Math.round(n).toString(16).toUpperCase()
    if (hex.length < 2) hex = '0' + hex
    console.log(hex)
    return hex
} 

//The following are examples of expected output values:

console.log(rgb(255, 255, 255)  === 'FFFFFF')
console.log(rgb(255, 255, 300) === 'FFFFFF')
console.log(rgb(0,0,0) === '000000')
console.log(rgb(148, 0, 211) === '9400D3')


// best answer
// function rgb(r, g, b){
//     return toHex(r)+toHex(g)+toHex(b);
// }
  
//   function toHex(d) {
//       if(d < 0 ) {return "00";}
//       if(d > 255 ) {return "FF";}
//       return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
// }