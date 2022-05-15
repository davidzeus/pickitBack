const { Router } = require('express');
const  Owner  = require('../controllers/owner.controller')
const { check } = require('express-validator');
const { checkFields } = require('../middlewares/check-fields');

const router = Router();

//ruta de verificacion
/* router.get('/', (req, res) => res.status(200).send ({
    message: 'Parece que funciona! wiii!!',
})); */

//lista todos los propietarios
router.get('/list', Owner.list);
//buscar por propietarios
router.get('/find/:lastName', Owner.find);
//crear nuevo registro
router.post('/new', [
    check('lastName', 'El apellido es obligatoria').not().isEmpty(),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    checkFields
],
Owner.create);
//actualizar un registro
router.put('/edit/:id', Owner.update);



module.exports = router;

