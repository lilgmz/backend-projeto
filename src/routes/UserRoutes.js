const express = require('express');
const UsersControllers = require('../controllers/UsersControllers');
const UsersRoutes =  express.Router();

const usersControllers = new UsersControllers();

// CRUD
UsersRoutes.get('/users', usersControllers.listar);
UsersRoutes.get('/users/:id', usersControllers.consultarPorId);
UsersRoutes.post('/users', usersControllers.criar);
UsersRoutes.put('/users/:id', usersControllers.atualizar);
UsersRoutes.delete('/users/:id', usersControllers.deletar);
// CRUD

module.exports = UsersRoutes;