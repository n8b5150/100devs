//Create an array of movies with at least three movies.
let movieList = ['The Big Lebowski', 'The Matrix', 'Batman']

//Using the array from above, store the first movie in a variable
let firstMovie = movieList[0]

//Get the length of the original array and store it in a new variable
let movieListLength = movieList.length

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastMovie = movieList[movieList.length-1]

console.log(firstMovie)
console.log(lastMovie)
console.log(movieListLength)