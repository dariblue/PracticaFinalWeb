
# Buenos dias

## TODO

> - [x] Inicio (100%)
> - [x] Motores (100%)
> - [x] Noticias (100%)
> - [x] Contacto (100%)
> - [x] Cokies
> - [x] Incluir noticias a noticias.html
> - [x] insertar informacion en index para llegar a 3k px
> - [x] Añadir scroll reveal (Opcional)
> - [x] El icono del navbar no redirecciona bien a index.html
> - [x] Formulario manda datos a la pagina q dijo el profe
> - [x] Navbar no funciona el boton en dispositivos pequeños
> - [x] Añadir partes de motor en forma de galeria a su pagina
> - [x] Cambiar CSS con la validación del formulario
> - [x] Rechazo de cookies te manda a google para que no puedas navegar

---

# Paginas

## Index

idea: Puedo añadir un enlaze a faceboock estilo reseñas de clientes

## Pagina Motores

  Mas o menos está termianda esta pagina, se podria cambiar la imagen de inicio pero cumple con los requisitos
  Se ha utilizado jQuery para crear animaciones de una manera mas sencilla.
  > Posible edicion de scroll reveal.  

Utilizaremos esta estructura para crear tarjetas para indicar cada parte del motor a forma de galeria.

~~~ ```html

<div class="col-md-6 col-lg-4 mb-4">
  <div class="card tarjeta-motor card-body h-100">
    <h3 class="card-title">Titulo</h3>
    <img src="../assets/PartesMotor/ " alt="Imagen ">
    <p class="tarjeta-resumen"> </p>
  </div>
</div>

~~~

## Pagina noticias

  Tiene que incluir al menos 2 videos, asique tendré que hacer al menos un par de noticias con un video al hacer grande la noticia.
  El pdf solicita que las imagenes y los videos esten ordenados de una forma, pero para mantener el punto de diseño he decidido que será una mejor opcion mostralo como está actualmente
  Hay que añadir un baner!?
  La pagina de noticias funciona con la siguiente extructura:

~~~ ```html

<!-- ? NoticiaX -->
<div class="col-md-6 col-lg-4 mb-4 noticia">
    <div class="card tarjeta-motor card-body h-100">
        <h3 class="card-title">Titulo</h3>
        <img src="../assets/Noticias/noticiaX.jpg" alt="Imagen noticiaX">
        <p class="tarjeta-resumen"> Resumen noticia </p>
        <button class="btn btn-primary" onclick="abrirNoticia('#noticiaX')">Leer más</button>
    </div>
    <div class="mas-noticia rounded-3 card" id="noticiaX">
        <h3> Titulo de la noticia</h3>
        <p>Texto</p>
        <img src="../assets/Noticias/noticiaX.jpg" alt="imagen noticiaX">
        <p>texto </p>
        <p> Parrafo </p>
        <button class="btn-cerrar" onclick="cerrarNoticia('#noticiaX')">Cerrar</button>
    </div>
</div>  

~~~

El contenedor `mas-noticia` esta denominado con `display: none;` para que no interfiera en la navegación normal, despues con jquery lo mostramos con una pequeña animación.

Cambiando las X por el id de la noticia que sea.
