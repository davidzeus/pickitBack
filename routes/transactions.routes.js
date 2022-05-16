const { Router } = require('express');
const  transactions  = require('../controllers/transactions.controller')
const { check } = require('express-validator');
const { checkFields } = require('../middlewares/check-fields');
const { validateJasonWebToken } = require('../middlewares/validate-jwt');

const router = Router();

//lista todos los propietarios
router.get('/list', [validateJasonWebToken], transactions.list);

//buscar por propietarios
router.get('/find/:car_id', [validateJasonWebToken], transactions.find);

//crear nuevo registro
router.post('/new', [validateJasonWebToken,
    check('car', 'El auto es obligatoria').not().isEmpty(),
    check('owner', 'El propietario es obligatorio').not().isEmpty(),
    check('service', 'El servicio es obligatorio').not().isEmpty(),
    check('status', 'El estado es obligatorio').not().isEmpty(),
    checkFields
],
transactions.create);


module.exports = router;

