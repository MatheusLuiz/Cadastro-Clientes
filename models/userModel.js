const db = require('../config/db');

class UserModel {
    static async findByLogin(login_usu) {
        const results = await db.query('SELECT * FROM usuarios WHERE login_usu = ?', [login_usu]);
        return results.length > 0 ? results[0] : null;
    }
}

module.exports = UserModel;
