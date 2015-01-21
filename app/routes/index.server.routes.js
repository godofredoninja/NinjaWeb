// Invocar el modo 'strict' de JavaScript
'use strict';

module.exports = function(app){
	var contact		= require ('../controllers/contact.server.controller');


	//Configurar las rutas 'Contact'
	app.route('/contacto')
		.get(function(req, res) {
        	res.render('contact')
    	})
		.post(contact.renderSendMessaje);

	app.get('/', function(req, res) {
		res.render('home')
	});

	app.get('/godofredo', function(req, res) {
		res.render('aboutme')
	});

	app.get('/procesos', function(req, res) {
		res.render('process')
	});

	app.get('/servicios', function(req, res) {
		res.render('services')
	});

	app.get('/portafolio', function(req, res) {
		res.render('work')
	});





};


