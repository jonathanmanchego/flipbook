const generalRoute = require('./general');

const indexRouter = (app) => {
  app.use('/', generalRoute);
}

module.exports = indexRouter;