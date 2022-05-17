// async await examples

// async function fetchProducts() {
//     try {
//         // function waits for 'fetch()' call to be settled
//         // 'fetch()' will return a Response or throw an error
//         const response = await
// fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
//     if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`)
//     }
//     // function will wait for 'response.json' call to be settled
//     // 'response.json' call will return JSON object or throw an error
//     const json = await response.json()
//     console.log(json[0].name)
//     }
//     catch(error) {
//         console.error(`Could not get products: ${error}`)
//     }
// }

// fetchProducts()

// Async functions always return a Promise
// this won't work since it is not inside the async function

async function fetchProducts() {
    try{
        const response = await
fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }
    const json = await response.json()
    return json
    }
    catch(error) {
        console.error(`Could not get products: ${error}`)
    }
}

//const json = fetchProducts()
//console.log(json[0].name) //json is a Promise object, 'name' is undefined here

// do this instead
const jsonPromise = fetchProducts()
jsonPromise.then( (obj) => console.log(obj[0].name))
jsonPromise.then( (obj) => console.log(...obj))
jsonPromise.then( (obj) => console.table(obj))
jsonPromise.then( (obj) => obj.forEach( e => console.log(e.name)))