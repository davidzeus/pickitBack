const Sequelize = require('sequelize');
const cars = require('../models').cars;
module.exports = {
  //crea nuevo registro
  create(req, res) {
    return cars
      .create({
        manufacturer: req.body.manufacturer,
        models: req.body.models,
        year: req.body.year,
        registration: req.body.registration,
        color: req.body.color
      })
      .then(cars => res.status(200).send(cars))
      .catch(error => res.status(400).send(error))
  },

  //actualiza un registro segun id
  update(req, res) {
    return cars
      .update({
        manufacturer: req.body.manufacturer,
        models: req.body.models,
        year: req.body.year,
        registration: req.body.registration,
        color: req.body.color
      },
        {
          where: { id: req.params.id }
        }
      )
      .then(cars => res.status(200).send(cars))
      .catch(error => res.status(400).send(error))
  },

  //lista todos los registros
  list(_, res) {
    return cars.findAll({})
      .then((cars) => res.status(200).send(cars))
      .catch(error => res.status(400).send(error))
  },

  //bucar un registro por marca
  find(req, res) {
    return cars.findAll({
      where: {
        manufacturer: req.params.manufacturer,
      }
    })
      .then(models => res.status(200).send(models))
      .catch(error => res.status(400).send(error))
  },
};