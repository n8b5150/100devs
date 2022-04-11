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
    //arr[i].
        //website_url (anchor card contents)
        //name
        //Street
        //city, state postal code
        //phone

}