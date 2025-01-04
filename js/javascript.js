
// % Cargamos la configuracion de las cookies
document.addEventListener('DOMContentLoaded', function () {
    leerCookie();
    document.getElementById("btnAceptar").addEventListener("click", aceptar_cookie);
    document.getElementById("btnRechazar").addEventListener("click", rechazar_cookie);

});



function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function leerCookie() {
    if (getCookie("aceptar_cookie") !== "1") {
        document.getElementById("cookieOverlay").style.display = "flex";
    } else {
        document.getElementById("cookieOverlay").style.display = "none";
    }
}

function aceptar_cookie() {
    setCookie("aceptar_cookie", "1", 365);
    document.getElementById("cookieOverlay").style.display = "none";
    console.log("Cookies aceptadas");
}

function rechazar_cookie() {
    window.location.href = "https://www.google.com";
}