// Invocar el modo 'strict' de JavaScript mode
'use strict';

// Cargar las dependencias del módulo
// var config          = require('./config');
// var session          = require('express-session');
var express			= require('express'),
	morgan			= require('morgan'),
	compress		= require('compression'),
	bodyParser		= require('body-parser'),
	methodOverride	= require('method-override'),
	nodemailer		= require('nodemailer');

// Definir el método de configuración de Express
module.exports = function () {
	// Crear una nueva instancia de la aplicación Express
	var app = express();

	// Usar la variable 'NODE_ENV' para activar los middleware 'morgan' logger o 'compress'
	if (process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production'){
		app.use(compress());
	}

	// Usar las funciones middleware 'body-parser' y 'method-override'
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());
	app.use(methodOverride());

	// Configurar el middleware 'session'
	// app.use(session({
	// 	saveUninitialized: true,
	// 	resave: true,
	// 	secret: config.sessionSecret
	// }));

	// Configurar el motor view de la aplicación y el directorio 'views'
	app.set('views', './app/views/pages');
	app.set('view engine', 'jade');

	// Cargar los archivos de enrutamiento
	require('../app/routes/index.server.routes.js')(app);

	// Configurar el servidor de archivos estáticos
	app.use(express.static('./public'));

	/// 404 page error
	app.use(function(req, res, next){
		res.status(404);

		// respond with html page
		if (req.accepts('html')) {
			res.render('404', { url: req.url });
			return;
		}

		// respond with json
		if (req.accepts('json')) {
			res.send({ error: 'Not found' });
			return;
		}

		// default to plain-text. send()
		res.type('txt').send('Not found');
	});

	// Devolver la instancia de la aplicación Express
	return app;
}
