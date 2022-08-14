const express = require('express')
const app = express()
const PORT= 8000
//create a json object to send (used in the get api route)
const rappers= {
    '21 savage':{
        'age': 29,
        'birthname': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation':'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthname': 'Chancellor Bennete',
        'birthLocation':'Chicago, Illinois'
    },
    'dylan':{
        'age': 29,
        'birthname': 'Dylan',
        'birthLocation':'Dylan'
    },

}



//setup server to hear & respond to requests with get request
//the main path aka route is ('/)
//once we hear a request on the '/' we then want to respond with an html file & send the html file we do this using (__dirname + the name of the actual file we're sending)
//sends with a file


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

//setup a different path for our server so it responds with json (sends with json); we're using the variable savage we created above to respond with
//we use :rapperName in the url (route) to make it so ppl can request a specific rapper object & get it back 
// request.params.rapperName explanation: (the url is part of the request rapper name is a query parameter so we use param name )
//create conditional to respond with certain rappers using bracket notation to look at the obj & look at its key because they have spaces in names

app.get('/api:rapperName',(request,response)=>{
   const rappersName= request.params.rapperName.toLowerCase()
   if(rappers[rappersName]){
    response.json(rappers[rappersName])
   }else{
    response.json(rappers['dylan'])
   }
})


//now that the server is setup we need to tell the server to listen
//its going to listen for a port number, we're going to use a varible here for the PORT to listen
//we want to see that the server is running so we use an arrow function to console log to show us that its listening
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}! You better go catch it`)
})