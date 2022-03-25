// function firstNonConsecutive (arr) {
//     let first 
//     if ( !arr || arr.length < 1 ){
//         return null
//     } 
//     //let sum = arr.reduce( (acc,c) => acc + c, 0)
//     let diff = arr[arr.length-1] - arr[0]
//     console.log(`diff = ${diff}, length = ${arr.length}`)
//     if ( diff == arr.length-1 ) {
//         return null
//     } else {
//         for ( let i = 0 ; i < arr.length-1 ; i++ ){
//             if ( arr[i] + 1 != arr[i+1] ) {
//                 first = arr[i+1]
//                 return first
//             }
//         }
//     }
// }
        
          
  
  
  //top answer from codewars

  function firstNonConsecutive(arr) {
    if (!arr) return null //added for empty array or no argument passed
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  }

  console.log(firstNonConsecutive())
  console.log(firstNonConsecutive([1,2,3,4,6,7,8,9]))
  console.log(firstNonConsecutive([-9,-8,-7,-6,-5,-4,-3,-2,-1,0]))
