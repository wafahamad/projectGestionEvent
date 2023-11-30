const express = require('express');
const bcrypt = require('bcrypt');
const Participant = require('../models/participant');
const { generateToken } = require('../utils/jwt');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { e_mail, pwd ,nom,prenom,age,cin,idP} = req.body;

  try {
    const hashedPassword = await bcrypt.hash(pwd, 10);
    const participant = new Participant({ e_mail, pwd: hashedPassword ,nom,prenom,age,cin,idP});
    await participant.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  const { e_mail, pwd } = req.body;

  try {
    const participant = await Participant.findOne({ e_mail });

    if (!participant) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(pwd, participant.pwd);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = generateToken(participant);
    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
