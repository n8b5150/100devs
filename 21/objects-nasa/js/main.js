//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


// const url = 'https://api.nasa.gov/planetary/apod?api_key='
// const api_key = config.NASA_API_KEY

// const getPicture = () => {
//     let date = document.querySelector('input').value
//     fetch(`${url}${api_key}`)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(error))
//     document.querySelector('h2').innerText = data.title
//     document.querySelector('img').src = data.url
//     document.querySelector('h3').innerText = data.explanation
// } 

const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

const fetchNASAData = async () => {
    let date = document.querySelector('input').value
  try {
    const response = await fetch(`${url}${api_key}&date=${date}`)
    const data = await response.json()
    console.log('NASA APOD data', data)
    displayData(data)
  } catch (error) {
    console.log(error)
  }
}

const displayData = data => {
    document.getElementById('title').textContent = data.title
    document.getElementById('date').textContent = data.date
    document.getElementById('picture').src = data.url
    document.getElementById('explanation').textContent = data.explanation
  }

  
document.querySelector('button').addEventListener('click',fetchNASAData)