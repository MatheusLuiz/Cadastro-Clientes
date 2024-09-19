const db = require('../config/db'); 
class EnderecoModel {
    static async create({ cliente_id, cep, rua, bairro, cidade, estado }) {
        const connection = await db.getConnection();
        const [result] = await connection.query(
            'INSERT INTO enderecos_cli (cliente_id, cep, rua, bairro, cidade, estado) VALUES (?, ?, ?, ?, ?, ?)',
            [cliente_id, cep, rua, bairro, cidade, estado]
        );
        return result.insertId;
    }


    static async getById(id) {
        const connection = await db.getConnection();
        const [rows] = await connection.query('SELECT * FROM enderecos_cli WHERE id = ?', [id]);
        return rows[0];
    }

    static async update(id, { cep, rua, bairro, cidade, estado }) {
        const connection = await db.getConnection();
        await connection.query(
            'UPDATE enderecos_cli SET cep = ?, rua = ?, bairro = ?, cidade = ?, estado = ? WHERE id = ?',
            [cep, rua, bairro, cidade, estado, id]
        );
    }

    static async delete(id) {
        const connection = await db.getConnection();
        await connection.query('DELETE FROM enderecos_cli WHERE id = ?', [id]);
    }
}

module.exports = EnderecoModel;
