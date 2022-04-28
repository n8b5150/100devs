// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//array from spread function regex test?

const capitals = str => {
    let indexes = []
    for ( let i = 0; i < str.length ; i++ ){
        if ( /[A-Z]/.test(str[i]) === true )
        indexes.push(i)
    }
    return indexes
}

console.log( capitals('CodEWaRs'), [0,3,4,6] )

//best answer without regex
// var capitals = function (word) {
//     var caps = [];
//     for(var i = 0; i < word.length; i++) {
//       if(word[i].toUpperCase() == word[i]) caps.push(i);
//     }
//     return caps;
//   };