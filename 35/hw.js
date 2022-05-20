//Code 08
// HW - add try catch
async function getACuteDogPhoto(){
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await res.json()
        console.log(data.message)
        document.querySelector('img').src = data.message
    } catch(err) {
        console.error(err)
    }
}
getACuteDogPhoto()
