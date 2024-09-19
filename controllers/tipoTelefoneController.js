const TipoTelefoneModel = require('../models/tipoTelefoneModel');

class TipoTelefoneController {
    static async create(req, res) {
        try {
            const { descricao } = req.body;
            const id = await TipoTelefoneModel.create({ descricao });
            res.status(201).json({ message: 'Tipo de telefone criado com sucesso!', id });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar tipo de telefone.' });
        }
    }

    static async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { descricao } = req.body;
            await TipoTelefoneModel.update(id, { descricao });
            res.status(200).json({ message: 'Tipo de telefone atualizado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar tipo de telefone.' });
        }
    }

    static async getAll(req, res) {
        try {
            const tipos = await TipoTelefoneModel.getAll();
            res.status(200).json(tipos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao obter tipos de telefone.' });
        }
    }

}

module.exports = TipoTelefoneController;
