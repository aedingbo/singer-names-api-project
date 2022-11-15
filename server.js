const express = require('express')
const app = express()
const PORT = 8000

const singers = {
    'usher': {  
    'age': 44,
    'birthName': 'Usher Raymond IV',
    'birthLocation': 'Dallas, Texas'
   },

   'beyonce': {  
    'age': 41,
    'birthName': 'Beyonce Giselle Knowles',
    'birthLocation': 'Houston, Texas'
   },
   
   
   'unknown': {  
    'age': 0,
    'birthName': 'Unknown',
    'birthLocation': 'Unknown'
   },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

//singer name in the url, colon is used for express
app.get('/api/:singerName', (request, response) => { 
    //request/enter the singer name paramater and store it in variable and convert to lowercase
    const singersName = request.params.singerName.toLowerCase()
    //if singer exists in object
    if(singers[singersName]){
        //respond with singer name object
        response.json(singers[singersName])

    }else{
        //if singer name does not exist, respond with unknown object
        response.json(singers['unknown'])
    }

    })

app.listen(PORT, () => {
    console.log('The server is running on PORT ' + PORT + '.')
})
