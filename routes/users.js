const express = require('express')
const usersRouter = express.Router()
const FoodLocation = require('../models/location')
const bodyParser = require('body-parser')
usersRouter.use(bodyParser())

usersRouter.get('/', () => {
    
})

module.exports = (app) => {
    app.use('/users', usersRouter)
}