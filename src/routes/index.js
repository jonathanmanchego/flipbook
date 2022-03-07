const generalRoute = require('./general');
const pdfRoute = require('./pdf');

const indexRouter = app => {
  app.use('/', generalRoute);
  app.use('/pdf/', pdfRoute);
};

module.exports = indexRouter;
