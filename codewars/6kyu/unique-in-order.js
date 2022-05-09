// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

function uniqueInOrder(list){
    if ( !list ) return []
    let uniqueList = [list[0]]
    for (let i = 1, j = 0; i < list.length; i++){
        if ( list[i] != uniqueList[j] ){
            uniqueList.push(list[i])
            j++
        }
    }
    return uniqueList
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) //== ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')) //== ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3])) //== [1,2,3]

// best answer
// var uniqueInOrder=function(iterable){
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
// }