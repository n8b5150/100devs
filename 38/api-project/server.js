const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
        },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennet',
        'birthLocation': 'Chicago, Illinois'
        },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
        },
    }

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request,response)=>{
    const rapperName = request.params.rapperName.toLowerCase()
    if (rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})

// heroku commands:
// https://www.heroku.com/
// https://rap-names-api-fun.herokuapp.com/
// heroku login -i
// heroku create simple-rap-api
// echo "web: node server.js" > Procfile
// git add . 
// git commit -m "changes"
// git push heroku main