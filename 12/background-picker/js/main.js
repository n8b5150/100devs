document.querySelector('#purple').addEventListener('click',bgPurple)
document.querySelector('#green').addEventListener('click',bgGreen)
document.querySelector('#blue').addEventListener('click',bgBlue)
document.querySelector('#grad').addEventListener('click',bgGrad)
document.querySelector('#rad').addEventListener('click',bgRad)
document.querySelector('#rain').addEventListener('click',bgRain)

const cls = ['purple', 'green', 'blue', 'grad', 'rad', 'rain']

function bgPurple() {
    document.querySelector('div').classList.remove(...cls)
    document.querySelector('div').classList.add('purple')
}

function bgGreen() {
    document.querySelector('div').classList.remove(...cls) 
    document.querySelector('div').classList.add('green')
}

function bgBlue() {
    document.querySelector('div').classList.remove(...cls) 
    document.querySelector('div').classList.add('blue')
}

function bgGrad() {
    document.querySelector('div').classList.remove(...cls) 
    document.querySelector('div').classList.add('grad')
}

function bgRad() {
    document.querySelector('div').classList.remove(...cls)
    document.querySelector('div').classList.add('rad')
}

function bgRain() {
    document.querySelector('div').classList.remove(...cls)
    document.querySelector('div').classList.add('rain')
}