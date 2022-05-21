// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be retu rned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(str){
    let cipher = str.split('').map( char => {
        let position = char.charCodeAt()
        if ((/[a-z]/i).test(char) === true){
            return char.toUpperCase().charCodeAt() <= 77 ? String.fromCharCode(position + 13) : String.fromCharCode(position - 13)

        }else return char
    })
    return cipher.join('')
}

rot13('ABCMNOPQabcmnopq123-=+')