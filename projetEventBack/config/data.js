const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://hamedw594:waouly123@cluster0.romhdrj.mongodb.net/GestionEvent', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connecté à la base de données');
  } catch (error) {
    console.error('Erreur de connexion à la base de données :', error);
  }
};

module.exports = connectDB;