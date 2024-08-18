const express = require('express');
const CategoryControllers = require('../controllers/CategoryControllers');
const CategoryRoutes =  express.Router();

const categoryControllers = new CategoryControllers();

// CRUD
CategoryRoutes.get('/products', categoryControllers.listar);
CategoryRoutes.get('/products/:id', categoryControllers.consultarPorId);
CategoryRoutes.post('/products', categoryControllers.criar);
CategoryRoutes.put('/products/:id', categoryControllers.atualizar);
CategoryRoutes.delete('/products/:id', categoryControllers.deletar);
// CRUD

module.exports = CategoryRoutes;