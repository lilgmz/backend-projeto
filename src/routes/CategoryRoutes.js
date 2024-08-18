const express = require('express');
const CategoryControllers = require('../controllers/CategoryControllers');
const CategoryRoutes =  express.Router();

const categoryControllers = new CategoryControllers();

// CRUD
CategoryRoutes.get('/users', categoryControllers.listar);
CategoryRoutes.get('/users/:id', categoryControllers.consultarPorId);
CategoryRoutes.post('/users', categoryControllers.criar);
CategoryRoutes.put('/users/:id', categoryControllers.atualizar);
CategoryRoutes.delete('/users/:id', categoryControllers.deletar);
// CRUD

module.exports = CategoryRoutes;