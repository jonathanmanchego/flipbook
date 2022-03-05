const express = require('express')
const app = express()
const indexRouter = require('./src/routes');
const port = process.env.PORT || 3000

indexRouter(app);

app.listen(port, () => {
  console.log(`Magazine backend software listen port => ${port}`)
})