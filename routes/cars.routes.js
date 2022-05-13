const { Router } = require('express');
const  Cars  = require('../controllers/cars.controller')
const router = Router();

//ruta de verificacion
router.get('/', (req, res) => res.status(200).send ({
    message: 'Parece que funciona! wiii!!',
}));

//lista todos los autos
router.get('/list', Cars.list);
//buscar por marca de auto
router.get('/find/:manufacturer', Cars.find);
//crear nuevo registro
router.post('/new', Cars.create);
//actualizar un registro
router.put('/edit/:id', Cars.update);



module.exports = router;

