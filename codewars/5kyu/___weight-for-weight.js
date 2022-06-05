// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes
// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
// For C: The result is freed.

// works in vscode, but not in the kata

function weightForWeight(weights){
    weights = weights.split(' ')
    return weights.sort().sort((a,b) => {
            if (sumDigits(a) == sumDigits(b)){
                if (a[0] > b[0]) return 1
                else if (a[0] > b[0]) return -1
                else return 0 
            }else return sumDigits(a) - sumDigits(b)
        })
        .join(' ')
}

function sumDigits(num){
    return num.split('')
        .filter(a => a.charCodeAt(0) > 47 && a.charCodeAt(0) < 58)
        .reduce((acc,curr) => +acc + +curr, 0)
}


console.log(weightForWeight("56 65 74 100 99 68 86 180 90")) //"100 180 90 56 65 74 68 86 99"
console.log(weightForWeight("103 123 4444 99 2000")) //"2000 103 123 4444 99"
console.log(weightForWeight("2000 10003 1234000 44444444 9999 11 11 22 123")) //"11 11 2000 10003 22 123 1234000 44444444 9999"
console.log(weightForWeight("319471 135 369059 100 212994 143 85777 168 463057 166 53956 179 184816 69 125558 23 399178 111 341459 51 49")) //"100 111 23 51 143 135 166 49 168 69 179 319471 463057 125558 341459 212994 184816 53956 369059 85777 399178"
console.log(weightForWeight("432723 48 11252 65 105997 183 241538 34 451281 157 499208 105 266229 47 283965 22 340111 190 32174 193 29")) //"22 105 34 190 340111 11252 29 47 65 183 48 157 193 32174 432723 451281 241538 266229 105997 499208 283965"
//console.log(sumDigits(99))