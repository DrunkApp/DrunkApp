const express = require('express');
const router = express.Router();

const pedidoController = require('../controllers/pedido');


router.use(pedidoController.verifyToken);

router.get('/',pedidoController.find);
router.get('/:id',pedidoController.findOne);
router.post('/',pedidoController.create);
router.put('/:id',pedidoController.update);
router.delete('/:id',pedidoController.delete);





module.exports = router;