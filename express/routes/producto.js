const express = require('express');
const router = express.Router();

const productoController = require('../controllers/producto');

router.get('/',productoController.find);

router.use(productoController.verifyToken);


router.get('/:id',productoController.findOne);
router.post('/',productoController.create);
router.put('/:id',productoController.update);
router.delete('/:id',productoController.delete);


module.exports = router;