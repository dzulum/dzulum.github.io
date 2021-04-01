---
layout: post
date: 2021-03-27 18:27:00 -0600
tags: html manuales
title: Manual básico de HTML 1
---

Saludos desde el mas allá...

Este documento y los siguientes de la serie no pretenden (tampoco yo) ser la verdad absoluta en el mundo del aprendizaje de desarrollo y maquetación de sitios web, si bien mi diseño puede ser incomodo a la vista también lo es el contenido, así que, úsalo como mejor entienda tu cabeza y al igual que yo, mantente curioso y aprende todo lo que se te atraviese, ser autodidacta es la mejor forma de superarte a ti mismo.

Dicho esto vamos a la historia del lenguaje.

Pero eso lo vas a leer acá:

- [HTML Wikipedia](https://es.wikipedia.org/wiki/HTML)
- [W3C](https://www.w3.org/html/)
- [Whathwg](https://html.spec.whatwg.org/multipage/)
- [Github Repo (Mirror del anterior)](https://w3c.github.io/html/)

Bien, ahora vamos por la lista de materiales necesarios para ir iniciando en este mundillo (de dolores de cabeza y) de lenguaje de etiquetas.

**Lista de materiales**

- Una PC (no importa el sistema operativo instalado en esta).
- Un editor de texto plano (Universalmente recomiendo Sublime es de prueba pero para los 3 sistemas mas conocidos Win, Mac y *nix).
- Un navegador de internet.
- Muchas ganas de aprender.

Espero que hayas leído, porque no voy a explicar mucho, solo pondré ejemplos y te diré que hacen.

Un documento HTML tiene una sintaxis básica que debe seguirse si o si, son una serie de etiquetas que componen de manera básica el documento en cuestión y por ende lo van estructurando.

~~~
<HTML>
	<HEAD>
		<TITLE></TITLE>
	</HEAD>
<BODY>

</BODY>
</HTML>
~~~

Estas lineas son las mas básicas en la creación de un documento HTML, y explicando el código como siempre hago o intento hacer la etiqueta `<HTML>` le dice al navegador que tipo de documento es el que esta leyendo, después se abre `<HEAD>` ahí va todo el contenido que no es visible ante tus ojos cuando navegas en un sitio web, exceptuando el titulo que se encuentra entre las etiquetas `<TITLE></TITLE>` y el icono que algunos sitios utilizan `favicon.ico`.

Más abajo vemos las etiquetas `<BODY></BODY>` que son las que encapsulan el cuerpo de nuestro documento HTML y por ultimo el cierre de la etiqueta `<HTML>` que indica el final de el documento actual.

Todo aquello que sera visible en nuestro documento se encuentra en el BODY, el HEAD sirve para definir algunas cosas, como el lenguaje en el que estará escrito nuestro documento `<HTML lang="es">` para español por ejemplo, los estilos para no estar escribiendo el estilo de cada elemento, las meta-tags que son información adicional de nuestro sitio para el navegador, e incluso llamadas a archivos de estilos, fuentes y otros aunque no estén alojados junto a nuestro documento HTML.

Ahora que tienes esta pequeña reseña vamos a hacer un ejercicio muy básico.

Abre tu editor de texto y copia y pega el código de arriba, o si lo prefieres escribelo para irte acostumbrando a abrir y cerrar etiquetas, ya que es fundamental, todas las etiquetas de HTML llevan cierres, exceptuando unas cuantas `<IMG>, <HR>, <BR>` por ejemplo.

Ahora vamos a escribir dentro de las etiquetas de BODY.

~~~
Este es un texto normal.<br>
Este es un texto un poco mas largo, pero que no deja de ser normal.<br>

<p>
Ahora esto es un parrafo, que tambien puede cortar sus lineas con un break<br>
pero sigue su formato hasta cerrarse.</p>

Y por último un <a href="#">Enlace</a> que no lleva a ningún lugar.
~~~

De acuerdo al editor de texto que estés utilizando deberás guardar con extensión o no el archivo.

Para que vayas sabiendo que es cada etiqueta te explico a grandes rasgos, `<BR>` es un break, rompe la linea actual e inicia otra, puede usarse incluso con solo un carácter por detrás `1<br>` o `-<br>` harán lo mismo, los párrafos se encierran entre las etiquetas `<p></p>` inician en la primer etiqueta y obviamente terminan en la que tiene `/` slash.

La etiqueta mas interesante de este ejercicio es la etiqueta `<a></a>` (antes de esto te habrás dado cuenta que use mayúsculas al inicio y ahora minúsculas, bien, es a propósito, porque para HTML es indiferente) esta etiqueta tiene varios atributos que pueden ser utilizados.

~~~
<a href="#">Enlace Normal</a>
<a href="#" target="_blank">Enlace abierto en página nueva</a>
<a href="#Ancla">Enlace a una sección de la pagina actual llamada #Ancla</a>
<a href="#" title="Descripción del enlace">Enlace</a>
~~~

Y lo mejor es que si quieres usar todos los atributos juntos los puedes usar sin problema alguno.

~~~
<a href="#Ancla" target="_blank" title="Descripción">Enlace</a>
~~~

Ahora ¿como es que una pagina lleva a otra? pues en el contenido del enlace en el atributo `href=""` debes escribir a donde quieres ir, por ejemplo, si tienes en una carpeta varios archivos puedes enlazarlos todos entre si escribiendo un código que deberás insertar en todas las paginas de la carpeta mira el codigo de ejemplo.

Su pongamos que en tu carpeta de trabajo tienes los siguientes archivos:

- index.html (La entrada de tu sitio)
- sobremi.html (Una descripción de quien eres y a que te dedicas)
- productos.html (Porque ahí anuncias lo que vendes)
- contacto.html (Seguro querrás que alguien se comunique contigo)
- servicios.html (Quizá aparte de productos vendes servicios)

Bien si eso es la estructura de tu carpeta debes enlazar todo, vamos a escribir ese código.

~~~
<a href="index.html">Inicio</a>
<a href="sobremi.html">Sobre Mí</a>
<a href="productos.html">Productos</a>
<a href="servicios.html">Servicios</a>
<a href="contacto.html">Contacto</a>
~~~

Ahora ese mismo código debe estar presente en todas las paginas de tu carpeta, esto para que el usuario pueda navegar entre todas las secciones de tu sitio web.

Bien, hasta aquí creo que no hay ningún motivo para pensar que HTML es difícil de aprender, vamos a escribir nuestra primer página completa y después vamos a explicar un poco más el código.

~~~
<HTML>
	<HEAD>
		<TITLE>Titulo bien shidoris</TITLE>
	</HEAD>
<BODY>
<h1>Encabezado chinwenwenchon</h1>
<p>
Bienvenido a mi primer página en HTML ese Sicker me anda enseñando.
</p>
<p>Espero que seas buen alumno y aprendas rápido y sin complicaciones.</p>
</BODY>
</HTML>
~~~


Código:  
![HTML](/images/html1.png)

Navegador:  
![HTML](/images/html1-1.png)
