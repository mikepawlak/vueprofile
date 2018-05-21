const express = require('express');
const router = express.Router();
const dataLoader = require('./../utl/dataLoader.js');

router.get('/skills', (req, res) => {
  res.json(dataLoader('skills'));
});
router.get('/projects', (req, res) => {
  res.json(dataLoader('projects'));
});

module.exports = router;
