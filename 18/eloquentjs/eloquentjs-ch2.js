// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing .length after it.

// let abc = "abc";
// console.log(abc.length);
// // → 3
// Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.

for ( let octoThorp = '#'; octoThorp.length <= 8; octoThorp+='#'){
    console.log(octoThorp)
}


// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

for ( let num = 1; num <= 100; num++){
    if ( num % 15 ===0 ){
        console.log(`FizzBuzz ${num}`)
    }else if ( num % 3 === 0 ){
        console.log(`Fizz ${num}`)
    }else if ( num % 5 === 0 ){
        console.log(`Buzz ${num}`)
    }else console.log(num)
}



// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.


const chessBoard = (size) => {
    let pattern = ''
    for ( let i = 0; i < size; i++){
        pattern += '-#'
    }
    for ( let i = 0; i < size; i++){
        console.log(pattern.slice(0, size))
        i++
        if (i < size) {
        console.log(pattern.slice(1, size+1))
        }
    }
}

chessBoard(7)
chessBoard(2)
chessBoard(3)
chessBoard(10)


//Solutions from the book
// https://eloquentjavascript.net/code/#2.2
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }


// https://eloquentjavascript.net/code/#2.3

let board = "";
const chessBoardSolution = (size = 8) => {
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if ((x + y) % 2 == 0) {
            board += "X";
          } else {
            board += "#";
          }
        }
        board += "\n";
      }
    console.log(board);
}

chessBoardSolution()
chessBoardSolution(2)
chessBoardSolution(10)
chessBoardSolution(5)