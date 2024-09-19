const EnderecoModel = require('../models/enderecoModel');

class EnderecoController {
    static async create(req, res) {
        try {
            const { cliente_id, cep, rua, bairro, cidade, estado } = req.body;
            const id = await EnderecoModel.create({ cliente_id, cep, rua, bairro, cidade, estado });
            res.status(201).json({ message: 'Endereço criado com sucesso!', id });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar endereço.' });
        }
    }

    static async getAll(req, res) {
        try {
            const enderecos = await EnderecoModel.getAll();
            res.status(200).json(enderecos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao obter endereços.' });
        }
    }

    static async getById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const endereco = await EnderecoModel.getById(id);
            if (endereco) {
                res.status(200).json(endereco);
            } else {
                res.status(404).json({ message: 'Endereço não encontrado.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao obter endereço.' });
        }
    }

    static async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { cep, rua, bairro, cidade, estado } = req.body;
            await EnderecoModel.update(id, { cep, rua, bairro, cidade, estado });
            res.status(200).json({ message: 'Endereço atualizado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar endereço.' });
        }
    }

    static async delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            await EnderecoModel.delete(id);
            res.status(200).json({ message: 'Endereço excluído com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao excluir endereço.' });
        }
    }
}

module.exports = EnderecoController;
