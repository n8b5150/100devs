// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

const compare = (arr) => {
    arr[0] < arr[arr.length-1] ? alert('Hi!') :
    arr[0] > arr[arr.length-1] ? alert('Bye!') :
        alert('We close in an hour')
}

compare([0,1])
compare([1,1])
compare([1,0])
