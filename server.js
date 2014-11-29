var express = require('./config/express');

var app = express();
app.listen(3000);
module.exports = app;

console.log('servidor ejecutandose en => localhost:3000');
