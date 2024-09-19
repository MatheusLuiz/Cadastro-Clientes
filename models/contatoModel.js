const db = require('../config/db');

class ContatoModel {
    static async create({ cliente_id, email, ddd, telefone, tipo_id }) {
        const connection = await db.getConnection();
        const [result] = await connection.query(
            'INSERT INTO contatos_cli (cliente_id, email, ddd, telefone, tipo_id) VALUES (?, ?, ?, ?, ?)',
            [cliente_id, email, ddd, telefone, tipo_id]
        );
        return result.insertId;
    }

    static async getAllByCliente(cliente_id) {
        const connection = await db.getConnection();
        const [rows] = await connection.query('SELECT * FROM contatos_cli WHERE cliente_id = ?', [cliente_id]);
        return rows;
    }

    static async update(id, { email, ddd, telefone, tipo_id }) {
        const connection = await db.getConnection();
        await connection.query(
            'UPDATE contatos_cli SET email = ?, ddd = ?, telefone = ?, tipo_id = ? WHERE id = ?',
            [email, ddd, telefone, tipo_id, id]
        );
    }

    static async delete(id) {
        const connection = await db.getConnection();
        await connection.query('DELETE FROM contatos_cli WHERE id = ?', [id]);
    }
}

module.exports = ContatoModel;
