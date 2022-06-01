const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

const parks = {
    'Pearson' : {
        'address' : 'https://www.google.com/maps/place/Pearson+Park/@41.6445834,-83.4457582,15z/data=!4m2!3m1!1s0x0:0xf0aca62ce98a7bea',
        'playground' : true,
        'bike path' : true,
    },
    'Swan Creek' : {
        'address' : 'https://www.google.com/maps/place/Swan+Creek+Preserve+Metropark/@41.6169674,-83.6392584,15z/data=!4m2!3m1!1s0x0:0xccf047eabd5b034f',
        'playground' : true,
        'bike path' : true,
    },
}


app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}. You better go catch it!`)
})

app.get('/api/:parkName', (request,response)=>{
    const parksName = request.params.parkName
    if (parks[parksName]){
        response.json(parks[parksName].address)
    }else {
        response.json(parks)
    }
})