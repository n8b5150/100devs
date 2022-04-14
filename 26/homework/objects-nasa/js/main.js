//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click', getFetch)

const container = document.getElementById('container')
const title = document.getElementById('title')
const image = document.getElementById('image')
const video = document.getElementById('video')
const descr = document.getElementById('descr')
const date = document.getElementById('date')

const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`

function getFetch(){
    fetch(url + '&date=' + date.value)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.media_type == 'image' ? displayImage(data) :
            data.media_type == 'video' ? displayVideo(data) : otherType(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

function displayImage(arr){
    video.style.display = 'none'
    image.style.display = 'inline-block'
    title.innerText = arr.title
    image.src = arr.url
    descr.innerText = arr.explanation
}
function displayVideo(arr){
    image.style.display = 'none'
    video.style.display = 'inline-block'
    title.innerText = arr.title
    video.src = arr.url
    descr.innerText = arr.explanation
}
function otherType(arr){
    video.style.display = 'none'
    image.style.display = 'none'
    title.innerText = ''
    descr.innerText = arr.msg
}
