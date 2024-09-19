const db = require('../config/db');

class TipoTelefoneModel {

    static async create({ descricao }) {
        const connection = await db.getConnection();
        const [result] = await connection.query(
            'INSERT INTO tipos_telefone (descricao) VALUES (?)',
            [descricao]
        );
        return result.insertId;
    }

    static async update(id, { descricao }) {
        const connection = await db.getConnection();
        await connection.query(
            'UPDATE tipos_telefone SET descricao = ? WHERE id = ?',
            [descricao, id]
        );
    }

    static async getAll() {
        const connection = await db.getConnection();
        const [rows] = await connection.query('SELECT * FROM tipos_telefone');
        return rows;
    }

}

module.exports = TipoTelefoneModel;