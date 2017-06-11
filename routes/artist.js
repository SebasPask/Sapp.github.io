'use strict'
var express = require('express');
var ArtistController = require('../controllers/artist');
var api = express.Router();
var md__auth = require('../middlewares/authenticated');
api.get('/artist/:id',md__auth.ensureAuth,ArtistController.getArtist);
api.post('/artist',md__auth.ensureAuth,ArtistController.saveArtist);
api.get('/artists/:page?',md__auth.ensureAuth,ArtistController.getArtists);
module.exports = api;
