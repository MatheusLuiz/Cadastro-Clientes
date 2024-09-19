const express = require('express');
const MovimentoProdutoController = require('../controllers/movimentoProdutoController');
const router = express.Router();

router.post('/', MovimentoProdutoController.create);
router.get('/', MovimentoProdutoController.getAll);
router.delete('/:id', MovimentoProdutoController.delete);

module.exports = router;
