//Write your pseduo code first! 

document.querySelector('#convert').addEventListener('click',convert)


function convert() {
    let temp = document.querySelector('#temperature').value
    let answer
    if (temp == '') {
        alert("Please enter a temperature!")
    }
    else if (document.querySelector('#celsRadio').checked === true) {
        answer = 1.8 * temp + 32
        answer = answer.toFixed(2)
        document.querySelector("#answer").innerText = answer + " °F"
    }else if (document.querySelector('#fahrRadio').checked === true) {
        answer = 5 / 9 * (temp - 32)
        answer = answer.toFixed(2)
        document.querySelector("#answer").innerText = answer + " °C"
    }else {
        alert("Please select a conversion option!")
    }
    
}

// Fahrenheit	°F = 1.8°C + 32°
// Celsius	°C =5/9(°F-32°)