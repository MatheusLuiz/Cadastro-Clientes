const express = require('express');
const UsuarioCargoController = require('../controllers/usuarioCargoController');
const router = express.Router();

router.post('/', UsuarioCargoController.create);
router.get('/:usuario_id', UsuarioCargoController.getByUsuario);
router.delete('/:usuario_id/:cargo_id', UsuarioCargoController.delete);

module.exports = router;
