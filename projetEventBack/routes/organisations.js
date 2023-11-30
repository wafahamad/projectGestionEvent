const express = require('express');
const router = express.Router();
const Organisation = require('../models/organisations');

router.get('/', async (req, res) => {
    try {
        const organisations = await Organisation.find();
        res.json(organisations);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
module.exports = router;     