function howMuchILoveYou(nbPetals) {
    for ( nbPetals ; nbPetals > 6; nbPetals-=6 ){
      nbPetals = nbPetals
      console.log(nbPetals)
    }
    switch (nbPetals) {
        case 1:
        return 'I love you'
        break
        case 2:
        return 'a little'
        break
        case 3:
        return 'a lot'
        break
        case 4:
        return 'passionately'
        break
        case 5:
        return 'madly'
        break
        case 6:
        return 'not at all'
        break
    }
}

console.log(howMuchILoveYou(1))
console.log(howMuchILoveYou(8))
console.log(howMuchILoveYou(15))
console.log(howMuchILoveYou(3))
console.log(howMuchILoveYou(6))

//codewars top answer

// const phrases = [
//   'I love you',
//   'a little',
//   'a lot',
//   'passionately',
//   'madly',
//   'not at all',
// ]

// function howMuchILoveYou(n) {
//    return phrases[(n - 1) % phrases.length]  //remainder of n-1/number of phrases
// }