//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


const url = `https://api.nasa.gov/planetary/apod?api_key=`
const api_key = config.API_KEY
const getDate = (date='2022-01-10') => {
    if (document.querySelector('input').value.length > 2){
        date = document.querySelector('input').value
    }
    console.log(`Date selected: ${date}`)
    return date
}

const getFetch = () => {
    date = getDate()
    fetch(`${url}${api_key}&date=${date}`)
        .then(response => response.json())
        .then(data => {
            console.table(data)
            if (data.media_type == 'image'){
                document.querySelector('h2').innerText = data.title
                document.querySelector('img').src = data.url
                document.querySelector('h3').innerText = data.explanation
            }else if (data.media_type == 'video'){
                document.querySelector('h2').innerText = data.title
                document.querySelector('iframe').src = data.url
                document.querySelector('h3').innerText = data.explanation
            }
        })
        .catch(err => console.log(`error: ${err}`))
}

document.querySelector('#submit').addEventListener('click',getFetch)