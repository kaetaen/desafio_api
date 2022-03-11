const University = require('../models/University')

class UniversityController {
    constructor () {
        this.university = University
    }

    async index (req, res) {
        return this.university.find()
    }   

    show () {

    }

    update () {

    }

    destroy () {

    }
}

module.exports = new UniversityController()