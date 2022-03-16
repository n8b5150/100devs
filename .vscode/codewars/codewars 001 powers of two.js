//powers of 2
//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//my solution

function powersOfTwo(n){
    let prod = 1
    let prodArray = [1]
    if (n === 0) {
        return prodArray
      } else {
        for (let i = 0; i < n; i++) {
        prodArray.push(prod *= 2)
        }
        return prodArray
      }
  }

  console.log(powersOfTwo(0))
  console.log(powersOfTwo(2))
  console.log(powersOfTwo(8))

  //other user solutions

//   function powersOfTwo(n){
//     var result = [];
//     for (var i = 0; i <= n; i++) {
//       result.push(Math.pow(2, i));
//     }
//     return result;
//   }

// function powersOfTwo(n) {
//     return Array.from({length: n + 1}, (v, k) => 2 ** k);
//   }