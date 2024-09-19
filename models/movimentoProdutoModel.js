const db = require('../config/db');

class MovimentoProdutoModel {
    static async create({ estoque_id, produto_id, tipo, quantidade, observacao }) {
        const connection = await db.getConnection();
        const [result] = await connection.query(
            'INSERT INTO movimentos_produtos (estoque_id, produto_id, tipo, quantidade, observacao) VALUES (?, ?, ?, ?, ?)',
            [estoque_id, produto_id, tipo, quantidade, observacao]
        );
        return result.insertId;
    }

    static async getAll() {
        const connection = await db.getConnection();
        const [rows] = await connection.query('SELECT * FROM movimentos_produtos');
        return rows;
    }

    static async delete(id) {
        const connection = await db.getConnection();
        await connection.query('DELETE FROM movimentos_produtos WHERE id = ?', [id]);
    }
}

module.exports = MovimentoProdutoModel;
