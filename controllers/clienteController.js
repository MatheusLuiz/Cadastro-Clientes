const ClienteModel = require('../models/clienteModel');

class ClienteController {
    static async create(req, res) {
        try {
            const { nome, sobrenome, cpf, sexo, status } = req.body;
            const id = await ClienteModel.create({ nome, sobrenome, cpf, sexo, status });
            res.status(201).json({ message: 'Cliente criado com sucesso!', id });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar cliente.' });
        }
    }

    static async getAll(req, res) {
        try {
            const clientes = await ClienteModel.getAllByStatus(); 
            res.status(200).json(clientes);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao obter clientes.' });
        }
    }

    static async getByCPF(req, res) {
        try {
            const cpf = req.params.cpf;
            const cliente = await ClienteModel.getByCPF(cpf);
            if (cliente) {
                res.status(200).json(cliente);
            } else {
                res.status(404).json({ message: 'Cliente não encontrado.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao obter cliente.' });
        }
    }

    static async update(req, res) {
        try {
            const cpf = req.params.cpf;
            const { nome, sobrenome, sexo, status } = req.body;
            await ClienteModel.update(cpf, { nome, sobrenome, sexo, status });
            res.status(200).json({ message: 'Cliente atualizado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar cliente.' });
        }
    }

    static async delete(req, res) {
        try {
            const cpf = req.params.cpf;
            await ClienteModel.delete(cpf);
            res.status(200).json({ message: 'Cliente excluído com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao excluir cliente.' });
        }
    }
}

module.exports = ClienteController;
