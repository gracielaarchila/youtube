const mongoose = require('mongoose');
const { appConfig } = require('../config');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  videoFavorito: {
    type: String,
  }


});

module.exports = mongoose.model('users', userSchema); //le pasas la coleccion
