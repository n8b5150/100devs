function years(humYrs) {
    let catYrs = 15
    let dogYrs = 15
    let moreThanTwoC = 4 * (humYrs - 2) + 9 + catYrs
    let moreThanTwoD = 5 * (humYrs - 2)+ 9 + dogYrs
    return humYrs == 1 ? [humYrs,catYrs,dogYrs] :
        humYrs == 2 ? [humYrs, catYrs+9, dogYrs+9] : [humYrs, moreThanTwoC, moreThanTwoD]
}

console.log(years(1))
console.log(years(10))
console.log(years(7))
console.log(years(2))
console.log(years(24))
console.log(years(3))