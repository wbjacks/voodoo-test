const express = require('express')
const app = express();
const port = 8000;

app.use(express.json())
app.use('/purchase', require('./api/purchase_controller'))

var server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

module.exports = server;
