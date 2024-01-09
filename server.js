// DEPENDENCIES
const { Sequelize } = require('sequelize')
const express = require('express')
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// Controllers
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

const eventscontroller = require('./controllers/events_controllers')
app.use('/events', eventscontroller)

const stagesController = require('./controllers/stages_controllers')
app.use('/stages', stagesController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})