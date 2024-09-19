const db = require('../config/db');

class ClienteModel {
    static async create({ nome, sobrenome, cpf, sexo, status }) {
        const connection = await db.getConnection();
        const [result] = await connection.query(
            'INSERT INTO clientes (nome, sobrenome, cpf, sexo, status) VALUES (?, ?, ?, ?, ?)',
            [nome, sobrenome, cpf, sexo, status]
        );
        return result.insertId;
    }

    static async getAllByStatus() {
        const status = 'ativo';
        const connection = await db.getConnection();
        const [rows] = await connection.query('SELECT * FROM clientes WHERE status = ?', [status]);
        return rows;
    }

    static async getByCPF(cpf) {
        const connection = await db.getConnection();
        const [rows] = await connection.query('SELECT * FROM clientes WHERE cpf = ?', [cpf]);
        return rows[0];
    }

    static async update(cpf, { nome, sobrenome, sexo, status }) {
        const connection = await db.getConnection();
        await connection.query(
            'UPDATE clientes SET nome = ?, sobrenome = ?, sexo = ?, status = ? WHERE cpf = ?',
            [nome, sobrenome, sexo, status, cpf]
        );
    }

    static async delete(cpf) {
        const connection = await db.getConnection();
        await connection.query('DELETE FROM clientes WHERE cpf = ?', [cpf]);
    }
}

module.exports = ClienteModel;
