// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// filter odds to new array and sort
// shift from sorted array to existing array if element is odd

function sortOdd(arr){
    let odds = arr.filter( odd => odd%2 != 0 )
                .sort( (a,b) => a-b )
    for (let i = 0; i < arr.length; i++){
        if ( arr[i]%2 != 0 ){
            arr[i] = odds.shift()
        }
    }
    return arr
}


console.log(sortOdd([7, 1])) //  =>  [1, 7]
console.log(sortOdd([5, 8, 6, 3, 4])) //  =>  [3, 8, 6, 5, 4]
console.log(sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])) //  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// best answer
// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
// }