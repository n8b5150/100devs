// DESCRIPTION:
// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
// Courtesy of rosettacode.org

// function solution(nums,range = []){
//     // store num1 = nums.shift()
//     // store nextNum = nums.shift()
//     const num1 = nums.shift()
//     console.log(num1)
//     // if num1 + 1 = nums[0], while nextNum + 1 == currentNum = nums.pop(), nextNum = currentNum
//     if ( +num1 + 1 == +nums[0]){
//         let nextNum = nums.shift()
//         while (+nextNum + 1 == nums[0]){
//             nextNum = nums[0]
//             nums.shift()
//         }
//         range.push(`${String(num1)}-${String(nextNum)}`)
//         console.log(range)
//     } else range.push(String(num1))
//     console.log(range)
//     if (nums.length > 0) return solution(nums,range)
//     else return range

//     // range.push(String(num1) + '-' String(nextNum))
//     // else range.push(num1)
//     // solution(nums,range)
// }
function solution(nums,range = []){
    const num1 = nums.shift()

    if ( +num1 + 1 == +nums[0]){
        let nextNum = nums.shift()
        while (+nextNum + 1 == nums[0]){
            nextNum = nums[0]
            nums.shift()
        }
        if (+num1 + 1 == +nextNum){
            range.push(`${String(num1)},${String(nextNum)}`)
        } else{
            range.push(`${String(num1)}-${String(nextNum)}`)
        } 
            
    } else range.push(String(num1))

    if (nums.length > 0) return solution(nums,range)
    else return range.join(',')
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))