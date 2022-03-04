//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
function ageChecker(age){
    if (age<16) {return "cannot drive"}
    else if(age<18){return "can't hate from outside the club, because they can't even get in"}
    else if(age<21){return "can not drink"}
    else if(age<25){return "can not rent cars affordably"}
    else if(age<30){return "can not rent fancy cars affordably"}
    else return "there is nothing left to look forward too"
}
console.log(ageChecker(15))
console.log(ageChecker(17))
console.log(ageChecker(19))
console.log(ageChecker(22))
console.log(ageChecker(26))
console.log(ageChecker(31))



//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector('h1').addEventListener('click',putInto)
function putInto(){
    let age = Number(document.querySelector('input').value)
    document.querySelector('p').innerText = ageChecker(age)
}

