//Create an array of movie titles. Loop through the array and each element to the h2.
let movieTitles = ['The Big Lebowski', 'Airplane', 'The Naked Gun']
movieTitles.forEach( (e) => document.querySelector('h2').innerText += `${e} : ` )

//Create an array of numbers. Loop through the array add three to each number and replace the old number.
let numArr = [1,2,3,4,5,6,7]
numArr.forEach( (e,i) =>{
    e+=3
    numArr[i] = e
})
console.log(numArr)

//Find the average of all the numbers from question three
let sum = 0, avg = 0
numArr.forEach( (e) => sum+=e )
avg = sum/numArr.length
console.log(`sum = ${sum} avg = ${avg}`)