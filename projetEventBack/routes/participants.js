const express = require('express');
const router = express.Router();
const Participant = require('../models/participant');

router.get('/', async (req, res) => {
    try {
        const participants = await Participant.find();
        res.json(participants);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
// Récupérer un participant par son ID
router.get('/:idP', async (req, res) => {
    try {
      const participant = await Participant.findOne({ idP: req.params.idP });
      if (!participant) {
        return res.status(404).json({ message: 'participant non trouvé' });
      }
      res.json(participant);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


  // Supprimer un participant par son ID
  router.delete('/:idP', async (req, res) => {
    try {
      const participantId = req.params.idP;
  
      const participant = await Participant.findOneAndDelete({ idP: participantId });
  
      if (!participant) {
        return res.status(404).send('Participant non trouvé');
      }
  
      res.json({ message: 'Participant supprimé avec succès' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  module.exports = router;
