// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


// bottom floor is (n*2)-1 spaces wide
// number of '*' = (n*2)-1 - 2f, starting with f=0 for bottom floor
// number of ' ' = (2f)
// loop => f = 0; f < n; f++

function tower(n){
    let width = (n*2) - 1
    let tower = []
    for (let f = n - 1; f >= 0; f-=1){
        tower.push(`${' '.repeat(f)}${'*'.repeat(width - 2*f)}${' '.repeat(f)}`)
    }
    return tower
}

console.log(tower(1))
console.log(tower(3))
console.log(tower(6))
console.log(tower(9))