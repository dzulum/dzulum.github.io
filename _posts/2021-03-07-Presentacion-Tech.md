---
layout: tech
date: 2021-03-07 22:28:00 -0600
tags: tech
title: Presentación
---

Para aquellos que inician este viaje conmigo les doy la bienvenida a esta pequeña sección donde cada que sea posible iré compartiendo las travesías que se viven en el día a día cuando se usa un sistema operativo que no es común, si por algún motivo identificas el logo del blog con alguna distribución de GNU/Linux sabrás que dicha distro es [Archlinux](https://archlinux.org) así que, aclarado eso, vamos a lo importante.

Archlinux es una distribución orientada a usuarios que quieren instalar sistemas ligeros, configurados a punto, los cuales pueden ser utilizados desde la linea de comandos o bien armar un sistema complejo con escritorios pesados y robustos como KDE y GNOME, puede ser configurado desde lo mas mínimo, e incluso puede ser lazado desde el inicio como simple sistema de linea de comandos hasta que el usuario necesite utilizar un sistema grafico.

Por mi cuenta solo utilizo un administrador de ventanas (Windows Manager), el que he elegido es [i3](https://i3wm.org/), es ligero, muy configurable, fácil de aprender a utilizar y sobre todo hermoso.

Así que en esta primer publicación te muestro como luce actualmente mi configuración de i3, junto con una lista de software que uso tanto de manera cotidiana como de manera esporádica, en esta distribución a sido común para mi ir instalando software conforme lo voy necesitando, en ocasiones las herramientas necesarias ya están instaladas como parte del conjunto *core* o base del sistema.

Las actualizaciones del sistema se realizan desde la linea de comandos utilizando la herramienta [*pacman*](https://wiki.archlinux.org/index.php/Pacman_(Espa%C3%B1ol)) con una secuencia de opciones y argumentos.

`pacman -Syu #Esta linea actualiza el sistema completo.`

O bien

`pacman -Syyu #Esta linea realiza la actualización de las bases de datos de software antes de ejecutar la actualización, es recomendable cuando llevas tiempo sin actualizar.`

Por ejemplo `sudo pacman -Ss chromium` seria el comando de búsqueda para el programa Chromium.

`pacman -S xterm` seria el comando para instalar el programa xterm.

Ahora sin mas rodeos, presento algunas capturas de mi entorno de trabajo, aunque en realidad no lo uso para trabajo.

Escritorio limpio:  
![Escritorio Limpio]({{ site.baseurl }}/images/clean0.png)

Conky:  
![Conky]({{ site.baseurl }}/images/conky.png)
![Conky]({{ site.baseurl }}/images/conky0.png)
![Conky]({{ site.baseurl }}/images/conky-nano.png)
![Conky]({{ site.baseurl }}/images/conky-xterm.png)

Ranger (administrador de archivos):  
![Ranger]({{ site.baseurl }}/images/ranger.png)

Sublime (editor de codigo):  
![Sublime]({{ site.baseurl }}/images/sublime-xterm.png)

Terminal:  
![Terminal]({{ site.baseurl }}/images/terminal.png)

Como se puede observar en los detalles de cada imagen, hay transparencias, el fondo de pantalla cambia, el monitor de recursos se cambia de lugar e incluso se agrega una pequeña sección de información para el uso del sistema, esa fue parte de la evolución de la configuración de mi entorno basado en i3.

Acá tenemos una imagen de la creación de este blog en entorno local.

![Blog]({{ site.baseurl }}/images/blog.png)

Y por ultimo dejo esta imagen, donde ya se ve la configuración que utilizo actualmente con etiquetas en los espacios de trabajo, una barra un poco mejor organizada y desde donde comenzaremos a trabajar para ir generando el contenido de este sitio.

![Blog]({{ site.baseurl }}/images/actual.png)

De momento esta es la primer publicación del blog, en siguientes entradas iré explicando la configuración que estoy utilizando y por supuesto el software que he instalado y que utilizo para mi día a día.

Me despido de aquel que este leyendo esto, esperando que cause curiosidad sino de instalar y usar definitivamente este tipo de sistemas, por lo menos de profundizar y seguir investigando sobre el tema.

Me despido, de momento...