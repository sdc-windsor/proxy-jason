const express = require('express');
const app = express();

app.use(express.static('public'));
app.use('/:id', express.static('public'));

module.exports = app;