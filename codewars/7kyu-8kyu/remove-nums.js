const removeNums = str => str.split('').filter(e => !/[0-9]/.test(e)).join('')

console.log(removeNums('hell0 i2m fr0m the fu7ure'))
