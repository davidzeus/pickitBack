const { Router } = require('express');
const  transactions  = require('../controllers/transactions.controller')
const { check } = require('express-validator');
const { checkFields } = require('../middlewares/check-fields');

const router = Router();

//ruta de verificacion
/* router.get('/', (req, res) => res.status(200).send ({
    message: 'Parece que funciona! wiii!!',
})); */

//lista todos los propietarios
router.get('/list', transactions.list);
//buscar por propietarios
router.get('/find/:car_id', transactions.find);
//crear nuevo registro
router.post('/new', [
    check('car', 'El auto es obligatoria').not().isEmpty(),
    check('owner', 'El propietario es obligatorio').not().isEmpty(),
    check('service', 'El servicio es obligatorio').not().isEmpty(),
    check('status', 'El estado es obligatorio').not().isEmpty(),
    checkFields
],
transactions.create);


module.exports = router;

