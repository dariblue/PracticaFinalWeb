
# Buenos dias

## TODO

> - [ ] Inicio (10%)
> - [ ] Motores (90%)
> - [ ] Noticias (40%)
> - [ ] Contacto (90%) -> Falta hacer la confirmacion del formulario por javascript
> - [ ] Cokies
> - [ ] Incluir noticias a noticias.html
> - [ ] insertar informacion en index para llegar a 3k px
> - [ ] Añadir scroll reveal (Opcional) (50%)
> - [x] El icono del navbar no redirecciona bien a index.html
> - [x] Formulario manda datos a la pagina q dijo el profe
> - [x] Navbar no funciona el boton en dispositivos pequeños
> - [x] Añadir partes de motor en forma de galeria a su pagina


---

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

  La pagina de noticias funciona con la siguiente extructura:

~~~ ```html
<div class="col-md-4 noticia">
  <h3 class="mt-2">TITULO DE NOTICIA</h3>
  <img src="IMAGENNOTICIAX" alt="imagenNoticiaX"> 
  <p class="tarjeta-resumen">RESUMEN DE LA NOTICIA</p>
  <button class="btn btn-primary" onclick="abrirNoticia('#noticiaX')">Leer más</button>
   
  <div class="mas-noticia rounded-3" id="noticiaX">
    <h3>TITULO NOTICIA GRANDE</h3>
    <p>TEXTO</p>
    <img src="IMAGENNOTICIAX" alt="imagenNoticiaX">
    <p>MAS TEXTO</p>
    <p>MUCHO TEXTO</p>
    <button class="btn-cerrar" onclick="cerrarNoticia('#noticiaX')">Cerrar</button>
  </div>
</div>

~~~

El contenedor `mas-noticia` esta denominado con `display: none;` para que no interfiera en la navegación normal, despues con jquery lo mostramos con una pequeña animación.

Cambiando las X por el id de la noticia que sea.
