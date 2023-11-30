const mongoose = require('mongoose');

const evenementSchema = new mongoose.Schema({
 
  idE: {
    type: Number,
    required: false, // Allow null values if needed
    unique: true,
   
  },
  nom: {
    type: String,
    required: true,
  },
  date: {
    type: Date, 
    required: true,
  },
  img: {
    type: String, 
  },
  nbrPart: {
    type: Number,
    
  },
  nbrPlace: {
    type: Number,
    required: true,
  },
  disponible: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Evenement', evenementSchema);