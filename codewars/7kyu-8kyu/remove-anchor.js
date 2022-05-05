// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// const removeAnchor = str => str.includes('#') ? str.split('#')[0] : str
const removeAnchor = str => str.split('#')[0]

console.log(removeAnchor("www.codewars.com#about"), '--> "www.codewars.com"')
console.log(removeAnchor("www.codewars.com?page=1"), '-->"www.codewars.com?page=1"')

//best answer
//  function removeUrlAnchor(url){
//     return url.split('#')[0];
//  }