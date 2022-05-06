// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function bitCounting(num){
    return num.toString(2).split('').reduce( (a,c) => +a + +c,)
}

console.log(bitCounting(1234))

// best answer

// countBits = n => n.toString(2).split('0').join('').length;