const express = require('express');
const router = express.Router();
const Evenement = require('../models/evenements');
router.get('/', async (req, res) => {
    try {
        const evenements = await Evenement.find();
        res.json(evenements);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
// Récupérer un événement par son ID
router.get('/:idE', async (req, res) => {
    try {
      const evenement = await Evenement.findOne({ _id: req.params.idE });
      console.log(evenement);
      if (!evenement) {
        return res.status(404).json({ message: 'Événement non trouvé' });
      }
      res.json(evenement);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Créer un nouvel événement
  router.post('/ajout', async (req, res) => {
    const evenement = new Evenement({
      idE: req.body.idE,
      nom: req.body.nom,
      date: req.body.date,
      img: req.body.img,
      nbrPart: req.body.nbrPart,
      nbrPlace: req.body.nbrPlace,
      disponible: req.body.disponible,
      description: req.body.description,
    });
  
    try {
      const nouveauEvenement = await evenement.save();
      res.status(201).json(nouveauEvenement);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Mettre à jour un événement par son ID
  router.put('/:idE', async (req, res) => {
    try {
      const evenement = await Evenement.findOne({ idE: req.params.idE });
      if (!evenement) {
        return res.status(404).json({ message: 'Événement non trouvé' });
      }
  
      evenement.nom = req.body.nom;
      evenement.date = req.body.date;
      evenement.img = req.body.img;
      evenement.nbrPart = req.body.nbrPart;
      evenement.nbrPlace = req.body.nbrPlace;
      evenement.disponible = req.body.disponible;
      evenement.description = req.body.description;
  
      const evenementMiseAJour = await evenement.save();
      res.json(evenementMiseAJour);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Supprimer un événement par son ID
  router.delete('/:idE', async (req, res) => {
    try {
      const eventId = req.params.idE;
  
      const evenement = await Evenement.findOneAndDelete({ idE: eventId });
  
      if (!evenement) {
        return res.status(404).send('Événement non trouvé');
      }
  
      res.json({ message: 'Événement supprimé avec succès' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  module.exports = router;    