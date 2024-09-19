const MovimentoProdutoModel = require('../models/movimentoProdutoModel');

class MovimentoProdutoController {
    static async create(req, res) {
        try {
            const { estoque_id, produto_id, tipo, quantidade, observacao } = req.body;
            const id = await MovimentoProdutoModel.create({ estoque_id, produto_id, tipo, quantidade, observacao });
            res.status(201).json({ message: 'Movimento de produto criado com sucesso!', id });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar movimento de produto.' });
        }
    }

    static async getAll(req, res) {
        try {
            const movimentos = await MovimentoProdutoModel.getAll();
            res.status(200).json(movimentos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao obter movimentos de produtos.' });
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            await MovimentoProdutoModel.delete(id);
            res.status(200).json({ message: 'Movimento de produto excluído com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao excluir movimento de produto.' });
        }
    }
}

module.exports = MovimentoProdutoController;
