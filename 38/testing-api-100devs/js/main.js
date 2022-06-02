document.querySelector('span').addEventListener('click', apiRequest)

async function apiRequest(){
    const parkName = document.querySelector('input').value
    console.log(parkName)
    try{
        const response = await fetch(`https://testing-api-100devs.herokuapp.com/api/${parkName}`)
        const data = await response.json()
        console.log(data)
        document.querySelector('a').href = data
        document.querySelector('#selectedPark').innerText = parkName
    }
    catch(error){
        console.log(error)
    }
}