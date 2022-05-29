// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(numArr){
    let maxSum = 0
    if (numArr.filter(n => n >= 0).length === 0){
        return 0
    }
    for (let i = 0; i < numArr.length; i++){
        for (let k = 0; k < numArr.slice(i).length; k++){
            let testSum = numArr.slice(i,numArr.length - k).reduce((acc,curr) => acc + curr, 0)
            if (testSum > maxSum){
                maxSum = testSum
            }
        }
    }
    return maxSum
}


console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))// should be 6: [4, -1, 2, 1]
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]))// should be 0



//best answers
// var maxSequence = function(arr){
//     var min = 0, ans = 0, i, sum = 0;
//     for (i = 0; i < arr.length; ++i) {
//       sum += arr[i];
//       min = Math.min(sum, min);
//       ans = Math.max(ans, sum - min);
//     }
//     return ans;
//   }

// var maxSequence = function(arr){
//     var currentSum = 0;
//     return arr.reduce(function(maxSum, number){
//         currentSum = Math.max(currentSum+number, 0);
//         return Math.max(currentSum, maxSum);
//     }, 0);
// }