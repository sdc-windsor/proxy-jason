require('newrelic');
const app = require('./app.js');
const port = 80;

app.listen(port, () => console.log(`Listening on port: ${port}`));
