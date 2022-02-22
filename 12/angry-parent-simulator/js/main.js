document.querySelector('#yell').addEventListener('click',yell)

function yell(){
    const firstName = document.querySelector('#firstName').value.toUpperCase()
    const firstMiddle = document.querySelector('#firstMiddle').value.toUpperCase()
    const lastMiddle = document.querySelector('#lastMiddle').value.toUpperCase()
    const lastName = document.querySelector('#lastName').value.toUpperCase()

    document.querySelector('#placeToYell').innerText = `${firstName} ${firstMiddle} ${lastMiddle} ${lastName} You Done Messed UP!`
}