ScrollReveal().reveal('.card');

$(document).ready(function () {
    $('.tarjeta-coche').on('mouseenter', function () {
        $(this).css({
            transform: 'scale(1.05)',
        });
    });

    $('.tarjeta-coche').on('mouseleave', function () {
        $(this).css({
            transform: 'scale(1)',
            boxShadow: 'none'
        });
    });

});