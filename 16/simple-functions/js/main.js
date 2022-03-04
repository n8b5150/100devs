//---Easy
//create a function that subtracts two numbers and console.logs the difference

function subTwo(n1,n2){
    console.log(n1-n2)
}
console.log(5,2)

//create a function that divides three numbers and console logs the quotient
function divThree(n1,n2,n3){
    console.log(n1/n2/n3)
}
divThree(9,3,3)

//create a function that multiplys three numbers and returns the product
function prodThree(n1,n2,n3){
    return n1*n2*n3
}
function turnIntoCash(){
    let prod = prodThree(2,3,4)
    console.log('$' + prod)
}
turnIntoCash()

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function medium(n1,n2,n3){
    console.log((n1+n2)%n3)
}
medium(25,2,9)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and console.log the remainder of dividing the fourth number
function hard(n1,n2,n3,n4){
    console.log(n1,n2,n3,n4)
    return ((n1*n2) > 100) ? console.log(n3+n4)
        : ((n1*n2) < 100) ? console.log(n3-n4)
        : console.log((n1*n2*n3)%n4) 
}
hard(2,3,10,5)
hard(2,51,7,5)
hard(2,50,1,3)