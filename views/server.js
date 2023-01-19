var express = require('express');
var handlebars = require('handlebars');
const exphbs = require('express-handlebars');


const sequelize = require('./config/connection');

const hbs = exphbs.create({});

var app = express();
app.engine('handlebars', handlebars.__express);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});