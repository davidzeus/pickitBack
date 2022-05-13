const { Router } = require('express');
const  transactions  = require('../controllers/transactions.controller')
const router = Router();

//ruta de verificacion
router.get('/', (req, res) => res.status(200).send ({
    message: 'Parece que funciona! wiii!!',
}));

//lista todos los propietarios
router.get('/list', transactions.list);
//buscar por propietarios
router.get('/find/:id', transactions.find);
//crear nuevo registro
router.post('/new', transactions.create);
//actualizar un registro
//router.put('/edit/:id', transactions.update);



module.exports = router;

