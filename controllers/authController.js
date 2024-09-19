const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/userModel');

class AuthController {
    static async login(req, res) {
        const { login_usu, senha_usu } = req.body;

        try {
            const user = await UserModel.findByLogin(login_usu);
            if (!user) return res.status(401).send('Usuário não encontrado');

            const isMatch = await bcrypt.compare(senha_usu, user.senha_usu);
            if (!isMatch) return res.status(401).send('Senha incorreta');

            const token = jwt.sign({ id: user.usuario_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true }); 
            res.status(200).send('Login realizado com sucesso'); 
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro no servidor');
        }
    }

    static logout(req, res) {
        res.clearCookie('token');
        res.send('Logout realizado com sucesso');
    }
}

module.exports = AuthController;
