module.exports = function(app){
	var contact		= require ('../controllers/contact.server.controller');

	app.get('/contacto', contact.render);

	app.get('/', function(req, res) {
		res.render('home')
	});

	app.get('/godofredo', function(req, res) {
		res.render('aboutme')
	});

	app.get('/procesos', function(req, res) {
		res.render('proces')
	});

	app.get('/servicios', function(req, res) {
		res.render('services')
	});

	app.get('/portafilio', function(req, res) {
		res.render('work')
	});

};


