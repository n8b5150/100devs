let num = 0

document.querySelector('#pumpkin').addEventListener('click',addOne)
document.querySelector('#dominosPizza').addEventListener('click',addThree)
document.querySelector('#zebra').addEventListener('click',addNine)
document.querySelector('#cant').addEventListener('click',subTwo)
document.querySelector('#reset').addEventListener('click',reset)

function addOne() {
    num += 1
    document.querySelector('#placeToPutResult').innerText = num
}
function addThree() {
    num += 3
    document.querySelector('#placeToPutResult').innerText = num
}
function addNine() {
    num += 9
    document.querySelector('#placeToPutResult').innerText = num
}
function subTwo() {
    num -= 2
    document.querySelector('#placeToPutResult').innerText = num
}
function reset() {
    num = 0
    document.querySelector('#placeToPutResult').innerText = num
}