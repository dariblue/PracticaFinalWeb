
# Buenos dias

TODO

### El icono del navbar no redirecciona bien a index.html

Aqui añado parte de codigo que será util mas adelante para las noticias y mantener ahora limpio el css

~~~~

.noticia {
  position: relative;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 20px 0;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.noticia img {
  max-width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}
.noticia .resumen {
  font-size: 0.9em;
  color: #555;
}
.noticia .btn-mas-info {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.noticia .btn-mas-info:hover {
  background: #0056b3;
}

.noticia-expandida {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 90%;
  max-width: 800px;
  height: 80%;
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  z-index: 999;
  padding: 20px;
  transition: transform 0.3s ease;
  opacity: 0;
  visibility: hidden;
}
.noticia-expandida h3 {
  margin-top: 0;
}
.noticia-expandida .btn-cerrar {
  background: #dc3545;
  color: white;
  
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}
.noticia-expandida .btn-cerrar:hover {
  background: #a71d2a;
}

/* Estado activo de la noticia expandida */
.noticia.expandida .noticia-expandida {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  visibility: visible;
}

~~~~
