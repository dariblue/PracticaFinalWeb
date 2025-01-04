function abrirNoticia(selector) {
    $(selector).fadeIn(300); // Muestra con un efecto de desvanecimiento
}

function cerrarNoticia(selector) {
    $(selector).fadeOut(300); // Oculta con un efecto de desvanecimiento
}

$(document).on('keydown', function (e) {
    if (e.key === "Escape") {
        $('.mas-noticia:visible').fadeOut(300); // Oculta cualquier noticia visible
    }
});

ScrollReveal().reveal('.noticia');
