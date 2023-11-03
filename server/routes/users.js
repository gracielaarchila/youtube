const express = require('express');
const api = express.Router();

const {addUser, getUsers, findUser, updateUser, deleteUser} = require('../controllers/userController');

api.get('/users', getUsers );
api.post('/users',  addUser);
api.get('/users/:id', findUser);
api.put('/users/:id',  updateUser);
api.delete('/users/:id', deleteUser);

module.exports = api;
