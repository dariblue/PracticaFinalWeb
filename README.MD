
# Buenos dias

TODO

> - [ ] El icono del navbar no redirecciona bien a index.html
> - [ ] Cokies
> - [ ] Formulario manda datos a la pagina q dijo el profe
> - [ ] insertar informacion en index para llegar a 3k px
> - [ ] Añadir partes de motor en forma de galeria a su pagina
> - [ ] Añadir scroll reveal
> - [ ] Navbar no funciona el boton en dispositivos pequeños

## Pagina noticias

  La pagina de noticias funciona con la siguiente extructura:

~~~ ```html
<div class="col-md-4 noticia">
  <h3 class="mt-2">TITULO DE NOTICIA</h3>
  <img src="IMAGENNOTICIAX" alt="imagenNoticiaX"> 
  <p class="resumen">RESUMEN DE LA NOTICIA</p>
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

##
