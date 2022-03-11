const { Router } = require('express')
const UniversityController = require('./app/controllers/UniversityController')

const routes = Router()

routes.get('/universities', UniversityController.index)


module.exports = routes