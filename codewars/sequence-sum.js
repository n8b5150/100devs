// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// // Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

function sumSequence(begin,end,step){
    let sum = 0
    if ( begin > end) return 0
    else if ( begin === end ) return begin
    else {
        for ( begin ; begin <= end ; begin+=step ) {
            sum+=begin
        }
        return sum
    }
}

console.log(sumSequence(2,2,2), 2)
console.log(sumSequence(2,6,2), 12)
console.log(sumSequence(1,5,1), 15)
console.log(sumSequence(1,5,3), 5)
console.log(sumSequence(7,5,3), 0)

// using recursion
// const sequenceSum = (begin, end, step) => {
//     if (begin > end) {
//         return 0;
//       }
//       return begin + sequenceSum(begin + step, end, step);
//     };