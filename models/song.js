'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SongSchema = Schema({
          number:String,
          name:String,
          duretion:String,
          file:String,
          albun:{type:Schema.ObjectId,ref:'Artist'}
});
module.exports = mongoose.model('Song',SongSchema);
