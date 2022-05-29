// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function numberExpander(num){
    let numString = num.toString()
    let expandedArray = []
    for (let i = 0; i < numString.length; i++){
        if (numString[i] != '0')
        expandedArray.push(`${numString[i]}${('0').repeat(numString.length - i - 1)}`)
    }
    return expandedArray.join(' + ')
}

console.log(numberExpander(16020394903405098))
console.log(numberExpander(12))
console.log(numberExpander(42))
console.log(numberExpander(70304))

// best answers
// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");

//                             function expandedForm(num) {
//                                 return String(num)
//                                         .split("")
//                                         .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
//                                         .filter((num) => Number(num) != 0)
//                                         .join(" + ")
//                               }