// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals



// I II III IV VI VII VIII IX
// X XI XII XIII XIV XV XVII XVIII XIX
// XX XXI XXII XXIII XXIV XXV XXVI XXVII XXVIII XXIX
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function romanNumeral(num){
    const conversionTable = [
        {'0' : '', '1' : 'I', '2' : 'II', '3' : 'III', '4' : 'IV', '5' : 'V', '6' : 'VI', '7' : 'VII', '8' : 'VIII', '9' : 'IX'},
        {'0' : '', '1' : 'X', '2' : 'XX', '3' : 'XXX', '4' : 'XL', '5' : 'L', '6' : 'LX', '7' : 'LXX', '8' : 'LXXX', '9' : 'XC'},
        {'0' : '', '1' : 'C', '2' : 'CC', '3' : 'CCC', '4' : 'CD', '5' : 'D', '6' : 'DC', '7' : 'DCC', '8' : 'DCCC', '9' : 'CM'},
        {'0' : '', '1' : 'M', '2' : 'MM', '3' : 'MMM'}
    ]
    return String(num).split('').reverse().map((e,i) => conversionTable[i][e]).reverse().join('')
}

console.log(romanNumeral(23))
console.log(romanNumeral(1000))
console.log(romanNumeral(2008))
console.log(romanNumeral(1666))

// best answers
// function solution(number){
//     // convert the number to a roman numeral
//   var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  
//   var ans = '';
//   while(number>0){
//       for(a in roman){ 
//           if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
              
//       }
//   }
//   return ans;
//   }

//   function solution(number){
//     return [
//       { threshold: 1000, char: 'M'},
//       { threshold: 900,  char: 'CM'},
//       { threshold: 500,  char: 'D'},
//       { threshold: 400,  char: 'CD'},
//       { threshold: 100,  char: 'C'},
//       { threshold: 90,   char: 'XC'},
//       { threshold: 50,   char: 'L'},
//       { threshold: 40,   char: 'XL'},
//       { threshold: 10,   char: 'X'},
//       { threshold: 9,    char: 'IX'},
//       { threshold: 5,    char: 'V'},
//       { threshold: 4,    char: 'IV'},
//       { threshold: 1,    char: 'I'}
//     ].reduce(function(prev, curr, idx, arr)
//     {
//       while(number >= curr.threshold)
//       {
//         prev += curr.char;
//         number -= curr.threshold;
//       }
      
//       return prev;
//     }, '');
//   }

//   function solution(number)
//   {
//     var result   = '',
//         decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
//         roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
//     decimals.map(function (value, index) {
//       while (number >= value) {
//         result += roman[index];
//         number -= value;
//       }
//     });
    
//     return result;
//   }