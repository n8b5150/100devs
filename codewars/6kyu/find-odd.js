// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


function findOdd(arr){
    let obj = {}
    arr.forEach( e => {
        if (!obj[e]) obj[e] = 1
        else obj[e]++
    })
    let entries = Object.entries(obj)
    for ( const [key,value] of entries){
        if (value%2 == 1) return +key
    }
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]), ' -> 4')
console.log(findOdd([7]), ' -> 7')
console.log(findOdd([0]), ' -> 0')
console.log(findOdd([1,1,2]), ' -> 2')
console.log(findOdd([0,1,0,1,0]), ' -> 0')

// best answers

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


// function findOdd(A) {
//     var obj = {};
//     A.forEach(function(el){
//       obj[el] ? obj[el]++ : obj[el] = 1;
//     });
    
//     for(prop in obj) {
//       if(obj[prop] % 2 !== 0) return Number(prop);
//     }
//   }