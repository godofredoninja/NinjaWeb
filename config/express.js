var config			= require('./config'),
	session			= require('express-session'),
	express			= require('express'),
	morgan			= require('morgan'),
	compress		= require('compression'),
	bodyParser		= require('body-parser'),
	methodOverride	= require('method-override');

module.exports = function () {
	var app = express();

	if (process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'producction'){
		app.use(compress());
	}

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());
	app.use(methodOverride());

	//session peticiones request
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

	// view engine setup by jade
	app.set('views', './app/views');
	app.set('view engine', 'jade');

	require('../app/routes/index.server.routes.js')(app);

	// static files
	app.use(express.static('./public'));

	return app;
}
