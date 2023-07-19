const express = require('express')
const app = express()
const PORT = 8000

const composers = {  
    'mozart' : {    
    'birthName': 'Wolfgang Amadeus Mozart' ,
    'birthLocation': 'Salzburg, Austria'
    },

    'beethoven' : {    
        'birthName': 'Ludwig van Beethoven' ,
        'birthLocation': 'Bonn, Germany'
    },
    
    'unkown' : {    
        'birthName': 'unknown' ,
        'birthLocation': 'unknown'
    }
    
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
} )

app.get('/api/:name', (request,response) => {
    const composerName = request.params.name.toLowerCase()
    if (composers[composerName]){
        response.json(composers[composerName])
    }else{
        response.json(composers['unkown'])
    }
})


app.listen(PORT, () =>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})
