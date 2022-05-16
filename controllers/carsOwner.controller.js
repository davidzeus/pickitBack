const Sequelize = require('sequelize');
//const Op = Sequelize.Op;
const cars = require('../models').cars;
const owners = require('../models').owners;
const carsowner = require('../models').carsOwner;

module.exports = {


    //lista
    list(_, res) {
        return carsowner.findAll({
            attributes: { exclude: ['updatedAt', 'createdAt', 'car_id', 'owner_id'] },
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
                }
            ]
        })
            .then(carsowner => res.status(200).send(carsowner))
            .catch(error => res.status(400).send(error))
    },

    //bucar un registro por marca
    find(req, res) {
        return carsowner.findAll({
            where: {
                car_id: req.params.idCar,
            },
            attributes: { exclude: ['updatedAt', 'createdAt', 'car_id', 'owner_id'] },
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
                }
            ]
        })
            .then(carsowner => res.status(200).send(carsowner))
            .catch(error => res.status(400).send(error))
    },

};