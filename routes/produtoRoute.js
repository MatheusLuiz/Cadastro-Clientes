const express = require('express');
const ProdutoController = require('../controllers/produtoController');
const router = express.Router();

router.post('/', ProdutoController.create);
router.get('/', ProdutoController.getAll);
router.put('/:id', ProdutoController.update);
router.delete('/:id', ProdutoController.delete);

module.exports = router;
