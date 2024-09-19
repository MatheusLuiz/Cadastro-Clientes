const express = require('express');
const ItemVendaController = require('../controllers/itemVendaController');
const router = express.Router();

router.post('/', ItemVendaController.create);
router.get('/:venda_id', ItemVendaController.getAll);
router.delete('/:id', ItemVendaController.delete);

module.exports = router;
