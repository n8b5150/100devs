// fetchPromise example

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

// console.log(fetchPromise)

// fetchPromise.then( response => {
//     console.log(`Received response: ${response.status}`)
// })

// console.log('Started request...')

//---------------------
// chaining promises

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

// fetchPromise.then( response => {
//     const jsonPromise = response.json()
//     jsonPromise.then( json => {
//         console.log(json[0].name)
//     })
// })

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

// fetchPromise
//     .then( response => {
//         return response.json()
//     })
//     .then( json => {
//         console.log(json[0].name)
//     })

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

// fetchPromise
//     .then( response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`)
//         }
//         return response.json()
//     })
//     .then( json => {
//         console.log(json[0].name)
//     })

//----------------------
//catching errors

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

// fetchPromise
//     .then( response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`)
//         }
//         return response.json()
//     })
//     .then( json => {
//         console.log(json[0].name)
//     })
//     .catch( error => {
//         console.error(`Could not get products: ${error}`)
//     })


//-------------------
// Combining Multiple Promises

// Promise.all
// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found')
// //const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
// const fetchPromise3 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//     .then( responses => {
//         for (const response of responses) {
//             console.log(`${response.url}: ${response.status}`)
//         }
//     })
//     .catch( error => {
//         console.error(`Failed to fetch: ${error}`)
//     })

// Promise.any
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found')
//const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
const fetchPromise3 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then( response => {
        console.log(`${response.url}: ${response.status}`)
    })
    .catch( error => {
        console.error(`Failed to fetch: ${error}`)
    })
