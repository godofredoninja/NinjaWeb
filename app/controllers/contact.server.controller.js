// Invocar modo JavaScript 'strict'
'use strict';

var nodemailer = require('nodemailer');


// Crear un nuevo método controller 'renderSendMessaje'

exports.renderSendMessage = function(req, res, next) {

    var data = {};
    data = JSON.stringify(req.body);
    console.log(data);
    res.end('1');

    // // create reusable transporter object using SMTP transport
    // var transporter = nodemailer.createTransport('SMTP', {
    //  host: 'smtp.mandrillapp.com',
    //  port: 587,
    //  // service: 'Mandrill',
    //  auth: {
    //      user: 'godofredo207@gmail.com',
    //      pass: 'xxx'
    //  }
    // });

    // // setup e-mail data with unicode symbols
    // var mailOptions = {
    //  from: req.body.name+'<godofredo207@gmail.com>', // sender address
    //  to: 'godofrodo20@gmail.com', // list of receivers
    //  subject: 'Hello ', // Subject line
    //  text: 'Hello world ', // plaintext body
    //  html: '<b>'+req.body.message+'</b>' // html body
    // };

    // // send mail with defined transport object
    // transporter.sendMail(mailOptions, function(error, info){
    //  if(error){
    //      // res.end(0);
    //      console.log(error);
    //  }else{
    //      res.end(1);
    //  }
    // });
















};






