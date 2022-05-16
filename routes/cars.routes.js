const { Router } = require('express');
const Cars = require('../controllers/cars.controller')
const { check } = require('express-validator');
const { checkFields } = require('../middlewares/check-fields');
const { validateJasonWebToken } = require('../middlewares/validate-jwt');

const router = Router();

//ruta de verificacion
router.get('/', /* [validateJasonWebToken], */ (req, res) => res.status(200).send({
    message: 'Parece que funciona! wiii!!',
}));

//lista todos los autos
router.get('/list', [
    validateJasonWebToken
    ], Cars.list);

//buscar por marca de auto
router.get('/find/:manufacturer', [validateJasonWebToken], Cars.find);

//crear nuevo registro
router.post('/new', [ validateJasonWebToken ,
    check('manufacturer', 'La marca es obligatoria').not().isEmpty(),
    check('models', 'El modelo es obligatorio').not().isEmpty(),
    check('color', 'El color es obligatorio').not().isEmpty(),
    check('year', 'El año es obligatorio').not().isEmpty(),
    check('registration', 'La patente es obligatoria').not().isEmpty(),
    checkFields
], Cars.create);

//actualizar un registro
router.put('/edit/:id', [validateJasonWebToken], Cars.update);

//elimina un registro
router.delete('/delete/:id', [validateJasonWebToken], Cars.delete);



module.exports = router;

