const express = require('express');
const CargoController = require('../controllers/cargoController');
const router = express.Router();

router.post('/', CargoController.create);
router.get('/', CargoController.getAll);
router.put('/:id', CargoController.update);
router.delete('/:id', CargoController.delete);

module.exports = router;
