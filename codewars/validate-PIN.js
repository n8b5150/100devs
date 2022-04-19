function validate(pin){
    // return true for 0-9, 4 or 6 digits only
    if ( pin.length == 4 ){
        return (/[0-9]{4}/).test(pin)
    } else if ( pin.length == 6 ) {
        return (/[0-9]{6}/).test(pin)
    }else return false
}

console.log(validate('1234'))
console.log(validate('a234'))
console.log(validate('123423'))
console.log(validate('a1234b'))
console.log(validate('12abg34'))
console.log(validate('234'))
console.log(validate('34'))
console.log(validate('word345678'))

//best answer
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }

console.log(validatePIN('1234'))
console.log(validatePIN('a234'))
console.log(validatePIN('123423'))
console.log(validatePIN('a1234b'))
console.log(validatePIN('12abg34'))
console.log(validatePIN('234'))
console.log(validatePIN('34'))
console.log(validatePIN('word345678'))