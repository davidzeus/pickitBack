const { Router } = require('express');
const  Owner  = require('../controllers/owner.controller')
const { check } = require('express-validator');
const { checkFields } = require('../middlewares/check-fields');
const { validateJasonWebToken } = require('../middlewares/validate-jwt');

const router = Router();

//lista todos los propietarios
router.get('/list', [validateJasonWebToken], Owner.list);

//buscar por propietarios
router.get('/find/:lastName', [validateJasonWebToken], Owner.find);

//crear nuevo registro
router.post('/new', [validateJasonWebToken,
    check('lastName', 'El apellido es obligatoria').not().isEmpty(),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    checkFields
],
Owner.create);

//actualizar un registro
router.put('/edit/:id', Owner.update);



module.exports = router;

