function array(arr){
    arr = arr.split(',')
    if (!arr || arr.length < 3 ) {
        return null
    }
    else {
        arr.pop()
        arr.shift()
        return arr.join(' ')
    }
  }

console.log(array('1,2,3'))
console.log(array('1,2'))
console.log(array('3'))
console.log(array(''))
console.log(array('1,2,3,4,5,6'))
console.log(array('a,b,c'))



  //best answer - input and output is a string, not an array
  //input comma separated '1,2,4,6'
  //output space separated '2 4'

function array1(arr){
    return arr.split(",").slice(1,-1).join(" ") || null
  }

console.log(array1('1,2,3'))
console.log(array1('1,2'))
console.log(array1('3'))
console.log(array1(''))
console.log(array1('1,2,3,4,5,6'))
console.log(array1('a,b,c'))