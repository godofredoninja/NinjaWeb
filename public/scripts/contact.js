(function(){
    'use strict';

    $('#Form').on('submit', SendData);

    var
        emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i),

        $username       = $('#name'),
        failedmessage   = 'Hay un problema, por favor intente de nuevo',
        $useremail      = $('#email'),
        $formMessage    = $('.Form-message'),
        isvalid         = 1,
        data            = {},
        url             = "/contacto";

    function SendData(e){

        var successmessage  = 'Gracias '+ $username.val() +', me pondre en contacto cuanto antes posible';

        if($username.val() === ""){
            $username.addClass('active');
            $formMessage
                .addClass('active')
                .html('Escribe tu Nombre');
            return false;
        }

        if($useremail.val() === ""){
            $useremail.addClass('active');
            $formMessage
                .addClass('active')
                .html('Escribe tu Correo');
            return false;
        }

        var valid = emailReg.test($useremail.val());

        if(!valid){
            $useremail.addClass('active');
            $formMessage
                .addClass('active')
                .html('Introduce un Correo Valido');
            return false;
        }

        data = $(this).serializeArray();


        $.ajax({
            type: "POST",
            url:"/contacto",
            data: data,
            dataType: "json",
            success: function(res){
                if(res === isvalid){
                    $formMessage.addClass('active');
                    $formMessage.html(successmessage);
                } else {
                    $formMessage.addClass('active');
                    $formMessage.html(failedmessage)
                }
            }
        });
        $('#Form input[type="text"],textarea').val('');
        e.preventDefault();
    };


    $username.focus(function(){
        $username.removeClass('active');
        $formMessage
            .removeClass('active')
            .html('');
    });

    $useremail.focus(function(){
        $useremail.removeClass('active');
        $formMessage
            .removeClass('active')
            .html('');
    });


})();
