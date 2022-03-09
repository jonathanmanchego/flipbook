const express = require('express');
const indexRouter = require('./src/routes');
const bodyParser = require('body-parser');

module.exports = app => {
  app.use(bodyParser.urlencoded({ extended: true }));

  // initialize routing
  indexRouter(app);

  // initialize statics
  app.use('/', express.static(__dirname + '/src/public'));
  app.set('views', __dirname + '/src/views');
  app.set('view engine', 'pug');
};
