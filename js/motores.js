$(document).ready(function () {
    $('.tarjeta-motor').on('mouseenter', function () {
        $(this).css({
            transform: 'scale(1.05)',
        });
    });

    $('.tarjeta-motor').on('mouseleave', function () {
        $(this).css({
            transform: 'scale(1)',
            boxShadow: 'none'
        });
    });

    ScrollReveal().reveal('.card');
});
