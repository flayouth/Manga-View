const router = require('express').Router();
const Dish = require('../manga');
const Handlebars = require("handlebars");

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});


// This is the 'get' route 
router.get('/', async (req, res) => {
    // Here, index.html is rendered
    res.sendFile(path.join(__dirname, '../views/index.html'));
  });
  
  module.exports = router;