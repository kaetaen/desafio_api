const { Router } = require('express')
const UniversityController = require('./app/controllers/UniversityController')

const routes = Router()

routes.get('/universities', UniversityController.index)
routes.get('/universities/:id', UniversityController.show)
routes.post('/universities', UniversityController.create)


module.exports = routes