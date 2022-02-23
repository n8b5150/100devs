//Write your pseduo code first! 

//listen for click
document.querySelector('#calcCels').addEventListener('click',calcCels)
document.querySelector('#calcFahr').addEventListener('click',calcFahr)

function calcCels() {
    //get temperature (temp*9/5) + 32
    let tempC = document.querySelector('#cels').value
    //do maffs
    let ansF = (tempC * 9 / 5) + 32
    ansF = ansF.toFixed(2)
    //display result
    document.querySelector('#result').innerText = ansF
    console.log(ansF)
}

function calcFahr() {
    //get temperature (temp-32)*5/9
    let tempF = document.querySelector('#fahr').value
    //do maffs
    let ansC = (tempF - 32) * 5 / 9
    ansC = ansC.toFixed(2)
    //display result
    document.querySelector('#result').innerText = ansC
    console.log(ansC)
}