// *Variables*
// Create a variable and console log the value
let str = "Hello World!"
console.log(str)

// Create a variable, add 10 to it, and alert the value
let addTen = 7
alert(`Add Ten: 7+10= ${addTen+=10}`)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(n1,n2,n3,n4){
    alert(`${n1}-${n2}-${n3}-${n4}= ${n1-n2-n3-n4}`)
}
subFour(10,5,3,2)

// Create a function that divides one number by another and returns the remainder
function modulo(n1,n2){
    return(`Modulo ${n1%n2}`)
}
modulo(10,3)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(n1,n2){
    return (n1+n2 > 50) ? alert('Jumanji')
    : alert('Not Jumanji')
}
jumanji(2,3)
jumanji(50,3)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(n1,n2,n3){
    return ((n1*n2*n3)%3 === 0) ? alert('ZEBRA')
    : alert('Not Zebra')
}
zebra(3,3,3)
zebra(4,4,4)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function repeat(str,num){
    for (let i=0; i<num; i++){
        console.log(str)
    }
}
repeat('yolo',10)