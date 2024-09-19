const express = require('express');
const ContatoController = require('../controllers/contatoController');
const router = express.Router();

router.post('/', ContatoController.create);
router.get('/:cliente_id', ContatoController.getAll);
router.put('/:id', ContatoController.update);
router.delete('/:id', ContatoController.delete);

module.exports = router;
