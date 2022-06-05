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
//                 [0:0-2   0-2:3  3:3-1 3-1:0 ]
//[0:0-3   array[0][0 to w-1]       left
// 1-3:3   array[1 to h-1][w-1]     down
// 3:2-0   array[h-1][w-2 to 0]     right
// 2-1:0   array[h-2 to h-1][0]     up
// 1:1-2   array[1][1 to w-2]       left
// 2:2-1]  array[2][w-2 to 1]       right


// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

// function snail(array){
//     let snailArray = []
//     let w = array[0].length
//     let h = array.length
//     let i = 0, wK = 0, hJ = 0
//     console.log('w = ' + w + ' h = ' + h + ' w*h = ' + w*h)
//     //for (let i = 0, wK = 0, hJ = 0; i < w*h; i++){
//     while (i < w*h - 1){
//         // first row up
//         for (wK; wK <= w - wK; wK++){
//             console.log('1: ' + 'hJ = ' + hJ + ' wK = ' + wK + ' i = ' + i)
//             //console.log('array = ' + array[hJ][wK])
//             snailArray.push(array[hJ][wK])
//             i++
//             if (i === (w*h - 1)) break
//         }
//         //last column down
//         for (hJ; hJ <= h - hJ; hJ++){
//             console.log('2: ' + 'hJ = ' + hJ + ' wK = ' + wK + ' i = ' + i)
//             snailArray.push(array[hJ][wK])
//             i++
//             if (i === (w*h - 1)) break
//         }
//         //last row right
//         for (wK; wK >= w - wK - 1; wK-=1){
//             console.log('3: ' + 'hJ = ' + hJ + ' wK = ' + wK + ' i = ' + i)
//             snailArray.push(array[hJ][wK])
//             i++
//             if (i === (w*h - 1)) break
//         }
//         //last column up
//         for (hJ; hJ >= h - hJ - 1; hJ-=1){
//             console.log('4: ' + 'hJ = ' + hJ + ' wK = ' + wK + ' i = ' + i)
//             snailArray.push(array[hJ][wK])
//             i++
//             if (i === (w*h - 1)) break 
//         }
//         //return i,hJ,wK,snailArray
//     }
//     return snailArray
// }

function snail(array){
    if (array.length < 1 || array[0].length < 1) return []
    let snailArray = []
    let w = array[0].length
    let h = array.length
    while (array.length > 0){
        
        // top row left
        snailArray = snailArray.concat(array.shift())
        h--
        if (h === 0) break
        // right column down
        for (let i = 0; i < h; i++){
            snailArray = snailArray.concat(array[i].pop())
        }
        w--
        
        // bottom row right
        array[h - 1] = array[h - 1].reverse()
        snailArray= snailArray.concat(array.pop())
        h--

        // first column up
        for (let i = h - 1; i >= 0; i-=1){
            snailArray = snailArray.concat(array[i].shift())
        }
        w--
    }
    return snailArray
}

console.log(snail([[0,1,2,3],[11,12,13,4],[10,15,14,5],[9,8,7,6]]))
console.log(snail([[1,2,3],[10,11,4],[9,12,5],[8,7,6]]))

// best answer
// snail = function(array) {
//     var result;
//     while (array.length) {
//       // Steal the first row.
//       result = (result ? result.concat(array.shift()) : array.shift());
//       // Steal the right items.
//       for (var i = 0; i < array.length; i++)
//         result.push(array[i].pop());
//       // Steal the bottom row.
//       result = result.concat((array.pop() || []).reverse());
//       // Steal the left items.
//       for (var i = array.length - 1; i >= 0; i--)
//         result.push(array[i].shift());
//     }
//     return result;
//  }

// function snail(array) {
//     var vector = [];
//     while (array.length) {
//       vector.push(...array.shift());
//       array.map(row => vector.push(row.pop()));
//       array.reverse().map(row => row.reverse());
//     }
//     return vector;
// }

// snail = function(array) {
//     var size = array.length;
    
//     if (size == 0)
//       return [];
  
//     if (size == 1)
//       return array[0];
    
//     var top    = array[0].slice(0, -1);
//     var right  = array.slice(0, -1).map(a => a[size - 1]);
//     var bottom = array[size -1].slice(1).reverse();
//     var left   = array.slice(1).map(a => a[0]).reverse();
//     var inner  = array.slice(1, -1).map(a => a.slice(1, -1));
  
//     return [].concat(top, right, bottom, left, snail(inner));
// }