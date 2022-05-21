// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3
// Find The Unique https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5


function findUniq(nums){
    nums.sort( (a,b) => a-b )
    return nums[0] === nums[1] ? nums[nums.length - 1] : nums[0]
}

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55)
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2)

// best answers
// function findUniq(arr) {
//     arr.sort((a,b)=>a-b);
//     return arr[0]==arr[1]?arr.pop():arr[0]
// }

// function findUniq(arr) {
//     return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }