const express = require('express');
const router = express.Router();

const categoriaController = require('../controllers/categoria');

router.get('/',categoriaController.find);
router.get('/:id',categoriaController.findOne);
router.post('/',categoriaController.create);
router.put('/:id',categoriaController.update);
router.delete('/:id',categoriaController.delete);



router.use(categoriaController.verifyToken);

module.exports = router;