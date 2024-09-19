const EstoqueModel = require('../models/estoqueModel');

class EstoqueController {
    static async create(req, res) {
        try {
            const { nome_estoque, usuario_id } = req.body;
            const id = await EstoqueModel.create({ nome_estoque, usuario_id });
            res.status(201).json({ message: 'Estoque criado com sucesso!', id });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar estoque.' });
        }
    }

    static async getAll(req, res) {
        try {
            const estoques = await EstoqueModel.getAll();
            res.status(200).json(estoques);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao obter estoques.' });
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            const { nome_estoque, usuario_id } = req.body;
            await EstoqueModel.update(id, { nome_estoque, usuario_id });
            res.status(200).json({ message: 'Estoque atualizado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar estoque.' });
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            await EstoqueModel.delete(id);
            res.status(200).json({ message: 'Estoque excluído com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao excluir estoque.' });
        }
    }
}

module.exports = EstoqueController;
