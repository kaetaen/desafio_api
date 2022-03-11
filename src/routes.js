const { Router } = require('express')

const routes = Router()

routes.get('/home', (req, res) => {
    res.send('ola mundo')
})

module.exports = routes