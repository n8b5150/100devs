// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n){
    let sum = 0
    for( let i = 3; i <= n; i+=3)(
        sum+=i
    )
    for( i = 5; i <= n; i+=5){
        if ( i%3 != 0){
            sum+=i
        }
    }
    console.log(sum)
}

findSum(5)
findSum(10)