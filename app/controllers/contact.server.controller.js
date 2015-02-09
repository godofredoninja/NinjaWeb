// Invocar modo JavaScript 'strict'
'use strict';
var nodemailer = require('nodemailer');

// Crear un nuevo método controller 'renderSendMessaje'
exports.renderSendMessage = function(req, res, next) {

    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: "Mailgun",
        auth: {
            user: 'postmaster@mg.godofredo.ninja',
            pass: 'xxx'
        }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: req.body.name +'<postmaster@mg.godofredo.ninja>', // sender address
        to: 'hello@godofredo.ninja', // list of receivers
        subject: 'Mail Ninja Web', // Subject line
        html: ''
        + '<p> Nombre: '+ req.body.name +'</p>'
        + '<p> Email: '+ req.body.email +'</p>'
        + '<p> Telefono: '+ req.body.phone +'</p>'
        + '<p> Empresa: '+ req.body.company +'</p>'
        + '<p> Mensage: '+ req.body.message +'</p>'
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            // console.log(error);
            res.end("0");
        }else{
            res.end("1");
        }
    });
};
