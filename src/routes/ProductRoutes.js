const express = require('express');
const ProductController = require('../controllers/ProductController');
const ProductRoutes = express.Router();

const productController = new ProductController();

// CRUD
ProductRoutes.get('/v1/product/search', productController.listar.bind(productController));
ProductRoutes.get('/v1/product/:id', productController.consultarPorId.bind(productController));
ProductRoutes.post('/v1/product', productController.criar.bind(productController));
ProductRoutes.put('/v1/product/:id', productController.atualizar.bind(productController));
ProductRoutes.delete('/v1/product/:id', productController.deletar.bind(productController));
// CRUD

module.exports = ProductRoutes;