const { Router } = require('express');
const  CarsOwner  = require('../controllers/carsOwner.controller')
const { validateJasonWebToken } = require('../middlewares/validate-jwt');
const router = Router();

//lista todos los autos
router.get('/list', [validateJasonWebToken], CarsOwner.list);

//buscar por marca de auto
router.get('/find/:idCar', [validateJasonWebToken], CarsOwner.find);

module.exports = router;

