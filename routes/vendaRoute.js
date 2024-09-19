const express = require('express');
const VendaController = require('../controllers/vendaController');
const router = express.Router();

router.post('/', VendaController.create);
router.get('/', VendaController.getAll);
router.delete('/:id', VendaController.delete);

module.exports = router;
