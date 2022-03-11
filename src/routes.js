const { Router } = require('express')
const UniversityController = require('./app/controllers/UniversityController')

const routes = Router()

routes.get('/universities', UniversityController.index)
routes.get('/universities/:id', UniversityController.show)
routes.post('/universities', UniversityController.create)
routes.put('/universities/:id', UniversityController.update)
routes.delete('/universities/:id', UniversityController.destroy)


module.exports = routes