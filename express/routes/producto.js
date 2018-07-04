const express = require('express');
const router = express.Router();

const productoController = require('../controllers/producto');

router.use(productoController.verifyToken);

router.get('/',productoController.find);
router.get('/:id',productoController.findOne);
router.post('/',productoController.create);
router.put('/:id',productoController.update);
router.delete('/:id',productoController.delete);


module.exports = router;