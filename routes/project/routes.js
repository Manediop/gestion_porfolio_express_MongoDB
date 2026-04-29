const express = require('express');
const router = express.Router();

// Route simple
router.get('/', (req, res) => {
  res.send('Liste des projets');
});

// Route avec paramètre de route
router.get('/:id', (req, res) => {
  const { id } = req.params; // Réception du paramètre de route
  res.send(`Projet avec l'id : ${id}`);
});

module.exports = router;