// models/participant.js
const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
 
  idP: {
    type: Number,
    required: true,
    unique: true,
  },
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  cin: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  e_mail: {
    type: String,
    required: true,
  },
  pwd: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Participant', participantSchema);