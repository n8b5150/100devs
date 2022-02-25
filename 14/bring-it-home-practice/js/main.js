// *Variables*
// Create a variable and console log the value
let n1 = 5
console.log(n1)

// Create a variable, add 10 to it, and alert the value
let n2 = 7
alert(n2+10)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(n1,n2,n3,n4) {
    alert(n1-n2-n3-n4)
}
subFour(10,2,4,5)

// Create a function that divides one number by another and returns the remainder
function divRem(n1,n2) {
    return(n1%n2)
}
console.log(divRem(10,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(n1,n2) {
    sum = n1 + n2
    if (sum > 50) {
        alert('Jumanji!')
    }else {
        alert('Too small')
    }
}
jumanji(10,20)
jumanji(20,31)


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(n1,n2,n3) {
    prod = n1 * n2 * n3;
    if (prod % 3 === 0) {
        alert('ZEBRA!!!!')
    }
    else {
        alert('Not divisible by 3. Remainder: ' + prod % 3)
    }
}
zebra(10,20,20)
zebra(3,1,1)