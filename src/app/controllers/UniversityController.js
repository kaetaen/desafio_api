const { response } = require('express');
const University = require('../models/University')

class UniversityController {
    async index (req, res) {
        // Filtro por país
        const countryName = req.query.country
        const filter = countryName ? {country: countryName[0].toUpperCase() + countryName.slice(1)} : {}

        // Paginação
        let page = req.query.page
        let limit = 20
        let skip = limit * (page - 1)
        const countUniversity =  await University.count(filter)
        const totalUniversityPerPage = Math.ceil(countUniversity / limit)

        // Busca por dados
        University.find(filter, function(err, univer) {
            if (err)
                return res.json({"Erro": "Error to list universities !"});
            else {
                 const universities = univer.map( (uni) => {
                   return {
                       id: uni._id,
                       name: uni.name,
                       country: uni.country,
                       stateProvince: uni["state-province"]
                    }
                })

                res.status(200).json({
                    currentPage:page,
                    lastPage:totalUniversityPerPage,
                    dados: universities,
                })
            }
        }).skip(skip).limit(limit);
    }   

    async show (req, res) {
        try {
            const university = await University.findById(req.params.id)
            return res.status(200).json(university)
        } catch (e) {
            return res.status(400).json({"Error": "Invalid ID"})
        }
    }

    async create (req, res) {
        const { body } = req
        const university = await University.find({
            name: body.name,
            country: body.country,
            'state-province': body["state-province"] 
        })
        
        if (Array.isArray(university) && !university.length) {
            await University.create(body)
            res.status(200).json({"msg": "Created"})

        } else {
            res.status(400).json({"error": "Data already exists!"})
        }
    }

   async update (req, res) {

        try {
            const { body } = req

            const filter = { _id: req.params.id}
            const update = body

            const university = await University.findOneAndUpdate(filter, update)

            res.status(200).json({msg: "Updated!"})

        } catch (e) {
            res.status(400).json({error: "Invalid ID"})
        }
    }

    async destroy () {

    }
}

module.exports = new UniversityController()