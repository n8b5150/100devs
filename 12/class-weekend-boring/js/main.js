document.querySelector('#check').addEventListener('click',whatDay)



function whatDay() {
    const day = document.querySelector('#day').value.toLowerCase()
    if (day === 'tuesday' || day === 'thursday') {
        document.querySelector('h2').innerText = 'Yay! Class Day!!'
    }else if (day === 'monday' || day === 'wednesday') {
        document.querySelector('h2').innerText = 'bbbboooooorrrrrrrrrrrinnnngggggggg'
    }else if (day === 'friday' || day === 'saturday' || day === 'sunday') {
        document.querySelector('h2').innerText = 'Weekend!'
    }else {
        document.querySelector('h2').innerText = 'You sure done messed up. Try again.'
    }
}