const VendaModel = require('../models/vendaModel');

class VendaController {
    static async create(req, res) {
        try {
            const { cliente_id, usuario_id, valor_total } = req.body;
            const id = await VendaModel.create({ cliente_id, usuario_id, valor_total });
            res.status(201).json({ message: 'Venda criada com sucesso!', id });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar venda.' });
        }
    }

    static async getAll(req, res) {
        try {
            const vendas = await VendaModel.getAll();
            res.status(200).json(vendas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao obter vendas.' });
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            await VendaModel.delete(id);
            res.status(200).json({ message: 'Venda excluída com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao excluir venda.' });
        }
    }
}

module.exports = VendaController;
