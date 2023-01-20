const router = require('express').Router();
const manga = require('../models/manga');
const Handlebars = require("handlebars")
const path = require('path')


// This is the GET route 
router.get('/', async (req, res) => {
  res.render('home')
   
  });

// This is the 'POST route 
  router.post('/', async (req, res) => {
    res.json(data);
  });
  
  
  module.exports = router;