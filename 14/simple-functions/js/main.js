//create a function that adds two numbers and alerts the sum
function addTwo( n1 , n2 ) {
    alert( n1 + n2 )
}
addTwo( 5 , 6 )

//create a function that multiplys three numbers and console logs the product
function multThree( n3 , n4 , n5 ){
    for ( i = 0 ; i <= 12 ; i++ ){
        console.log( n4++ * n5++ *n3++ )
        // add one to each and do it again
    }
}
multThree( 2 , 3 , 4 )

//create a function that divides two numbers and returns the ???quotient
function divTwo( n6 , n7 ) {
    return( n6 / n7 )
}
console.log( divTwo( 12 , 6 ) )