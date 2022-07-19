//DEPENDENCIES
const express = require('express')

//configureation

require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
const app = express()

//ROUTES
app.get('/',(req,res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

//LISTEN
app.listen(PORT,() =>{
    console.log('listening on port', PORT);
})

//Breads

const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)