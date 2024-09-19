const db = require('../config/db');

class ItemVendaModel {
    static async create({ venda_id, produto_id, quantidade, valor_unitario }) {
        const connection = await db.getConnection();
        const [result] = await connection.query(
            'INSERT INTO itens_venda (venda_id, produto_id, quantidade, valor_unitario) VALUES (?, ?, ?, ?)',
            [venda_id, produto_id, quantidade, valor_unitario]
        );
        return result.insertId;
    }

    static async getAllByVenda(venda_id) {
        const connection = await db.getConnection();
        const [rows] = await connection.query('SELECT * FROM itens_venda WHERE venda_id = ?', [venda_id]);
        return rows;
    }

    static async delete(id) {
        const connection = await db.getConnection();
        await connection.query('DELETE FROM itens_venda WHERE id = ?', [id]);
    }
}

module.exports = ItemVendaModel;
