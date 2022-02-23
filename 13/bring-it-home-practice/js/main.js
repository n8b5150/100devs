// *Variables*
// Create a variable and console log the value
const fumble = 'hello'
console.log(fumble)

// Create a variable, add 10 to it, and alert the value
const addTen = 0
alert(addTen+=10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(n1,n2,n3,n4) {
    alert(n1-n2-n3-n4)
}
subFour(10,6,2,1)

// Create a function that divides one number by another and returns the remainder
function modTwo(n5,n6) {
    return n5%n6
}
console.log(modTwo(25,4))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(n7,n8) {
    let sum = n7 + n8
    if (sum > 50) {
        alert('Jumanji!')
    }else {
        alert('Less than fiddy')
    }
}
jumanji(10,48)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(n9,n10,n11) {
    let prod = n9 * n10 * n11
    if (prod % 3 == 0){
        alert('ZEBRA!')
    }else {
        alert(prod/3)
    }
}
zebra(2,2,5)