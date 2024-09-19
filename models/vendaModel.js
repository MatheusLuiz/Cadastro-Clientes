const db = require('../config/db');

class VendaModel {
    static async create({ cliente_id, usuario_id, valor_total }) {
        const connection = await db.getConnection();
        const [result] = await connection.query(
            'INSERT INTO vendas (cliente_id, usuario_id, valor_total) VALUES (?, ?, ?)',
            [cliente_id, usuario_id, valor_total]
        );
        return result.insertId;
    }

    static async getAll() {
        const connection = await db.getConnection();
        const [rows] = await connection.query('SELECT * FROM vendas');
        return rows;
    }

    static async delete(id) {
        const connection = await db.getConnection();
        await connection.query('DELETE FROM vendas WHERE id = ?', [id]);
    }
}

module.exports = VendaModel;
