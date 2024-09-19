const db = require('../config/db');

class ProdutoModel {
    static async create({ nome, descricao, preco, valor_venda, categoria, status }) {
        const connection = await db.getConnection();
        const [result] = await connection.query(
            'INSERT INTO produtos (nome, descricao, preco, valor_venda, categoria, status) VALUES (?, ?, ?, ?, ?, ?)',
            [nome, descricao, preco, valor_venda, categoria, status]
        );
        return result.insertId;
    }

    static async getAll() {
        const connection = await db.getConnection();
        const [rows] = await connection.query('SELECT * FROM produtos');
        return rows;
    }

    static async update(id, { nome, descricao, preco, valor_venda, categoria, status }) {
        const connection = await db.getConnection();
        await connection.query(
            'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, valor_venda = ?, categoria = ?, status = ? WHERE id = ?',
            [nome, descricao, preco, valor_venda, categoria, status, id]
        );
    }

    static async delete(id) {
        const connection = await db.getConnection();
        await connection.query('DELETE FROM produtos WHERE id = ?', [id]);
    }
}

module.exports = ProdutoModel;
