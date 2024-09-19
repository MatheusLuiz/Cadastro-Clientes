const CargoModel = require('../models/cargoModel');

class CargoController {
    static async create(req, res) {
        try {
            const { descricao } = req.body;
            const id = await CargoModel.create({ descricao });
            res.status(201).json({ message: 'Cargo criado com sucesso!', id });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar cargo.' });
        }
    }

    static async getAll(req, res) {
        try {
            const cargos = await CargoModel.getAll();
            res.status(200).json(cargos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao obter cargos.' });
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            const { descricao } = req.body;
            await CargoModel.update(id, { descricao });
            res.status(200).json({ message: 'Cargo atualizado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar cargo.' });
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            await CargoModel.delete(id);
            res.status(200).json({ message: 'Cargo excluído com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao excluir cargo.' });
        }
    }
}

module.exports = CargoController;
