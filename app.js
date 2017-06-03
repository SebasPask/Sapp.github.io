'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//carga de rutas
var user_routes = require('./routes/user');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configurar cabeceras hide.bs.tooltip

// rutas base
app.user('/api', user_routes);

app.get('/pruebas', function(reg,res){
  res.status(200).send({message:'Bienvenido SebasPask'})
})

module.exports = app;
