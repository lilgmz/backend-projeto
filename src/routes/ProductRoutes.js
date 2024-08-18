const express = require('express');
const ProductControllers = require('../controllers/ProductControllers');
const ProductRoutes =  express.Router();

const productControllers = new ProductControllers();

// CRUD
ProductRoutes.get('/users', productControllers.listar);
ProductRoutes.get('/users/:id', productControllers.consultarPorId);
ProductRoutes.post('/users', productControllers.criar);
ProductRoutes.put('/users/:id', productControllers.atualizar);
ProductRoutes.delete('/users/:id', productControllers.deletar);
// CRUD

module.exports = ProductRoutes;