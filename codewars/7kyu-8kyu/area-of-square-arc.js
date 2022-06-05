// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
// find radius, area of square = r^2
// arcLength * 4 = circumference
// circumference = 2*pi*r
// r = arcLength * 2 / (pi)

function squareArea(arcLength){
    return +Math.pow((arcLength * 2 / Math.PI), 2).toFixed(2)
}

console.log(squareArea(2))
console.log(squareArea(0))
console.log(squareArea(14.05))