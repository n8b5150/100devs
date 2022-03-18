// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

const hiBye = (arr) => {
    let arrCopy = []
    arr.forEach( e => {
        if ( typeof e !== 'number') {
            alert(`${e} is not a number. Attempting comparison...`)
            arrCopy.push(Number(e))
        } else arrCopy = arr
    })
    console.log(arrCopy)
    if (arrCopy[0] > arrCopy[arrCopy.length-1]) alert( "Bye")
    else if (arrCopy[0] < arrCopy[arrCopy.length-1]) alert( "Hi")
    else if (arrCopy[0] === arrCopy[arrCopy.length-1]) alert( "We close in an hour")
    else alert('invalid input')
}
hiBye([10,4])
hiBye([5,6])
hiBye([4,4])
hiBye([10,20,30,40])
hiBye(['uo',null,'yolo'])