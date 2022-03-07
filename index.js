const express = require('express');
const bootstrap = require('bootstrap');
const app = express();
const server = require('./server');
const port = process.env.PORT || 3000;

server(app);

app.listen(port, () => {
  console.log(`Magazine backend software listen port => ${port}`);
});
