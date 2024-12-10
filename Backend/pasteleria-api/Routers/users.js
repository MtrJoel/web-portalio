const express = require('express');
const routers = express.Router();

const {
    getAllUsers,
    saveUsers

} = require('./../controllers/user');

routers.get('/', getAllUsers);
routers.post('/', saveUsers);

module.exports = routers;
