const router = require('express').Router();
const Dish = require('../manga');
const Handlebars = require("handlebars")
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});


// This is the GET route 
router.get('/', async (req, res) => {
    // Here, index.html is rendered
    res.sendFile(path.join(__dirname, '../views/index.html'));
  });
// This is the 'POST route 
  router.post('/', async (req, res) => {
    res.json(data);
  });
  
  app.use('/api', router);
  
  module.exports = router;