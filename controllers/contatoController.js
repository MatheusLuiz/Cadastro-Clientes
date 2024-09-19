const ContatoModel = require('../models/contatoModel');

class ContatoController {
    static async create(req, res) {
        try {
            const { cliente_id, email, ddd, telefone, tipo_id } = req.body;
            const id = await ContatoModel.create({ cliente_id, email, ddd, telefone, tipo_id });
            res.status(201).json({ message: 'Contato criado com sucesso!', id });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar contato.' });
        }
    }

    static async getAll(req, res) {
        try {
            const { cliente_id } = req.params;
            const contatos = await ContatoModel.getAllByCliente(cliente_id);
            res.status(200).json(contatos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao obter contatos.' });
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            const { email, ddd, telefone, tipo_id } = req.body;
            await ContatoModel.update(id, { email, ddd, telefone, tipo_id });
            res.status(200).json({ message: 'Contato atualizado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar contato.' });
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            await ContatoModel.delete(id);
            res.status(200).json({ message: 'Contato excluído com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao excluir contato.' });
        }
    }
}

module.exports = ContatoController;
