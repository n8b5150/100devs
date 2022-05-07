// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function readableTime(sec){
    let hh = twoDigits(Math.floor(sec/3600))
    let mm = twoDigits(Math.floor(sec%3600/60))
    let ss = twoDigits(Math.floor(sec%60))
    return `${hh}:${mm}:${ss}`
}

function twoDigits(num){
    if ( num < 10 ) {
        return `0${num}`
    }else return num
}

console.log(readableTime(359999))
console.log(readableTime(8274))