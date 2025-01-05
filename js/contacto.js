document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("formularioContacto").addEventListener("submit", accederAFormulario);
    initMap();


});




function initMap() {
    const location = { lat: 40.44111087540108, lng: -3.834111959060126 };

    const darkStyle = [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
        },
        {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
        },
        {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
        },
    ];

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
        styles: darkStyle
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}


function accederAFormulario(event) {

    event.preventDefault();

    let nombre = document.forms["formularioContacto"]["nombre"].value;
    let apellidos = document.forms["formularioContacto"]["apellidos"].value;
    let email = document.forms["formularioContacto"]["email"].value;
    let telefono = document.forms["formularioContacto"]["telefono"].value;
    let asunto = document.forms["formularioContacto"]["asunto"].value;
    let mensaje = document.forms["formularioContacto"]["mensaje"].value;

    // Expresiones regulares
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let telefonoRegex = /^(\\+34|0034|34)?[6789]\d{8}$/;

    if (!nombre) {
        let campo = document.getElementById('nombre');
        campo.classList.add('erroneo');
        alert("Por favor, introduzca su nombre.");
        campo.addEventListener('click', function () {
            this.classList.remove('erroneo');
        });
        return;
    }

    if (!apellidos) {
        let campo = document.getElementById('apellidos');
        campo.classList.add('erroneo');
        alert("Por favor, introduzca sus apellidos.");
        campo.addEventListener('click', function () {
            this.classList.remove('erroneo');
        });
        return;
    }

    if (!emailRegex.test(email)) {
        let campo = document.getElementById('email');
        campo.classList.add('erroneo');
        alert("Por favor, introduzca un correo electrónico válido.");
        campo.addEventListener('click', function () {
            this.classList.remove('erroneo');
        });
        return;
    }

    if (telefono && !telefonoRegex.test(telefono) || telefono === "") {
        let campo = document.getElementById('telefono');
        if (telefono === "") {
            alert("Introduzca un número de teléfono.");
        } else {
            alert("Por favor, introduzca un número de teléfono válido!");
        }
        campo.classList.add('erroneo');
        campo.addEventListener('click', function () {
            this.classList.remove('erroneo');
        });
        return;
    }

    if (!asunto) {
        let campo = document.getElementById('asunto');
        campo.classList.add('erroneo');
        alert("Por favor, seleccione un asunto.");
        document.getElementById('asunto').addEventListener('click', function () {
            this.classList.remove('erroneo');
        });
        return;
    }

    if (!mensaje || mensaje.length < 10) {
        let campo = document.getElementById('mensaje');
        campo.classList.add('erroneo');
        alert("Por favor, escriba un mensaje de al menos 10 caracteres.");
        campo.addEventListener('click', function () {
            this.classList.remove('erroneo');
        });
        return;
    }

    alert("Formulario enviado correctamente.");
    document.getElementById("formularioContacto").submit();
}