const express = require('express');
const UserController = require('../controllers/UserController'); // Certifique-se de que o nome está correto
const UserRoutes = express.Router();

const userController = new UserController();

// CRUD
UserRoutes.get('/v1/user/:id', userController.consultarPorId.bind(userController));
UserRoutes.post('/v1/user', userController.criar.bind(userController));
UserRoutes.put('/v1/user/:id', userController.atualizar.bind(userController));
UserRoutes.delete('/v1/user/:id', userController.deletar.bind(userController));
// CRUD

module.exports = UserRoutes;