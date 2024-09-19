const express = require('express');
const EstoqueController = require('../controllers/estoqueController');
const router = express.Router();

router.post('/', EstoqueController.create);
router.get('/', EstoqueController.getAll);
router.put('/:id', EstoqueController.update);
router.delete('/:id', EstoqueController.delete);

module.exports = router;
