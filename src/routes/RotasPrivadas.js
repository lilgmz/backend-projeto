const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const UserRoutes = require('./UserRoutes');
const ProductRoutes = require('./ProductRoutes');
const CategoryRoutes = require('./CategoryRoutes');

const RotasPrivadas = express.Router();

//Middleware de autenticação
RotasPrivadas.use((request, response, next) => {

    const token = request.headers.token;
    try {
        jwt.verify(token, process.env.APP_KEY_TOKEN)
    }catch(JsonWebTokenError) {
        return response.status(403).send("Não autorizado")
    }
    next();
    
});

RotasPrivadas.use('/v1/user', UserRoutes);
RotasPrivadas.use('/v1/product', ProductRoutes);
RotasPrivadas.use('/v1/category', CategoryRoutes);

module.exports = RotasPrivadas;