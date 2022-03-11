const mongoose = require('mongoose')

const CONN_URI = 'mongodb+srv://rubenssantos:9JgYquZvjk6gDh3c@b2bdatabase.hrwh3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(CONN_URI)
mongoose.Promise = global.Promise

module.exports = mongoose