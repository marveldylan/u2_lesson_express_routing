const { response, application } = require('express')
const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()
//  Your Code Here

// GET ROUTE - gets information
// ALWAYS - first param = request, second param = response
app.get('/hello', (request, response) => {
    // Example Insomnia type = GET, input = localhost:3001/hello
    // Logs "You're in the /hello router handler" on the server console. Sends 'Howdy' to Client /hello webpage.
    console.log("You're in the /hello route handler")
    response.send('Howdy')
})

// POST ROUTE - posts information
app.post('/hello', (request, response) => {
    // Example Insomnia type = POST, input = localhost:3001/hello
    // Logs 'You have sent a post request on server console, logs msg: 'Thank you for the post' on client console. 
    console.log('You have sent a post request')
    // responses that we send back are object data types
    response.send({msg: 'Thank you for the post'})
})

// QUERY PARAMS example
app.get('/find', (request, response) => {
    // Example Insomnia type = GET, input = localhost:3001/find?myName=Dylan&myLocation=Minnesota
    // logs request object in server terminal, sends message to client /find webpage.
    console.log(request)
    response.send(`Found someone by the name of ${request.query.myName} in ${request.query.myLocation}`)
})

// You Do examples

app.get('/dogs', (request, response) => {
    // Example Insomnia type = GET, input = localhost:3001/dogs
    // Sends 'Huskies' to client /dogs webpage
    response.send('Huskies')
})

app.get('/cats/:catName', (req, res) => {
    // Example Insomnia type = GET, input = localhost:3001/cats/Tommy
    // Sends message to client /cats webpage - req.params.catName = slug after cats/ in url.
    res.send(`Getting cat with name of ${req.params.catName}`)
})

app.post('/towns', (req, res) => {
    // Example Insomnia type = POST, input = localhost:3001/towns
    // logs hometown: 'Cloquet, MN' in client/browser terminal
    res.send({hometown: 'Cloquet, MN'})
})

app.put('/profile/update/:username', (req, res) => {
    // Example Insomnia type = PUT, input = localhost:3001/profile/update/dmarvel
    // Puts message on client webpage - req.params.username = slug after update/ in url.
    res.send(`User profile with the name of ${req.params.username} updated`)
})

app.delete('/tacos', (req, res) => {
    // Example Insomnia type = DELETE, input = localhost:3001/tacos?type=carnitas&tacoId=1
    // sends delete message with queries from values entered after tacos? in url.
    res.send(`I deleted the ${req.query.type} with an id of ${req.query.tacoId}`)
})

// End Your Code Here
app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`))
