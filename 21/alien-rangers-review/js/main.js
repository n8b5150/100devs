//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tv = ['Arrested Development','Lost','Seinfeld','It\'s Always Sunny in Philadelphia']
tv.forEach( e => console.log(e) )

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const nums = [1,2,3,4,5,6,7,8]
let onlyEvens = arr => arr.filter(e => e % 2 === 0 )
console.table(onlyEvens(nums))



//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
const secondLowHi = (arr) =>{
    let sorted = arr.sort( (a,b) => a-b )
    console.log(arr)
    console.log(sorted)
    console.log(`second lowest: ${sorted[1]} second highest: ${sorted[sorted.length-2]}, sum = ${sorted[1] + sorted[sorted.length-2]}`)
}

const randomArr = (num) => {
    let arr = []
    let digit = 0
    for ( i = 0; i < num; i++ ){
        digit = Math.floor(Math.random() * 100)
        arr.push(digit)
    }
    return arr
}


secondLowHi([5,1,36,2,16,12,21,10])
secondLowHi(randomArr(5))


