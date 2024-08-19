const UserModel = require("../models/UserModel");
const MD5 = require('crypto-js/md5');

class AuthController {
    async login(username, password) {
        try {
            const hashedPassword = MD5(password).toString(); // Criptografa a senha com MD5
            const user = await UserModel.findAll({
                where: {
                    username: username,
                    password: hashedPassword
                }
            });

            if (user) {
                return user; // Retorna o usuário encontrado
            }
            return null;
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            throw new Error("Erro ao buscar usuário");
        }
    }
}

module.exports = AuthController;