//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click', getFetch)

const name = document.getElementById('name')
const image = document.getElementById('image')
const descr = document.getElementById('descr')
const date = document.getElementById('date')

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

function getFetch(){
    fetch(url + '&date=' + date.value)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            name.innerText = data.title
            image.src = data.url
            descr.innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}