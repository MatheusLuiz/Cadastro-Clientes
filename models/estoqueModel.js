const db = require('../config/db');

class EstoqueModel {
    static async create({ nome_estoque, usuario_id }) {
        const connection = await db.getConnection();
        const [result] = await connection.query(
            'INSERT INTO estoque (nome_estoque, usuario_id) VALUES (?, ?)',
            [nome_estoque, usuario_id]
        );
        return result.insertId;
    }

    static async getAll() {
        const connection = await db.getConnection();
        const [rows] = await connection.query('SELECT * FROM estoque');
        return rows;
    }

    static async update(id, { nome_estoque, usuario_id }) {
        const connection = await db.getConnection();
        await connection.query(
            'UPDATE estoque SET nome_estoque = ?, usuario_id = ? WHERE id = ?',
            [nome_estoque, usuario_id, id]
        );
    }

    static async delete(id) {
        const connection = await db.getConnection();
        await connection.query('DELETE FROM estoque WHERE id = ?', [id]);
    }
}

module.exports = EstoqueModel;
