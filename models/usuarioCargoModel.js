const db = require('../config/db');

class UsuarioCargoModel {
    static async create({ usuario_id, cargo_id }) {
        const connection = await db.getConnection();
        await connection.query(
            'INSERT INTO usuarios_cargos (usuario_id, cargo_id) VALUES (?, ?)',
            [usuario_id, cargo_id]
        );
    }

    static async getByUsuario(usuario_id) {
        const connection = await db.getConnection();
        const [rows] = await connection.query('SELECT * FROM usuarios_cargos WHERE usuario_id = ?', [usuario_id]);
        return rows;
    }

    static async delete(usuario_id, cargo_id) {
        const connection = await db.getConnection();
        await connection.query('DELETE FROM usuarios_cargos WHERE usuario_id = ? AND cargo_id = ?', [usuario_id, cargo_id]);
    }
}

module.exports = UsuarioCargoModel;
