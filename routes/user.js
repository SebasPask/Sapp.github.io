'user strict'
 var express = require('express');
 var UserController = require('../controller/user');
 var api = express.Router();
 api.get('/provando-controlador',UserController.pruebas);
 module.exports = api;
 
