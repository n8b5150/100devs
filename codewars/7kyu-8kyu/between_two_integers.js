// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

const arrNums = (n1, n2) => {
    let arr = []
    for (let i = n1; i <= n2; i++) {
        arr.push(i)
    }
    return arr
}

console.log(arrNums(1,7))