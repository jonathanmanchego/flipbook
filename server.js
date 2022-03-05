const express = require('express');
const indexRouter = require('./src/routes');

module.exports = (app) => {
  // initialize routing
  indexRouter(app);

  // initialize statics
  app.use('/', express.static(__dirname + '/src/public'));
  app.set('views', __dirname + '/src/views')
  app.set('view engine', 'pug');
}