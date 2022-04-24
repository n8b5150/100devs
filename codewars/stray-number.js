// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(arr){
    arr.sort( (a,b) => a-b )
    console.log(arr[0] == arr[1] ? arr[arr.length-1] : arr[0])
}




stray([1, 1, 2]) // ==> 2
stray([17, 17, 3, 17, 17, 17, 17]) // ==> 3