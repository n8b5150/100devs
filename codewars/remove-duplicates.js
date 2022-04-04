// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];



let newArr = []
data.reduce( (prev, curr) => {
      if (curr in prev) {
            prev[curr]++
      } else {
            prev[curr] = 1
            newArr.push(curr)
      }
      return prev
    }, {})
console.log(newArr)

// best answer
function distinct(a) {
    return [...new Set(a)];
  }