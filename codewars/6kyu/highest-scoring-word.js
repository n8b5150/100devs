// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function scoreWord(str){
    let highestScore = 0
    let highestWord = ''
    str.split(' ').forEach(word => {
        let score = 0
        for (let i = 0; i < word.length; i++){
            if (/[a-z]/.test(word[i]) === true){
                score+= word.charCodeAt(i) - 96
                //console.log(score)
            }
        }
        if (score > highestScore){
            //console.log('Score ' + score)
            //console.log('Highest ' + highestScore)
            highestScore = score
            highestWord = word
            //console.log(highestWord)
        }
    })
    return highestWord
}

console.log(scoreWord('here is a sentence of words'))
console.log(scoreWord('man i need a taxi up to ubud'))//, 'taxi');
console.log(scoreWord('what time are we climbing up the volcano'))//, 'volcano'); 
console.log(scoreWord('take me to semynak'))//, 'semynak');   
console.log(scoreWord('aa b'))//, 'aa');
console.log(scoreWord('b aa'))//, 'b');
console.log(scoreWord('bb d'))//, 'bb');
console.log(scoreWord('d bb'))//, 'd');
console.log(scoreWord('aaa b'))//, 'aaa');