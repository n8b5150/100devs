function squareDigits(num){
    let numArr = num.toString().split('').map(Number)
    let sqArr = []
    console.log(numArr)
    numArr.forEach( e => {
        let sq = e*e
        sqArr.push(sq.toString())
    })
    console.log(Number((sqArr.join(''))))
  }


  squareDigits(3124)

  //top answer

  function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }