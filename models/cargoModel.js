const db = require('../config/db');

class CargoModel {
    static async create({ descricao }) {
        const connection = await db.getConnection();
        const [result] = await connection.query(
            'INSERT INTO cargos (descricao) VALUES (?)',
            [descricao]
        );
        return result.insertId;
    }

    static async getAll() {
        const connection = await db.getConnection();
        const [rows] = await connection.query('SELECT * FROM cargos');
        return rows;
    }

    static async update(id, { descricao }) {
        const connection = await db.getConnection();
        await connection.query(
            'UPDATE cargos SET descricao = ? WHERE cargo_id = ?',
            [descricao, id]
        );
    }

    static async delete(id) {
        const connection = await db.getConnection();
        await connection.query('DELETE FROM cargos WHERE cargo_id = ?', [id]);
    }
}

module.exports = CargoModel;
