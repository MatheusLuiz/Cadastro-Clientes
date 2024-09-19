const ProdutoModel = require('../models/produtoModel');

class ProdutoController {
    static async create(req, res) {
        try {
            const { nome, descricao, preco, valor_venda, categoria, status } = req.body;
            const id = await ProdutoModel.create({ nome, descricao, preco, valor_venda, categoria, status });
            res.status(201).json({ message: 'Produto criado com sucesso!', id });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar produto.' });
        }
    }

    static async getAll(req, res) {
        try {
            const produtos = await ProdutoModel.getAll();
            res.status(200).json(produtos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao obter produtos.' });
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            const { nome, descricao, preco, valor_venda, categoria, status } = req.body;
            await ProdutoModel.update(id, { nome, descricao, preco, valor_venda, categoria, status });
            res.status(200).json({ message: 'Produto atualizado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar produto.' });
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            await ProdutoModel.delete(id);
            res.status(200).json({ message: 'Produto excluído com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao excluir produto.' });
        }
    }
}

module.exports = ProdutoController;
