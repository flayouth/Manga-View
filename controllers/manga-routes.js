const router = require('express').Router();
const manga = require('../models/manga');
const Handlebars = require("handlebars")


// This is the GET route 
router.get('/', async (req, res) => {
    // Here, index.html is rendered
    res.sendFile(path.join(__dirname, '../views/index.html'));
  });
// This is the 'POST route 
  router.post('/', async (req, res) => {
    res.json(data);
  });
  
  
  module.exports = router;