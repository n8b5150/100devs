// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites/Websites 1,000 times.

var websites = []
const loop = (times) => {
    websites = Array(times).fill('codewars')
    return websites
};
//website.push(1000)

console.table(loop(10))