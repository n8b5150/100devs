// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function hashtagGen(str){
    if (str.length < 1) {
        return false
    }
    let hashArray = str.trim().split(' ')
            .filter(word => word.length > 0)
            .map(word => word.trim())
            .map(word => word[0].toUpperCase() + word.slice(1))
    str = hashArray.join('')
    return str.length > 139 || str.length < 1 ? false : '#' + str
}


console.log(hashtagGen(" Hello there thanks for trying my Kata"))//  =>  "#HelloThereThanksForTryingMyKata"
console.log(hashtagGen("    Hello     World   "                ))//  =>  "#HelloWorld"
console.log(hashtagGen(""                                      ))//  =>  false