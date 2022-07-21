// DESCRIPTION:
// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Courtesy of rosettacode.org

function solution (roman) {
    const numerals = { 'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000}
    const romanArr = roman.split('').reverse('')
    let total = 0
    while (romanArr[0] == 'I'){
        total+=numerals['I']
        romanArr.shift()
    } 
    while (romanArr[0] == 'V'){
        total+=numerals['V']
        romanArr.shift()
    } 
    while (romanArr[0] == 'I'){
        total-=numerals['I']
        romanArr.shift()
    } 
    while (romanArr[0] == 'X'){
        total+=numerals['X']
        romanArr.shift()
    } 
    while (romanArr[0] == 'I'){
        total-=numerals['I']
        romanArr.shift()
    } 
    while (romanArr[0] == 'X'){
        total+=numerals['X']
        romanArr.shift()
    }
    while (romanArr[0] == 'L'){
        total+=numerals['L']
        romanArr.shift()
    } 
    while (romanArr[0] == 'X'){
        total-=numerals['X']
        romanArr.shift()
    } 
    while (romanArr[0] == 'C'){
        total+=numerals['C']
        romanArr.shift()
    } 
    while (romanArr[0] == 'X'){
        total-=numerals['X']
        romanArr.shift()
    }
    while (romanArr[0] == 'C'){
        total+=numerals['C']
        romanArr.shift()
    }
    while (romanArr[0] == 'D'){
        total+=numerals['D']
        romanArr.shift()
    } 
    while (romanArr[0] == 'C'){
        total-=numerals['C']
        romanArr.shift()
    } 
    while (romanArr[0] == 'M'){
        total+=numerals['M']
        romanArr.shift()
    }
    while (romanArr[0] == 'C'){
        total-=numerals['C']
        romanArr.shift()
    }
    while (romanArr[0] == 'M'){
        total+=numerals['M']
        romanArr.shift()
    }
    return total
}

  // test cases
// console.log(solution('XXI'), 21);
// console.log(solution('I'), 1);
// console.log(solution('IV'), 4);
// console.log(solution('MMVIII'), 2008);
// console.log(solution('MDCLXVI'), 1666);
// console.log(solution('MCMXC'), 1990);
// console.log(solution('MMMCMXCIX'), 3999);
// console.log(solution('M'), 1000);
// console.log(solution('C'), 100);
// console.log(solution('D'), 500);
console.log(solution('MMMDCCCXCV'), 3895);
console.log(solution('LXIX'), 69);


// that was a mess, here's a real solution
// function solution(roman)
// {
//   var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
//   var numbers = roman.split('');
//   var sum = 0, i;

//   for(i = 0; i < numbers.length; i++)
//   {
//     if(data[numbers[i]] < data[numbers[i+1]])
//     {
//       sum += data[numbers[i+1]] - data[numbers[i]];
//       i++;
//     }
//     else
//     {
//       sum += data[numbers[i]];
//     }
//   }
  
//   return sum;
// }