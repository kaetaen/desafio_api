const University = require('../models/University')

class UniversityController {
    async index (req, res) {
        // Filtro por país
        const countryName = req.query.country
        const filter = countryName ? {country: countryName[0].toUpperCase() + countryName.slice(1)} : {}

        // Paginação
        let page = req.query.page;
        let limit = 20;
        let skip = limit * (page - 1);
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
                }); 
            }
        }).skip(skip).limit(limit);
    }   

    show () {

    }

    update () {

    }

    destroy () {

    }
}

module.exports = new UniversityController()