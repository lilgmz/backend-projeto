const UserModel = require("../models/UserModel");
const MD5 = require('crypto-js/md5')

const userModel = new UserModel();

class AuthController {
    async login(username, password) {
        const dados = await userModel.findAll({
            where: {
                username: username,
                password: MD5(password).toString()
            }
        })

        if(dados.length) {
            return dados[0];
        }
        return null;
    }
}

module.exports = AuthController;