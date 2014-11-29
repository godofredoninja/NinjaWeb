var express = require('express');
var app = express();

app.use('/', function (req, res) {
	res.send('hola Mundo');
});

app.listen(3000);

console.log('servidor ejecutandose en => localhost:3000');
module.exports = app;
