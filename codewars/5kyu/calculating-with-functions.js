// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// const calculator = {
//     'zero' : 0,
//     'one' : 1,
//     'two' : 2,
//     'three' : 3,
//     'four' : 4,
//     'five' : 5,
//     'six' : 6,
//     'seven' : 7,
//     'eight': 8,
//     'nine': 9,
//     'plus': '+',
//     'minus' : '-',
//     'dividedBy' : '/',
//     'times' : '*',
// }

const zero = n => calculator('0' + (n||''))
const one = n => '1' + (n||'')
const two = n => '2' + (n||'')
const three = n => calculator('3' + (n||''))
const four = n => '4' + (n||'')
const five = n => '5' + (n||'')
const six = n => '6' + (n||'')
const seven = n => '7' + (n||'')
const eight = n => calculator('8' + (n||''))
const nine = n => '9' + (n||'')
const plus = n => '+' + (n||'')
const minus = n => '-' + (n||'')
const times = n => '*' + (n||'')
const dividedBy = n => calculator('/' + (n||''))

function calculator(str){
    if (str.length < 3) {
        return str
    }
    let result = 0
    let n1 = Number(str[0])
    let n2 = Number(str[2])
    let op = str[1]
    if (op === '+'){
        result = Math.floor(n1 + n2)
    }else if ( op === '-'){
        result = Math.floor(n1 + n2)
    }else if ( op === '*'){
        result = Math.floor(n1 * n2)
    }else if ( op === '/'){
        result = Math.floor(n1 / n2)
    }
    return result
}

console.log(eight(dividedBy(three())))

// best answer
// var n = function(digit) {
//     return function(op) {
//       return op ? op(digit) : digit;
//     }
//   };
//   var zero = n(0);
//   var one = n(1);
//   var two = n(2);
//   var three = n(3);
//   var four = n(4);
//   var five = n(5);
//   var six = n(6);
//   var seven = n(7);
//   var eight = n(8);
//   var nine = n(9);
  
//   function plus(r) { return function(l) { return l + r; }; }
//   function minus(r) { return function(l) { return l - r; }; }
//   function times(r) { return function(l) { return l * r; }; }
//   function dividedBy(r) { return function(l) { return l / r; }; }