//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click',snack)
function snack(){
    document.querySelector('#stops').innerText = ''
    let stop = Number(document.querySelector('input').value)
    for ( let i=0; i<stop; i++)
    document.querySelector('#stops').innerText += ' Stawhp!! '
}