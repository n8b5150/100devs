//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evenNums(arr){
    let evens = []
    arr.forEach( e => {
        if (e%2 === 0) {
            evens.push(e)
        }
    })
    console.log(evens)
}

evenNums([1,2,4,3,5,6,7,8,9,11,113,56])