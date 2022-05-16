const Sequelize = require('sequelize');
//const Op = Sequelize.Op;
const cars = require('../models').cars;
const owners = require('../models').owners;
const transactions = require('../models').transactions;
const services = require('../models').services;



module.exports = {
    //crear nuevo registro de servicio
    create(req, res) {
        // car
        const responseCar = cars.findOne({
            where: {
                id: req.body.car
            }
        });
        // owner
        const responseOwner = owners.findOne({
            where: {
                id: req.body.owner
            }
        });
        // service
        const responseService = services.findOne({
            where: {
                id: req.body.service
            }
        });
        Promise
            .all([responseCar, responseOwner,responseService])
            .then(responses => {
                return transactions
                    .create({
                        car_id: responses[0].id,
                        owner_id: responses[1].id,
                        service_id: responses[2].id,
                        status: req.body.status,
                    })
                    .then(transactions => res.status(200).send(transactions))
            })
            .catch(error => res.status(400).send(error));
    },

    //lista
    list(_, res) {
        return transactions.findAll({
            attributes: { exclude: ['updatedAt', 'createdAt', 'car_id', 'owner_id', 'service_id'] },
            include: [
                {
                    model: cars,
                    as: 'car',
                    attributes: { exclude: ['updatedAt', 'createdAt'] }
                },
                {
                    model: owners,
                    as: 'owner',
                    attributes: { exclude: ['updatedAt', 'createdAt'] }
                },
                {
                    model: services,
                    as: 'services',
                    attributes: { exclude: ['updatedAt'] }
                },
            ]
        })
            .then(transactions => res.status(200).send(transactions))
            .catch(error => res.status(400).send(error))
    },
   
    //busca por id de auto
    find(req, res) {
        return transactions.findAll({
            where: {
                car_id: req.params.car_id,
            },
            attributes: { exclude: ['updatedAt', 'createdAt', 'car_id', 'owner_id', 'service_id'] },
            include: [
                {
                    model: cars,
                    as: 'car',
                    attributes: { exclude: ['updatedAt', 'createdAt'] }
                },
                {
                    model: owners,
                    as: 'owner',
                    attributes: { exclude: ['updatedAt', 'createdAt'] }
                },
                {
                    model: services,
                    as: 'services',
                    attributes: { exclude: ['updatedAt'] }
                },
            ]
        })
            .then(transactions => res.status(200).send(transactions))
            .catch(error => res.status(400).send(error))
    },
};