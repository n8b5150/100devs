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

// needed to use a.localCompare(b)

function weightForWeight(weights){
    weights = weights.split(' ')
    weights = weights.sort((a,b) => a[0] - b[0])
    console.log(weights)
    weights = weights.sort((a,b) => {
            if (sumDigits(a) == sumDigits(b)){
                return a.localeCompare(b) 
            }else return sumDigits(a) - sumDigits(b)
        })
    return weights.join(' ')
}

function sumDigits(num){
    return num.split('')
        .map(Number)
        .reduce((acc,curr) => +acc + +curr, 0)
}


//console.log(weightForWeight("56 65 74 100 99 68 86 180 90")) //"100 180 90 56 65 74 68 86 99"

//console.log(weightForWeight("103 123 4444 99 2000")) //"2000 103 123 4444 99"

//console.log(weightForWeight("2000 10003 1234000 44444444 9999 11 11 22 123")) //"11 11 2000 10003 22 123 1234000 44444444 9999"

console.log(weightForWeight("100 13 50 32 106 128 166 58 401413 177 159 199 25823 195034 227408 314739 152586 395741 445457 435776 395278")) //"100 13 32 50 106 128 166 401413 58 159 177 199 25823 195034 227408 152586 314739 395741 445457 435776 395278"

console.log(weightForWeight("130 142 61110 73 109 173 183 77 176 77 78 97 401761 466104 106666 62846 77921 103796 299224 157755 355889")) //"130 142 61110 109 73 173 183 176 77 77 78 97 401761 466104 106666 103796 62846 77921 299224 157755 355889"

//console.log(weightForWeight("1 2 200 4 4 6 6 7 7 27 18 81 9 72 91 425 31064 7920 67407 96488 34608557 71899703")) //"1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703"
//console.log(sumDigits(99))

// best answer

// function orderWeight(strng) {
//     const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
//      function comp(a,b){
//        let sumA = sum(a);
//        let sumB = sum(b);
//        return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
//       };
//     return strng.split(' ').sort(comp).join(' ');
//    }