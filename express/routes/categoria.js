const express = require('express');
const router = express.Router();

const categoriaController = require('../controllers/categoria');

router.get('/',categoriaController.find);

router.use(categoriaController.verifyToken);


router.get('/:id',categoriaController.findOne);
router.post('/',categoriaController.create);
router.put('/:id',categoriaController.update);
router.delete('/:id',categoriaController.delete);



module.exports = router;