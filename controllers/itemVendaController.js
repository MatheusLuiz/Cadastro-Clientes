const ItemVendaModel = require('../models/itemVendaModel');

class ItemVendaController {
    static async create(req, res) {
        try {
            const { venda_id, produto_id, quantidade, valor_unitario } = req.body;
            const id = await ItemVendaModel.create({ venda_id, produto_id, quantidade, valor_unitario });
            res.status(201).json({ message: 'Item de venda criado com sucesso!', id });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar item de venda.' });
        }
    }

    static async getAll(req, res) {
        try {
            const { venda_id } = req.params;
            const itens = await ItemVendaModel.getAllByVenda(venda_id);
            res.status(200).json(itens);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao obter itens de venda.' });
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            await ItemVendaModel.delete(id);
            res.status(200).json({ message: 'Item de venda excluído com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao excluir item de venda.' });
        }
    }
}

module.exports = ItemVendaController;
