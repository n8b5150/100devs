// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:

// array = [[1,2,3,4],
//          [10,11,12,5],
//          [9,8,7,6]]
//snail(array) #=> [1,2,3,4,   5,   6,7,8,9,   10,11,12]
// array = [[1,2,3,4],
//          [12,13,14,5],
//          [11,16,15,6]
//          [10,9,8,7]]
//snail(array) #=> [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
//                 [0:0-3   1-3:3  3:2-0 2-1:0 1:1-2 2:2-1]
// array = [[0,1,2,3],
//          [11,12,13,4],
//          [10,15,14,5]
//          [9,8,7,6]]
//snail(array) #=> [0,1,2,3,  4,5,6,  7,8,9,  10,11,  12,13,  14,15]
//                 [0:0-3   1-3:3  3:2-0 2-1:0 1:1-2 2:2-1]
//[0:0-3   array[0][0 to w-1]       left
// 1-3:3   array[1 to h-1][w-1]     down
// 3:2-0   array[h-1][w-2 to 0]     right
// 2-1:0   array[h-2 to h-1][0]     up
// 1:1-2   array[1][1 to w-2]       left
// 2:2-1]  array[2][w-2 to 1]       right


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

function snail(array){
    let snailArray = []
    let w = array[0].length
    let h = array.length
    let i = 0, wK = 0, hJ = 0
    while (i < (w*h - 1)){
        for (wK; wK < w - (wK + 1); wK++){
            snailArray.push(array[hJ][wK])
            i++
        }
        // not sure how to proceed
    }
    return snailArray
}

console.log(snail([[0,1,2,3],[11,12,13,4],[10,15,14,5],[9,8,7,6]]))
console.log(snail([[1,2,3],[11,12,4],[10,13,5],[9,8,7,6]]))