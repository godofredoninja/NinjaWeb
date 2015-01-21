(function(){
    'use strict';

    //scroll
    $('.Scroll').on('click', function(e){
        e.preventDefault();
        var strAncla = $(this).attr('href');
        $('body,html')
            .stop(true,true)
            .animate({scrollTop: $(strAncla).offset().top-185},1000);
    });



    //Logo Animation
    $(".Header-logoImagen").on("mouseenter", function(){
        mask(192)
    });
    var i =0;
    function mask(a){
        i++;
        if (i < a) {
            $(".Header-logoImagen").attr("style", "-webkit-mask:-webkit-gradient(radial, 17 17, "+ i +", 17 17, "+ (i+15) +", from(rgb(0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0.2)), to(rgb(0, 0, 0)));");
            setTimeout(function (){mask(a);},20-i);
        }
        else i=0;
    }

    // Countdown initializer work
    $('.Timer').countdown('2015/02/10').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
            + '<div class="Timer-items"><div class="Timer-conten"><div class="Timer-des"><span class="Timer-num">%D</span><span class="Timer-le">Dias</span></div></div></div>'
            + '<div class="Timer-items"><div class="Timer-conten"><div class="Timer-des"><span class="Timer-num">%H</span><span class="Timer-le">Horas</span></div></div></div>'
            + '<div class="Timer-items"><div class="Timer-conten"><div class="Timer-des"><span class="Timer-num">%M</span><span class="Timer-le">Minutos</span></div></div></div>'
            + '<div class="Timer-items"><div class="Timer-conten"><div class="Timer-des"><span class="Timer-num">%S</span><span class="Timer-le">Segundos</span></div></div></div>'
        ));
    });


    // typed 404
    $('.ErrorPage-code').typed({
        strings: ['^2000$ ^2000 404.^2000 Error.^2000 \n$ ^2000 Lo que buscas \n$  no esta Aquí.'],
        typeSpeed: 20,
        backDelay: 500,
        loop: false,
        loopCount: false,
    });

    resizeHeight();



// End Function Anonima
})();

function resizeHeight() {
    var ancho = $(window).width();
    var altura = $(".Header").offset().top;

    if (ancho >= 768) {
        //Height
        $('.u-Height').each(function() {
            $(this).height(($(window).height())-140);
        });

        // Menu
        $(window).scroll(function(){

          if($(window).scrollTop() >= altura){
                $(".Header").addClass('active');
            }else{
                $(".Header").removeClass('active');
            }
        });

    }else{
        $('.u-Height').css({height:'auto'});
        $(".Header").removeClass('active');
    }

}

$(window).resize(resizeHeight);



