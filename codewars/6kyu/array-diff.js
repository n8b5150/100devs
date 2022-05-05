// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


function arrayDiff(arr1,arr2){
    for ( let i = 0; i < arr2.length; i++){
        arr1 = arr1.filter( e => e != arr2[i])
    }
    return arr1
}

console.log(arrayDiff([1,2],[1]),' == [2]')
console.log(arrayDiff([1,2,2,2,3],[2]),' == [1,3]')
console.log(arrayDiff([1,2,2,2,3],[1,2]),' == [3]')
console.log(arrayDiff([3,2,2,2,1],[3,2]),' == [1]')
console.log(arrayDiff([3,2,2,2,1],[3]),' == [1,2,2,2]')
console.log(arrayDiff([],[1,2]),' == []')

// best answers

// function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
// }

// function array_diff(a, b) {
//     return a.filter(function(x) { return b.indexOf(x) == -1; });
// }

// function array_diff(a, b) {
//     b = new Set(b)
//     return a.filter(v => !b.has(v))
// }