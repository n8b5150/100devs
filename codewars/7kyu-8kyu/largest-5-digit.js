// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net

function largestFive(str) {
    let arr = []
    for ( let i = 0 ; i < str.length-5; i++){
        arr.push(parseInt(str.slice(i,i+5)))
    }
    arr.sort( (a,b) => b-a )
    console.table(arr)
    return arr[0]
}

console.log(largestFive('120998724567863450943802938743503485487262387479823563895619837459083745987345873847562347523948057394870987'))

// best 2 answers

// function solution(digits){
//     let answer = 0;
    
//     for (let i=0; i<digits.length; i++){
//       let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
//       if(Number(number) > answer){       //convert to number and compare against answer
//         answer = Number(number);
//       }
//     }
//     return answer;
//   }

//   function solution(digits){
//     let s = [];
//     for (var i = 0; i < digits.length - 4; i++){
//         s.push(digits.substr(i,5));
//     };
//     return Math.max(...s);
// }