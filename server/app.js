const express = require('express');
const app = express();

app.use('/', function (req, res, next) {
  console.log('Time:', Date.now())
  console.log('url', req.url);
  next()
});

app.use(express.static('public'));
app.use('/:id', express.static('public'));

module.exports = app;