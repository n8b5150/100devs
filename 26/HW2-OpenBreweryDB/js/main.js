// Open Brewery DB
// https://www.openbrewerydb.org/

document.querySelector('button').addEventListener('click',getFetch)

function getFetch(){
    const url = 'https://api.openbrewerydb.org/breweries?by_city=' 
    //replace spaces in city names with underscores or %20
    let city = document.getElementById('city').value.toLowerCase().replace(/^[ ]$/g,'%20')
    
    fetch(url+city)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            createCard(data)
        })
        .catch(err => console.log(`error = ${err}`))
}

//create a card with info and url for each brewery returned
// [
//     {
//     id: "circle-9-brewing-san-diego",
//     name: "Circle 9 Brewing",
//     brewery_type: "micro",
//     street: "7292 Opportunity Rd Ste C",
//     address_2: null,
//     address_3: null,
//     city: "San Diego",
//     state: "California",
//     county_province: null,
//     postal_code: "92111-2223",
//     country: "United States",
//     longitude: null,
//     latitude: null,
//     phone: "8586342537",
//     website_url: "http://www.circle9brewing.com",
//     updated_at: "2021-10-23T02:24:55.243Z",
//     created_at: "2021-10-23T02:24:55.243Z"
//     },...
function createCard(arr){
    const cardSection = document.getElementById('cards')
    cardSection.innerHTML = ''
    arr.forEach( e => {
        let phone = ''
        if (e.phone == null) phone = ''
        else if (e.phone.length == 10) {
            phone = `${e.phone.slice(0,3)}-${e.phone.slice(3,6)}-${e.phone.slice(-4)}`
        }
        cardSection.innerHTML += 
            `<ul>
                <li>${e.name}</li>
                <li>${e.street}</li>
                <li>${e.city}, ${e.state} ${e.postal_code.slice(0,5)}</li>
                <li><i class="fa fa-phone" aria-hidden="true"></i> ${phone}</li>
                <li><a href="${e.website_url}" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i> Website</a></li>
                </ul>`
    })
}