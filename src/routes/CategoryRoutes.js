const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const CategoryRoutes = express.Router();

const categoryController = new CategoryController();

// CRUD
CategoryRoutes.get('/v1/category/search', categoryController.listar.bind(categoryController));
CategoryRoutes.get('/v1/category/:id', categoryController.consultarPorId.bind(categoryController));
CategoryRoutes.post('/v1/category', categoryController.criar.bind(categoryController));
CategoryRoutes.put('/v1/category/:id', categoryController.atualizar.bind(categoryController));
CategoryRoutes.delete('/v1/category/:id', categoryController.deletar.bind(categoryController));
// CRUD

module.exports = CategoryRoutes;