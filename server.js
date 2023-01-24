var express = require('express');
var handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const routes = require('./public')
const path = require('path');

const sequelize = require('./config/connection');


var app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});