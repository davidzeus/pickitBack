const { Router } = require('express');
const  CarsOwner  = require('../controllers/carsOwner.controller')
const router = Router();

//ruta de verificacion
router.get('/', (req, res) => res.status(200).send ({
    message: 'Parece que funciona! wiii!!',
}));

//lista todos los autos
router.get('/list', CarsOwner.list);
//buscar por marca de auto
router.get('/find/:idCar', CarsOwner.find);
//crear nuevo registro
//router.post('/new', CarsOwner.create);



module.exports = router;

