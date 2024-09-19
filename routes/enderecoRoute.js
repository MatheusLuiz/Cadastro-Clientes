const express = require('express');
const EnderecoController = require('../controllers/enderecoController');
const router = express.Router();

router.post('/', EnderecoController.create);
router.get('/', EnderecoController.getAll);
router.get('/:cpf', EnderecoController.getById);
router.put('/:cpf', EnderecoController.update);
router.delete('/:cpf', EnderecoController.delete);

module.exports = router;
