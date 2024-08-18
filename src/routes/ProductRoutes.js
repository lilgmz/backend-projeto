const express = require('express');
const ProductControllers = require('../controllers/ProductControllers');
const ProductRoutes =  express.Router();

const productControllers = new ProductControllers();

// CRUD
ProductRoutes.get('/products', productControllers.listar);
ProductRoutes.get('/products/:id', productControllers.consultarPorId);
ProductRoutes.post('/products', productControllers.criar);
ProductRoutes.put('/products/:id', productControllers.atualizar);
ProductRoutes.delete('/products/:id', productControllers.deletar);
// CRUD

module.exports = ProductRoutes;