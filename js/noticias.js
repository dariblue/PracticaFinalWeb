function abrirNoticia(selector) {
    $(selector).fadeIn(300);
}

function cerrarNoticia(selector) {
    $(selector).fadeOut(300);
}

// Ocultar noticia con el boton escape
$(document).on('keydown', function (e) {
    if (e.key === "Escape") {
        $('.mas-noticia:visible').fadeOut(300);
    }
});

ScrollReveal().reveal('.noticia');
