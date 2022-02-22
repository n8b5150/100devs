let num = 0

// document.querySelector('#pumpkin').addEventListener('click',num+=0)
// document.querySelector('#dominosPizza').addEventListener('click',num+=3)
// document.querySelector('#zebra').addEventListener('click',num+=9)
// document.querySelector('#cant').addEventListener('click',num-=2)
// document.querySelector('#reset').addEventListener('click',num=0)
document.querySelector('#pumpkin').addEventListener('click',addZero)
document.querySelector('#dominosPizza').addEventListener('click',addThree)
document.querySelector('#zebra').addEventListener('click',addNine)
document.querySelector('#cant').addEventListener('click',subTwo)
document.querySelector('#reset').addEventListener('click',reset)

function addZero() {
    num += 0
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