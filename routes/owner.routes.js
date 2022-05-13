const { Router } = require('express');
const  Owner  = require('../controllers/owner.controller')
const router = Router();

//ruta de verificacion
router.get('/', (req, res) => res.status(200).send ({
    message: 'Parece que funciona! wiii!!',
}));

//lista todos los propietarios
router.get('/list', Owner.list);
//buscar por propietarios
router.get('/find/:lastName', Owner.find);
//crear nuevo registro
router.post('/new', Owner.create);
//actualizar un registro
router.put('/edit/:id', Owner.update);



module.exports = router;

