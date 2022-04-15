// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Triangle inequality theorem
// Any side of a triangle must be shorter than the other two sides added together.
// When the three sides are a, b and c, we can write:

// a < b + c
// b < a + c
// c < a + b

function triangle(a, b, c){
    return ( a < b + c && b < a + c && c < a + b )
}

console.log(triangle(2,2,3))
console.log(triangle(7,5,10))
console.log(triangle(1,222,3))