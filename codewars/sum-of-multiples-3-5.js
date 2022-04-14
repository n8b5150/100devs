// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

function threeFive(num){
    // if negative, return 0
    if (num < 3) return 0
    // arr of multiples of 3, for i * 3 < num

    let arr = []
    for ( i = 1; i * 3 < num; i++ ){
        arr.push(i*3)
    }

    // arr of multiples of 5, for i * 5 < num
    for ( i = 1; i * 5 < num; i++ ){
        arr.push(i*5)
    }

    // new set from arr
    let newArr = [...new Set(arr)]
    console.log(newArr.sort( (a,b) => a-b ))

    // reduce new set 
    return newArr.reduce( (acc, curr) => acc + curr, 0)// || 0
}

console.log(threeFive(0), 0)
console.log(threeFive(3), 0)
console.log(threeFive(5), 3)
console.log(threeFive(15), 3+5+6+9+10+12)
console.log(threeFive(10), 23)
console.log(threeFive(100))
console.log(threeFive(99))
console.log(threeFive(-99), 0)

//best answer
// function solution(number){
//     var sum = 0;
    
//     for(var i = 1;i< number; i++){
//       if(i % 3 == 0 || i % 5 == 0){
//         sum += i
//       }
//     }
//     return sum;
//   }