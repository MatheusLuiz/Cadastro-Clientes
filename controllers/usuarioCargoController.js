const UsuarioCargoModel = require('../models/usuarioCargoModel');

class UsuarioCargoController {
    static async create(req, res) {
        try {
            const { usuario_id, cargo_id } = req.body;
            await UsuarioCargoModel.create({ usuario_id, cargo_id });
            res.status(201).json({ message: 'Cargo atribuído ao usuário com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atribuir cargo ao usuário.' });
        }
    }

    static async getByUsuario(req, res) {
        try {
            const { usuario_id } = req.params;
            const cargos = await UsuarioCargoModel.getByUsuario(usuario_id);
            res.status(200).json(cargos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao obter cargos do usuário.' });
        }
    }

    static async delete(req, res) {
        try {
            const { usuario_id, cargo_id } = req.params;
            await UsuarioCargoModel.delete(usuario_id, cargo_id);
            res.status(200).json({ message: 'Cargo excluído do usuário com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao excluir cargo do usuário.' });
        }
    }
}

module.exports = UsuarioCargoController;
