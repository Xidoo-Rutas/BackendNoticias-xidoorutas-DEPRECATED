const { Router } = require('express');
const { consultarclientes, agregarclientes, modificarcliente, eliminarcliente} = require('../controllers/cliente.controller')
const router = Router();


router.get('/api/noticias', consultarclientes);
router.post('/api/noticias/registro', agregarclientes);
router.put('/api/noticias/modificar', modificarcliente);
router.delete('/api/noticias/eliminar/:id', eliminarcliente);



module.exports = router;