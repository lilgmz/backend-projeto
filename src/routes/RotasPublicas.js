const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const AuthController = require('../controllers/AuthController');

const RotasPublicas = express.Router();

RotasPublicas.post('/login', async (request, response) => {
    
    const body = request.body;
    const auth = new AuthController();
    const dados = auth.login(body.username, body.password);

    if(dados) {

        const dataToken = {
            id: dados.id,
            email: dados.email,
            username: dados.username,
            exp: Math.floor(Date.now() / 1000) + (60 * 60) // Expira em 60 minutos
        }
        
        const token = jwt.sign(dataToken, process.env.APP_KEY_TOKEN)
        return response.json({
            data: dados,
            token: token
        })
    }

    return response.json({
        message: "Login ou senha incorreta"
    })

});

module.exports = RotasPublicas;