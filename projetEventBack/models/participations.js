// models/participations.js
const mongoose = require('mongoose');
const participant = require('./participant');
const evenement = require('./evenements');

const participationsSchema = new mongoose.Schema({
  id: {
    type: String,
    //required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now, // Utilisation de la fonction Date.now pour la date actuelle
    required: true,
  },
  nbPrs: {
    type: Number,
    required: true,
},
participant:{
    idP:{
        type:String,
        required: true
    },
    nom:{
        type: String,
        required: true
    }
},
evenement:{
    idE:{
        type: String,
        required: true
    }
}
  
});

module.exports = mongoose.model('Participation', participationsSchema);