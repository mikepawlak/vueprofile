

const express = require('express');
const history = require('connect-history-api-fallback');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();


const hbs = require('express-hbs');
app.use(compression());

app.engine('hbs', hbs.express4({
  partialsDir   : __dirname +'/views/partials',
  defaultLayout : __dirname +'/views/layouts/main',
  extname       : '.hbs',
  layoutsDir    : __dirname +'/views/layouts',
})).set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/public', express.static(path.join(__dirname, '../client')));
app.use('/mod', express.static(path.join(__dirname, '../node_modules')));


app.get('/', (req, res) => {
  res.render('index');
});

const data = require('./routes/data.js');
app.use('/data', data);

const contact = require('./routes/contact.js');
app.use('/contact', contact);

app.get('/not-found', (req, res) => {
  res.status(404);
  res.render('not-found');
});

app.get("*", (req, res) => {
  res.status(404);
  res.render('not-found');
});

app.use(history({
  index: '/'
}));

app.listen(8080, () => {
  console.log("Listening on 8080");
});


module.exports = app;
