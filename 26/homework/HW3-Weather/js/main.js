//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// Ron Swanson quotes
// https://github.com/jamesseanwright/https://github.com/jamesseanwright/ron-swanson-quotes#ron-swanson-quotes-api

// National Weather Service - authentication required
// https://www.weather.gov/documentation/services-web-api

// Weather API - signup required
// https://www.weatherapi.com/

// Weather API - local installation required
// https://github.com/robertoduessmann/weather-api

// Open Meteo
// https://open-meteo.com/en/docs
//https://api.open-meteo.com/v1/forecast?latitude=41.48&longitude=-84.18&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,windspeed_10m,winddirection_10m,windgusts_10m
//https://api.open-meteo.com/v1/forecast?latitude=41.64&longitude=-83.61&hourly=temperature_2m,precipitation,windspeed_10m,winddirection_10m
// example output is found in forecast.json for Wauseon/Napoleon area
//current_weather = weather conditions with the attributes: time, temperature, windspeed, winddirection and weathercode

// Open Weather Map - signup required
// https://openweathermap.org/api

document.querySelector('button').addEventListener('click',getFetch)

//button to convert city to lat/long and fill input values


const time = document.getElementById('time')
const temperature = document.getElementById('temperature')
const wind = document.getElementById('wind')
const conditions = document.getElementById('conditions')
//let url = 'https://api.open-meteo.com/v1/forecast?latitude=41.48&longitude=-84.18&hourly=temperature_2m,precipitation,windspeed_10m,winddirection_10m'
//let options = '&timezone=America/Detroit&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max,winddirection_10m_dominant&current_weather=true'
let url = 'https://api.open-meteo.com/v1/forecast?latitude=41.48&longitude=-84.18&timezone=America/Detroit&windspeed_unit=mph&temperature_unit=fahrenheit&current_weather=true'
let weatherData = {}
function getFetch(){
    //get city, or lat/long
    //get options (temp, precip, wind speed/direction)
    //url = url + options
    fetch(url)
        .then(res => res.json())
        .then(data => {
            weatherData = data
            console.log(data)
            displayWeather(data)
        })
        .catch(err => console.log(`error = ${err}`))
}

function displayWeather(arr){
    tempColor(arr)
    windColor(arr)
    time.innerText = arr.current_weather.time.slice(-5)
    temperature.innerText = `${arr.current_weather.temperature}\xB0C`
    wind.innerText = `${windDirection(weatherData)} - ${arr.current_weather.windspeed}mph`
    conditions.innerText = weatherCode(weatherData)
}

function weatherCode(arr){
    const wmo = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Fog',
        48: 'Depositing rime fog',
        51: 'Light drizzle',
        53: 'Moderate drizzle',
        55: 'Dense drizzle',
        56: 'Light freezing drizzle',
        57: 'Moderate freezing drizzle',
        61: 'Slight rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        66: 'Light freezing rain',
        67: 'Heavy freezing rain',
        71: 'Slight snow',
        73: 'Moderate snow',
        75: 'Heavy snow',
        77: 'Snow grains',
        80: 'Slight rain showers',
        81: 'Moderate rain showers',
        82: 'Heavy rain showers',
        85: 'Slight snow showers',
        86: 'Heavy snow showers',
        95: 'Thunderstorms',
        96: 'Thunderstorms with slight hail',
        99: 'Thunderstorms with heavy hail',
    }
    return wmo[arr.current_weather.weathercode]
}

function windDirection(arr){
    let wD = arr.current_weather.winddirection
    switch (true){
        case (wD > 349 || wD < 11.25):
            return 'N'
            break
        case (wD > 326):
            return 'NNW'
            break
        case (wD > 304):
            return 'NW'
            break
        case (wD > 281):
            return 'WNW'
            break
        case (wD > 259):
            return 'W'
            break
        case (wD > 236):
            return 'WSW'
            break
        case (wD > 214):
            return 'SW'
            break
        case (wD > 191):
            return 'SSW'
            break
        case (wD > 169):
            return 'S'
            break
        case (wD > 146):
            return 'SSE'
            break
        case (wD > 124):
            return 'SE'
            break
        case (wD > 101):
            return 'ESE'
            break
        case (wD > 79):
            return 'E'
            break
        case (wD > 56):
            return 'ENE'
            break
        case (wD > 34):
            return 'NE'
            break
        case (wD > 11):
            return 'NNE'
            break
        default:
            return 'oops'
            break
    }
}
// N 348.75 - 11.25
// NNE 11.25 - 33.75
// NE 33.75 - 56.25
// ENE 56.25 - 78.75
// E 78.75 - 101.25
// ESE 101.25 - 123.75
// SE 123.75 - 146.25
// SSE 146.25 - 168.75
// S 168.75 - 191.25
// SSW 191.25 - 213.75
// SW 213.75 - 236.25
// WSW 236.25 - 258.75
// W 258.75 - 281.25
// WNW 281.25 - 303.75
// NW	303.75 - 326.25
// NNW	326.25 - 348.75

function tempColor(arr){
    let f = arr.current_weather.temperature
    f < 0 ? temperature.style.color = 'blue' : 
    f < 32 ? temperature.style.color = 'white' : 
    f < 50 ? temperature.style.color = 'gray' : 
    f < 70 ? temperature.style.color = 'green' : 
    f < 80 ? temperature.style.color = 'yellow' : 
    f < 90 ? temperature.style.color = 'orange' : temperature.style.color = 'red'
}

function windColor(arr){
    let w = arr.current_weather.windspeed 
    w < 3 ? wind.style.color = 'lightgreen' : 
    w < 7 ? wind.style.color = 'green' : 
    w < 12 ? wind.style.color = 'yellowgreen' : 
    w < 20 ? wind.style.color = 'yellow' : 
    w < 30 ? wind.style.color = 'orange' : wind.style.color = 'red'
}