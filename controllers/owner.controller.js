const Sequelize = require('sequelize');
const owners = require('../models').owners;
module.exports = {
  //crea nuevo registro
  create(req, res) {
    return owners
      .create({
        lastName: req.body.lastName,
        name: req.body.name,
        
      })
      .then(owners => res.status(200).send(owners))
      .catch(error => res.status(400).send(error))
  },
//actualiza un registro segun id
  update(req, res) {
    return owners
      .update({
        lastName: req.body.lastName,
        name: req.body.name,
      },
        {
          where: { id: req.params.id }
        }
      )
      .then(owners => res.status(200).send(owners))
      .catch(error => res.status(400).send(error))
  },
//lista todos los registros
  list(_, res) {
    return owners.findAll({})
      .then((owners) => res.status(200).send(owners))
      .catch(error => res.status(400).send(error))
  },
//bucar un registro por marca
  find(req, res) {
    return owners.findAll({
      where: {
        lastName: req.params.lastName,
      }
    })
      .then(models => res.status(200).send(models))
      .catch(error => res.status(400).send(error))
  },
};