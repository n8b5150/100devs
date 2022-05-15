//---Easy
//create a function that subtracts two numbers and alerts the difference
let n1 = 3, n2 = 4, n3 = 5, n4 = 6, n5 = 7


function alertDiff(n1,n2){
    alert(n1-n2)
}
alertDiff(n1,n2)

//create a function that divides three numbers and console logs the quotient

function logQuotient(n1,n2){
    console.log(n1/n2)
}

//create a function that multiplys three numbers and returns the product

function multThree(n1,n2,n3){
    return n1*n2*n3
}
console.log(multThree(n1,n2,n3))

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function itsComplicated(n1,n2,n3){
    return (n1 + n2)%n3
}

console.log(itsComplicated(n1,n2,n3))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function itsComplicatedToo(n1,n2,n3,n4){
    n1 * n2 > 100 ? console.log(n3 + n4) :
    n1 * n2 < 100 ? console.log(n3 - n4) :
    alert((n1 * n2 * n3) % n4)
}
itsComplicatedToo(n1,n2,n3,n4)
itsComplicatedToo(10,10,n3,n4)
itsComplicatedToo(10,20,n3,n4)
