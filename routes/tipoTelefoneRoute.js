const express = require('express');
const TipoTelefoneController = require('../controllers/tipoTelefoneController');
const router = express.Router();

router.post('/', TipoTelefoneController.create);
router.put('/:id', TipoTelefoneController.update);
router.get('/', TipoTelefoneController.getAll);  


module.exports = router;
