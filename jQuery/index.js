$(document).ready(function () {
    /*CAMBIANDO CON SELECTORES
    $('.titulo').html('Chaoo');
    $('.titulo').addClass('text-danger');
    $('.titulo').addClass('text-center');
    $('.titulo').removeClass('text-center');
    $('.titulo').append('<h1 class="titulo">bye</h1>');
    $('#contenido').prepend('<h1 class="titulo">hi</h1>');
    $('.titulo').css({color: 'blue'});
    $('h2').remove();
    $('h3').hide();
    VENTOS
    var parrafo = $('#resultado p');

    $('.btn-primary').click(function (){ 
    parrafo.addClass('display-4')
    });

    $('.btn-danger').click(function (){
        parrafo.removeClass('display-4')
    });   

    $('.btn-warning').click(function(){
        parrafo.toggleClass('display-4')
    });*/

    $('.btn-primary').click(function(){
        $('p').hide();
    });
});
