'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;
mongoose.connect('mongodb://localhost:27017/curso-mean2', (err, res) => {
  if(err){
    throw err;
  }else{
    console.log("CONEXION EXITOSA");
    app.listen(port,function(){
      console.log("Servidor del API rest de musica escuchando en http://localhost:" + port );
    })
  }
});
