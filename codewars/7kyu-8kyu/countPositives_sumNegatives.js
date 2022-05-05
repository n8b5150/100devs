function countPositivesSumNegatives(input) {
    if (!input || input.length == 0) {
        input = []
        console.log('1 '+ input)
        return input
    } else {
        let newArr = [0,0]
        input.forEach( e => {
            (e > 0) ? newArr[0]++ : newArr[1] += e
            console.log(newArr)
        })
        console.log('2 '+ newArr)
        return newArr;
    }
  }

let testData
countPositivesSumNegatives(testData)

testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
countPositivesSumNegatives(testData)

testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
countPositivesSumNegatives(testData)

testData = [0,0]
countPositivesSumNegatives(testData)

testData = []
countPositivesSumNegatives(testData)

testData = [,]
countPositivesSumNegatives(testData)
